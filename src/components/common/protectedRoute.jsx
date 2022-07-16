import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../context/auth/useAuth';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const {authorised} = useAuth();

    return ( 
        <Route 
            {...rest}
            render={(props) => {
                if (authorised) return <Component {...props} />;
                if (!authorised) return <Redirect to="/" />
            }}
        />
     );
}
 
export default ProtectedRoute;