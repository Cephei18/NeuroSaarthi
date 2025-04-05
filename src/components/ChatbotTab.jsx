import React, { useState} from "react";
import axios from "axios";
import "./ChatbotTab.css"; // Optional custom CSS

const API_URL = "https://neurosarthi-chatbot-backend.onrender.com/chat";

const ChatbotTab = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("general");

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post(API_URL, {
        message: input,
        role: role,
      });

      setMessages((prev) => [
        ...prev,
        { text: res.data.response, sender: "bot" },
      ]);
    } catch (err) {
        console.error("Chatbot API error:", err); // ✅ Use the error
        setMessages((prev) => [
          ...prev,
          { text: "Error connecting to chatbot.", sender: "bot" },
        ]);
      }
      

    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="chatbot-tab-section">
    <div className="chatbot-tab-container">
      <h2>🤖 Talk to NeuroSaarthi</h2>

      <div className="role-selector">
        <label>Select your role: </label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="general">General</option>
          <option value="parent">Parent</option>
          <option value="teacher">Teacher</option>
          <option value="individual">Individual</option>
        </select>
      </div>


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
          onKeyDown={handleKeyPress}
          placeholder="Ask something..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
    </div>
  );
};

export default ChatbotTab;
