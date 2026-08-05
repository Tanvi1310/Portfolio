import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities. 
              Feel free to reach out through the contact form or via the links below.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:gholaptanvi1310@gmail.com">gholaptanvi1310@gmail.com</a></p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="icon">📱</div>
                <div>
                  <h4>Phone</h4>
                  <p><a href="tel:+918208465111">+91 8208465111</a></p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>Pune, Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                <a href="https://github.com/Tanvi1310" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
                <a href="https://linkedin.com/in/tanvi-gholap11" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
            
            {submitted && (
              <div className="success-message">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
