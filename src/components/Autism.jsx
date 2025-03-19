import React, { useState } from "react";
import AutismSounds from "./AutismSounds";
import FloatingVisuals from "./FloatingVisuals";
import "../App.css";

const Autism = () => {
  const [isNoiseEnabled, setIsNoiseEnabled] = useState(false);
  const [isVisualEnabled, setIsVisualEnabled] = useState(false);
  const [isScenarioActive, setIsScenarioActive] = useState(false);

  return (
    <div className="autism-page">
      {/* ✅ Know About Autism Section */}
      <div className="autism-container">
        <h1 className="autism-heading">🧠 Know About Autism</h1>
        <p className="autism-description">
          Autism, or <strong>Autism Spectrum Disorder (ASD)</strong>, is a neurodevelopmental condition that affects  
          <strong>communication, social interactions, and sensory processing</strong>.  
          Every autistic person experiences it differently—some may struggle with <strong>sensory overload</strong>,  
          while others may have <strong>difficulty understanding social cues</strong>.  
        </p>
        <p className="autism-description">
          Autism is <strong>not a disease</strong>—it’s a different way of experiencing the world. Understanding autism helps us create  
          <strong>a more inclusive and accepting society</strong>.  
        </p>
      </div>

      
      {/* ✅ Experience Autism Section */}
      <div className="autism-container">
        <h1 className="autism-heading">✨ Experience Autism ✨</h1>
        <p className="autism-description">
          This simulation helps understand <strong>sensory overload</strong> experienced by individuals with autism.  
          Sudden noises, flashing visuals, and environmental chaos can make everyday situations overwhelming.
        </p>

        {/* ✅ Sensory Overload Toggles */}
        <button
          className="autism-toggle-btn"
          onClick={() => setIsNoiseEnabled(!isNoiseEnabled)}
        >
          {isNoiseEnabled ? "Turn Off Background Noise" : "Enable Background Noise"}
        </button>

        <button
          className="autism-toggle-btn"
          onClick={() => setIsVisualEnabled(!isVisualEnabled)}
        >
          {isVisualEnabled ? "Stop Visual Overload" : "Enable Visual Overload"}
        </button>
      </div>

       {/* ✅ Autism-Friendly Environment Section */}
       <div className="autism-container">
        <h2 className="autism-heading">🏡 Creating an Autism-Friendly Environment</h2>
        <p className="autism-description">
          Autistic individuals thrive in <strong>predictable and structured environments</strong>. Here are some ways to make spaces more accommodating:
        </p>
        <ul className="autism-list">
          <li>🟢 Reduce background noise and bright lights.</li>
          <li>🟢 Use clear and simple communication.</li>
          <li>🟢 Create quiet spaces for relaxation.</li>
          <li>🟢 Allow for sensory-friendly tools (headphones, fidget toys).</li>
        </ul>
      </div>

       {/* ✅ Common Challenges Section */}
       <div className="autism-container">
        <h2 className="autism-heading">🚧 Common Challenges Faced</h2>
        <p className="autism-description">
          Everyday situations can be overwhelming for autistic individuals. Below are common difficulties they face:
        </p>
        <ul className="autism-list">
          <li>🔴 Difficulty understanding social cues and body language.</li>
          <li>🔴 Sensory overload from loud environments.</li>
          <li>🔴 Struggles with changes in routine.</li>
          <li>🔴 Difficulty processing verbal instructions.</li>
        </ul>
      </div>
       
       {/* ✅ Interactive Scenario Section */}
      <div className="autism-container">
        <h2 className="autism-heading">🧩 Understanding Communication Barriers</h2>
        <p className="autism-description">
          Try this interactive scenario to understand how <strong>communication barriers</strong> affect autistic individuals.
        </p>
        <button
          className={`autism-toggle-btn ${isScenarioActive ? "active" : ""}`}
          onClick={() => setIsScenarioActive(!isScenarioActive)}
        >
          {isScenarioActive ? "🔄 Reset Scenario" : "🗣️ Start Communication Challenge"}
        </button>

        {isScenarioActive && (
          <div className="autism-scenario">
            <p className="autism-description">
              Imagine you're in a conversation, but suddenly, words sound <strong>distorted</strong> and <strong>jumbled</strong>.  
              Your brain struggles to process what is being said.  
              This is what auditory processing challenges feel like.
            </p>
            <p className="autism-simulation-text">"H...ow ar...e y....o.....u do....ing?"</p>
          </div>
        )}
      </div>
      {/* ✅ Add Effects */}
      {isNoiseEnabled && <AutismSounds isNoiseEnabled={isNoiseEnabled} />}
      {isVisualEnabled && <FloatingVisuals isVisualEnabled={isVisualEnabled} />}
    </div>
  );
};

export default Autism;
