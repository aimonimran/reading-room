import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTE_NAMES } from "../../constants";
import "./login.css";

const Login = () => {
  return (
    <div className="row login">
      <NavLink to={ROUTE_NAMES.home} className="logo">
        Reading Room
      </NavLink>
      <h1 className="login-title">Login</h1>
    </div>
  );
};

export default Login;
