import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privetRoutes, publicRoutes} from "../router/routes";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth, isLoadingAuth} = useContext(AuthContext)

    if (isLoadingAuth) {
        return <h1>Loading...</h1>
    }

    return (
        isAuth
            ?
            <Switch>
                {privetRoutes.map((route) =>
                    <Route
                        key={route.path + route.exact}
                        component={route.component}
                        path={route.path}
                        exact={route.exact}/>
                )}
                <Redirect to="/posts"/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map((route) =>
                    <Route
                        key={route.path + route.exact}
                        component={route.component}
                        path={route.path}
                        exact={route.exact}/>
                )}
                <Redirect to="/login"/>
            </Switch>

    );
};

export default AppRouter;