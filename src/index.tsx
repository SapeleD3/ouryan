import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  from,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import * as serviceWorker from './serviceWorker';
import { API_URL, AUTH_TOKEN, PROVIDER_KEY } from './constants';

const uploadLink = createUploadLink({
  uri: API_URL,
});

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  const Authorization = token && `Bearer ${token}`;
  const provider = localStorage.getItem(PROVIDER_KEY);
  operation.setContext(({ headers = {} }: any) => ({
    headers: {
      ...headers,
      ...(Authorization && { Authorization }),
      ...(provider && { [PROVIDER_KEY]: provider }),
    },
  }));
  return forward(operation);
});

const afterResponseLink = new ApolloLink((operation, forward) =>
  forward(operation).map((response) => {
    const context = operation.getContext();
    const {
      response: { headers },
    } = context;

    if (headers) {
      const token = headers.get(AUTH_TOKEN);
      const provider = headers.get(PROVIDER_KEY);
      token && localStorage.setItem(AUTH_TOKEN, token);
      provider && localStorage.setItem(PROVIDER_KEY, provider);
    }
    return response;
  })
);

const client = new ApolloClient({
  link: from([authLink, afterResponseLink, uploadLink]),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
