import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 🔹 Logo & Tagline */}
        <div className="footer-logo">
          <h2>NeuroSaarthi</h2>
          <p>Empowering Neurodiversity through AR & AI</p>
        </div>

        {/* 🔹 Navigation Links */}
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/neurodiversity">Neurodiversity</Link></li>
          <li><Link to="/focus-extension">Focus Tool</Link></li>
          <li><Link to="/success-stories">Success Stories</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>

        {/* 🔹 Social Media Icons */}
        <div className="footer-social">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">🔗</a>
        </div>
      </div>

      {/* 🔹 Copyright Notice */}
      <div className="footer-bottom">
        <p>© 2025 NeuroSaarthi. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
