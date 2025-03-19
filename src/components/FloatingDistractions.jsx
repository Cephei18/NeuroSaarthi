import React, { useEffect, useState } from "react";
import "../App.css";

const distractions = ["📱", "🔔", "New Message!", "⚡", "🚀", "Hey!", "Check this!", "🔊"];

const FloatingDistractions = () => {
  const [distractionElements, setDistractionElements] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly select a distraction
      const distraction = distractions[Math.floor(Math.random() * distractions.length)];
      const id = Math.random().toString(36).substr(2, 9); // Unique ID

      setDistractionElements((prev) => [
        ...prev,
        { id, text: distraction, x: Math.random() * 90, y: Math.random() * 90 },
      ]);

      // Remove distractions after 5 seconds
      setTimeout(() => {
        setDistractionElements((prev) => prev.filter((item) => item.id !== id));
      }, 5000);
    }, 1500); // New distraction every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-distractions">
      {distractionElements.map((item) => (
        <span key={item.id} className="distraction" style={{ top: `${item.y}%`, left: `${item.x}%` }}>
          {item.text}
        </span>
      ))}
    </div>
  );
};

export default FloatingDistractions;
