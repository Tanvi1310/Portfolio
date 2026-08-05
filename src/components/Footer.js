import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Tanvi Gholap</h3>
            <p>Full Stack Developer | AI/ML Fresher | Problem Solver</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Tanvi Gholap. All rights reserved.</p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <span>•</span>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
