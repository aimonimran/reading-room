import React from "react";
import AuthContext from "./authContext";
import { useState } from "react";
import axios from "axios";
import { getBaseUrl } from "../../constants";
import { toast } from 'react-toastify';

const AuthProvider = ({ children }) => {
  const [authorised, setAuthorised] = useState(false);

  const registerApi = (payload) => {
    axios.post(getBaseUrl("/users"), payload)
    .then((res) => {
      console.log(res);
      setAuthorised(true);
      toast.success(res.data);
    })
    .catch(e=>{
        console.log("error:",e)
        toast.error(e.response.data);
    });
  };

  const loginApi = (payload) => {
    axios.post(getBaseUrl("/users/login"), payload)
    .then((res) => {
      console.log(res);
      setAuthorised(true);
      toast.success(res.data);
    })
    .catch(e=>{
        console.log("error:",e)
        toast.error(e.response.data);
    })
  };

  return (
    <AuthContext.Provider value={{ authorised, registerApi, loginApi }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
