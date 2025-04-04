import process from "process";
globalThis.process = process;

import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch"; // No need for CommonJS workaround

dotenv.config();

const app = express();
const PORT = 5000;




app.use(cors());
app.get("/", (req, res) => {
    res.send("✅ Server is running!");
  });
  
app.use(bodyParser.json());

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error("❌ ERROR: Missing GEMINI_API_KEY in .env file");
  process.exit(1);
}

// Route to generate AI exercise
app.post("/generate-exercise", async (req, res) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

  const requestData = {
    contents: [
      {
        role: "user",
        parts: [
          {
            text: "Generate a simple, calming, and engaging exercise to help neurodiverse individuals (ADHD, autism, dyslexia) enhance focus. Include easy tasks like breathing exercises, puzzles, or movement activities. If it requires a timer, mention the duration."
          }
        ]
      }
    ]
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();
    res.json({ exercise: data?.candidates?.[0]?.content?.parts?.[0]?.text || "Error fetching exercise." });
  } catch (error) {
    console.error("❌ ERROR:", error);
    res.status(500).json({ error: "Failed to fetch exercise" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
