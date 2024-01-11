import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);
    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map((route) =>
                    <Route
                        component={route.component}
                        key={route.path}
                        exact={route.exact}
                        path={route.path}
                    />
                )}
                <Redirect to="/"/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map((route) =>
                    <Route
                        component={route.component}
                        key={route.path}
                        exact={route.exact}
                        path={route.path}
                    />
                )}
                <Redirect to="/login"/>
            </Switch>
    );
};

export default AppRouter;