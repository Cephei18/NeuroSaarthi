import React, { useState, useEffect } from "react";
import "../App.css"; 
import bg1 from "../assets/bg1.jpg"; 
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import Neurodiversity from "./Neurodiversity";  // ✅ Import Neurodiversity section



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
    <main>  {/* ✅ Wrap everything inside a main tag */}
      {/* Background slider - remains on top */}
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
            <button className="chatbot-button">Chat with Our AI</button>
          </div>
        </div>
      </section>

      {/* Experience Neurodiversity - Now below */}
      <section className="neurodiversity-container">
        <Neurodiversity />  
      </section>
    </main>
  );
};

export default Home;
