import React from "react";
import { NavLink } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <div className="row register">
      <NavLink to="/" className="logo">
        Reading Room
      </NavLink>
      <h1 className="register-title">Register</h1>
    </div>
  );
};

export default Register;
