import React from "react";
import {HashRouter, Route, Link} from "react-router-dom";
import Home from '../pages/Home'
import SignUp from "../pages/signUp";
import Login from "../pages/Login";
import Articles from "../pages/Articles";
import ShortWords from "../pages/ShortWords";
import About from "../pages/About";

export function Routing() {
    return (
        <HashRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/articles" component={Articles} />
                <Route exact path="/shortWords" component={ShortWords} />
                <Route exact path="/about" component={About} />
                <Route exact path="/signUp" component={SignUp} />
                <Route exact path="/Login" component={Login} />
            </div>
        </HashRouter>
    )
}