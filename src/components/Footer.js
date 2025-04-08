import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Name */}
        <div className="footer-logo">
          <img src="./images/logo.png" alt="Dr. Suja Skin Care Centre" />
        </div>

        {/* Timings */}
        <div className="footer-timings">
          <h3>Timings</h3>
          <p>
            <strong>Mon - Fri:</strong> 9:00 AM – 2:00 PM, 5:00 PM – 8:00 PM
          </p>
          <p>
            <strong>Sunday:</strong> 10:00 AM – 1:00 PM
          </p>

          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fa fa-whatsapp"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Contact Details */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Dr. Suja Skin Care Centre</p>
          <p>JP Road, Opposite Hotlines Bakery,</p>
          <p>Bhimavaram - 534202</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2024. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;