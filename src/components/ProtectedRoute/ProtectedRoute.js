import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const 
  return (
    <Route 
        {...rest}
        render={(props) => {
            if (props.isAuthenticated) {
                return props.children;
            } else {
                return (
                    <Redirect to={props.path}/>
                )
            }
        }}
  );
}

export default ProtectedRoute;
