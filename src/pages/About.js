import React,{useEffect} from "react";
import AOS from 'aos'
import "aos/dist/aos.css"
import "./About.css"; // Import CSS file

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="about-container">
      <div className="about-content" >
        <h1 data-aos="fade-up">About Dr. Suja Skin Hospital</h1>
        <p data-aos="fade-up">
          Dr. Suja Skin Hospital is dedicated to providing advanced skin and hair treatments 
          using the latest technology. We specialize in dermatology, cosmetic treatments, 
          and laser procedures to enhance your beauty and confidence.
        </p>

        <div className="about-images" data-aos="fade-up">
        <img src="./images/about1.png" alt="Treatment" />
          <img src="./images/about.png" alt="Clinic" />

        </div>

        <h2 data-aos="fade-up">Why Choose Us?</h2>
        <ul>
          <li data-aos="fade-up">Expert Dermatologists</li>
          <li data-aos="fade-up">State-of-the-Art Technology</li>
          <li data-aos="fade-up">Personalized Treatment Plans</li>
          <li data-aos="fade-up">Safe and Effective Procedures</li>
        </ul>

        <div className="about-contact" data-aos="fade-up">
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default About;
