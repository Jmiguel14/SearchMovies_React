import React from "react";
import {Route, Switch} from "react-router-dom";
import About from "../pages/About";
import Movies from "../pages/Movies";
import Home from "../pages/Home";
import Routes from "../constants/routes";
import NotFound from "../pages/NotFound";

const AppRouter = () => (
    <Switch>
        <Route path={Routes.ABOUT}>
            <About/>
        </Route>
        <Route path={Routes.MOVIES}>
            <Movies/>
        </Route>
        <Route exact path={Routes.HOME}>
            <Home/>
        </Route>
        <Route>
            <NotFound />
        </Route>
    </Switch>
)

export default AppRouter;