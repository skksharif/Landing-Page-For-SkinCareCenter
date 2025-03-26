import React, { useState, useEffect } from "react";
import "./Header.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const treatments = [
    { 
      name: "PRP (Platelet-Rich Plasma)", 
      path: "prp", 
      details: "PRP therapy uses a concentration of platelets from your own blood to stimulate hair growth and skin rejuvenation. It enhances collagen production and accelerates tissue repair.", 
      image: "/images/prp.jpg" 
    },
    { 
      name: "Mesotherapy", 
      path: "mesotherapy", 
      details: "Mesotherapy is a non-invasive treatment that delivers vitamins, minerals, and amino acids directly into the skin and scalp to boost hydration, reduce wrinkles, and promote hair growth.", 
      image: "/images/mesotherapy.jpg" 
    },
    { 
      name: "Exosomes Therapy", 
      path: "exosomes-therapy", 
      details: "Exosome therapy harnesses the power of extracellular vesicles to promote cell regeneration, improve skin texture, reduce inflammation, and slow down the aging process.", 
      image: "/images/exosomes.jpg" 
    },
    { 
      name: "Hair Threads", 
      path: "hair-threads", 
      details: "Hair threading uses absorbable sutures to provide structural support to weak hair follicles, improving hair density and strength.", 
      image: "/images/hair-threads.jpg" 
    },
    { 
      name: "Stem Cell Therapy", 
      path: "stem-cell-therapy", 
      details: "Stem cell therapy regenerates damaged hair follicles and skin cells, helping to treat baldness, fine lines, wrinkles, and scarring.", 
      image: "/images/stem-cell.jpg" 
    },
    { 
      name: "Face Botox", 
      path: "face-botox", 
      details: "Botox injections relax facial muscles to reduce the appearance of fine lines and wrinkles, giving a smoother and youthful look.", 
      image: "/images/face-botox.jpg" 
    },
    { 
      name: "Water Filler", 
      path: "water-filler", 
      details: "Water-based dermal fillers provide deep hydration and plump up the skin, reducing signs of aging while maintaining a natural look.", 
      image: "/images/water-filler.jpg" 
    },
    { 
      name: "Dark Circles Treatment", 
      path: "dark-circles-treatment", 
      details: "This treatment helps to reduce pigmentation, puffiness, and fine lines around the eyes using advanced skincare techniques.", 
      image: "/images/dark-circles.jpg" 
    },
    { 
      name: "Acne Scar Treatment", 
      path: "acne-scar-treatment", 
      details: "A range of treatments including laser therapy, microneedling, and chemical peels to minimize acne scars and improve skin texture.", 
      image: "/images/acne-scar.jpg" 
    },
    { 
      name: "Skin Brightening", 
      path: "skin-brightening", 
      details: "Skin brightening treatments help reduce hyperpigmentation, enhance skin tone, and give a glowing complexion.", 
      image: "/images/skin-brightening.jpg" 
    },
    { 
      name: "Chemical Peels", 
      path: "chemical-peels", 
      details: "A chemical solution is applied to exfoliate dead skin cells, improving skin texture, reducing fine lines, and clearing acne marks.", 
      image: "/images/chemical-peels.jpg" 
    },
    { 
      name: "Laser Treatments", 
      path: "laser-treatments", 
      details: "Laser therapy is used for skin resurfacing, hair removal, pigmentation correction, and scar reduction.", 
      image: "/images/laser-treatments.jpg" 
    },
    { 
      name: "Anti-Aging Procedures", 
      path: "anti-aging", 
      details: "A variety of non-invasive treatments, including Botox, fillers, and laser therapy, to slow down the aging process and rejuvenate skin.", 
      image: "/images/anti-aging.jpg" 
    },
    { 
      name: "Skin Rejuvenation", 
      path: "skin-rejuvenation", 
      details: "Techniques like microneedling, laser therapy, and PRP help restore a youthful, radiant skin texture.", 
      image: "/images/skin-rejuvenation.jpg" 
    },
    { 
      name: "Micro-needling", 
      path: "micro-needling", 
      details: "Microneedling uses tiny needles to stimulate collagen production, improving skin texture, reducing acne scars, and minimizing pores.", 
      image: "/images/micro-needling.jpg" 
    },
    { 
      name: "Phototherapy", 
      path: "phototherapy", 
      details: "Light therapy helps treat skin conditions like psoriasis, eczema, and acne by reducing inflammation and promoting healing.", 
      image: "/images/phototherapy.jpg" 
    },
    { 
      name: "Pigmentation Treatment", 
      path: "pigmentation-treatment", 
      details: "Pigmentation treatments use laser and chemical peels to remove dark spots and balance skin tone.", 
      image: "/images/pigmentation.jpg" 
    },
    { 
      name: "Wrinkle Reduction", 
      path: "wrinkle-reduction", 
      details: "Wrinkle treatments, including Botox and fillers, help smooth fine lines and restore a youthful appearance.", 
      image: "/images/wrinkle-reduction.jpg" 
    },
    { 
      name: "Hydrafacial", 
      path: "hydrafacial", 
      details: "A non-invasive skincare treatment that deeply cleanses, hydrates, and brightens skin.", 
      image: "/images/hydrafacial.jpg" 
    },
    { 
      name: "Scar Revision", 
      path: "scar-revision", 
      details: "Laser therapy and microneedling help reduce the visibility of scars by promoting skin regeneration.", 
      image: "/images/scar-revision.jpg" 
    },
    { 
      name: "Lip Enhancement", 
      path: "lip-enhancement", 
      details: "Lip fillers add volume and definition to lips for a fuller and more attractive look.", 
      image: "/images/lip-enhancement.jpg" 
    },
    { 
      name: "Skin Tightening", 
      path: "skin-tightening", 
      details: "Radiofrequency and ultrasound treatments help lift and tighten sagging skin non-surgically.", 
      image: "/images/skin-tightening.jpg" 
    },
    { 
      name: "Dermal Fillers", 
      path: "dermal-fillers", 
      details: "Injectable fillers restore lost volume, reduce wrinkles, and enhance facial features.", 
      image: "/images/dermal-fillers.jpg" 
    },
    { 
      name: "Tattoo Removal", 
      path: "tattoo-removal", 
      details: "Laser tattoo removal breaks down tattoo ink for gradual fading and complete removal.", 
      image: "/images/tattoo-removal.jpg" 
    },
    { 
      name: "Stretch Mark Treatment", 
      path: "stretch-mark-treatment", 
      details: "Laser therapy and microneedling reduce the appearance of stretch marks and improve skin elasticity.", 
      image: "/images/stretch-mark.jpg" 
    },
    { 
      name: "Skin Tag & Wart Removal", 
      path: "skin-tag-wart-removal", 
      details: "Quick and painless removal of unwanted skin tags and warts using laser or cryotherapy.", 
      image: "/images/skin-tag-wart.jpg" 
    }
  ];
  

  return (
    <>
      <header>
        <div className="social-media phone">
          <a href="mailto:dr.suja@gmail.com">
            <i className="fa fa-envelope"></i>
            <span>dr.suja@gmail.com</span>
          </a>
          <a href="tel:+919848022425">
            <i className="fa fa-phone"></i>
            <span>+91 98480 22425</span>
          </a>
        </div>

        <div className="navbar1" id="mynav">
          <div className="responsive">
            <a to="/" onClick={closeMenu}>
              <div className="logo-mobile">
                <img src="/images/logo.png" alt="Skin Care Logo" />
              </div>
            </a>
            <div
              className={`menu-icon ${menuOpen ? "close" : ""}`}
              onClick={toggleMenu}
            >
              <div className="bar"></div>
              <div className="bar1"></div>
              <div className="bar"></div>
            </div>
          </div>
          <nav className={menuOpen ? "show" : ""}>
            <NavLink to="/" className="show-navitems" onClick={closeMenu}>
              Home
            </NavLink>

            <div className="dropdown show-navitems">
              <a href="#" className="show-navitems">
                Cosmetic Dermotalogy
                <span id="arrow">&#9660;</span>
              </a>
              <div className="dropdown-content">
              {treatments.map((item) => (
                <NavLink
                  key={item.path}
                  to={`/cosmetic-dermotology/${item.path}`}
                  state={{ details: item.details, image: item.image }}
                  onClick={closeMenu}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            </div>
            <NavLink to="/about" className="show-navitems" onClick={closeMenu}>
              About
            </NavLink>

            <NavLink
              to="/contact"
              className="show-navitems"
              onClick={closeMenu}
            >
              Contact Us
            </NavLink>
          </nav>
        </div>
      </header>
      <div className="navbar" id="mynav">
        <div className="responsive">
          <div
            className={`menu-icon ${menuOpen ? "close" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <a to="/" onClick={closeMenu}>
          <div className="logo">
            <img src="/images/logo.png" alt="Skin Care Logo" />
            <div className="logo-text"></div>
          </div>
        </a>
        <nav className={menuOpen ? "show" : ""}>
          <NavLink to="/" className="show-navitems" onClick={closeMenu}>
            Home
          </NavLink>

          <div className="dropdown show-navitems">
            <a href="#" className="show-navitems">
              Cosmetic Dermotalogy
              <span id="arrow">&#9660;</span>
            </a>
            <div className="dropdown-content">
              {treatments.map((item) => (
                <NavLink
                  key={item.path}
                  to={`/cosmetic-dermotology/${item.path}`}
                  state={{ details: item.details, image: item.image }}
                  onClick={closeMenu}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          <NavLink to="/about" className="show-navitems" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/contact" className="show-navitems" onClick={closeMenu}>
            Contact Us
          </NavLink>
        </nav>
      </div>
    </>
  );
}
