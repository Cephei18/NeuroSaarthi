import React, { useState, useEffect } from "react";
import { db } from "../Firebase"; // Ensure Firebase is correctly imported
import { collection, getDocs } from "firebase/firestore";
import "../App.css"; // Ensure your CSS file is correctly imported

const ReadJourneys = () => {
  const [journeys, setJourneys] = useState([]);

  useEffect(() => {
    const fetchJourneys = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "sharedJourneys"));
        const journeysList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setJourneys(journeysList);
      } catch (error) {
        console.error("Error fetching journeys:", error);
      }
    };

    fetchJourneys();
  }, []);

  return (
    <div className="journeys-section">
      <h2>📖 Shared Journeys</h2>
      {journeys.length === 0 ? (
        <p>No journeys shared yet. Be the first to share your experience!</p>
      ) : (
        <div className="journeys-list">
          {journeys.map((journey) => (
            <div key={journey.id} className="journey-card">
              <p>{journey.text}</p>
              <span className="journey-meta">- {journey.name || "Anonymous"}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReadJourneys;
