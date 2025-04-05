import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";

const Navbar = ({ isLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">NeuroSaarthi</div>
       {/* Hamburger Menu */}
       <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <ul className="nav-links">
        {isLoggedIn ? (
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/neurodiversity">Neurodiversity</Link></li>
            <li><Link to="/focus-extension">Focus Extension</Link></li>
            <li><Link to="/affiliation-tab">Affiliation</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><button onClick={() => signOut(auth)}>Logout</button></li>

          </>
        ) : (
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/neurodiversity">Neurodiversity</Link></li>
            <li><Link to="/focus-extension">Focus Extension</Link></li>
            <li><Link to="/affiliation-tab">Affiliation</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
