import React from "react";
import "./Services.css";

const mainServices = [
  { title: "Carbon Laser", description: "Advanced laser treatment that removes pigmentation, tightens skin, and enhances complexion." },
  { title: "Hydrafacial", description: "A multi-step facial treatment that cleanses, exfoliates, and hydrates for glowing skin." },
  { title: "Photofacial", description: "Uses intense pulsed light (IPL) to reduce blemishes, redness, and pigmentation." },
  { title: "Botox", description: "Non-surgical treatment that reduces wrinkles and fine lines for a youthful look." },
  { title: "Fillers", description: "Dermal fillers restore lost volume, smooth wrinkles, and enhance facial contours." },
  { title: "Pigmentation", description: "Effective treatments to reduce dark spots, melasma, and uneven skin tone." },
  { title: "GFC for Hairfall", description: "Growth Factor Concentrate therapy strengthens hair follicles and promotes regrowth." },
  { title: "Acne", description: "Customized acne treatments to control breakouts, reduce scars, and restore clear skin." },
  { title: "Open Pores", description: "Advanced treatments to minimize pores and improve skin texture." },
  { title: "Oily Skin", description: "Oil-control therapies to balance sebum production and prevent breakouts." },
  { title: "Skin Brightening", description: "Treatments designed to enhance skin radiance and even out complexion." },
  { title: "Warts Removal", description: "Safe and effective removal of warts using medical procedures." },
  { title: "Face Tan", description: "De-tanning solutions to restore natural skin tone and remove sun damage." },
  { title: "Unwanted Hair Laser", description: "Laser hair removal for smooth, hair-free skin with long-lasting results." },
  { title: "Tattoo Removal", description: "Advanced laser technology to fade and remove unwanted tattoos." },
];

const additionalServices = [
  { title: "Psoriasis", description: "Specialized treatments to manage and reduce symptoms of psoriasis." },
  { title: "Eczema", description: "Soothing therapies to relieve itchiness, redness, and inflammation." },
  { title: "Dandruff", description: "Effective scalp treatments to eliminate dandruff and promote healthy hair." },
  { title: "Alopecia", description: "Advanced solutions to treat hair loss and promote regrowth." },
  { title: "Ringworm Infection", description: "Medical treatments to cure fungal infections on the skin and scalp." },
  { title: "Vitiligo", description: "Skin pigmentation therapies to manage and treat vitiligo patches." },
  { title: "Head Lice", description: "Professional treatments to eliminate lice and prevent reinfestation." },
  { title: "Skin Allergy", description: "Personalized treatments for different types of skin allergies and sensitivities." },
  { title: "Urticaria", description: "Targeted therapies to manage hives, itching, and allergic reactions." },
];

const SkinCareServices = () => {
  return (
    <div className="service-page">
      <h1 className="page-title">Our Services</h1>
      <div className="services-list">
        {mainServices.map((service, index) => (
          <div key={index} className="service-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {additionalServices.length > 0 && (
        <>
          <br/>
          <h2 className="additional-title">Additional Treatments</h2>
          <br/>
          <div className="services-list">
            {additionalServices.map((service, index) => (
              <div key={index} className="service-card">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SkinCareServices;
