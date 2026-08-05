import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm <strong>Tanvi Gholap</strong>, a graduate in <strong>Artificial Intelligence and Machine Learning</strong> from <strong>PES Modern College of Engineering, Pune</strong>. I am passionate about technology, problem-solving, and continuous learning. I enjoy transforming ideas into practical, user-friendly applications and exploring innovative solutions to real-world challenges.
            </p>
            <p>
              My interests include <strong>Software Development, Artificial Intelligence, Machine Learning, and Full-Stack Development</strong>. I have hands-on experience with technologies such as <strong>Python, Java, SQL, React.js, HTML, CSS, JavaScript, and MySQL</strong>, and I enjoy building applications that are efficient, scalable, and user-friendly.
            </p>
            <p>
              I believe every project is an opportunity to learn, innovate, and grow. I enjoy tackling new challenges, writing clean and efficient code, and continuously expanding my technical knowledge. My goal is to contribute to meaningful projects, collaborate with talented teams, and grow as a software engineer while creating technology that makes a positive impact.
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <div className="icon">💡</div>
              <h3>Innovation</h3>
              <p>Creating cutting-edge solutions with modern technologies</p>
            </div>
            <div className="highlight-card">
              <div className="icon">🎨</div>
              <h3>Design</h3>
              <p>Beautiful and intuitive user interfaces</p>
            </div>
            <div className="highlight-card">
              <div className="icon">⚡</div>
              <h3>Performance</h3>
              <p>Fast, optimized, and scalable applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
