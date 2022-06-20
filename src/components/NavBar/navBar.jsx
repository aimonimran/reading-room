import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";
import Features from './../../pages/Features/features';

const NavBar = () => {
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
              href="/home"
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
            <a
              href="#about"
              onClick={() => {
                setShowCross(!showCross), setShowMediaIcons(!showMediaIcons);
              }}
              className="nav-link"
            >
              about
            </a>
          </li>
          <li>
            <a
              href="#features"
              onClick={() => {
                setShowCross(!showCross), setShowMediaIcons(!showMediaIcons);
              }}
              className="nav-link"
            >
              features
            </a>
          </li>
          {/* <li>
            <a
              href="/browse"
              onClick={() => {
                setShowCross(!showCross), setShowMediaIcons(!showMediaIcons);
              }}
              className="nav-link"
            >
              browse
            </a>
          </li> */}
          <li>
            <a
              href="#contact"
              onClick={() => {
                setShowCross(!showCross), setShowMediaIcons(!showMediaIcons);
              }}
              className="nav-link"
            >
              contact
            </a>
          </li>
          <li>
            <NavLink
              to="/login"
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
              to="/register"
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

export default NavBar;
