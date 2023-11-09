import React, { useState, useEffect } from "react";
import "./restaurant.css";
import { RestaurantCard } from "./restaurantCard/RestaurantCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Restaurant = () => {
  const restaurants = [
    {
      name: "Delights of the Sea",
      description:
        "Enjoy the fresh and delicious flavors of the sea at Delights of the Sea. Our menu includes a variety of seafood and fish prepared with the most exquisite recipes.",
      image:
        "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg",
    },
    {
      name: "Argentinian Grill",
      description:
        "At Argentinian Grill, we take you on a culinary journey through Argentina. Try our juicy grilled meats and savor authentic Argentinian flavors.",
      image:
        "https://plus.unsplash.com/premium_photo-1686090448301-4c453ee74718?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Mexican Flavors",
      description:
        "Experience the authentic taste of Mexico at Mexican Flavors. Our menu is filled with traditional Mexican dishes that will transport you to the streets of Mexico.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Parisian Café",
      description:
        "Indulge in the elegance and charm of Paris at Parisian Café. Our desserts, coffees, and French dishes will make you feel like you're in the City of Light.",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Eastern Fusion",
      description:
        "Explore the fusion of flavors of Oriental cuisine at Eastern Fusion. Our menu combines fresh ingredients and traditional culinary techniques for a unique experience.",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Italian Trattoria",
      description:
        "Dive into authentic Italian cuisine at Italian Trattoria. From homemade pastas to delicious pizzas, we offer you the best flavors of Italy.",
      image:
        "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80&w=1885&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // Add more fictitious restaurants as needed
  ];

  const [cardsToShow, setCardsToShow] = useState(3);

  const handleResize = () => {
    const breakpoints = {
      small: 576,
      medium: 768,
      large: 992,
    };

    if (window.innerWidth < breakpoints.small) {
      setCardsToShow(1);
    } else if (window.innerWidth < breakpoints.medium) {
      setCardsToShow(2);
    } else {
      setCardsToShow(3);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
      <section className="restaurant-list" id="restaurant">
        <h2>Popular Restaurants</h2>
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          emulateTouch
          dynamicHeight={false}
          centerMode={true}
          centerSlidePercentage={100 / cardsToShow}
        >
          {restaurants.map((restaurant, index) => (
            <div key={index} className="carousel-card">
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))}
        </Carousel>
        <div className="btn-container">
          <button className="btn-viewall">View All </button>
        </div>
      </section>
  );
};

export default Restaurant;
