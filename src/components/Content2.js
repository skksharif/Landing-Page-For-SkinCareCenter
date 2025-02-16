import React from "react";
import "./Content2.css";

const Content2 = () => {
  return (
    <div className="container">
      <div className="card1">
      
        <div className="card-content">
          <div className="video-container">
            <video className="responsive-video" controls>
              <source src="your-video-file.mp4" type="video/mp4" />
              {/* Add more <source> tags if you have multiple formats like .webm, .ogg */}
              Your browser does not support the video tag.
            </video>
          </div>
          <div>
            <p>
              We are determined to deliver the most advanced cosmetology
              treatments while providing the highest level of patient care.
            </p>
            <p className="timing">
              Monday – Saturday ( 9:30 AM – 6:00 PM )<br />
              Sunday – Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
