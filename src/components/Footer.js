// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Make sure to create this CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/NagamaniByki" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/bykinagamani/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
