import React from "react";
import "./plate.css";
import { BsStarFill, BsStarHalf,BsCartPlusFill } from "react-icons/bs";
import {AiFillPlusCircle} from "react-icons/ai"


const Plate = (props) => {
  return (
    <div className="food-card">
      <img
        src="https://images.unsplash.com/photo-1611309454921-16cef3438ee0?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt={""}
        className="food-image"
      />
      <div className="food-details">
        <h3 className="food-title">{"Title"}</h3>
        <p className="food-description">{"Lorem ipsum thryer"}</p>
        <div className="food-info">
          <p className="food-price">
            <span className="start-icon">
              <BsStarFill />
            </span>
            <span className="start-icon">
              <BsStarFill />
            </span>
            <span className="start-icon">
              <BsStarFill />
            </span>
            <span className="start-icon">
              <BsStarFill />
            </span>
            <span className="start-icon">
              <BsStarHalf />
            </span>
            <span className="price">${25.99}</span>
          </p>
        </div>
          <button className="food-button"> Add to card<AiFillPlusCircle/></button>
      </div>
    </div>
  );
};

export default Plate;
