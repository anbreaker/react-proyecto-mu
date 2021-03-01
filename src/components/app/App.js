import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import '../../assets/css/sb-admin-2.min.css';
import '../../assets/vendor/fontawesome-free/css/all.min.css';
import '../../assets/css/style.css';

import PrivateRoute from '../basicComponents/PrivateRoute';
import { uidOnIndexDB } from '../../store/selectors';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';
import { Dashboard } from '../pages/Dashboard';
import { removeErrorAction } from '../../store/actions/ui';
import { DashboardProfilePage } from '../pages/DashboardProfilePage';
import { firebaseInit } from '../../firebase/firebaseConfig';
import { login } from '../../store/actions/auth';
import { configureClient } from '../../api/client';

export const App = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(uidOnIndexDB);

  useEffect(() => {
    firebaseInit.auth().onAuthStateChanged(user => {
      if (user) {
        user.getIdToken().then(token => {
          dispatch(
            login(
              user.uid,
              user.displayName,
              token,
              user.photoURL,
              user.email,
              user.phoneNumber
            )
          );
          configureClient(token, user.email);
        });
      }
    });
  }, [dispatch]);

  const handlerOnFocus = event => {
    event.preventDefault();
    dispatch(removeErrorAction());
  };

  return (
    <Switch>
      <Route path="/" exact>
        {/* <Redirect to="/dashboard"></Redirect> */}
        {isLogged ? (
          <Redirect to="/profile"></Redirect>
        ) : (
          <LoginPage handlerOnFocus={handlerOnFocus} />
        )}
      </Route>

      <PrivateRoute path="/dashboard" exact component={Dashboard} />

      <Route path="/login" exact>
        {isLogged ? (
          <Redirect to="/dashboard"></Redirect>
        ) : (
          <LoginPage handlerOnFocus={handlerOnFocus} />
        )}
      </Route>

      <Route path="/registro" exact>
        {isLogged ? (
          <Redirect to="/dashboard"></Redirect>
        ) : (
          <RegisterPage handlerOnFocus={handlerOnFocus} />
        )}
      </Route>

      <Route path="/recuperar-pass" exact>
        <ForgotPasswordPage handlerOnFocus={handlerOnFocus} />
      </Route>

      <Route path="/404" exact component={NotFoundPage} />

      <Route path="/profile" exact>
        <DashboardProfilePage handlerOnFocus={handlerOnFocus} />
      </Route>

      <Redirect to="/404" />
    </Switch>
  );
};
