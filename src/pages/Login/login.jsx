import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { ROUTE_NAMES } from "../../constants";
import useAuth from "../../context/auth/useAuth";
import CustomInput from "./../../components/CustomInput";
import AnonNavBar from "../../components/AnonNavBar/anonNavBar";
import "./login.css";

const Login = () => {
  const { loginApi } = useAuth();

  const [redirect, setRedirect] = useState(false);

  const [loginForm, setLoginForm] = useState({
    username: {
      fieldKey: "username",
      title: "Username",
      value: ""
    },
    password: {
      fieldKey: "password",
      title: "Password",
      value: ""
    }
  });

  const handleOnChangeFieldValue = (fieldKey, value) => {
    const cloneObject = { ...loginForm };
    cloneObject[fieldKey].value = value;
    setLoginForm(cloneObject);
  };

  const handleSubmit = (e) => {
    const apiPayload = {
      username: loginForm.username.value,
      password: loginForm.password.value,
    };

    loginApi(apiPayload).then((res) => {
      setRedirect(true);
    });
  };

  return (
    <>
      {redirect ? (
        <Redirect to={ROUTE_NAMES.browse} />
      ) : (
        <div className="row login">
          <div className="user__header">
            <AnonNavBar />
          </div>

          <h1 className="login-title">Login</h1>

          <form action="" className="register__form">
            <CustomInput
              title={loginForm.username.title}
              fieldKey={loginForm.username.fieldKey}
              handleOnChange={handleOnChangeFieldValue}
            />

            <CustomInput
              title={loginForm.password.title}
              fieldKey={loginForm.password.fieldKey}
              handleOnChange={handleOnChangeFieldValue}
              type="password"
            />

            <p className="inner-text">
              New here?
              <a href={ROUTE_NAMES.register} className="inner-inner-text">
                Register Now
              </a>
            </p>

            <button
              className="btn btn-register"
              type="button"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
