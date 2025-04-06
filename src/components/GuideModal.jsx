import React, { useState, useEffect } from 'react';
import "./GuideModal.css";

const guideSteps = [
  {
    title: "Welcome to NeuroSaarthi 👋",
    text: "We’re here to help you understand and support neurodiversity through AR & AI."
  },
  {
    title: "Experience Neurodiversity 🧠",
    text: "Feel Dyslexia, ADHD & Autism challenges using interactive AR simulations."
  },
  {
    title: "Chat with our AI Guide 🤖",
    text: "Choose your role and get voice-enabled, personalized support via our chatbot."
  },
  {
    title: "View AI Reports 📊",
    text: "We analyze your chatbot logs to give helpful insights and red flags."
  },
  {
    title: "Try Focus Exercises 🎯",
    text: "Daily GenAI sessions for calming, attention-boosting activities."
  },
  {
    title: "Use Your Dashboard 🧑‍💻",
    text: "Access your profile, reports, exercises, and share your journey."
  }
];

export default function GuideModal() {
  const [showGuide, setShowGuide] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const seenGuide = localStorage.getItem("hasSeenGuide");
    if (!seenGuide) setShowGuide(true);
  }, []);

  const handleNext = () => {
    if (step < guideSteps.length - 1) {
      setStep(step + 1);
    } else {
      localStorage.setItem("hasSeenGuide", true);
      setShowGuide(false);
    }
  };

  const handleClose = () => {
    localStorage.setItem("hasSeenGuide", true);
    setShowGuide(false);
  };

  if (!showGuide) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full text-center space-y-4">
        <h2 className="text-xl font-semibold">{guideSteps[step].title}</h2>
        <p className="text-gray-600">{guideSteps[step].text}</p>
        <div className="flex justify-between items-center pt-4">
          <button
            onClick={handleClose}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          >
            Skip
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {step === guideSteps.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
