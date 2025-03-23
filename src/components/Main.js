import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <main className="main-container">
      <section className="section-image">
        <img
          src="./images/main.png  "
          alt="Dr. Suja Skin Care"
          className="main-image"
        />
      </section>
      <section className="section-content">
        <h1 className="heading">
          <span id="pink">Dr.Kotla Sujalalitha </span>
          <span id="green">MBBS,MD(DVL)</span>
        </h1>
        <p className="paragraph">
          It is run by Dermatologist, we combine expertise, technology, and care to
          bring out the best in your skin. From medical dermatology to cosmetic
          procedures, we are dedicated to helping you achieve radiant, healthy
          skin. Let your beauty shine through!
        </p>
        <button className="button">Contact Now</button>
      </section>
    </main>
  );
}
