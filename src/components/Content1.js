import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Content1.css";

export default function Content1() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div className="about-section">
        <div className="about-content">
          <h2 data-aos="fade-up">
            About Suja's Skin Care <span></span>
          </h2>

          <p data-aos="fade-up">
            Dr Kotla suja Lalitha completed her MBBS from Mahatma Gandhi medical
            College, Pondicherry with a first class. She completed her post
            graduation in Dermatology, Venereology and Leprosy from PES
            Institute of Medical Sciences and Research . She did her fellowship
            in Cosmetic Dermatology from Bangalore.she has more than 10 years of
            experience.
          </p>
          <p data-aos="fade-up">
            Dr Suja is known for her patient listening, understanding the root
            cause of the problem and planning a holistic treatment . Her areas
            of specialization are Clinical Dermatology, Cosmetology, Trichology
            and Dermatosurgery.
          </p>
          <p data-aos="fade-up">
            Dr Keerthi ‘s idea of providing the quality and affordable aesthetic
            services has led to the establishment of Dr suja Skin Hospital and
            Cosmetology centre in Bhimavaram. We emphasis on prevention and
            early detection of your skin problems, so that we can identify and
            treat the main cause as well.
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
