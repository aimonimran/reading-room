import React from "react";
import GenreCard from "../common/GenreCard/genreCard";
import UserNavBar from "../UserNavBar/userNavBar";
import GenreData from "./genreData";

const Genres = () => {
  return (
    <>
      <div className="user__header">
        <UserNavBar />
      </div>
      <div className="row features" id="features">
        <h1 className="features-title">Select A Genre</h1>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-8 mx-auto">
              <div className="row gy-4">
                {GenreData.map((value, index) => {
                  return <GenreCard key={index} text={value} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Genres;
