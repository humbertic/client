import About from "../../components/about/About";
import { Footer } from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import { NavBar } from "../../components/navbar/NavBar";
import Plates from "../../components/plates/Plates";
import Restaurant from "../../components/restaurants/Restaurant";
import "./home.css";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <NavBar/>
      <Restaurant />
      <Plates />
      <About />
      <Footer />
    </>
  );
};

export default Home;
