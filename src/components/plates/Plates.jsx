import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Plate from "./plate/Plate";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./plates.css";

const Plates = () => {
  const plateData = [
    { name: "Plate 1", image: "" },
    { name: "Plate 2", image: "" },
    { name: "Plate 3", image: "" },
    { name: "Plate 4", image: "" },
    { name: "Plate 5", image: "" },
    { name: "Plate 6", image: "" },
    { name: "Plate 7", image: "" },
    { name: "Plate 8", image: "" },
    { name: "Plate 9", image: "" },
    { name: "Plate 10", image: "" },
    { name: "Plate 11", image: "" },
    { name: "Plate 12", image: "" },
    // Add more plate data here
  ];

  const [itemToShow, setItemToShow] = useState(5);

  useEffect(() => {
    const updateItemToShow = () => {
      if (window.innerWidth < 475) {
        setItemToShow(1);
      } else if (window.innerWidth < 768) {
        setItemToShow(2);
      } else if (window.innerWidth < 992) {
        setItemToShow(3);
      } else {
        setItemToShow(5);
      }
    };
    updateItemToShow();
    window.addEventListener("resize", updateItemToShow);

    return () => {
      window.removeEventListener("resize", updateItemToShow);
    };
  }, []);

  const settings = {
    dots: true,
    autoPlay:true,
    infinite: true,
    speed: 500,
    slidesToShow: itemToShow, // Number of items to show at once
    slidesToScroll: itemToShow, // Number of items to scroll
  };

  return (
    <section className="plates-container" id="categories">
      <div className="categories">
        <h3>Pizza</h3>
        <Slider {...settings}>
          {plateData.map((plate, index) => (
            <Plate
              key={index}
              plate={plate}
              name={plate.name}
              className="card-plate"
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Plates;
