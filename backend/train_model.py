import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LinearRegression
from sklearn.pipeline import Pipeline
import joblib

# 1. Load dataset
df = pd.read_csv("dataset.csv")

# 2. Split into X and y
X = df["prompt"]
y = df["score"]

# 3. Create a pipeline:
#    - Converts text → numerical features (TF-IDF)
#    - Linear Regression predicts real score
model = Pipeline([
    ("tfidf", TfidfVectorizer()),
    ("reg", LinearRegression())
])

# 4. Train
print("Training model...")
model.fit(X, y)
print("Training complete!")

# 5. Save model
joblib.dump(model, "compatibility_model.pkl")
print("Model saved as compatibility_model.pkl")
