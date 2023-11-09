import React, { useEffect, useState } from "react";
import "./navbar.css";

import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  const changeColorWithDelay = (newColor) => {
    setTimeout(() => {
      setBackgroundColor(newColor);
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        changeColorWithDelay("white");
      } else {
        changeColorWithDelay("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const shadow = backgroundColor === "white" ? "0px 5px 5px gray" : "none";

  return (
    <nav
      id="navbar"
      className="main-container"
      style={{
        backgroundColor,
        transition: "background-color 0.3s ease",
        boxShadow: shadow,
      }}
    >
      <div className="logo-container">
        <h2>
          EAT <span className="red-letter">WITH</span> US
        </h2>
      </div>
      <ul className="ul-navBar">
        <li>
          <Link to={"/"}>HOME</Link>
          {/* <a href="#about">HOME</a> */}
        </li>
        <li>
          <a href="#restaurant">RESTAURANTS</a>
        </li>
        {/* <li>
          <Link to="/restaurants" className="list-item">
           
          </Link>
        </li> */}
         <li>
          <a href="#categories">CATEGORIES</a>
        </li>
        {/* <li>
          <Link to="/categories" className="list-item">
            
          </Link>
        </li> */}
        <li>
          <a href="#about">ABOUT</a>
          {/* <Link to="/about" className="list-item">
            ABOUT
          </Link> */}
        </li>
      </ul>
      <div className="buttons-container">
        <button className="login-btn btn">
          <Link to="/login" className="">
            <FaUser /> Log in
          </Link>
        </button>
        <button className="signup-btn btn">
          <Link to="/register" className="">
            <FaUser /> Sign up
          </Link>
        </button>
      </div>
    </nav>
  );
};
