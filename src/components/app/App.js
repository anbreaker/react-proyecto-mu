import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import '../../assets/css/sb-admin-2.min.css';
import '../../assets/vendor/fontawesome-free/css/all.min.css';
import '../../assets/css/style.css';

import PrivateRoute from '../basicComponents/PrivateRoute';
import { isLogged } from '../../store/selectors';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';
import { Dashboard } from '../pages/Dashboard';
import { removeErrorAction } from '../../store/actions/ui';

export const App = () => {
  const dispatch = useDispatch();

  const handlerOnFocus = event => {
    event.preventDefault();
    dispatch(removeErrorAction());
  };

  return (
    <Switch>
      <Route path="/" exact>
        {useSelector(isLogged) ? (
          <Redirect to="/dashboard"></Redirect>
        ) : (
          <LoginPage handlerOnFocus={handlerOnFocus} />
        )}
      </Route>

      <PrivateRoute path="/dashboard" exact component={Dashboard} />

      <Route path="/login" exact>
        <LoginPage handlerOnFocus={handlerOnFocus} />
      </Route>

      <Route path="/registro" exact>
        <RegisterPage handlerOnFocus={handlerOnFocus} />
      </Route>

      <Route path="/recuperar-pass" exact>
        <ForgotPasswordPage handlerOnFocus={handlerOnFocus} />
      </Route>

      <Route path="/404" exact component={NotFoundPage} />
      <Redirect to="/404" />
    </Switch>
  );
};
