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
import Exercise from "./components/Exercise";
import ShareJourney from "./components/ShareJourney";
import ReadJourneys from "./components/ReadJourneys";
import ChatbotTab from "./components/ChatbotTab";
import AffiliationTab from "./components/AffiliationTab"; // Import AffiliationTab component
import GetAffiliation from "./components/GetAffiliation"; // Import GetAffiliation component    
import RecommendedMedia from "./components/RecommendedMedia";
import GuideModal from "./components/GuideModal";

import "./App.css"; // Import CSS for styling

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
        <Route path="/exercise" element={user ? <Exercise /> : <Navigate to="/login" />} /> {/* Protected route */}
        <Route path="/share-journey" element={<ShareJourney />} />
        <Route path="/read-journeys" element={<ReadJourneys />} /> {/* Public route */}
        <Route path="/chatbot-tab" element={<ChatbotTab />} /> {/* Public route */}
        <Route path="/affiliation-tab" element={<AffiliationTab />} /> {/* Public route */}
        <Route path="/get-affiliation" element={<GetAffiliation />} /> {/* Public route */}
        <Route path="/recommended-media" element={<RecommendedMedia />} /> {/* Public route */}
        <Route path="/guide-modal" element={<GuideModal />} /> {/* Public route */}
        
       
        
        {/* Redirect to home if no match */}
      </Routes>
      
      <Footer />
    </Router>
  );
};

export default App;
