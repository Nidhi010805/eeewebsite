import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            Electrical & Electronics Department, BIT Mesra, aims to provide quality education and 
            resources for students to excel in academics and beyond.
          </p>
        </div>

        {/* Useful Links Section */}
        <div className="footer-links">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#notes">Notes</a></li>
            <li><a href="#faculty">Faculty</a></li>
            <li><a href="#seniors">Placed Seniors</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Electrical & Electronics Department, BIT Mesra. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;