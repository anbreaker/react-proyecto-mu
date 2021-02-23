import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Helmet from 'react-helmet';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { ChangeLanguaje } from '../utils/ChangeLanguaje';
import { InputMail } from '../basicComponents/InputMail';
import { InputPassword } from '../basicComponents/InputPassword';
import { LinkForms } from '../basicComponents/LinkForms';
import { Button } from '../basicComponents/Button';
import { MessageError } from '../parts/MessageError';
import { getMsgError } from '../../store/selectors';
import { setErrorAction, removeErrorAction } from '../../store/actions/ui';
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from '../../store/actions/auth';

export const LoginPage = ({ handlerOnFocus }) => {
  const { t } = useTranslation('global');

  const dispatch = useDispatch();

  const { msgError, loading } = useSelector(getMsgError);

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formValues;

  const handleLogin = async event => {
    event.preventDefault();

    if (isLoginValid()) {
      const ver = dispatch(startLoginEmailPassword(email, password));
      await console.log(ver, '<<-Ver');
    }
  };

  const isLoginValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setErrorAction('RegisterPage.Email-NotValid'));
      return false;

      //TODO Refrescar input password... Preguntar
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
        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center pt-5">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
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
                            text={t('LoginPage.Enter-mail')}
                            name="email"
                            value={email}
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
                        path={'/registro'}
                        text={t('LoginPage.Create-Account')}
                      />
                      <LinkForms
                        path={'/recuperar-pass'}
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
