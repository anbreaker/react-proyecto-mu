import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import '../../assets/css/sb-admin-2.min.css';
import '../../assets/vendor/fontawesome-free/css/all.min.css';

import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';
import { NavbarLeft } from '../NavbarLeft';

export const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={NavbarLeft} />

      <Route path="/login" exact component={LoginPage} />
      <Route path="/registro" exact component={RegisterPage} />
      <Route path="/404" exact component={NotFoundPage} />
      <Route path="/recuperar-pass" exact component={ForgotPasswordPage} />
      <Route path="/navbar" exact component={NavbarLeft} />

      <Redirect to="/404" />
    </Switch>
  );
};
