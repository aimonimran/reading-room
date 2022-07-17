import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="row">
        <div className="col-10 mx-auto">
          <h1 className="header-body">Let's enter</h1>
          <h1 className="header-title">
            Reading
            <br />
            Room
          </h1>
        </div>
        <div className="button">
          <NavLink to="/browse" className="btn-explore">
            Explore
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
