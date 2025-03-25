import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Dyslexia from "./components/Dyslexia";
import ADHD from "./components/ADHD";
import Autism from "./components/Autism";
import Dashboard from "./components/Dashboard";  // Import Dashboard
import Neurodiversity from "./components/Neurodiversity";  // Import Dashboar
import Chatbot from "./components/Chatbot";
import SuccessStories from "./components/SuccessStories";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />  {/* Add Dashboard Route */}
        <Route path="/neurodiversity" element={<Neurodiversity />} />
        <Route path="/dyslexia" element={<Dyslexia />} />
        <Route path="/adhd" element={<ADHD />} />
        <Route path="/autism" element={<Autism />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/successstories" element={<SuccessStories />} />
      </Routes>
    </Router>
  );
};

export default App;
