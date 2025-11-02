import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-form-wrapper">
      <div className="form-header">
        <h2>Send Me a Message</h2>
        <p>Get in touch and let's discuss your project</p>
      </div>
      
      <form className="modern-contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-field">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
        </div>

        <div className="input-group">
          <div className="input-field">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>
        </div>

        <div className="input-group">
          <div className="input-field">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              required
            />
          </div>
        </div>

        <div className="input-group">
          <div className="input-field">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or just say hello..."
              rows="5"
              required
            ></textarea>
          </div>
        </div>
        
        <button type="submit" className="send-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;