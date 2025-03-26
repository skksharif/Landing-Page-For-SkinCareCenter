import React,{useEffect} from "react";
import AOS from 'aos'
import "aos/dist/aos.css"
import './Card.css'; // External CSS file for styling

const ServiceCard = ({ image, title, description, background }) => {
    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);
  return (
    <div className="card" style={{ backgroundColor: background || '#ffffff' }} data-aos="flip-left">
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
