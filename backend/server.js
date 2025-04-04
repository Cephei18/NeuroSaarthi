import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

/**
 * Endpoint 1: Generate personalized progress report
 */
app.post("/generate", async (req, res) => {
  try {
    const { userLog } = req.body;

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

Here's the user's log data:
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `${prompt}\n${JSON.stringify(userLog)}`,
    });

    res.json({ text: response.text });
  } catch (error) {
    console.error("Error fetching Gemini API (report):", error.message);
    res.status(500).json({ error: "Failed to generate report" });
  }
});

/**
 * Endpoint 2: Generate calming exercise
 */
app.post("/generate-exercise", async (req, res) => {
  try {
    const prompt = `
Generate a soothing and engaging focus-enhancing exercise for neurodiverse individuals (ADHD, autism, dyslexia). 
Include a simple task they can perform, such as a breathing exercise, a short puzzle, or a movement activity. 
If it involves a physical action, suggest a timer duration. 
Keep it easy to follow and calming.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    res.json({ exercise: response.text });
  } catch (error) {
    console.error("Error fetching Gemini API (exercise):", error.message);
    res.status(500).json({ error: "Failed to generate exercise" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Route to handle AI requests
// 👇 replace your existing app.post("/generate", ...) with this:
// app.post("/generate", async (req, res) => {
//     try {
//       const userLog = req.body.userLog;
  
//       if (!userLog) {
//         return res.status(400).json({ error: "User log is required" });
//       }
  
//     //   const response = await fetch(
//     //     `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateText?key=${API_KEY}`,
//     //     {
//     //       method: "POST",
//     //       headers: { "Content-Type": "application/json" },
//     //       body: JSON.stringify({
//     //         prompt: {
//     //           text: `Analyze this user log: ${JSON.stringify(userLog)}`
//     //         },
//     //         temperature: 0.7,
//     //         maxOutputTokens: 150
//     //       }),
//     //     }
//     //   );
    
      

      
      
//       ///////////////////////////////////////////////////////////////////////////
      
  
//       const text = await response.text();
  
//       try {
//         const data = JSON.parse(text);
  
//         if (!response.ok) {
//           console.error("Gemini API Error:", data);
//           return res.status(500).json({ error: "Gemini API error", details: data });
//         }
  
//         res.json(data);
//       } catch (jsonError) {
//         console.error("Failed to parse Gemini API response as JSON:", text);
//         return res.status(500).json({ error: "Invalid response from Gemini API", raw: text });
//       }
  
//     } catch (error) {
//       console.error("Server Error:", error);
//       res.status(500).json({ error: "Failed to fetch AI response" });
//     }
//   });