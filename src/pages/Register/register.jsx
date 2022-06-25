import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../constants";
import "./register.css";

const Register = () => {
  return (
    <div className="row register">
      <NavLink to={ROUTE_NAMES.home} className="logo">
        Reading Room
      </NavLink>
      <h1 className="register-title">Register</h1>
    </div>
  );
};

export default Register;
