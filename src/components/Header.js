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
                Our Services
                <span id="arrow">&#9660;</span>
              </a>
              <div className="dropdown-content">
                <NavLink href="/skin-services" onClick={closeMenu}>
                  Skin & Hair
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
                Our Services
                <span id="arrow">&#9660;</span>
              </a>
              <div className="dropdown-content">
                <NavLink to="/skin-services" onClick={closeMenu}>
                  Skin & Hair
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
