import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import UserNavBar from "../../components/UserNavBar/userNavBar";
import { ROUTE_NAMES } from "../../constants";
import useAuth from "../../context/auth/useAuth";
import BrowseAnonUser from "./browseAnonUser";
import BrowseUser from "./browseUser";
import "./browse.css";
import AnonNavBar from "../../components/AnonNavBar/anonNavBar";

const Browse = () => {
  const { authorised } = useAuth();

  return (
    <>
      {authorised ? (
        <>
          <div className="user__header">
            <UserNavBar />
          </div>
          <div className="row browse">
            <BrowseUser />
          </div>
        </>
      ) : (
        <>
          <div className="user__header">
            <AnonNavBar />
          </div>
          <div className="row browse">
            <BrowseAnonUser />
          </div>
          {/* <div className="row browse">
            <NavLink to={ROUTE_NAMES.home} className="logo">
              Reading Room
            </NavLink>
            <BrowseAnonUser />
          </div> */}
        </>
      )}
    </>
  );
};

export default Browse;
