import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import '../../assets/css/sb-admin-2.min.css';
import '../../assets/vendor/fontawesome-free/css/all.min.css';

import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';
import { Navbars } from '../Parts/Navbars';

export const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Navbars} />

      <Route path="/login" exact component={LoginPage} />
      <Route path="/registro" exact component={RegisterPage} />
      <Route path="/404" exact component={NotFoundPage} />
      <Route path="/recuperar-pass" exact component={ForgotPasswordPage} />

      <Redirect to="/404" />
    </Switch>
  );
};
