import React from "react";
import CardItems from "./../../sampleData/cardData";
import "./features.css";
import FeatureCard from "../../components/common/FeatureCard/featureCard";

const Features = () => {
  return (
    <>
      <div className="row features" id="features">
        <h5 className="features-subtitle">What We Offer</h5>
        <h1 className="features-title">Our Features</h1>
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
};

export default Features;
