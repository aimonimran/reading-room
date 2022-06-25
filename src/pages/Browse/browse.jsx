import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BookCard from "../../components/common/BookCard/bookCard";
import { fetchBooksFromGoogle, ROUTE_NAMES } from "../../constants";
import "./browse.css";

const Browse = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);

  const callAPI = async () => {
    try {
      const res = await fetchBooksFromGoogle(search);
      setBookData(res.data.items);
    }catch(e){
      console.log("THIS IS ERROR*", e)
    }
  } 
  
  const searchBook = e => {
    e.key === "Enter" &&
    callAPI();
  };
  
  const handleClick = () => {
    callAPI();
  };

  return (
    <div className="row browse">
      <NavLink to={ROUTE_NAMES.home} className="logo">
        Reading Room
      </NavLink>
      <h1 className="browse-title">Browse</h1>
      <div className="searching my-2">
        <input
          className="form-control searchbox"
          placeholder="Search by title, author..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyPress={searchBook}
        />
        <button 
          className="btn-search"
          onClick={handleClick}
        >
          <i class="fa fa-search" />
        </button>
      </div>
      <div className="browse__books">{<BookCard book={bookData} />}</div>
    </div>
  );
};

export default Browse;
