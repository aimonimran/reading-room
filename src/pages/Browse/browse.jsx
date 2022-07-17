import React, { useState } from "react";
// import UserNavBar from "../../components/UserNavBar/userNavBar";
import useAuth from "../../context/auth/useAuth";
import BrowseAnonUser from "./browseAnonUser";
import BrowseUser from "./browseUser";
import "./browse.css";
import AnonNavBar from "../../components/AnonNavBar/anonNavBar";
import NavBar from "../../components/NavBar/navBar";

const Browse = () => {
  const { authorised } = useAuth();

  // console.log(authorised);

  return (
    <>
      {authorised ? (
        <>
          <div className="user__header">
            <NavBar />
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
        </>
      )}
    </>
  );
};

export default Browse;
