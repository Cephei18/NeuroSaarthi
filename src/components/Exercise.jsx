// Exercise.jsx
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";
import "./Exercise.css";

const Exercise = () => {
  const [exercise, setExercise] = useState("Click the button to get a new exercise!");
  const [loading, setLoading] = useState(false);

  const fetchExercise = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/generate-exercise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      setExercise(data.exercise);
    } catch (error) {
      console.error("Error fetching exercise:", error);
      setExercise("❌ Failed to load exercise. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="exercise-section">
      <div className="exercise-container">
        <h2>🧘 Neurodiversity Focus Exercise</h2>
        <div className="exercise-box">
          {loading ? (
            <p className="loading-text">Generating calming magic...</p>
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkEmoji]}
              components={{
                h1: 'h2',
                h2: 'h3',
                p: 'p',
                ul: (props) => <ul style={{ paddingLeft: '20px' }} {...props} />,
                li: (props) => <li style={{ marginBottom: '8px' }} {...props} />,
              }}
            >
              {exercise}
            </ReactMarkdown>
          )}
        </div>
        <button onClick={fetchExercise} className="exercise-btn" disabled={loading}>
          {loading ? "Please wait..." : "✨ Generate New Exercise"}
        </button>
      </div>
    </div>
  );
};

export default Exercise;
