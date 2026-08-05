import React from 'react';
import './Skills.css';

function Skills() {
  const skills = {
    'Languages': ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
    'Frontend': ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Web Design'],
    'Backend & APIs': ['Python', 'RESTful APIs', 'JWT Authentication', 'CRUD Operations', 'Firebase'],
    'Databases': ['MySQL', 'Firebase Realtime Database'],
    'AI/ML': ['RAG Architecture', 'Ollama', 'Mistral AI', 'PDF Extraction', 'NLP'],
    'Tools & Platforms': ['Git', 'GitHub', 'VS Code', 'Android Studio']
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {Object.entries(skills).map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category[0]}</h3>
              <div className="skills-list">
                {category[1].map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-badge">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
