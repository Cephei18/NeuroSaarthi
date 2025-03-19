import React, { useState, useEffect } from "react";
import "../App.css";
import DyslexiaCamera from "./DyslexiaCamera.jsx";

const Dyslexia = () => {
  const [isCameraEnabled, setIsCameraEnabled] = useState(false);
  const [isSimulationEnabled, setIsSimulationEnabled] = useState(false);
  const [displayedText, setDisplayedText] = useState(
    "Dyslexia is a learning disorder that affects reading."
  );
  const [originalText] = useState(
    "Dyslexia is a learning disorder that affects reading."
  );

  const shuffleText = (text) => {
    return text
      .split(" ")
      .map((word) => {
        if (word.length > 3) {
          let letters = word.split("");
          let index1 = Math.floor(Math.random() * (letters.length - 1));
          let index2 = index1 + 1;

          [letters[index1], letters[index2]] = [letters[index2], letters[index1]];
          return letters.join("");
        }
        return word;
      })
      .join(" ");
  };

  useEffect(() => {
    if (!isSimulationEnabled) {
      setDisplayedText(originalText);
      return;
    }

    const interval = setInterval(() => {
      setDisplayedText((prevText) => shuffleText(prevText));
    }, 500);

    return () => clearInterval(interval);
  }, [isSimulationEnabled, originalText]);

  return (
    <div className="dyslexia-page">
      {/* ✅ Know About Dyslexia Section */}
      <div className="dyslexia-container">
        <h1 className="dyslexia-heading">📖 Know About Dyslexia</h1>
        <p className="dyslexia-description">
          Dyslexia is a <strong>learning disorder</strong> that affects a person's ability to read, spell, write, and sometimes speak.
          It does not affect intelligence but makes reading <strong>more challenging</strong>.
        </p>
        <p className="dyslexia-description">
          With proper support, individuals with dyslexia can <strong>learn effectively</strong> and thrive in different environments.
        </p>
      </div>

      {/* ✅ Experience Dyslexia Section */}
      <div className="dyslexia-container">
        <h1 className="dyslexia-heading">✨ Experience Dyslexia ✨</h1>
        <p className="dyslexia-description">
          People with dyslexia often see words appear <strong>jumbled or misplaced</strong>. Try this simulation to understand their experience.
        </p>

        <button
          className="dyslexia-toggle-btn"
          onClick={() => setIsSimulationEnabled(!isSimulationEnabled)}
        >
          {isSimulationEnabled ? "Stop Dyslexia Simulation" : "Start Dyslexia Simulation"}
        </button>

        <div className="dyslexia-simulation-box">
          <p className={`dyslexia-simulation-text ${isSimulationEnabled ? "dyslexia-active" : ""}`}>
            {displayedText}
          </p>
        </div>
      </div>

      {/* ✅ Dyslexia Camera Section */}
      <div className="dyslexia-container">
        <h2 className="dyslexia-heading">📷 Try Dyslexia Camera</h2>
        <p className="dyslexia-description">
          Use the camera simulation to see how reading challenges may appear in real-world settings.
        </p>

        <button
          className="dyslexia-toggle-btn"
          onClick={() => setIsCameraEnabled(!isCameraEnabled)}
        >
          {isCameraEnabled ? "Stop Camera Simulation" : "Try Dyslexia Camera"}
        </button>

        {isCameraEnabled && <DyslexiaCamera />}
      </div>

      {/* ✅ How to Support Section */}
      <div className="dyslexia-container">
        <h2 className="dyslexia-heading">💡 How to Support Someone with Dyslexia?</h2>
        <ul className="dyslexia-list">
          <li>🟢 Use audiobooks and text-to-speech tools.</li>
          <li>🟢 Break reading into smaller, manageable sections.</li>
          <li>🟢 Try colored overlays to reduce visual stress.</li>
          <li>🟢 Provide extra time and positive reinforcement.</li>
        </ul>
      </div>

      {/* ✅ Learn More & Explore More AR */}
      <div className="dyslexia-container">
        <h2 className="dyslexia-heading">🌍 Learn More</h2>
        <div className="dyslexia-cta-buttons">
          <a href="https://dyslexiaida.org/" target="_blank" rel="noopener noreferrer">
            <button className="dyslexia-learn-more">Learn More</button>
          </a>
          <a href="/neurodiversity">
            <button className="dyslexia-try-ar">Try More AR Experiences</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dyslexia;
