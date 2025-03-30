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
  const medicalTreatments = [
    { 
      name: "ACNE (Pimples)", 
      path: "acne",
      details: "Acne is a common skin condition that occurs when hair follicles become clogged with oil and dead skin cells, leading to pimples, blackheads, and cysts. It can affect anyone but is most prevalent in teenagers and young adults.",
      image: "/images/md/acne.jpeg"
    },
    {
      name: "ECZEMA (Allergic Dermatitis)",
      path: "eczema",
      details: "Eczema is a chronic inflammatory skin condition characterized by dry, itchy, and inflamed skin. It can be triggered by allergens, irritants, or stress and often requires ongoing management.",
      image: "/images/md/eczemas.jpeg"
    },
    {
      name: "ROSACEA",
      path: "rosacea",
      details: "Rosacea is a chronic skin condition that causes redness, visible blood vessels, and sometimes acne-like bumps on the face. It can be triggered by various factors, including sun exposure, hot beverages, and spicy foods.",
      image: "/images/md/rosacea.jpeg"
    },
    {
      name: "PSORIASIS",
      path: "psoriasis",
      details: "Psoriasis is an autoimmune condition that leads to the rapid growth of skin cells, resulting in thick, red patches covered with silvery scales. It can affect any part of the body and may be associated with joint pain.",
      image: "/images/md/psoriasis.jpeg"
    },
    {
      name: "VITILIGO",
      path: "vitiligo",
      details: "Vitiligo is a skin disorder characterized by the loss of pigment, leading to white patches on the skin. It occurs when melanocytes (pigment-producing cells) are destroyed, and its exact cause is not fully understood.",
      image: "/images/md/vitiligo.jpeg"
    },
    {
      name: "FUNGAL INFECTIONS",
      path: "fungal-infections",
      details: "Fungal infections are caused by fungi that invade the skin, hair, or nails. Common types include athlete's foot, ringworm, and candidiasis. They can cause itching, redness, and discomfort.",
      image: "/images/md/fungal-infection.jpeg"
    },
    {
      name: "SCABIES",
      path: "scabies",
      details: "Scabies is a contagious skin condition caused by tiny mites that burrow into the skin, leading to intense itching and a rash. It spreads through close contact and requires treatment to eliminate the mites.",
      image: "/images/md/scabies.jpeg"
    },
    {
      name: "LICHEN PLANUS",
      path: "lichen-planus",
      details: "Lichen planus is an inflammatory skin condition that causes itchy, flat-topped, purple lesions on the skin and mucous membranes. Its cause is unknown, but it may be related to immune system dysfunction.",
      image: "/images/md/lichen-planus.jpeg"
    },
    {
      name: "WARTS",
      path: "warts",
      details: "Warts are benign growths caused by the human papillomavirus (HPV). They can appear anywhere on the body and are often rough and raised. Treatment options include freezing, laser therapy, and topical medications.",
      image: "/images/md/warts.jpeg"
    },
    {
      name: "MELASMA",
      path: "melasma",
      details: "Melasma is a skin condition characterized by brown or gray-brown patches, usually on the face. It is often triggered by hormonal changes, sun exposure, and certain medications.",
      image: "/images/md/melasma.jpeg"
    },
    {
      name: "ALOPECIA",
      path: "alopecia",
      details: "Alopecia is an autoimmune condition that causes hair loss in patches. It can affect the scalp and other areas of the body. The exact cause is unknown, but it may be related to genetic and environmental factors.",
      image: "/images/md/alopecia.jpeg"
    },
    {
      name: "MALE PATTERN HAIR LOSS",
      path: "male-pattern-hair-loss",
      details: "Male pattern hair loss is a common condition characterized by gradual thinning of hair, usually starting from the temples and crown. It is primarily caused by genetics and hormonal changes.",
      image: "/images/md/male-pattern-hair-loss.jpeg"
    },
    {
      name: "DANDRUFF",
      path: "dandruff",
      details: "Dandruff is a scalp condition that causes flaking of the skin, often accompanied by itching. It can be caused by dry skin, fungal infections, or sensitivity to hair products.",
      image: "/images/md/dandruff.jpeg"
    },
    {
      name: "EXCESS HAIR",
      path: "excess-hair",
      details: "Excess hair growth (hirsutism) occurs when hair grows in areas where it is typically minimal or absent. It can be due to hormonal imbalances, genetics, or medical conditions such as PCOS.",
      image: "/images/md/excess-hair.jpeg"
    },
    {
      name: "PEDIATRIC DERMATOLOGY",
      path: "pediatric-dermatology",
      details: "Pediatric dermatology focuses on diagnosing and treating skin conditions in children, including eczema, birthmarks, infections, and genetic disorders affecting the skin.",
      image: "/images/md/pediatric-dermatology.jpeg"
    },
    {
      name: "DERMATOSURGERY",
      path: "dermatosurgery",
      details: "Dermatosurgery involves surgical procedures to treat skin conditions such as cysts, tumors, scars, and skin cancer. Techniques include excision, laser surgery, and cryotherapy.",
      image: "/images/md/dermatosurgery.jpeg"
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
                <NavLink to="/"><img src="/images/logo.png" alt="Skin Care Logo" /></NavLink>
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
                Medical Dermotalogy
                <span id="arrow">&#9660;</span>
              </a>
              <div className="dropdown-content">
              {medicalTreatments.map((item) => (
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
          <NavLink to="/"><img src="/images/logo.png" alt="Skin Care Logo" /></NavLink>
            <div className="logo-text"></div>
          </div>
        </a>
        <nav className={menuOpen ? "show" : ""}>
          <NavLink to="/" className="show-navitems" onClick={closeMenu}>
            Home
          </NavLink>

          <div className="dropdown show-navitems">
            <a href="#" className="show-navitems">
              Medical Dermotalogy
              <span id="arrow">&#9660;</span>
            </a>
            <div className="dropdown-content">
              {medicalTreatments.map((item) => (
                <NavLink
                  key={item.path}
                  to={`/medical-dermotology/${item.path}`}
                  state={{ details: item.details, image: item.image }}
                  onClick={closeMenu}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

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
