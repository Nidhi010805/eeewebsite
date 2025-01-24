

import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css"; // Ensure the CSS file contains the styles below

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* <div className="logo">MyLogo</div> */}
      
      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
        <div className={`line ${menuOpen ? "open" : ""}`}></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/about-us" target="_blank">About Us</Link>
        </li>
        <li>
          <Link to="/notes" target="_blank">Notes</Link>
        </li>
        <li>
          <Link to="/faculty" target="_blank">Faculty</Link>
        </li>
        <li>
          <Link to="/placed-seniors" target="_blank">Placed Seniors</Link>
        </li>
      </ul>

      {/* Auth Section */}
      <div className="auth">
        <button>Log In</button>
        <button>Sign Up</button>
        <input type="text" placeholder="Search..." />
      </div>
    </nav>
  );
};

export default Navbar;
