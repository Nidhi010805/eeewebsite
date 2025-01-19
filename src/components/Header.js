import React from 'react';
// import './style.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <h1>Electrical and Electronics Department</h1>
        </div>
        </div>

   <div className="college">
<p> </p>
  </div>
        <div className="navbar">
        {/* Navigation Links */}

        <nav className="nav-menu">
          <a href="#menu">MENU</a>
          
        </nav>
        <nav className="nav-links">
          <a href="#notes">Notes</a>
          <a href="#faculty">Faculty</a>
          <a href="#seniors">Seniors</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Search Bar and Buttons */}
        <div className="header-actions">
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
          />
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;