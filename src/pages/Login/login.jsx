import React from "react";
import { NavLink } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="row login">
      <NavLink to="/" className="logo">
        Reading Room
      </NavLink>
      <h1 className="login-title">Login</h1>
    </div>
  );
};

export default Login;
