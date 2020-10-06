import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ROUTES } from './constants';
const { LOGIN } = ROUTES;

const auth = true;

const ProtectedRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) =>
      !auth ? <Redirect to={LOGIN} /> : <Component {...props} />
    }
  />
);

export default ProtectedRoute;
