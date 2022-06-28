import React, { useState } from "react";
import { fetchBooksFromGoogle } from "../../constants";
import BookCard from "../common/BookCard/bookCard";
import GenreCard from "../common/GenreCard/genreCard";
import Loading from "../common/Loading/loading";
import UserNavBar from "../UserNavBar/userNavBar";
import GenreData from "./genreData";

const Genres = () => {
  const [bookData, setBookData] = useState([]);
  const [apiCalled, setApiCalled] = useState(false);

  const handleClick = async (text) => {
    try {
      setApiCalled(true);
      const res = await fetchBooksFromGoogle(text);
      setBookData(res.data.items);
      console.log(res.data.items);
      setApiCalled(false);
    } catch (e) {
      console.log("THIS IS ERROR*", e);
      setApiCalled(false);
    }
  };
  return (
    <>
      <div className="user__header">
        <UserNavBar />
      </div>
      <div className="row features" id="features">
        {apiCalled ? (
          <Loading type="bubbles" color="#408000" />
        ) : (
          <>
            <h1 className="features-title">Select A Genre</h1>
            <div className="container-fluid mb-5">
              <div className="row">
                <div className="col-8 mx-auto">
                  <div className="row gy-4">
                    {GenreData.map((value, index) => {
                      return (
                        <GenreCard
                          key={index}
                          text={value}
                          handleClick={handleClick}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="browse__books">{<BookCard book={bookData} />}</div>
          </>
        )}
      </div>
    </>
  );
};

export default Genres;
