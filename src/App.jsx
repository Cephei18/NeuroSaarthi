import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Dyslexia from "./components/Dyslexia";
import ADHD from "./components/ADHD";
import Autism from "./components/Autism";
import Dashboard from "./components/Dashboard";  
import Neurodiversity from "./components/Neurodiversity";  
import Chatbot from "./components/Chatbot";
import SuccessStories from "./components/SuccessStories";
import ChatbotPage from "./components/ChatbotPage"; // ✅ Ensure it's imported
import Certification from "./components/Certification"; // Import Certification
import FocusExtension from "./components/FocusExtension";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />  
        <Route path="/neurodiversity" element={<Neurodiversity />} />
        <Route path="/dyslexia" element={<Dyslexia />} />
        <Route path="/adhd" element={<ADHD />} />
        <Route path="/autism" element={<Autism />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/chatbot-page" element={<ChatbotPage />} />  {/* ✅ Added the route */}
        <Route path="/successstories" element={<SuccessStories />} />
        <Route path="/certification" element={<Certification />} />  {/* ✅ Added the missing route */}
        <Route path="/focus-extension" element={<FocusExtension />} /> {/* ✅ Added the route */}
      </Routes>
    </Router>
  );
};

export default App;
