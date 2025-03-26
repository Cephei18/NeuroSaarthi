import React from "react";
import "../App.css";

const ChatbotPage = () => {
  return (
    <div className="chatbot-page">
      <div className="chatbot-container">
        <div className="chatbot-header">
          <h2>NeuroSaarthi Chatbot</h2>
        </div>
        <div className="chatbot-messages">
          {/* Messages will be added dynamically */}
        </div>
        <div className="chatbot-input">
          <input type="text" placeholder="Ask me anything..." />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
