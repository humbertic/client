import "./hero.css";
import image from "../../images/teste.jpg";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="image-container">
        <div class="image-overlay"></div>
        <div className="image-wrapper"></div>
      </div>
      <div className="hero-content">
        <div>
          <h1>Welcome to Eat <span className="red-letters">With</span> Us</h1>
          <p className="hero-text">Discover what we have to offer.</p>
        </div>
        <Link 
        className="cta-button a"
        to={"/register"}
        >
        Explore Now
        </Link>
        {/* <a href="#cta" className="cta-button a"> */}
          
        {/* </a> */}
      </div>
    </section>
  );
};

export default Hero;
