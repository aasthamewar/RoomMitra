from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
# from model import calculate_score
import json,random
import os
from fastapi.responses import JSONResponse
from joblib import load
from pydantic import BaseModel
from typing import List, Optional
from openai import OpenAI

client = OpenAI()



def generate_human_summary(positives, negatives, score):
    """Turn keyword matches into natural human sentences."""
    summary = ""

    # Score-based intro
    if score >= 80:
        summary += "You two look like an excellent match! "
    elif score >= 60:
        summary += "You seem fairly compatible with each other. "
    elif score >= 40:
        summary += "There are a few things that work well, but also some differences to consider. "
    else:
        summary += "You might face some challenges as roommates. "

    # Add positive areas
    if positives:
        pos_intro = random.choice([
            "Here’s where you naturally connect: ",
            "Some things you both align on: ",
            "What makes you a good fit: "
        ])
        summary += pos_intro + " ".join(positives) + " "

    # Add negative/conflict areas
    if negatives and negatives != ["No major conflict areas detected."]:
        neg_intro = random.choice([
            "However, a few things might need communication: ",
            "Possible mismatch areas: ",
            "Things you should talk about beforehand: "
        ])
        summary += neg_intro + " ".join(negatives)

    return summary.strip()


def analyze_answers_human(text):
    text_lower = text.lower()

    positives = []
    negatives = []

    # Cleanliness
    if "clean" in text_lower or "organize" in text_lower:
        positives.append("Both of you care about keeping the home neat and comfortable.")
    if "messy" in text_lower:
        negatives.append("Differences in cleanliness habits could create friction.")

    # Noise preference
    if "quiet" in text_lower:
        positives.append("You both enjoy a calm and peaceful living space.")
    if "loud" in text_lower or "party" in text_lower:
        negatives.append("Noise preferences might not fully match.")

    # Introvert/Extrovert
    if "introvert" in text_lower:
        positives.append("Your introverted nature suggests you both respect personal space.")
    if "extrovert" in text_lower:
        positives.append("Your outgoing personalities could make the home lively and friendly.")

    # Sleep schedule
    if "night" in text_lower or "late" in text_lower:
        positives.append("You share a similar late-night routine.")
    if "morning" in text_lower:
        positives.append("You both prefer starting your day early.")

    # Food preference
    if "veg" in text_lower:
        positives.append("You share similar food preferences, reducing kitchen conflicts.")
    if "non-veg" in text_lower:
        positives.append("Both of you are comfortable with non-vegetarian meals.")

    # Budget
    if "budget" in text_lower:
        positives.append("You seem aligned on budget expectations.")

    # Pets
    if "pet" in text_lower:
        positives.append("You share common preferences regarding pets.")

    # If nothing detected
    if not positives:
        positives.append("Your overall lifestyle choices seem reasonably compatible.")
    if not negatives:
        negatives.append("No major conflict areas detected.")

    return positives, negatives

app = FastAPI()

model = load("compatibility_model.pkl")

# Pydantic Models
class FormItem(BaseModel):
    answer: Optional[str] = None

class FormWebhookPayload(BaseModel):
    data: List[FormItem]
    
class BehaviorRequest(BaseModel):
    answers: str

# allow frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "RoomMitra ML API Running!"}


# ------------------------------------------------------------
# 1️⃣  WEBHOOK — receives Formshare submission
# ------------------------------------------------------------
@app.post("/form-webhook")
async def form_webhook(request: Request, payload: FormWebhookPayload):
    # Read request
    try:
        data = await request.json()
    except:
        return {"error": "Invalid JSON"}

    # Save full raw log for debugging
    with open("incoming_log.json", "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

    # --------------------------------------------------------
    # Extract answers from:
    # "data": [
    #     {"answer": "..."}, {"answer": "..."}
    # ]
    # --------------------------------------------------------
    answers_list = []

    if "data" in data and isinstance(data["data"], list):
        for item in data["data"]:
            if "answer" in item:
                answers_list.append(str(item["answer"]))

    # If no answers found, fallback
    if not answers_list:
        answers_list = [str(data)]

    # Convert list → one text string
    combined_text = " | ".join(answers_list)

    # --------------------------------------------------------
    # Calculate compatibility score
    # --------------------------------------------------------
    # Predict score using ML model
    # predicted_value = model.predict([combined_text])[0]
    # score = round(predicted_value)
    predicted_value = model.predict([combined_text])[0]

    # Normalize into 0–100
    normalized = predicted_value % 101

    # Safe clamp
    score = max(0, min(100, int(normalized)))

    positives, negatives = analyze_answers_human(combined_text)
    summary = generate_human_summary(positives, negatives, score)


    # Save score + answers for frontend
    # with open("latest_score.txt", "w") as f:
    #     json.dump(
    #         {"score": score, "answers": combined_text},
    #         f
    #     )
    with open("latest_score.txt", "w") as f:
        json.dump(
        {
            "score": score,
            "answers": combined_text,
            "why_match": positives,
            "conflicts": negatives,
            "summary": summary
        },
        f,
        indent=4
    )


    return {
        "status": "received",
        "score": score,
        "used_text": combined_text
    }
    
    
@app.post("/predict-behavior")
async def predict_behavior(payload: BehaviorRequest):

    prompt = f"""
    You are an AI that summarizes roommate compatibility behavior.

    Input text: {payload.answers}

    Extract and analyze:
    - lifestyle patterns
    - sleeping habits
    - study/work rhythm
    - cleanliness expectations
    - noise tolerance
    - cooking/eating style
    - social habits

    Return JSON like:
    {{
      "positive": ["...", "...", "..."],
      "risks": ["...", "..."]
    }}

    Make items short, human, and simple.
    """

    res = client.responses.create(
        model="gpt-4.1",
        input=prompt,
        max_output_tokens=250,
        response_format={"type": "json_object"}
    )

    return res.output[0].content[0].text


# ------------------------------------------------------------
# 2️⃣  Frontend UI fetches score
# ------------------------------------------------------------
@app.get("/latest-score")
def latest_score():
    if not os.path.exists("latest_score.txt"):
        return {"compatibility_score": None}

    with open("latest_score.txt", "r") as f:
        saved = json.load(f)

    return saved

@app.get("/api/getscore")
def get_score():
    try:
        with open("latest_score.txt", "r") as f:
            score = f.read().strip()
        return {"score": int(score)}
    except:
        return {"score": 0}
