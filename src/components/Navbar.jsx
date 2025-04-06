// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { auth } from "../Firebase";
// import { signOut } from "firebase/auth";

// const Navbar = ({ isLoggedIn }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   return (
//     <nav className="navbar">
//       <div className="logo">NeuroSaarthi</div>
//        {/* Hamburger Menu */}
//        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//         ☰
//       </div>
//       <ul className="nav-links">
//         {isLoggedIn ? (
//           <>
            // <li><Link to="/">Home</Link></li>
            // <li><Link to="/neurodiversity">Neurodiversity</Link></li>
            // <li><Link to="/focus-extension">Focus Extension</Link></li>
            // <li><Link to="/affiliation-tab">Affiliation</Link></li>
            // <li><Link to="/dashboard">Dashboard</Link></li>
            // <li><button onClick={() => signOut(auth)}>Logout</button></li>

//           </>
//         ) : (
//           <>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/neurodiversity">Neurodiversity</Link></li>
//             <li><Link to="/focus-extension">Focus Extension</Link></li>
//             <li><Link to="/affiliation-tab">Affiliation</Link></li>
//             <li><Link to="/login">Login</Link></li>
//             <li><Link to="/signup">Signup</Link></li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";
import "../App.css"; // Import CSS for styling

const Navbar = ({ isLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    signOut(auth);
    setMenuOpen(false); // Close menu after logout
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">NeuroSaarthi</div>

      <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/neurodiversity" onClick={closeMenu}>Neurodiversity</Link></li>
        <li><Link to="/focus-extension" onClick={closeMenu}>Focus Extension</Link></li>
        <li><Link to="/affiliation-tab" onClick={closeMenu}>Affiliation</Link></li>

        {isLoggedIn ? (
          <>
            <li><Link to="/dashboard" onClick={closeMenu}>Dashboard</Link></li>
            <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
            <li><Link to="/signup" onClick={closeMenu}>Signup</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
