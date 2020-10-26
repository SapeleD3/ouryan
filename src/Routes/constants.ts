import React from 'react';
const { lazy } = React;

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  WILD_CARD: '/*',
  SIGNUP: '/signup',
  ANON_CHAT: '/chat',
};

export const OPEN_ROUTES = [
  {
    url: ROUTES.LOGIN,
    page: lazy(() => import('../Pages/Login')),
  },
  {
    url: ROUTES.SIGNUP,
    page: lazy(() => import('../Pages/signup')),
  },
  {
    url: ROUTES.ANON_CHAT,
    page: lazy(() => import('../Pages/Chat')),
  },
];

export const PROTECTED_ROUTES = [
  {
    url: ROUTES.HOME,
    page: lazy(() => import('../Pages/Home')),
  },
];
