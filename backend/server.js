import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.GEMINI_API_KEY;

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
import { GoogleGenAI } from "@google/genai";

// Initialize the AI instance
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Define your endpoint
app.post("/generate", async (req, res) => {
  try {
    const { userLog } = req.body;

    // Make the API call using the correct method
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash", // Specify the model
      contents: `Analyze this user log: ${JSON.stringify(userLog)}`, // The log as the content
    });

    // Send the generated content back as the response
    res.json({ text: response.text });
  } catch (error) {
    console.error("Error fetching Gemini API:", error.message);
    res.status(500).json({ error: "Failed to fetch AI response" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
