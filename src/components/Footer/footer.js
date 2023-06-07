import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-col">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              aliquet sagittis iaculis.
            </p>
          </div>
          <div className="footer-col">
            <h3>Contact</h3>
            <ul className="footer-contact-list">
              <li>
                <i className="fas fa-map-marker-alt"></i> 123 Street, City,
                Country
              </li>
              <li>
                <i className="fas fa-envelope"></i>{' '}
                <a href="mailto:info@example.com">info@example.com</a>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i> +1234567890
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
          © {new Date().getFullYear()} Your Organization. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
