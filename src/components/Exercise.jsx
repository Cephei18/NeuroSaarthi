// import React, { useState } from "react";

// const Exercise = () => {
//   const [exercise, setExercise] = useState("Click the button to get a new exercise!");
//   const [loading, setLoading] = useState(false);

//   const fetchExercise = async () => {
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/generate-exercise", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//       });

//       const data = await response.json();
//       setExercise(data.exercise);
//     } catch (error) {
//       console.error("Error fetching exercise:", error);
//       setExercise("Failed to load exercise. Please try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="exercise-section">
//     <div className="exercise-container">
//       <h2>Neurodiversity Focus Exercise</h2>
//       <p>{loading ? "Loading..." : exercise}</p>
//       <button onClick={fetchExercise} className="exercise-btn">
//         {loading ? "Generating..." : "Generate Exercise"}
//       </button>
//     </div>
//     </div>
//   );
// };

// export default Exercise;
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";  // Importing the ReactMarkdown component
import "./Exercise.css";  // Import styling

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
      setExercise(data.exercise);  // Set exercise content
    } catch (error) {
      console.error("Error fetching exercise:", error);
      setExercise("Failed to load exercise. Please try again.");
    }
    setLoading(false);  // Stop loading state
  };

  return (
    <div className="exercise-section">
      <div className="exercise-container">
        <h2>🧘 Neurodiversity Focus Exercise</h2>
        <div className="exercise-box">
          {loading ? (
            <p className="loading-text">Generating calming magic...</p>
          ) : (
            <div className="exercise-text">
              <ReactMarkdown components={{
                h1: 'h2',  // You can change the rendered tag for markdown elements
                h2: 'h3',
                h3: 'h4',
                p: 'p',
                // Add any other components to modify
              }}>
                {exercise}
              </ReactMarkdown>
            </div>
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

