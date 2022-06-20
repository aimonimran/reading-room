import React from "react";
import "./card.css";

const BookCard = ({ book }) => {
  console.log(book);
  return (
    <>
      {book.map(item => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let title = item.volumeInfo.title;
        if (thumbnail != undefined && title != undefined) {
          return (
            <>
              <div className="card">
                <img className="card-img" src={thumbnail} alt="card-img" />
                <div className="card-body">
                  <h4 className="card-title">{title}</h4>
                  <p className="card-text"></p>
                </div>
              </div>
            </>
          );
        }
      })}
    </>
  );
};

export default BookCard;
