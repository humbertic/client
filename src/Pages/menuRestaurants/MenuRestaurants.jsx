import React, { useEffect, useState } from "react";
import "./menuRestaurants.css";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { BsCalendarCheck } from "react-icons/bs";
import { PiBowlFoodBold } from "react-icons/pi";
import { FaUtensils } from "react-icons/fa";
import {MdNoDrinks} from "react-icons/md"
import {GiCakeSlice} from 'react-icons/gi'

const MenuRestaurants = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    setCurrentDate(currentDate.toLocaleDateString(undefined, options));
  }, []);

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
  };
  return (
    <section className="menuRestaurants-section">
      <div className="topbar">
        <div className="logo">
          Eat <span className="red-letter">With</span> Us
        </div>
        <div className="search">
          <form onSubmit={handleSubmit} className="form-container">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="input-search"
            />
            <button type="submit" className="btn-search">
              <AiOutlineSearch />
            </button>
          </form>
        </div>
        <div className="date-container">
          <p className="date-container">
            <div className="icon-container">
              <BsCalendarCheck />
            </div>
            {currentDate}
          </p>
        </div>
      </div>
      <div className="menu-container">
        <div className="sidebar">
          <div className="icons-sidebar">
            <AiFillHome className="icons-sb" />
            <PiBowlFoodBold className="icons-sb" />
            <FaUtensils className="icons-sb" />
            <MdNoDrinks className="icons-sb" />
            <GiCakeSlice className="icons-sb" />
          </div>
        </div>
        <div className="categories-container">categories</div>
        <div className="right-sidebar">right side bar</div>
      </div>
    </section>
  );
};

export default MenuRestaurants;
