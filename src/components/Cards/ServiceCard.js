import React from 'react';
import './Card.css'; // External CSS file for styling

const ServiceCard = ({ image, title, description, background }) => {
  return (
    <div className="card" style={{ backgroundColor: background || '#ffffff' }}>
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
