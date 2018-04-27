import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect, Route } from 'react-router-dom';

const Auth = ({component: Component, path, exact}) => {
  return (
    <Route path={path} exact={exact} render={(props) => (
      
    )}/>
  );
};
