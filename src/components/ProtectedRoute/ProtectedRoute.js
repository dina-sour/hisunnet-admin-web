import React from 'react';
import { Route, useHistory } from "react-router-dom";

const ProtectedRoute = (props) => {
    const history = useHistory();

    return (        
        <Route path={props.path}>
            { props.loggedIn === true 
                ? props.children
                : history.push('/login')
            }
        </Route>
    );
}

export default ProtectedRoute;