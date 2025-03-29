import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  
import "../App.css"; 
import bg1 from "../assets/bg1.jpg"; 
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import Neurodiversity from "./Neurodiversity";  
import FocusExtension from "./FocusExtension";
import SuccessStories from "./SuccessStories";
import Chatbot from "./Chatbot";  // ✅ Import Floating Chatbot



const images = [bg1, bg2, bg3];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>  
      {/* 🔹 Background Slider */}
      <section className="home">
        <div
          className="background-slider"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        >
          <div className="overlay">
            <h1 className="app-title">NeuroSaarthi</h1>
            <p className="app-description">
              Explore Neurodiversity through Augmented Reality.  
              Learn, experience, and empathize like never before.
            </p>
            {/* ✅ Fixed Button - Opens Chatbot Page */}
            <Link to="/chatbot-page">
              <button className="chatbot-button">Chat with Our AI</button>
            </Link>

            {/* ✅ New Button - Opens Certification Page */}
            <Link to="/certification">
              <button className="certification-button">Get Your Certificate</button>
            </Link>

          </div>
        </div>
      </section>

      {/* 🔹 Neurodiversity Section */}
      <section className="neurodiversity-container">
        <Neurodiversity />  
      </section>

      <section className="focus-extension-container">
        <FocusExtension />
      </section>

      

      {/* 🔹 Success Stories Section */}
      <section className="success-stories">
        <SuccessStories />
      </section>

      {/* ✅ Floating Chatbot (Visible on All Pages) */}
      <Chatbot />


    </main>
  );
};

export default Home;
