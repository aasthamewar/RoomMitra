import { useEffect, useState } from "react";
import Sentiment from "sentiment";

// You should install sentiment: `npm install sentiment`

const sentiment = new Sentiment();

const VoiceAgent = () => {
  const [userText, setUserText] = useState("");
  const [emotionScore, setEmotionScore] = useState<number | null>(null);

//   useEffect(() => {
//     const handleMessage = (event: MessageEvent) => {
//       if (event.data?.type === "omni_transcription") {
//         const text = event.data.transcription;
//         setUserText(text);

//         // Sentiment Analysis
//         const result = sentiment.analyze(text);
//         setEmotionScore(result.score);

//         console.log("🗣 User said:", text);
//         console.log("😃 Emotion score:", result.score);
//       }
//     };

//     window.addEventListener("message", handleMessage);
//     return () => window.removeEventListener("message", handleMessage);
//   }, []);
useEffect(() => {
  const handleMessage = (event: MessageEvent) => {
    if (event.data?.type === "omni_transcription") {
      const text = event.data.transcription;
      console.log("🗣 User said:", text);
    }
  };

  window.addEventListener("message", handleMessage);
  return () => window.removeEventListener("message", handleMessage);
}, []);


  return (
    <div className="fixed bottom-2 left-2 bg-white/80 p-2 rounded-xl shadow-lg z-50">
      <p className="text-xs font-medium">User: {userText || "Listening..."}</p>
      {emotionScore !== null && (
        <p className="text-xs">Emotion Score: {emotionScore}</p>
      )}
    </div>
  );
};

export default VoiceAgent;
