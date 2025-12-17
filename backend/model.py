# import pandas as pd
# from textblob import TextBlob
# import random


# # Read answers from CSV
# df = pd.read_csv("user_answers.csv")
# user_answers = df["answer"].dropna().tolist()

# def get_sentiment_score(text):
#     blob = TextBlob(text)
#     sentiment = blob.sentiment.polarity  # ranges from -1 to 1
#     print(f"Sentiment polarity: {sentiment}")
#     return sentiment

# def dummy_score_logic(answer):
#     sentiment_score = get_sentiment_score(answer)

#     # Map sentiment [-1 to 1] -> [1 to 100]
#     score = int((sentiment_score + 1) * 50)  # simple linear scaling

#     # Add a bit of randomness to simulate variation
#     score += random.randint(-5, 5)
#     return max(1, min(score, 100))  # clamp between 1 and 100

# # Simulate scoring all user answers
# for ans in user_answers:
#     score = dummy_score_logic(ans)
#     print(f"Answer: {ans}")
#     print(f"→ Compatibility Score: {score}\n")

# model.py
from textblob import TextBlob
import random

def get_sentiment_score(text):
    blob = TextBlob(text)
    return blob.sentiment.polarity  # -1 to 1

def calculate_score(answer: str):
    sentiment_score = get_sentiment_score(answer)

    # Convert [-1..1] → [1..100]
    score = int((sentiment_score + 1) * 50)

    # Add little variation
    score += random.randint(-5, 5)
    score = max(1, min(score, 100))
    
    return score
