import React, { useState } from "react";
import BookCard from "../../components/common/BookCard/bookCard";
import FeatureCard from "../../components/common/FeatureCard/featureCard";
import { fetchBooksFromGoogle } from "../../constants";
import { TopSearches, Favourites } from "./anonData";

const BrowseAnonUser = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const [apiCalled, setApiCalled] = useState(false);

  const callAPI = async () => {
    try {
      setApiCalled(true);
      const res = await fetchBooksFromGoogle(search);
      setBookData(res.data.items);
    } catch (e) {
      console.log("THIS IS ERROR*", e);
    }
  };

  const searchBook = (e) => {
    if (e.key === "Enter") {
      setApiCalled(true);
      callAPI();
    }
  };

  const handleClick = () => {
    callAPI();
  };

  return (
    <>
      <h1 className="browse-title">Browse</h1>
      <div className="searching my-2">
        <input
          className="form-control searchbox"
          placeholder="Search by title, author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={searchBook}
        />
        <button className="btn-search" onClick={handleClick}>
          <i class="fa fa-search" />
        </button>
      </div>
      <div className="browse__books">{<BookCard book={bookData} />}</div>
      
      {!apiCalled && (
        <>
          <div className="top__searches">
            <div className="row">
              <div className="col-6 mx-auto">
                <h1 className="anon__body">Our Top Searches</h1>
                <div className="row gy-4">
                  {TopSearches.map((val) => {
                    return <FeatureCard imgsrc={val.img} title={val.title} />;
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="favourites">
            <div className="row">
              <div className="col-6 mx-auto">
                <h1 className="anon__body">Favourites</h1>
                <div className="row gy-4">
                  {Favourites.map((val) => {
                    return <FeatureCard imgsrc={val.img} title={val.title} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BrowseAnonUser;
