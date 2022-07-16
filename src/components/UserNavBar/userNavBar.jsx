import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from '../../constants';
import useAuth from "../../context/auth/useAuth";

const UserNavBar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [showCross, setShowCross] = useState(true);

  const {authorised} = useAuth();

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
            <NavLink
              to={ROUTE_NAMES.home}
              onClick={() => {
                setShowCross(!showCross), setShowMediaIcons(!showMediaIcons);
              }}
              className="nav-link"
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTE_NAMES.browse}
              onClick={() => {
                setShowCross(!showCross), setShowMediaIcons(!showMediaIcons);
              }}
              className="nav-link"
            >
              browse
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTE_NAMES.genre}
              onClick={() => {
                setShowCross(!showCross), setShowMediaIcons(!showMediaIcons);
              }}
              className="nav-link"
            >
              select genre
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTE_NAMES.write}
              onClick={() => {
                setShowCross(!showCross), setShowMediaIcons(!showMediaIcons);
              }}
              className="nav-link"
            >
              write
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTE_NAMES.localauthors}
              onClick={() => {
                setShowCross(!showCross), setShowMediaIcons(!showMediaIcons);
              }}
              className="nav-link"
            >
              local authors
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTE_NAMES.home}
              onClick={() => {
                setShowCross(!showCross), setShowMediaIcons(!showMediaIcons);
                authorised(false);
              }}
              className="nav-link"
            >
              logout
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </>
  );
};

export default UserNavBar;
