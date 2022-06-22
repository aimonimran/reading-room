import React, { Component } from "react";
import CardItems from "./../../sampleData/cardData";
import "./features.css";
import FeatureCard from "../../components/common/FeatureCard/featureCard";

class Features extends Component {
  render() {
    return (
      <>
        <div className="row features" id="features">
          <h1 className="features-title">Our Features</h1>
          <h3 className="features-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat.
          </h3>
          <div className="container-fluid mb-5">
            <div className="row">
              <div className="col-8 mx-auto">
                <div className="row gy-4">
                  {CardItems.map((val, ind) => {
                    return (
                      <FeatureCard
                        key={ind}
                        imgsrc={val.imgSrc}
                        title={val.title}
                        text={val.text}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Features;
