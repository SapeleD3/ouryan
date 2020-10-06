import React from 'react';
const { lazy } = React;

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  WILD_CARD: '/*',
};

export const OPEN_ROUTES = [
  {
    url: ROUTES.LOGIN,
    page: lazy(() => import('../Pages/Login')),
  },
];

export const PROTECTED_ROUTES = [
  {
    url: ROUTES.HOME,
    page: lazy(() => import('../Pages/Home')),
  },
];
