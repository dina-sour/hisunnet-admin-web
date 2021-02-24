import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ comp: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        (props.loggedIn)
        ? <Component {...props} />
        : <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                }
              }}
            />
      }}
    />
  );
};

export default ProtectedRoute;
