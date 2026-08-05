import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>Tanvi Gholap</h1>
          </div>
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
              <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
              <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </nav>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
