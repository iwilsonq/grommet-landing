import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Main from './components/Main';

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Main}>
      </Route>
    </Router>
  );
};

export default Routes;
