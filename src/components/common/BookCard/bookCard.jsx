import React, { useState } from "react";
import Modal from "../Modal/modal";
import "./bookCard.css";

const BookCard = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();


  return (
    <>
      {book.map((item, index) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let title = item.volumeInfo.title;
        let author = item.volumeInfo.authors;
        let description = item.volumeInfo.description;
        let previewLink = item.volumeInfo.previewLink;
        if (
          thumbnail != undefined &&
          title != undefined &&
          description != undefined &&
          previewLink != undefined
        ) {
          return (
            <React.Fragment key={index}>
              <div
                className="card"
                onClick={() => {
                  setShow(true);
                  setBookItem(item);
                }}
              >
                <img className="card-img" src={thumbnail} alt="card-img" />
                <div className="card-body">
                  <h3 className="card-title">{title}</h3>
                  <p className="card-para">{author}</p>
                  <button className="btn-read">Read</button>
                </div>
              </div>
              <Modal
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

export default BookCard;
