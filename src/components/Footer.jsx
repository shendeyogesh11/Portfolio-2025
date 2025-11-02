import React from "react";
import "../components/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="modern-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="brand-name">Yogesh.dev</h2>
            <p className="brand-tagline">Full Stack Developer</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-sections-horizontal">
            <div className="footer-section">
              <h3 className="section-title">Quick Links</h3>
              <div className="horizontal-links">
                <a href="#home" className="footer-link">Home</a>
                <a href="#about" className="footer-link">About</a>
                <a href="#projects" className="footer-link">Projects</a>
                <a href="#contact" className="footer-link">Contact</a>
              </div>
            </div>

            <div className="footer-section">
              <h3 className="section-title">Get In Touch</h3>
              <div className="horizontal-contact">
                <a href="mailto:yogesh@example.com" className="contact-link">
                  <i className="fas fa-envelope"></i>
                  Email
                </a>
                <a href="tel:+911234567890" className="contact-link">
                  <i className="fas fa-phone"></i>
                  Call
                </a>
                <span className="contact-link">
                  <i className="fas fa-map-marker-alt"></i>
                  Pune
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="copyright">
            <p>
              &copy; {currentYear} Yogesh's Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;