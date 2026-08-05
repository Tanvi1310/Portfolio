import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AICA — AI-Powered Virtual Chartered Accountant',
      description: 'End-to-end AI system to automate tax document processing for Form 16, 26AS, and AIS, reducing manual data entry effort by over 70%. Built PDF extraction pipeline achieving ~92% parsing accuracy on structured tax data.',
      tags: ['Python', 'Mistral AI', 'Ollama', 'RAG', 'JWT', 'PDF Extraction', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Real-Time Weather Web Application',
      description: 'Fully responsive single-page weather application using HTML5, CSS3, and JavaScript with zero external frameworks. Integrated OpenWeatherMap REST API for dynamic weather data rendering.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'REST API', 'OpenWeatherMap'],
      image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Hostel Management Android Application',
      description: 'Android application with 5 core modules: student registration, room allocation, complaint management, fee tracking, and admin dashboard. Implemented full CRUD operations with Firebase Realtime Database.',
      tags: ['Android Studio', 'Firebase', 'Java', 'Real-time Database', 'CRUD'],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
