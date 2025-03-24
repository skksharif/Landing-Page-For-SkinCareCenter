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
                <img src="./images/logo.png" alt="Skin Care Logo" />
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
              <NavLink to="/prp" onClick={closeMenu}>
                PRP (Platelet-Rich Plasma)
              </NavLink>
              <NavLink to="/mesotherapy" onClick={closeMenu}>
                Mesotherapy
              </NavLink>
              <NavLink to="/exosomes-therapy" onClick={closeMenu}>
                Exosomes Therapy
              </NavLink>
              <NavLink to="/hair-threads" onClick={closeMenu}>
                Hair Threads
              </NavLink>
              <NavLink to="/stem-cell-therapy" onClick={closeMenu}>
                Stem Cell Therapy
              </NavLink>
              <NavLink to="/face-botox" onClick={closeMenu}>
                Face Botox
              </NavLink>
              <NavLink to="/water-filler" onClick={closeMenu}>
                Water Filler
              </NavLink>
              <NavLink to="/dark-circles-treatment" onClick={closeMenu}>
                Dark Circles Treatment
              </NavLink>
              <NavLink to="/acne-scar-treatment" onClick={closeMenu}>
                Acne Scar Treatment
              </NavLink>
              <NavLink to="/skin-brightening" onClick={closeMenu}>
                Skin Brightening
              </NavLink>
              <NavLink to="/chemical-peels" onClick={closeMenu}>
                Chemical Peels
              </NavLink>
              <NavLink to="/laser-treatments" onClick={closeMenu}>
                Laser Treatments
              </NavLink>
              <NavLink to="/anti-aging" onClick={closeMenu}>
                Anti-Aging Procedures
              </NavLink>
              <NavLink to="/skin-rejuvenation" onClick={closeMenu}>
                Skin Rejuvenation
              </NavLink>
              <NavLink to="/micro-needling" onClick={closeMenu}>
                Micro-needling
              </NavLink>
              <NavLink to="/phototherapy" onClick={closeMenu}>
                Phototherapy
              </NavLink>
              <NavLink to="/pigmentation-treatment" onClick={closeMenu}>
                Pigmentation Treatment
              </NavLink>
              <NavLink to="/wrinkle-reduction" onClick={closeMenu}>
                Wrinkle Reduction
              </NavLink>
              <NavLink to="/hydrafacial" onClick={closeMenu}>
                Hydrafacial
              </NavLink>
              <NavLink to="/scar-revision" onClick={closeMenu}>
                Scar Revision
              </NavLink>
              <NavLink to="/lip-enhancement" onClick={closeMenu}>
                Lip Enhancement
              </NavLink>
              <NavLink to="/skin-tightening" onClick={closeMenu}>
                Skin Tightening
              </NavLink>
              <NavLink to="/dermal-fillers" onClick={closeMenu}>
                Dermal Fillers
              </NavLink>
              <NavLink to="/tattoo-removal" onClick={closeMenu}>
                Tattoo Removal
              </NavLink>
              <NavLink to="/stretch-mark-treatment" onClick={closeMenu}>
                Stretch Mark Treatment
              </NavLink>
              <NavLink to="/skin-tag-wart-removal" onClick={closeMenu}>
                Skin Tag & Wart Removal
              </NavLink>
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
            <img src="./images/logo.png" alt="Skin Care Logo" />
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
              <NavLink to="/prp" onClick={closeMenu}>
                PRP (Platelet-Rich Plasma)
              </NavLink>
              <NavLink to="/mesotherapy" onClick={closeMenu}>
                Mesotherapy
              </NavLink>
              <NavLink to="/exosomes-therapy" onClick={closeMenu}>
                Exosomes Therapy
              </NavLink>
              <NavLink to="/hair-threads" onClick={closeMenu}>
                Hair Threads
              </NavLink>
              <NavLink to="/stem-cell-therapy" onClick={closeMenu}>
                Stem Cell Therapy
              </NavLink>
              <NavLink to="/face-botox" onClick={closeMenu}>
                Face Botox
              </NavLink>
              <NavLink to="/water-filler" onClick={closeMenu}>
                Water Filler
              </NavLink>
              <NavLink to="/dark-circles-treatment" onClick={closeMenu}>
                Dark Circles Treatment
              </NavLink>
              <NavLink to="/acne-scar-treatment" onClick={closeMenu}>
                Acne Scar Treatment
              </NavLink>
              <NavLink to="/skin-brightening" onClick={closeMenu}>
                Skin Brightening
              </NavLink>
              <NavLink to="/chemical-peels" onClick={closeMenu}>
                Chemical Peels
              </NavLink>
              <NavLink to="/laser-treatments" onClick={closeMenu}>
                Laser Treatments
              </NavLink>
              <NavLink to="/anti-aging" onClick={closeMenu}>
                Anti-Aging Procedures
              </NavLink>
              <NavLink to="/skin-rejuvenation" onClick={closeMenu}>
                Skin Rejuvenation
              </NavLink>
              <NavLink to="/micro-needling" onClick={closeMenu}>
                Micro-needling
              </NavLink>
              <NavLink to="/phototherapy" onClick={closeMenu}>
                Phototherapy
              </NavLink>
              <NavLink to="/pigmentation-treatment" onClick={closeMenu}>
                Pigmentation Treatment
              </NavLink>
              <NavLink to="/wrinkle-reduction" onClick={closeMenu}>
                Wrinkle Reduction
              </NavLink>
              <NavLink to="/hydrafacial" onClick={closeMenu}>
                Hydrafacial
              </NavLink>
              <NavLink to="/scar-revision" onClick={closeMenu}>
                Scar Revision
              </NavLink>
              <NavLink to="/lip-enhancement" onClick={closeMenu}>
                Lip Enhancement
              </NavLink>
              <NavLink to="/skin-tightening" onClick={closeMenu}>
                Skin Tightening
              </NavLink>
              <NavLink to="/dermal-fillers" onClick={closeMenu}>
                Dermal Fillers
              </NavLink>
              <NavLink to="/tattoo-removal" onClick={closeMenu}>
                Tattoo Removal
              </NavLink>
              <NavLink to="/stretch-mark-treatment" onClick={closeMenu}>
                Stretch Mark Treatment
              </NavLink>
              <NavLink to="/skin-tag-wart-removal" onClick={closeMenu}>
                Skin Tag & Wart Removal
              </NavLink>
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
