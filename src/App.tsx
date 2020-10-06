import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Page } from './util/types';
import './App.css';
import { Ripple } from 'react-spinners-css';
import { ROUTES, OPEN_ROUTES } from './Routes/constants';
import NotFound from './Components/NotFound';
import Loading from './Components/fullPageLoader';
import Home from './Pages/Home';
// import ProtectedRoute from './Routes/ProtectedRoute';
// import UnProtectedRoute from './Routes/UnProtectedRoute';
import history from './history';
const { WILD_CARD, HOME } = ROUTES;

function App() {
  return (
    <Suspense
      fallback={
        <Loading>
          <Ripple color='#242835' />
        </Loading>
      }
    >
      <Router history={history}>
        <Switch>
          <Route path={HOME} exact component={Home} />
          {OPEN_ROUTES.map(({ url, page }: Page) => (
            <Route path={url} key={url} exact component={page} />
          ))}
          <Route path={WILD_CARD}>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
