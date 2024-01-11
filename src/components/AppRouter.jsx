import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";

const AppRouter = () => {
    const isAuth = false;
    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map((route) =>
                    <Route
                        component={route.component}
                        exact={route.exact}
                        path={route.path}
                    />
                )}
                <Redirect to="/error"/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map((route) =>
                    <Route
                        component={route.component}
                        exact={route.exact}
                        path={route.path}
                    />
                )}
                <Redirect to="/login"/>
            </Switch>
    );
};

export default AppRouter;