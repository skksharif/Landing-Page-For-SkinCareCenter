import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <main className="main-container">
      <section className="inner-main">
        <section className="section-image">
          <img
            src="./images/main.png"
            alt="Dr. Suja Skin Care"
            className="main-image"
          />
        </section>
        <section className="section-content">
          <h1 className="heading">
            <span id="pink">Dr. Kotla Sujalalitha</span>
            <br />
            <span id="green">MBBS, MD (DVL)</span>
          </h1>
          <p className="paragraph">
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