import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import '../../assets/css/sb-admin-2.min.css';

export const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <div className="App">
          <h1>Proyecto Mu</h1>
        </div>
      </Route>
      <Route path="/login" exact component={LoginPage} />
      <Route path="/404" exact>
        <div>No Encontrado</div>
      </Route>
      <Route>
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
};
