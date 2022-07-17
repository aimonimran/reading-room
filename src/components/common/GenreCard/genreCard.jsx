import React, { useState } from "react";
import { fetchBooksFromGoogle } from "../../../constants";
import BookCard from "../BookCard/bookCard";

const GenreCard = ({ key, text, handleClick }) => {
  return (
    <>
      <div key={key} className="col-md-4 col-10 mx-auto">
        <div className="card" onClick={() => handleClick(text)}>
          <div className="card-body">
            <h4 className="card-title">{text}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenreCard;
