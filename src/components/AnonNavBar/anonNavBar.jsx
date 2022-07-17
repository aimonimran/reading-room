import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "./../../constants";
import "../NavBar/navBar.css";

const AnonNavBar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [showCross, setShowCross] = useState(true);

  return (
    <>
      <span className="nav-btn" id="nav-btn">
        <i
          onClick={() => setShowMediaIcons(!showMediaIcons)}
          className="fa fa-bars"
        ></i>
      </span>

      <nav
        className={showMediaIcons ? "nav-items showNavItems" : "nav-items"}
        id="navbar"
      >
        <div className="navbar-header">
          <span
            className={showMediaIcons ? "nav-close" : "nav-close"}
            id="nav-close"
          >
            <i
              onClick={() => {
                setShowCross(!showCross), setShowMediaIcons(!showMediaIcons);
              }}
              className="fa fa-close"
            />
          </span>
        </div>
        <ul className="nav-items">
          <li>
            <a
              href={ROUTE_NAMES.home}
              exact
              onClick={() => {
                setShowCross(!showCross), setShowMediaIcons(!showMediaIcons);
              }}
              className="nav-link"
            >
              home
            </a>
          </li>
          <li>
            <NavLink
              to={ROUTE_NAMES.login}
              onClick={() => {
                setShowCross(!showCross), setShowMediaIcons(!showMediaIcons);
              }}
              className="nav-link"
            >
              login
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTE_NAMES.register}
              onClick={() => {
                setShowCross(!showCross), setShowMediaIcons(!showMediaIcons);
              }}
              className="nav-link"
            >
              register
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default AnonNavBar;
