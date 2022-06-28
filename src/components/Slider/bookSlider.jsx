import React, { Component } from "react";
import { ROUTE_NAMES } from "../../constants";
import gone from "../../images/then-she-was-gone.jfif";
import "./slider.css";
import SliderItems from "./sliderItems";

const BookSlider = () => {
  return ( 
      <>
        <div className="container" id="about">
          <div className="row about-us">
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div>
                <h5 className="slider-subtitle">Our Users' Favourites</h5>
                <h1 className="carousel-header">Our Top Searches</h1>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <a href={ROUTE_NAMES.login}>
                      <img src={gone} alt="slider-image" />
                    </a>
                  </div>
                </div>
                {SliderItems.map((item, index) => {
                  return (
                    <div key={index} className="carousel-item">
                      <div className="container">
                        <a href={ROUTE_NAMES.login}>
                          <img src={item.img} alt="slider-image" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
              <a
                class="carousel-control-prev"
                href="#myCarousel"
                role="button"
                data-slide="prev"
              >
                <span class="sr-only">Previous</span>
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
              </a>
              <a
                class="carousel-control-next"
                href="#myCarousel"
                role="button"
                data-slide="next"
              >
                <span class="sr-only">Next</span>
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
              </a>
            </div>
          </div>
        </div>
      </>
  );
}
 
export default BookSlider;