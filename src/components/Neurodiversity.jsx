import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../App.css"; 
import dyslexiaImg from "../assets/dyslexia.jpg";
import adhdImg from "../assets/adhd.jpg";
import autismImg from "../assets/autism.jpg";

const Neurodiversity = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate(); // Initialize navigation

  const handleClick = (type) => {
    setSelected(type === selected ? null : type);

    // Navigate to the respective page when clicked
    if (type === "dyslexia") navigate("/dyslexia");
    else if (type === "adhd") navigate("/adhd");
    else if (type === "autism") navigate("/autism");
  };

  return (
    <div className="experience-container">
      <h2>Experience Neurodiversity</h2>
      <div className="cards-container">
        
        {/* Dyslexia Card */}
        <div
          className={`card ${selected === "dyslexia" ? "expanded" : ""}`}
          onClick={() => handleClick("dyslexia")}
        >
          <img src={dyslexiaImg} alt="Dyslexia" />
          <div className="card-content">
            <h3>Dyslexia</h3>
            <p>Study like people do with dyslexia.</p>
          </div>
        </div>

        {/* ADHD Card */}
        <div
          className={`card ${selected === "adhd" ? "expanded" : ""}`}
          onClick={() => handleClick("adhd")}
        >
          <img src={adhdImg} alt="ADHD" />
          <div className="card-content">
            <h3>ADHD</h3>
            <p>Experience the challenges of ADHD.</p>
          </div>
        </div>

        {/* Autism Card */}
        <div
          className={`card ${selected === "autism" ? "expanded" : ""}`}
          onClick={() => handleClick("autism")}
        >
          <img src={autismImg} alt="Autism" />
          <div className="card-content">
            <h3>Autism</h3>
            <p>Feel the effects of sensory overload.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neurodiversity;
