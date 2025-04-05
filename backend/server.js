// server.js
import express from "express";
import cors from "cors";
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

📌 Format the response using Markdown:
- Use bullet points ✅
- Add emojis 🌈🧠✨ wherever appropriate
- Use **bold** for headings and highlights
- Separate each section with a horizontal divider (---)
- Make the tone friendly, encouraging, and supportive

Sections:
1. **Progress Overview**
2. **Areas of Improvement**
3. **Personalized Advice**
4. **Motivation & Encouragement**

Here is the user's log:
${JSON.stringify(userLog)}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
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

📌 Format the response using Markdown:
- Use bullet points ✅
- Add emojis 🌈🧘‍♀️🧠 wherever appropriate
- Use **bold** for emphasis and titles
- Use line breaks or dividers for clarity
- If it's a physical task, mention a timer duration like **(Do this for 2 minutes)**

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

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
