import React from "react";
import "./Content1.css";

export default function Content1() {
  return (
    <>
      <div className="about-section">
        <div className="about-content">
          <h2>
            About Suja's Skin Care <span></span>
          </h2>

          <p>
            Located in the heart of Vijayawada, Dr. Suja's Skin Care and
            Cosmetology Centre deals with Skin, Hair, and Nail problems. It is
            led by Dr.Suja. We focus on medical dermatology and cosmetic
            dermatology, including both skin and hair services. We are
            determined to deliver the most advanced cosmetology treatments while
            providing the highest level of patient care.
          </p>
        </div>
        <div className="about-image">
          <img
            src="./images/suja.jpg"
            alt="Dr. Suja"
            className="profile-image"
          />
        </div>
      </div>
      <div className="about-banner">
        <p>Look Better ♥ Feel Better ♥ With Healthy Skin and Hair</p>
      </div>
    </>
  );
}
