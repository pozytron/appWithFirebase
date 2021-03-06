import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navigation from "../Navigation";
import * as ROUTES from "../../constants/routes";
import LandingPage from "../../pages/Landing";
import SignUpPage from "../../pages/SignUp";
import SignInPage from "../../pages/SignIn";
import PasswordForgetPage from "../../pages/PasswordForget";
import HomePage from "../../pages/Home";
import AccountPage from "../../pages/Account";
import AdminPage from "../../pages/Admin";

import {withAuthentication} from "../../utils/Session";

const App = (props) => {
    console.log(props)
    return (
        <Router>
            <Navigation />
            <h1>App</h1>
            <Route exact path={ROUTES.LANDING} component={LandingPage}/>
            <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
            <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
            <Route path={ROUTES.HOME} component={HomePage}/>
            <Route path={ROUTES.ACCOUNT} component={AccountPage}/>
            <Route path={ROUTES.ADMIN} component={AdminPage}/>
        </Router>
    )
};

export default withAuthentication(App);


