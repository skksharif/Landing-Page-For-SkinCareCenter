import React,{useEffect} from "react";
import AOS from 'aos'
import "aos/dist/aos.css"
import "./Content2.css";

const Content2 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container">
      <div className="card1">
      
        <div className="card-content">
          <div className="video-container" data-aos="fade-up">
            <video className="responsive-video" controls>
              <source src="./images/intro.mp4" type="video/mp4" />
              {/* Add more <source> tags if you have multiple formats like .webm, .ogg */}
              Your browser does not support the video tag.
            </video>
          </div>
          <div data-aos="fade-up">
            <p>
              We are determined to deliver the most advanced cosmetology
              treatments while providing the highest level of patient care.
            </p>
            <p className="timing">
            Monday - Sunday ( 9:30 AM – 6:00 PM )<br />
           
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
