import React from "react";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ isAuthorised, children, ...rest }: any) => {

    return (
        <Route
            {...rest}
            render={
                () => (
                    isAuthorised
                        ? (
                            children
                        ) : (
                            <Navigate
                                to={{
                                    pathname: '/login',
                                }}
                            />
                        ))
            }
        />
    )
}

export default PrivateRoute;