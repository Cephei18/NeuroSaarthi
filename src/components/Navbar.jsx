import React from "react";
import "../App.css"; // Import CSS file
import { Link } from "react-router-dom"; // For navigation

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">NeuroSaarthi</div> {/* App Name */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/neurodiversity">Neurodiversity</Link></li>
        <li><Link to="/SuccessStories">Success Stories</Link></li>
        <li><Link to="/focus-extension">Focus Extension</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li> {/* Dashboard Link */}
        <li><Link to="/login">Login</Link></li> {/* ✅ Login Link */}
        <li><Link to="/signup">Signup</Link></li> {/* ✅ Signup Link */}
      </ul>
    </nav>
  );
};

export default Navbar;
