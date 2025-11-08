# 🏠 RoomMitra – Smart Roommate Finder & Matching Assistant

RoomMitra is a user-friendly web application designed to help users find compatible roommates based on shared preferences, habits, and personality traits. It combines a clean UI with simple onboarding, making it easy for anyone to match with their ideal roomie!

---

## 🔥 Features

🧬 AI-based Compatibility Engine: Built using behavioral inputs + personality traits to calculate real roommate synergy (not just vibes)

🗣️ Voice onboarding agent powered by OmniDimension: Handles the interaction like a polite but sassy concierge bot. also used the alternative of omnidimension in case of not working of omnidimension. Its kind of ai agent but in text form.

🧍‍♀️ Custom Avatar Builder: Let users visualize and customize their vibe

🏠 'Explore Roo' + 3D Room Preview: Visualize shared spaces before committing — because socks on the floor are a red flag

📝 Profile Update System: Your preferences, habits, and quirks — all adjustable like sliders on Spotify

---

## 🚀 Getting Started

Follow these steps to run RoomMitra on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/RoomMitra.git
cd RoomMitra
```
### 2. Install 
```
npm i
```
### 3.Run 
```
npm run dev
```

🧠 OmniDimension Integration
👉 Add your API key in index.html like this:
```
<script>
  const OMNIDIM_API_KEY = 'your_api_key_here';
</script>
```


📁 Project Structure
```
RoomMitra/
├── backend/
│   ├── venv/
│   ├── model.py
│   └── user_answers.csv
│
├── favicon_io/
│
├── models/
│
├── node_modules/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   │   ├── AvatarSelection.tsx
│   │   ├── Confirmation.tsx
│   │   ├── find_match.tsx
│   │   ├── Index.tsx
│   │   ├── LandingPage.tsx
│   │   ├── MatchResult.tsx
│   │   ├── NotFound.tsx
│   │   ├── ProfileSettings.tsx
│   │   └── RoomSelection.tsx
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   ├── declarations.d.ts
│   └── vite-env.d.ts
│
├── index.html
└── README.md
```

🐍 Backend Setup (Python Model)
- Currently the backend is not integrated with frontend. We will use FastApi for that later.
- But created a demo version of model which will use sentiments and tell the compartibility score , you can run that by doing this following steps:
  ```
  cd backend
  ```
-🧪 1. Create a Virtual Environment
  ```
  # On Windows
     python -m venv venv

  # On macOS/Linux
     python3 -m venv venv
  ```
-▶️ 2. Activate the Virtual Environment
  python model.py
```
# On Windows (Command Prompt)
venv\Scripts\activate

# On Windows (PowerShell)
.\venv\Scripts\Activate.ps1

# On macOS/Linux
source venv/bin/activate
```
- ✅ Dependencies Breakdown
```
pip install pandas
pip install textblob
python -m textblob.download_corpora
```
```
Here is the website
```
https://roommitra.netlify.app/
