import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>
          Feel free to reach out for appointments, queries, or consultations.
        </p>

        <div className="contact-info">
          <div className="contact-item" data-aos="fade-up">
            <FaPhoneAlt className="contact-icon" />
            <a href="tel:08816226699">08816-226699</a>
          </div>
          <div className="contact-item" data-aos="fade-up">
            <FaWhatsapp className="contact-icon" />
            <a href="https://wa.me/9491080222">94910 80222</a>
          </div>
          <div className="contact-item" data-aos="fade-up">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:info@drsuja.com">drsujaskinhospital@gmail.com</a>
          </div>
          <div className="contact-item" data-aos="fade-up">
            <FaMapMarkerAlt className="contact-icon" />
            <a>Dr. Suja Skin Hospital,JP road,Bhimavaram -534202</a>
          </div>
        </div>

        <div className="contact-map" data-aos="fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3824.6403128492193!2d81.5127906751461!3d16.544246684206215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDMyJzM5LjMiTiA4McKwMzAnNTUuMyJF!5e0!3m2!1sen!2sin!4v1746165610230!5m2!1sen!2sin"
           
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
