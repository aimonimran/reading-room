import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ROUTE_NAMES } from "../../constants";
import useAuth from "../../context/auth/useAuth";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authorised } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (authorised) return <Component {...props} />;
        return <Redirect to={ROUTE_NAMES.home} />;
      }}
    />
  );
};

export default ProtectedRoute;
