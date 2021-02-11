import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import '../../assets/css/sb-admin-2.min.css';

import { LoginPage } from '../pages/LoginPage';
import { RegisterePage } from '../pages/RegisterePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';

export const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <div className="App">
          <h1>Proyecto Mu</h1>
        </div>
      </Route>

      <Route path="/login" exact component={LoginPage} />
      <Route path="/registro" exact component={RegisterePage} />
      <Route path="/404" exact component={NotFoundPage} />
      <Route path="/recuperar-pass" exact component={ForgotPasswordPage} />

      <Redirect to="/404" />
    </Switch>
  );
};
