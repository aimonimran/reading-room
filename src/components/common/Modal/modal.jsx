import React from "react";
import "./modal.css";

const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }

  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
      <div className="overlay">
        <div className="overlay__inner">
          <button className="close" onClick={onClose}>
            <i className="fa fa-times" />
          </button>
          <div className="inner__box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              {item.volumeInfo.authors && <h3>Author: {item.volumeInfo.authors}</h3>}
              {item.volumeInfo.categories && <h4 className="book-category">Category: {item.volumeInfo.categories}</h4>}
              {item.volumeInfo.averageRating && <h4 className="book-rating">Rating: {item.volumeInfo.averageRating}</h4>}
              <h4 className="book-publisher">Publisher: {item.volumeInfo.publisher}</h4>
            </div>
          </div>
          <h4 className="description">{item.volumeInfo.description}</h4>
          <a href={item.volumeInfo.previewLink}>
            <button className="btn-read-more" target="__blank">Read More</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Modal;