import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Swetha",
    feedback:
      "I know Dr.Suja even before she became a doctor. She is a very honest and hard-working person. She is very sincere in her work. I wish her all the best for her new clinic.",
    rating: 5,
  },
  {
    name: "Sreekanth",
    feedback:
      "I suffered with eczema for several years. I used all home remedies, homeopathy, and allopathy but never got complete relief. After meeting Dr.Suja, I completely understood my condition and got relieved from my problem. She advised certain precautions by which I am able to prevent recurrence.",
    rating: 5,
  },
  {
    name: "Dr.K.Rajesh",
    feedback:
      "Dr.Suja is a patient listener, gentle person with good knowledge and medical skills. She tells dos and don'ts to every patient which is useful to them for further skin care. I wish her all the success in her career.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading"><span>Our Testimonials</span></h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <h3>
              <span role="img" aria-label="user">
                👤
              </span>{" "}
              {testimonial.name}
            </h3>
            <p>{testimonial.feedback}</p>
            <div className="rating">
              {"★".repeat(testimonial.rating)}
              {"☆".repeat(5 - testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
