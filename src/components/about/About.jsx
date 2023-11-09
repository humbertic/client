import React from "react";
import "./about.css";
import { FaLinkedin,FaFacebookSquare,FaInstagramSquare,FaTwitterSquare } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-container" id="about">
      <div className="about-content">
        <h2 className="abot-h2">About Our App</h2>
        <p className="about-p">
          Welcome to <strong>Eat With Us</strong>! We are passionate about
          providing you with the best experience. Our mission is to make your
          life easier by offering innovative solutions and features that you'll
          love.
        </p>
        <p className="about-p">
          Our dedicated team works hard to create an app that meets your needs.
          We value your feedback and are committed to improving your experience
          with every update.
        </p>
      </div>
      <div className="social-icons-conatiner">
        <div className="social-icons">
          <FaFacebookSquare className="icon" />
          <FaInstagramSquare className="icon " />
          <FaTwitterSquare className="icon" />
          <FaLinkedin className="icon" />
        </div>
      </div>
    </section>
  );
};

export default About;
