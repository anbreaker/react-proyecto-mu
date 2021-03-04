import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import '../../assets/css/sb-admin-2.min.css';
import '../../assets/vendor/fontawesome-free/css/all.min.css';
import '../../assets/css/style.css';

import PrivateRoute from '../basicComponents/PrivateRoute';
import { uidOnIndexDB, getSwalAlert } from '../../store/selectors';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';
import { Dashboard } from '../pages/Dashboard';
import { removeErrorAction } from '../../store/actions/ui';
import { DashboardProfilePage } from '../pages/DashboardProfilePage';
import { DashboardSuperAdminPage } from '../pages/DashboardSuperAdminPage';
import { DashboardOrgProfilePage } from '../pages/DashboardOrgProfilePage';
import { PresidentProfilePage } from '../pages/PresidentProfilePage';
import { firebaseInit } from '../../firebase/firebaseConfig';
import { login } from '../../store/actions/auth';
import { configureClient } from '../../api/client';
import { SweetAlert } from '../parts/SweetAlert';
import { VerifyMailPage } from '../pages/VerifyMailPage';
import { TreasurerResumePage } from '../pages/TreasurerResumePage';
import { TreasurerIncomePage } from '../pages/TreasurerIncomePage';
import { TreasurerIncomeRegisterPage } from '../pages/TreasurerIncomeRegisterPage';
import UnauthorizedPage from '../pages/UnauthorizedPage';

export const App = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(uidOnIndexDB);
  const alert = useSelector(getSwalAlert);

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
          configureClient(token);
        });
      }
    });
  }, [dispatch]);

  const handlerOnFocus = event => {
    event.preventDefault();
    dispatch(removeErrorAction());
  };

  return (
    <SweetAlert alert={alert}>
      <Switch>
        <Route path="/" exact>
          {isLogged ? (
            <Redirect to="/dashboard"></Redirect>
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

        <Route path="/register" exact>
          {isLogged ? (
            <Redirect to="/dashboard"></Redirect>
          ) : (
            <RegisterPage handlerOnFocus={handlerOnFocus} />
          )}
        </Route>

        {/* //TODO proteger ruta admin... */}
        <Route path="/admin" exact>
          <DashboardSuperAdminPage />
        </Route>
        {/* //TODO proteger ruta adminOrg... */}
        <Route path="/admin-org" exact>
          <DashboardOrgProfilePage />
        </Route>
        {/* //TODO proteger ruta President... */}
        <Route path="/president" exact>
          <PresidentProfilePage />
        </Route>

        {/* //TODO Una vez hecho el registro, deberia enviarnos a esta ventana para indicar Que tenemos que verificar el email*/}
        <Route path="/verify" exact>
          <VerifyMailPage />
        </Route>

        {/* --------------------Treasurer-------------------- */}
        {/* //TODO proteger ruta Treasurer Funcionalidades etc...*/}
        <Route path="/treasurer-resume" exact>
          <TreasurerResumePage />
        </Route>
        {/* //TODO proteger ruta Treasurer Funcionalidades etc...*/}
        <Route path="/treasurer-income" exact>
          <TreasurerIncomePage />
        </Route>
        {/* //TODO proteger ruta Treasurer Funcionalidades etc...*/}
        <Route path="/income-register" exact>
          <TreasurerIncomeRegisterPage />
        </Route>

        <Route path="/recovery-pass" exact>
          <ForgotPasswordPage handlerOnFocus={handlerOnFocus} />
        </Route>

        <Route path="/404" exact component={NotFoundPage} />
        <Route path="/401" exact component={UnauthorizedPage} />

        <PrivateRoute path="/profile" exact>
          <DashboardProfilePage handlerOnFocus={handlerOnFocus} />
        </PrivateRoute>

        <Redirect to="/404" />
      </Switch>
    </SweetAlert>
  );
};
