import React from "react";
import sohaib from "../../assets/2.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1><span className="blue">SOHAIB</span> HASSAN</h1>
        <h3>a <span className="blue">programer</span>, software <span className="blue">developer</span></h3>
      </div>
      <div className="hero-right">
        <img src={sohaib} alt="" />
      </div>
    </div>
  );
};

export default Hero;
