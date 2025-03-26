import React, { useEffect } from "react";
import "./Main.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Main() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <main className="main-container">
      <section className="inner-main">
        <section className="section-image">
          <img
            src="./images/main.png"
            alt="Dr. Suja Skin Care"
            className="main-image"
            data-aos="fade-right"
          />
        </section>
        <section className="section-content" >
          <h1 className="heading"  data-aos="fade-left">
            <span id="pink">Dr. Kotla Sujalalitha</span>
            <br />
            <span id="green" > MBBS, MD (DVL)</span>
          </h1>
          <p className="paragraph"  data-aos="fade-left">
            Run by an expert dermatologist, we blend cutting-edge technology
            with personalized care to enhance your skin’s natural beauty. From
            medical dermatology to advanced cosmetic treatments, we’re here to
            help you achieve radiant, healthy skin.
          </p>
          <button className="button">Contact Now</button>
        </section>
      </section>
    </main>
  );
}
