import React,{useEffect} from "react";
import AOS from 'aos'
import "aos/dist/aos.css"
import "./Content1.css";

export default function Content1() {
    useEffect(() => {
      AOS.init({ duration: 1500 });
    }, []);
  return (
    <>
      <div className="about-section">
        <div className="about-content" >
          <h2 data-aos="fade-up">
            About Suja's Skin Care <span></span>
          </h2>

          <p data-aos="fade-up">
            Located in the heart of Vijayawada, Dr. Suja's Skin Care and
            Cosmetology Centre deals with Skin, Hair, and Nail problems. It is
            led by Dr.Suja. We focus on medical dermatology and cosmetic
            dermatology, including both skin and hair services. We are
            determined to deliver the most advanced cosmetology treatments while
            providing the highest level of patient care.
          </p>
        </div>
        <div className="about-image" data-aos="fade-up">
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
