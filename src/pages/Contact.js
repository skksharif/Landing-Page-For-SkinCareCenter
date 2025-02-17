import React from "react";
import "./Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>
          Feel free to reach out for appointments, queries, or consultations.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <a href="tel:08816226699">08816-226699</a>
          </div>
          <div className="contact-item">
            <FaWhatsapp className="contact-icon" />
            <a href="https://wa.me/9491080222">94910 80222</a>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:info@drsuja.com">info@drsuja.com</a>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <a>Dr. Suja Skin Hospital, City Center, Hyderabad</a>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            title="clinic-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.6419923695153!2d81.5128044751461!3d16.544161984206337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d3a75088b621%3A0x48d17492c4909671!2sDr.Suja%20Skin%20Hospital%20%7C%20Best%20Skin%20Clinic%20in%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1739758866639!5m2!1sen!2sinF"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
