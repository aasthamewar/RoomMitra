export async function getBehaviorPrediction(text) {
  const res = await fetch("http://localhost:8000/predict-behavior", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answers: text }),
  });

  return await res.json();
}
