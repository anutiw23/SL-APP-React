import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from '../pages/login'
import SigninOidc from '../pages/signin-oidc'
import SignoutOidc from '../pages/signout-oidc'
import  Home  from '../pages/home'
import Dashboard from '../pages/dashboard'
import ProcessList  from '../pages/process-list'
import PrivateRoute from '../utils/protectedRoute'

export const Pages = () => {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signout-oidc" component={SignoutOidc} />
          <Route path="/signin-oidc" component={SigninOidc} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/process-list" component={ProcessList} />
          <PrivateRoute exact path="/" component={Home} />

        </Switch>
      </Router>
    );
};