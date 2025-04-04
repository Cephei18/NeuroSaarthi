import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

const JourneysList = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const q = query(collection(db, "journeys"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      setStories(querySnapshot.docs.map(doc => doc.data()));
    };

    fetchStories();
  }, []);

  return (
    <div className="journeys-list">
      <h2>🌍 Community Journeys</h2>
      {stories.length > 0 ? (
        stories.map((story, index) => (
          <div key={index} className="journey-card">
            <p>{story.story}</p>
          </div>
        ))
      ) : (
        <p>No journeys shared yet.</p>
      )}
    </div>
  );
};

export default JourneysList;
