import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { ROUTE_NAMES } from "../../constants";
import useAuth from "./../../context/auth/useAuth";
import CustomInput from "../../components/CustomInput";
import "./register.css";

const Register = () => {
  const { registerApi } = useAuth();

  const [redirect, setRedirect] = useState(false);

  const [registerForm, setRegisterForm] = useState({
    username: {
      fieldKey: "username",
      title: "Username",
      value: "",
    },
    password: {
      fieldKey: "password",
      title: "Password",
      value: "",
    },
  });

  const handleOnChangeFieldValue = (fieldKey, value) => {
    const cloneObject = { ...registerForm };
    cloneObject[fieldKey].value = value;
    setRegisterForm(cloneObject);
  };

  const handleSubmit = (e) => {
    console.log(registerForm);
    const apiPayload = {
      name: registerForm.username.value,
      password: registerForm.password.value,
    };
    registerApi(apiPayload).then(res => {
      setRedirect(true);
    })
  };

  return (
    <>
      {
        redirect ?
          <Redirect to={ROUTE_NAMES.browse} /> :
          <div className="row register">
            <NavLink to={ROUTE_NAMES.home} className="logo">
              Reading Room
            </NavLink>

            <h1 className="register-title">Register</h1>

            <form action="" className="register__form">
              <CustomInput
                title={registerForm.username.title}
                fieldKey={registerForm.username.fieldKey}
                handleOnChange={handleOnChangeFieldValue}
              />
              <CustomInput
                title={registerForm.password.title}
                fieldKey={registerForm.password.fieldKey}
                handleOnChange={handleOnChangeFieldValue}
                type="password"
              />

              <p className="inner-text">
                Already have an account? <a href={ROUTE_NAMES.login} className="inner-inner-text">Login</a>
              </p>

              <button
                className="btn btn-register"
                type="button"
                onClick={handleSubmit}
              >
                Register
              </button>
            </form>
          </div>
      }

    </>
  );
};

export default Register;
