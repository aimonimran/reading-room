import React from "react";
import "./featureCard.css";

const FeatureCard = ({ imgsrc, title, text }) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img className="card-img" src={imgsrc} alt="card-img" />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
