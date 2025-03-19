import React, { useState } from "react";
import "../App.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle chatbot visibility

  return (
    <div className="chatbot-wrapper">
      {/* Floating Chat Icon (💬) - Click to Open */}
      <div className="chatbot-icon" onClick={() => setIsOpen(!isOpen)}>
        💬
      </div>

      {/* Chatbot Window */}
      <div className={`chatbot-container ${isOpen ? "open" : "closed"}`}>
        {/* Header */}
        <div className="chatbot-header">
          <span>NeuroSaarthi Chatbot</span>
          <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          <div className="bot-message">Hello! How can I help you?</div>
        </div>

        {/* Input Box */}
        <div className="chatbot-input">
          <input type="text" placeholder="Type your message..." />
          <button>➤</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
