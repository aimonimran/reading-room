import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./browse.css";

class Browse extends Component {
  state = {};
  render() {
    return (
      <div className="row browse">
        <NavLink to="/" className="logo">Reading Room</NavLink>
        <h1 className="browse-title">Browse</h1>
        <div className="searching my-2">
          <input className=" form-control searchbox" placeholder="Search" />
          <button className="btn">
            <i class="fa fa-search" />
          </button>
        </div>
      </div>
    );
  }
}

export default Browse;
