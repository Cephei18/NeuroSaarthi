import React, { useState } from "react";
import axios from "axios";
import "../App.css"; // Import your CSS file for styling

function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const API_URL = "https://neurosarthi-chatbot-backend.onrender.com/chat";

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post(API_URL, { message: input });
      setMessages((prev) => [...prev, { text: res.data.response, sender: "bot" }]);
    } catch {
      setMessages((prev) => [...prev, { text: "Error connecting to chatbot.", sender: "bot" }]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Floating Chatbot Button */}
      <button className="chatbot-button" onClick={toggleChatbot}>💬</button>

      {/* Chatbot Window */}
      <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
        <div className="chatbot-header">Talk to NeuroSaarthi</div>
        <div className="chat-window">
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          {loading && <div className="message bot typing">Typing...</div>}
        </div>
        <div className="input-area">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </>
  );
}

export default Chatbot;
