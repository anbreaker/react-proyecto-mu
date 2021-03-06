import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Helmet from 'react-helmet';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { ChangeLanguaje } from '../utils/ChangeLanguaje';
import { InputMail } from '../basicComponents/InputMail';
import { InputPassword } from '../basicComponents/InputPassword';
import { LinkForms } from '../basicComponents/LinkForms';
import { Button } from '../basicComponents/Button';
import { MessageError } from '../parts/MessageError';
import {
  getUiState,
  getLoginStatus,
  getEmailVerified,
} from '../../store/selectors';
import { setErrorAction, removeErrorAction } from '../../store/actions/ui';
import {
  loginStatusChange,
  startGoogleLogin,
  startLoginEmailPassword,
} from '../../store/actions/auth';
import { setAlertAction } from '../../store/actions/swal';

export const LoginPage = ({ handlerOnFocus }) => {
  const { t } = useTranslation('global');

  const dispatch = useDispatch();

  const location = useLocation();
  const queryParmas = new URLSearchParams(location.search);
  const emailRecovery = queryParmas.get('user');

  const { msgError, loading } = useSelector(getUiState);
  const loginStatus = useSelector(getLoginStatus);
  const emailVerified = useSelector(getEmailVerified);

  const [manualLogin, setManualLogin] = useState(false);

  const { formValues, handleInputChange, setFormValues } = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formValues;

  useEffect(() => {
    setFormValues({ ...formValues });
  }, []);

  useEffect(() => {
    // El error de email se debe manejar desde acá para no tener problemas en el proceso de registro
    if (loginStatus === 'failed' && manualLogin) {
      if (!emailVerified) {
        dispatch(
          setAlertAction(
            'ErrorSwal.Error',
            `ErrorSwal.auth/email-not-verified`,
            'error'
          )
        );
      }
    }
  }, [manualLogin, loginStatus]);

  const handleLogin = event => {
    event.preventDefault();

    if (isLoginValid()) {
      dispatch(loginStatusChange('authenticating'));
      dispatch(startLoginEmailPassword(email, password));
      setManualLogin(true);
    }
  };

  // /login?user=email@gmail.com
  const isLoginValid = () => {
    let mail;
    if (emailRecovery) mail = !validator.isEmail(emailRecovery);
    else mail = !validator.isEmail(email);

    if (mail) {
      dispatch(setErrorAction('RegisterPage.Email-NotValid'));
      return false;
    } else if (password <= 5) {
      dispatch(setErrorAction('LoginPage.Password-Error'));
      return false;
    }
    dispatch(removeErrorAction());
    return true;
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <>
      <div className="container">
        <Helmet
          bodyAttributes={{
            class: 'bg-gradient-primary',
          }}
        />

        <div className="row justify-content-center pt-5">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">
                          {t('LoginPage.Welcome')}
                        </h1>
                      </div>
                      <form className="user" onSubmit={handleLogin}>
                        <div className="form-group">
                          <InputMail
                            text={t('LoginPage.Enter-Mail')}
                            name="email"
                            value={email || emailRecovery}
                            onFocus={handlerOnFocus}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <InputPassword
                            text={t('LoginPage.Password')}
                            name="password"
                            value={password}
                            onFocus={handlerOnFocus}
                            onChange={handleInputChange}
                          />
                        </div>

                        <MessageError msgError={msgError} />

                        <Button
                          type="submit"
                          variant="primary"
                          startIcon="fas fa-sign-in-alt"
                          disabled={loading}
                        >
                          {' '}
                          {t('LoginPage.Login')}
                        </Button>

                        <hr />

                        <Button
                          variant="google"
                          startIcon="fab fa-google fa-fw"
                          disabled={loading}
                          onClick={handleGoogleLogin}
                        >
                          {' '}
                          {t('LoginPage.Login-with')}
                        </Button>
                      </form>

                      <hr />
                      <LinkForms
                        path={'/register'}
                        text={t('LoginPage.Create-Account')}
                      />
                      <LinkForms
                        path={'/recovery-pass'}
                        text={t('LoginPage.Forgot-Password')}
                      />
                    </div>
                    <ChangeLanguaje />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
