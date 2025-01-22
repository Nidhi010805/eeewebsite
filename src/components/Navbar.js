

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
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
      <div className="auth">
        <button>Log In</button>
        <button>Sign Up</button>
        <input type="text" placeholder="Search..." />
      </div>
    </nav>
  );
};

export default Navbar;