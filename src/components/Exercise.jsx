import React, { useState } from "react";

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
      setExercise("Failed to load exercise. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="exercise-section">
    <div className="exercise-container">
      <h2>Neurodiversity Focus Exercise</h2>
      <p>{loading ? "Loading..." : exercise}</p>
      <button onClick={fetchExercise} className="exercise-btn">
        {loading ? "Generating..." : "Generate Exercise"}
      </button>
    </div>
    </div>
  );
};

export default Exercise;
