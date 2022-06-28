import React from "react";
import "./about-us.css";
import aboutUsImg from "../../images/about-us.jpg";

const AboutUs = () => {
  return ( 
      <div className="container" id="about">
        <div className="row about-us">
          <div className="col-sm-10 col-lg-5 order-sm-2 order-lg-1 my-5">
            <img
              className="about-us-image"
              src={aboutUsImg}
              alt="about-us-image"
            />
          </div>
          <div className="col-sm-12 col-lg-6 order-sm-2 order-lg-1 about-us-body">
            <h5 className="about-us-subtitle">Get To Know Us</h5>
            <h1 className="about-us-title">About Us</h1>
            <h3 className="about-us-paragraph-one my-3">
              Who says the digital revolution spells the death of the book?
              Reading Room is an open-source storytelling platform that not only
              provides you books to read but also allows your inner creative self to dump
              ideas with a distinctly amazing vibe. It provides a safe forum to
              people to put their writing abilities to test and receive honest
              reviews on it.
            </h3>
          </div>
        </div>
      </div>
   );
}
 
export default AboutUs;
