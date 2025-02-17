import React from "react";
import "./About.css"; // Import CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Dr. Suja Skin Hospital</h1>
        <p>
          Dr. Suja Skin Hospital is dedicated to providing advanced skin and hair treatments 
          using the latest technology. We specialize in dermatology, cosmetic treatments, 
          and laser procedures to enhance your beauty and confidence.
        </p>

        <div className="about-images">
        <img src="./images/about1.png" alt="Treatment" />
          <img src="./images/about.png" alt="Clinic" />

        </div>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Expert Dermatologists</li>
          <li>State-of-the-Art Technology</li>
          <li>Personalized Treatment Plans</li>
          <li>Safe and Effective Procedures</li>
        </ul>

        <div className="about-contact">
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default About;
