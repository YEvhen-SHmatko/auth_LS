import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import routes from '../routes';

function AuthWrap({ auth = false, path, component, goTo }) {
  return auth ? (
    <Route exact path={path} component={component} />
  ) : (
    <Redirect to={goTo} />
  );
}

export default AuthWrap;
