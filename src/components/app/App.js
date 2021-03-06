import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import '../../assets/css/sb-admin-2.min.css';
import '../../assets/vendor/fontawesome-free/css/all.min.css';
import '../../assets/css/style.css';

import { PrivateRoute } from '../basicComponents/PrivateRoute';
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
import { firebaseInit } from '../../firebase/firebaseConfig';
import { login } from '../../store/actions/auth';
import { configureClient } from '../../api/client';
import { SweetAlert } from '../parts/SweetAlert';
import { VerifyMailPage } from '../pages/VerifyMailPage';
import { UnauthorizedPage } from '../pages/UnauthorizedPage';
import { TreasurerIncomePage } from '../pages/TreasurerIncomePage';
import { TreasurerIncomeRegisterPage } from '../pages/TreasurerIncomeRegisterPage';
import { TreasurerExpensePage } from '../pages/TreasurerExpensePage';
import { TreasurerSetQuotaPage } from '../pages/TreasurerSetQuotaPage';
import { DisabledUserPage } from '../pages/DisabledUserPage';
import { UsersAdminPage } from '../pages/UsersAdminPage';
import { DashboardContact } from '../pages/DashboardContact';
// import { SecretaryResumePage } from '../pages/SecretaryResumePage';
// import { TreasurerExpenseRegisterPage } from '../pages/TreasurerExpenseRegisterPage';
// import { SecretaryMeetingsPage } from '../pages/SecretaryMeetingsPage';
// import { PresidentProfilePage } from '../pages/PresidentProfilePage';
// import { TreasurerResumePage } from '../pages/TreasurerResumePage';

export const App = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(uidOnIndexDB);
  const alert = useSelector(getSwalAlert);

  useEffect(() => {
    firebaseInit.auth().onAuthStateChanged(user => {
      if (user) {
        user.getIdToken().then(token => {
          dispatch(login({ ...user, token }));
          configureClient(token);
        });
      }
    });
  }, []);

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

        <PrivateRoute path="/dashboard" exact>
          <Dashboard handlerOnFocus={handlerOnFocus} />
        </PrivateRoute>

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

        <Route path="/disabled" exact component={DisabledUserPage} />

        <PrivateRoute path="/admin" exact>
          <DashboardSuperAdminPage />
        </PrivateRoute>

        <PrivateRoute path="/admin-org" exact>
          <DashboardOrgProfilePage />
        </PrivateRoute>

        <PrivateRoute path="/users-admin" exact>
          <UsersAdminPage />
        </PrivateRoute>

        {/* //TODO proteger ruta President... */}
        {/* <Route path="/president" exact>
          <PresidentProfilePage />
        </Route> */}

        <Route path="/verify" exact>
          <VerifyMailPage />
        </Route>

        {/* --------------------Treasurer-------------------- */}
        {/* //TODO proteger ruta Treasurer Funcionalidades etc...*/}
        {/* <Route path="/treasurer-resume" exact>
          <TreasurerResumePage />
        </Route> */}

        <PrivateRoute path="/treasurer-income" exact>
          <TreasurerIncomePage />
        </PrivateRoute>

        <PrivateRoute path="/income-register" exact>
          <TreasurerIncomeRegisterPage />
        </PrivateRoute>

        {/* //TODO proteger ruta Treasurer Funcionalidades etc...*/}
        {/* <Route path="/expense-register" exact>
          <TreasurerExpenseRegisterPage />
        </Route> */}

        <PrivateRoute path="/treasurer-expense" exact>
          <TreasurerExpensePage />
        </PrivateRoute>

        <PrivateRoute path="/treasurer-quota" exact>
          <TreasurerSetQuotaPage handlerOnFocus={handlerOnFocus} />
        </PrivateRoute>

        {/* --------------------Secretary-------------------- */}
        {/* //TODO proteger ruta Treasurer Funcionalidades etc...*/}
        {/* <Route path="/secretary-resume" exact>
          <SecretaryResumePage />
        </Route>
        <Route path="/secretary-meetings" exact>
          <SecretaryMeetingsPage />
        </Route> */}

        <Route path="/recovery-pass" exact>
          <ForgotPasswordPage handlerOnFocus={handlerOnFocus} />
        </Route>

        <Route path="/404" exact component={NotFoundPage} />
        <Route path="/401" exact component={UnauthorizedPage} />

        <PrivateRoute path="/profile" exact>
          <DashboardProfilePage handlerOnFocus={handlerOnFocus} />
        </PrivateRoute>

        {/* --------------------Contact-------------------- */}
        <PrivateRoute path="/contact">
          <DashboardContact handlerOnFocus={handlerOnFocus} />
        </PrivateRoute>

        <Redirect to="/404" />
      </Switch>
    </SweetAlert>
  );
};
