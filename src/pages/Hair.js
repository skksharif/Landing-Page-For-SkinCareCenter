import React from "react";
import "./Services.css";

const hairCareData = [
  {
    title: "Hair Fall Treatment",
    description:
      "Our advanced hair fall treatments, including PRP therapy, mesotherapy, and laser stimulation, help strengthen hair roots, reduce hair shedding, and promote regrowth.",
  },
  {
    title: "Dandruff Treatment",
    description:
      "We offer medicated scalp treatments and anti-fungal therapies to eliminate dandruff, reduce scalp irritation, and restore a healthy scalp environment.",
  },
  {
    title: "Hair PRP Therapy",
    description:
      "Platelet-Rich Plasma (PRP) therapy boosts hair growth by injecting concentrated platelets into the scalp, improving follicle strength and increasing hair density.",
  },
  {
    title: "Scalp Micropigmentation",
    description:
      "This non-surgical treatment creates the appearance of fuller hair by applying natural pigments to the scalp, ideal for those with thinning hair or bald spots.",
  },
  {
    title: "Hair Transplant",
    description:
      "Our expert hair transplant procedures, including FUE and FUT techniques, restore natural hair growth with minimal downtime and long-lasting results.",
  },
  {
    title: "Laser Hair Therapy",
    description:
      "Low-Level Laser Therapy (LLLT) uses light energy to stimulate hair follicles, improve blood circulation, and encourage natural hair regrowth.",
  },
];

const HairCareServices = () => {
  return (
    <div className="service-page">
      <h1 className="page-title">Hair Care Services</h1>
      <p className="page-intro">
        Our specialized hair treatments address hair loss, dandruff, and scalp
        conditions. Whether you need PRP therapy, hair transplants, or laser
        treatments, we offer solutions tailored to your needs.
      </p>
      <div className="services-list">
        {hairCareData.map((service, index) => (
          <div key={index} className="service-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HairCareServices;
