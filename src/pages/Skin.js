import React from "react";
import "./Services.css";

const skinCareData = [
  {
    title: "Face Pigmentation",
    description:
      "Face pigmentation includes dark spots, melasma, and uneven skin tone. Our treatments, including laser therapy and chemical peels, help reduce hyperpigmentation and restore a youthful complexion.",
  },
  {
    title: "Pimples & Acne Removal",
    description:
      "We offer specialized acne treatments, including salicylic acid peels, laser therapy, and medical facials, to clear active acne and prevent future breakouts while minimizing scarring.",
  },
  {
    title: "Dark Circles Treatment",
    description:
      "Dark circles under the eyes can result from stress, lack of sleep, or genetics. Our solutions include under-eye fillers, laser resurfacing, and vitamin-infused serums to refresh and brighten the eyes.",
  },
  {
    title: "Skin Brightening",
    description:
      "Our skin brightening treatments use vitamin C serums, glutathione therapy, and mild chemical peels to enhance your skin's natural glow and even out skin tone.",
  },
  {
    title: "Wrinkle Reduction",
    description:
      "Reduce the appearance of fine lines and wrinkles with our anti-aging treatments, including Botox, dermal fillers, and collagen-boosting procedures for firmer, youthful skin.",
  },
  {
    title: "Laser Skin Resurfacing",
    description:
      "This advanced treatment uses laser technology to remove damaged skin layers, reduce scars, and stimulate collagen production for smoother and healthier skin.",
  },
];

const SkinCareServices = () => {
  return (
    <div className="service-page">
      <h1 className="page-title">Skin Care Services</h1>
      <p className="page-intro">
        Our expert dermatologists provide advanced skin care solutions tailored
        to your needs. Whether you're dealing with pigmentation, acne, or
        wrinkles, we have effective treatments for you.
      </p>
      <div className="services-list">
        {skinCareData.map((service, index) => (
          <div key={index} className="service-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkinCareServices;
