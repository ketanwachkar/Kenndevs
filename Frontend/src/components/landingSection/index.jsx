import React from "react";
import "./LandingSection.scss";

const LandingSection = () => {
  return (
    <div className="landing-main-container">
      <div className="landing-left-container">
        <span className="tag-one">Frontend</span>
        <span className="tag-two">Development</span>
        <span className="tagline-description">
          It specializes in crafting visually stunning slot games that
          blend next-gen features and exceptional game mechanics, offer flawless
          and immersive gameplay, and deliver unforgettable slot gaming
          experiences.
        </span>
        <div className="contactus-content">
          <button>contact us</button>
        </div>
      </div>
      <div>asset</div>
    </div>
  );
};

export default LandingSection;
