import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm Tanvi Gholap</h1>
            <p className="tagline">Full Stack Developer | AI/ML Fresher | Problem Solver</p>
            <p className="description">
              Full Stack Developer and AI/ML fresher with hands-on experience building web applications and AI-powered systems. 
              Proficient in Python, JavaScript, React.js, Java, and SQL. Let's build impactful, scalable solutions together.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">View My Work</button>
              <button className="btn-secondary">Get In Touch</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="avatar-placeholder">
              <img src="/profile.jpeg" alt="Profile Avatar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
