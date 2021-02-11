import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import '../../assets/css/sb-admin-2.min.css';

import { LoginPage } from '../pages/LoginPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <div className="App">
          <h1>Proyecto Mu</h1>
        </div>
      </Route>

      <Route path="/login" exact component={LoginPage} />
      <Route path="/404" exact component={NotFoundPage} />

      <Redirect to="/404" />
    </Switch>
  );
};
