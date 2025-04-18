


// export async function getAIResponse(userLog) {
//   if (!API_KEY) {
//     console.error("API Key not found!");
//     return;
//   }

//   try {
//     const response = await fetch(
//       `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateText?key=${API_KEY}`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           prompt: `Analyze this user log: ${JSON.stringify(userLog)}`,
//         }),
//       }
//     );
//     console.log("Loaded API Key:", API_KEY);

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching Gemini API:", error);
//   }
// }
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: API_KEY });

// 1. Existing Report Function
export async function getAIResponse(userLog) {
  if (!ai) {
    console.error("AI instance not initialized!");
    return;
  }

  try {
    const prompt = `
Generate a personalized progress report for a neurodiverse individual based on their feedback and engagement with exercises. 
Analyze their improvement in focus, consistency, and effort. If they have shared struggles, address them with supportive advice. 
Provide motivation to continue daily practice and highlight specific areas they are doing well in. 

Keep the tone encouraging, interactive, and supportive—less formal and more human. 
Format the response with these sections:
1. Progress Overview
2. Areas of Improvement
3. Personalized Advice
4. Motivation & Encouragement

Here's the user's log data:`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `${prompt}\n${JSON.stringify(userLog)}`,
    });

    return response.text;
  } catch (error) {
    console.error("Error fetching Gemini API:", error.message);
    return { error: "Failed to fetch AI response" };
  }
}

// 2. NEW Focus Activity Generator Function
export async function getFocusExercise() {
  if (!ai) {
    console.error("AI instance not initialized!");
    return;
  }

  try {
    const prompt = `
Generate a soothing and engaging focus-enhancing exercise for neurodiverse individuals (ADHD, autism, dyslexia). 
Include a simple task they can perform, such as a breathing exercise, a short puzzle, or a movement activity. 
If it involves a physical action, suggest a timer duration. Keep it easy to follow and calming.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error fetching focus exercise:", error.message);
    return { error: "Failed to fetch focus exercise" };
  }
}

