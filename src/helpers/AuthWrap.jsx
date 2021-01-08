import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../routes';

function AuthWrap({
  auth = false,
  path,
  component,
  redirect = routes.Auth.Login.component,
}) {
  return auth ? (
    <Route exact path={path} component={component} />
  ) : (
    <Redirect to={redirect} />
  );
}

export default AuthWrap;
