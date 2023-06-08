import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-col">
            <h3>About Us</h3>
            <p>
              © Copyright DRMZ Systems Innovations Private Limited. All Rights
              Reserved Designed by Tech DRMZ
            </p>
          </div>
          <div className="footer-col">
            <h3>Contact</h3>
            <ul className="footer-contact-list">
              <li>
                <i className="fas fa-map-marker-alt"></i> First Floor, Plot 69B,
                Kasturba Nagar Bhopal, MP 462023
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                {""}
                <a href="mailto:info@example.com">contact@drmztech.com</a>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <a href="tel:+91-7581806218">+91-7581806218</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Follow Us</h3>
            <div className="footer-social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <p className="footer-text">
          © {currentYear} Your Organization. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
