import React, { useState } from "react";
import { db } from "../Firebase"; // Import Firestore
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const ShareJourney = () => {
  const [story, setStory] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!story.trim()) return alert("Please write your story.");

    try {
      await addDoc(collection(db, "journeys"), {
        story: story,
        timestamp: serverTimestamp(),
      });
      alert("Story shared successfully!");
      navigate("/"); // Navigate back to home/dashboard
    } catch (error) {
      console.error("Error sharing journey:", error);
      alert("Error sharing journey. Please try again.");
    }
  };

  return (
    <div className="journey-section">
    <div className="journey-container">
      <h2>📝 Share Your Journey</h2>
      <textarea
        placeholder="Write your experience..."
        value={story}
        onChange={(e) => setStory(e.target.value)}
        className="journey-textarea"
      />
      <button onClick={handleSubmit} className="submit-journey-btn">Submit</button>
    </div>
    </div>
  );
};

export default ShareJourney;
