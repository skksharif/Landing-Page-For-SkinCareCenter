import React from 'react';
import Card from './Cards/ServiceCard'; // Import the Card component
import './Services.css'; // External CSS for layout styling

const cardData = [
  {
    image: './images/services/skin-polishing.png',
    title: 'Skin Polishing',
    description:
      'A minimally invasive treatment that removes dead skin cells and promotes collagen growth.'
  },
  {
    image: './images/services/hydrofacial.png',
    title: 'Hydrafacial',
    description:
      'Combines mild exfoliation, suction, and infusion for clean, fresh, and hydrated skin.',
  },
  {
    image: './images/services/skin-tightening.png',
    title: 'Skin Tightening',
    description:
      'Uses advanced technology to tighten both superficial and deeper layers of the skin.',
  },
  {
    image: './images/services/electrocautery.png',
    title: 'Electrocautery',
    description:
      'Removes skin tags, warts, and other skin conditions with precision.',
  },
  {
    image: './images/services/mesotherapy.png',
    title: 'Mesotherapy',
    description:
      'Non-invasive treatment injecting vitamins and minerals for skin rejuvenation.',
  },
  {
    image: './images/services/phototherapy.png',
    title: 'Phototherapy',
    description:
      'Exposes skin to UV light for treatment under medical supervision.',
  },
];

const Services = () => {
  return (
    <div className="card-container">
      <h2> <span>Skin Services</span></h2>

      <div className="card-grid">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            background={card.background}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
