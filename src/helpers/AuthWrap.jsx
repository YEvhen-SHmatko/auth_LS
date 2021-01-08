import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import routes from '../routes';

function AuthWrap({ auth = false, path, component, redirect }) {
  return auth ? (
    <Route exact path={path} component={component} />
  ) : (
    <Redirect to={redirect || routes.Auth.Login.component} />
  );
}

export default AuthWrap;
