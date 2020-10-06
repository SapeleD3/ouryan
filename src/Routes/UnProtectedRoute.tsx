import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ROUTES } from './constants';
const { HOME } = ROUTES;

const auth = true;

const UnProtectedRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) =>
      auth ? <Redirect to={HOME} /> : <Component {...props} />
    }
  />
);

export default UnProtectedRoute;
