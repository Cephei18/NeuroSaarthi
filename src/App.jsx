import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot"; // Import Chatbot
import "./App.css"; 
import Dyslexia from "./components/Dyslexia";
import ADHD from "./components/ADHD";
import Autism from "./components/Autism";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Chatbot /> {/* Chatbot added globally */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dyslexia" element={<Dyslexia />} />
        <Route path="/adhd" element={<ADHD />} />
        <Route path="/autism" element={<Autism />} />
      </Routes>
    </Router>
  );
};

export default App;
