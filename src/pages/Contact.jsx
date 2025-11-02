import React from 'react';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Contact <span className="purple">Me</span></h1>
          <p className="contact-subtitle">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-form-section">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;