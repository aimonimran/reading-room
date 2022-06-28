import React, { Component } from "react";
import NavBar from "./../NavBar/navBar";
import Header from "../../pages/Header/header";
import AboutUs from "./../../pages/AboutUs/about-us";
import Features from "../../pages/Features/features";
import Contact from "./../../pages/Contact/contact";
import BookSlider from "../Slider/bookSlider";
import "./home.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="header" id="home">
        <Header />
      </div>
      <AboutUs />
      <Features />
      <div>
        <BookSlider />
      </div>
      <Contact />
    </>
  );
};

export default Home;
