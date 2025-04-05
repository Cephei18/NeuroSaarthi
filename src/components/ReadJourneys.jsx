// src/pages/ReadJourneys.jsx
import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const ReadJourneys = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const q = query(collection(db, "journeys"), orderBy("timestamp", "desc"));
      const snapshot = await getDocs(q);
      const storiesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setStories(storiesData);
    };

    fetchStories();
  }, []);

  return (
    <div className="read-journeys-section">
    <div className="read-journeys-container">
      <h2>📖 Shared Neurodiversity Journeys</h2>
      <p className="journey-subtitle">Real stories from real people.</p>

      <div className="journey-cards">
        {stories.length === 0 ? (
          <p>No journeys shared yet. Be the first one!</p>
        ) : (
          stories.map((story) => (
            <div key={story.id} className="journey-card">
              <h3>{story.name || "Anonymous"}</h3>
              <p><strong>Condition:</strong> {story.condition}</p>
              <p className="story-text">{story.story}</p>
            </div>
          ))
        )}
      </div>
    </div>
    </div>

  );
};

export default ReadJourneys;
