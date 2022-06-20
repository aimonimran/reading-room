import React, { Component } from "react";
import AboutUs from "../AboutUs/about-us";
import Features from "../Features/features";
import Contact from "./../Contact/contact";
import "./home.css";
import NavBar from "../../components/NavBar/navBar";
import Header from "../Header/header";

class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="header" id="home">
          <Header />
        </div>
        <AboutUs />
        <Features />
        <Contact />
      </>
    );
  }
}

export default Home;
