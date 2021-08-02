import React, { useEffect } from 'react'
import { Route, Redirect } from "react-router-dom";
import { useLoginContext } from '../context/login_context';

export const PrivateRoute = ({ children, ...rest }) => {
    const {isAuthenticated} = useLoginContext()

    return (
        <Route
      {...rest}
      render={() => {
        return isAuthenticated ? children : <Redirect to="/login"></Redirect>;
      }}
    ></Route>
    )
}
