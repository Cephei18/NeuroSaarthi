import React, { useState, useEffect, useMemo } from "react";
import "../App.css";
import FloatingDistractions from "./FloatingDistractions";
import BackgroundNoise from "./BackgroundNoise";

const ADHD = () => {
  const [isSimulationEnabled, setIsSimulationEnabled] = useState(false);
  const [isNoiseEnabled, setIsNoiseEnabled] = useState(false);

  const textSamples = useMemo(() => [
    "ADHD affects attention and focus.",
    "It's hard to stay still and concentrate.",
    "Distractions make it difficult to read.",
    "Wait, what was I just thinking about?",
    "Oh! Something else just caught my eye!",
  ], []);
  
  const [displayedText, setDisplayedText] = useState(textSamples[0]);
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    if (isSimulationEnabled) {
      const textInterval = setInterval(() => {
        setDisplayedText(textSamples[Math.floor(Math.random() * textSamples.length)]);
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 500);
      }, 3000);
      return () => clearInterval(textInterval);
    }
  }, [isSimulationEnabled, textSamples]);

  return (
    <div className="adhd-page">
      
      {/* ✅ Section 1: Know about ADHD */}
      <div className="adhd-container">
        <h1 className="adhd-heading">📖 Know About ADHD</h1>
        <p className="adhd-description">
          **ADHD (Attention-Deficit/Hyperactivity Disorder)** is a neurodevelopmental disorder that affects attention, impulse control, and activity levels. It is commonly diagnosed in children but can persist into adulthood.
        </p>
      </div>

      {/* ✅ Section 2: Experience ADHD */}
      <div className="adhd-container">
        <h1 className="adhd-heading">✨ Experience ADHD ✨</h1>
        <p className="adhd-description">
          ADHD affects focus and attention. This simulation gives you a glimpse of what it feels like.
        </p>

        <div className={`adhd-simulation-text ${isShaking ? "shaking" : ""}`}>
          {displayedText}
        </div>

        <button className="adhd-toggle-btn" onClick={() => setIsSimulationEnabled(!isSimulationEnabled)}>
          {isSimulationEnabled ? "Disable ADHD Simulation" : "Enable ADHD Simulation"}
        </button>

        <button className="adhd-noise-btn" onClick={() => setIsNoiseEnabled(!isNoiseEnabled)}>
          {isNoiseEnabled ? "Turn Off Background Noise" : "Enable Background Noise"}
        </button>

        {isSimulationEnabled && <FloatingDistractions />}
        {isNoiseEnabled && <BackgroundNoise isNoiseEnabled={isNoiseEnabled} />}
      </div>

      {/* ✅ Section 3: Symptoms of ADHD */}
      <div className="adhd-container">
        <h1 className="adhd-heading">⚠️ Symptoms of ADHD</h1>
        <ul className="adhd-symptoms-list">
          <li>Difficulty maintaining focus</li>
          <li>Easily distracted by surroundings</li>
          <li>Impulsive decision-making</li>
          <li>Forgetfulness in daily activities</li>
          <li>Struggles with organization and time management</li>
          <li>Hyperactivity and excessive movement</li>
        </ul>
      </div>

    </div>
  );
};

export default ADHD;
