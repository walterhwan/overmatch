import React from 'react';
// import { connect } from 'react-redux';
import { withRouter, Redirect, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Auth = ({component: Component, path, exact}) => {
  return (
    <Route path={path} exact={exact} render={(props) => (
      !cookies.get("battleTag") ? (
        <Component {...props} />
      ) : (
        <Redirect to={"/home"} />
      )
    )}/>
  );
};

const Protected = ({component: Component, path, exact}) => {
  return (
    <Route path={path} exact={exact} render={(props) => (
      cookies.get("battleTag") ? (
        <Component {...props} />
      ) : (
        <Redirect to={"/"} />
      )
    )}/>
  );
};

export const AuthRoute = withRouter(Auth);
export const ProtectedRoute = withRouter(Protected);
