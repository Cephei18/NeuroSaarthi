import React, { useState, useEffect } from "react";
import { db, auth } from "../Firebase";
import { doc, getDoc, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const ShareJourney = () => {
  const [story, setStory] = useState("");
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  // 🔄 Fetch logged-in user's data
  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userDoc = await getDoc(doc(db, "users", auth.currentUser.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      }
    };
    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!story.trim()) return alert("Please write your story.");

    try {
      await addDoc(collection(db, "journeys"), {
        story: story,
        name: userData?.name || "Anonymous",
        condition: userData?.condition || "Not specified",
        timestamp: serverTimestamp(),
      });
      alert("Story shared successfully!");
      navigate("/read-journeys"); // ✅ Navigate to Read Journeys
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
        <button onClick={handleSubmit} className="submit-journey-btn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ShareJourney;
