import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BookCard from "../../components/common/BookCard/bookCard";
import "./browse.css";
import { getGoogleBooksApiKey, fetchBooksFromGoogle } from "../../constants";

const Browse = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const callAPI = async () => {
    // return  axios
    //   .get(
    //     "https://www.googleapis.com/books/v1/volumes?q=" +
    //       search +
    //       "&key=AIzaSyCb543w8uO96Nu2DB8b8J_csIUTkc1NfIA" +
    //       "&maxResults=30"
    //   )
    //   .then((res) => setBookData(res.data.items))
    //   .catch((err) => console.log(err))
    // fetchBooksFromGoogle(search).then(res => {
    //   console.log("THIS IS RES***********", res);
    //   setBookData(res.data.items)
    // }).catch(e => {
    //   console.log("THIS IS ERROR*******", e)
    // })
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
      <NavLink to="/" className="logo">
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
