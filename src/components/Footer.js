import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Name */}
        <div className="footer-logo">
          <img src="./images/logo.png" alt="" />
        </div>

        {/* Timings */}
        <div className="footer-timings">
          <h3>Timings</h3>
          <p>Monday - Sunday</p>
          <p>
            <strong>( 9:30 AM – 6:00 PM )</strong>
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
              href="https://twitter.com"
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
          <p>JP road, opposite Hotlines Bakery,</p>
          <p>Bhimavaram -534202</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2024. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
