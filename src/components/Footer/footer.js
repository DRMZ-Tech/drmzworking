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
                <i className="fas fa-map-marker-alt"></i>
                {""}
                <a href="https://www.google.com/maps/place/Drmztech+(Drmz+system+innovations+Pvt+Ltd)/@23.1999184,77.2903391,12z/data=!4m10!1m2!2m1!1sFirst+Floor,+Plot+69B,+Kasturba+Nagar+Bhopal,+MP+462023!3m6!1s0x397c42684e8d0c45:0x8f1b50c93f4b5b0!8m2!3d23.2338714!4d77.4403319!15sCjdGaXJzdCBGbG9vciwgUGxvdCA2OUIsIEthc3R1cmJhIE5hZ2FyIEJob3BhbCwgTVAgNDYyMDIzkgETZWxlY3Ryb25pY3NfY29tcGFueeABAA!16s%2Fg%2F113gnp6cr?entry=ttu">
                  First Floor, Plot 69B, Kasturba Nagar Bhopal, MP 462023
                </a>
              </li>
              <li></li>
              <li>
                <i className="fas fa-envelope"></i>
                {""}
                <a href="mailto:info@example.com">contact@drmztech.com </a>
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
              <a
                href="https://www.facebook.com/drmztech.bhopal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com/drmztech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/drmztech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/drmz-system-innovations-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
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
