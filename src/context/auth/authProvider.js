import React from "react";
import AuthContext from "./authContext";
import { useState } from "react";
import axios from "axios";
import { getBaseUrl, ROUTE_NAMES } from "../../constants";
import { toast } from 'react-toastify';
import { Redirect } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const [authorised, setAuthorised] = useState(false);

  const [redirect, setRedirect] = useState(false);
  if (redirect) {
    return <Redirect to={ROUTE_NAMES.browse} />;
  }

  const registerApi = (payload) => {
    return new Promise((resolve, reject) => {
      axios.post(getBaseUrl("/users"), payload)
        .then((res) => {
          console.log(res);
          setAuthorised(true);
          toast.success(res.data);
          resolve(true);
        })
        .catch(e => {
          console.log("error:", e)
          toast.error(e.response.data);
          reject(false)
        });
    })
  };

  const loginApi = (payload) => {
    return new Promise((resolve, reject) => {
      axios.post(getBaseUrl("/users/login"), payload)
      .then((res) => {
        console.log(res);
        setAuthorised(true);
        toast.success(res.data);
        resolve(true);
      })
      .catch(e => {
        console.log("error:", e)
        toast.error(e.response.data);
        reject(false)
      })
    })
  };

  return (
    <AuthContext.Provider value={{ authorised, registerApi, loginApi }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
