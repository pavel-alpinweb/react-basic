import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";

const AppRouter = () => {
    return (

        <Switch>
            <Route exact path="/">
                <Posts/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/error">
                <Error/>
            </Route>
            <Redirect to="/error"/>
        </Switch>
    );
};

export default AppRouter;