import React,{useEffect} from "react";
import AOS from 'aos'
import "aos/dist/aos.css"
import Card from './Cards/ServiceCard'; // Import the Card component
import './Services.css'; // External CSS for layout styling


const services = [
  {
    image: './images/services/carbon-laser.png',
    title: 'Carbon Laser',
    description: 'A non-invasive laser treatment that deeply cleanses and rejuvenates the skin.',
  },
  {
    image: './images/services/hydrafacial.png',
    title: 'Hydrafacial',
    description: 'A multi-step facial treatment that cleanses, exfoliates, and hydrates the skin.',
  },
  {
    image: './images/services/photofacial.png',
    title: 'Photofacial',
    description: 'Uses intense pulsed light (IPL) to treat pigmentation, redness, and sun damage.',
  },
  {
    image: './images/services/botox.png',
    title: 'Botox',
    description: 'Injectable treatment to reduce wrinkles and fine lines by relaxing facial muscles.',
  },
  {
    image: './images/services/fillers.png',
    title: 'Fillers',
    description: 'Injectable fillers to restore volume and enhance facial contours.',
  },
  {
    image: './images/services/pigmentation.png',
    title: 'Pigmentation',
    description: 'Treatments to reduce dark spots, melasma, and uneven skin tone.',
  },
  {
    image: './images/services/face-tan.png',
    title: 'Face Tan',
    description: 'Skin treatments to remove tanning and restore natural complexion.',
  },
  {
    image: './images/services/unwanted-hair.png',
    title: 'Unwanted Hair',
    description: 'Laser hair removal and other methods for permanent hair reduction.',
  },
  {
    image: './images/services/gfc-hairfall.png',
    title: 'GFC for Hairfall',
    description: 'Growth Factor Concentrate therapy to reduce hair fall and promote hair growth.',
  },
  {
    image: './images/services/acne.png',
    title: 'Acne',
    description: 'Treatments to reduce acne breakouts, scars, and inflammation.',
  },
  {
    image: './images/services/open-pores.png',
    title: 'Open Pores',
    description: 'Advanced procedures to minimize and tighten large skin pores.',
  },
  {
    image: './images/services/oily-skin.png',
    title: 'Oily Skin',
    description: 'Customized skincare solutions to control excess oil and shine.',
  },
  {
    image: './images/services/skin-brightening.png',
    title: 'Skin Brightening',
    description: 'Treatments to improve skin tone, radiance, and overall complexion.',
  },
  {
    image: './images/services/warts-removal.png',
    title: 'Warts Removal',
    description: 'Medical procedures to safely remove warts and prevent recurrence.',
  },
  {
    image: './images/services/laser.png',
    title: 'Laser',
    description: 'Various laser treatments for skin rejuvenation and hair removal.',
  },
  {
    image: './images/services/tattoo-removal.png',
    title: 'Tattoo Removal',
    description: 'Laser tattoo removal to fade and eliminate unwanted tattoos.',
  },
];



const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="card-container">
      <h2> <span>Skin Services</span></h2>

      <div className="card-grid" >
        {services.map((card, index) => (
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
