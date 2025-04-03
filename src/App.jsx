import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./Firebase"; // Import Firebase auth
import { useAuthState } from "react-firebase-hooks/auth"; // Firebase login tracking

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Neurodiversity from "./components/Neurodiversity";
import Dyslexia from "./components/Dyslexia";
import ADHD from "./components/ADHD";
import Autism from "./components/Autism";
import Chatbot from "./components/Chatbot";
import ChatbotPage from "./components/ChatbotPage";
import SuccessStories from "./components/SuccessStories";
import Certification from "./components/Certification";
import FocusExtension from "./components/FocusExtension";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Reports from "./components/Reports";

const App = () => {
  const [user] = useAuthState(auth); // Track user login state

  return (
    <Router>
      <Navbar isLoggedIn={user} /> {/* Pass login state to Navbar */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} /> 
        <Route path="/neurodiversity" element={<Neurodiversity />} />
        <Route path="/dyslexia" element={<Dyslexia />} />
        <Route path="/adhd" element={<ADHD />} />
        <Route path="/autism" element={<Autism />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/chatbot-page" element={<ChatbotPage />} />
        <Route path="/successstories" element={<SuccessStories />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/focus-extension" element={<FocusExtension />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reports" element={user ? <Reports /> : <Navigate to="/login" />} /> {/* Protected route */}
      </Routes>
      
      <Footer />
    </Router>
  );
};

export default App;
