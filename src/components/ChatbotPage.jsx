import React from "react";
import "../App.css";

const ChatbotPage = () => {
  return (
    <div className="chatbot-page-container">  {/* Fullscreen container */}
      <div className="chatbot-header">
        <h2>AI Chatbot</h2>
        <button className="close-btn" onClick={() => window.history.back()}>✖</button>
      </div>
      <div className="chatbot-messages">
        <div className="bot-message">Hello! How can I assist you today?</div>
      </div>
      <div className="chatbot-input">
        <input type="text" placeholder="Type your message..." />
        <button>➤</button>
      </div>
    </div>
  );
};

export default ChatbotPage;
