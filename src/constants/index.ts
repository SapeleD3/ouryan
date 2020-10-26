const { NODE_ENV } = process.env;
export const API_URL =
  NODE_ENV === 'production' ? '' : 'http://localhost:4000/graphql';
export const WS_API_URL =
  NODE_ENV === 'production' ? '' : 'ws://localhost:4000/graphql';

/**
 * Storage key for jwt token
 * @constant
 */
export const AUTH_TOKEN = 'x-access-token';

/**
 * Storage key for fetching secret key
 * @constant
 */
export const PROVIDER_KEY = 'room';
