import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Helmet from 'react-helmet';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { Button } from '../basicComponents/Button';
import { ChangeLanguaje } from '../utils/ChangeLanguaje';
import { LinkForms } from '../basicComponents/LinkForms';
import { InputMail } from '../basicComponents/InputMail';
import { InputPassword } from '../basicComponents/InputPassword';
import { InputText } from '../basicComponents/InputText';
import { setErrorAction, removeErrorAction } from '../../store/actions/ui';
import { getMsgError } from '../../store/selectors';
import { MessageError } from '../parts/MessageError';
import '../../assets/css/style.css';
import {
  startGoogleLogin,
  startRegisterWithEmailPasswordName,
} from '../../store/actions/auth';

export const RegisterPage = ({ handlerOnFocus }) => {
  const { t } = useTranslation('global');

  const dispatch = useDispatch();

  const { msgError, loading } = useSelector(getMsgError);

  const [formValues, handleInputChange] = useForm({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const { username, email, password, password2 } = formValues;

  const handleRegister = event => {
    event.preventDefault();

    if (isFormValid()) {
      //Enviar al Back de Firebase...
      dispatch(startRegisterWithEmailPasswordName(email, password, username));
    }
  };

  const isFormValid = () => {
    if (username.length <= 2) {
      dispatch(setErrorAction('RegisterPage.Name-Required'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setErrorAction('RegisterPage.Email-NotValid'));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setErrorAction('RegisterPage.Password-Error'));
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
            class: 'bg-gradient-success',
          }}
        />

        <div className="container pt-4">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                <div className="col-lg-7">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">
                        {t('RegisterPage.Create-Account')}
                      </h1>
                    </div>
                    <form className="user" onSubmit={handleRegister}>
                      <div className="form-group">
                        <div className="col-sm-6 mb-3 mb-sm-0"></div>
                        <InputText
                          text={t('RegisterPage.Name')}
                          name="username"
                          value={username}
                          onFocus={handlerOnFocus}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-group">
                        <InputMail
                          text={t('LoginPage.Enter-Mail')}
                          name="email"
                          value={email}
                          onFocus={handlerOnFocus}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <InputPassword
                            text={t('LoginPage.Password')}
                            name="password"
                            value={password}
                            onFocus={handlerOnFocus}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-sm-6">
                          <InputPassword
                            text={t('RegisterPage.Repeat-Password')}
                            name="password2"
                            value={password2}
                            onFocus={handlerOnFocus}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <MessageError msgError={msgError} />

                      <Button
                        type="submit"
                        variant="primary"
                        startIcon="fas fa-id-card"
                        disabled={loading}
                      >
                        {' '}
                        {t('RegisterPage.Register-Account')}
                      </Button>
                      <hr />

                      <Button
                        variant="google"
                        startIcon="fab fa-google fa-fw"
                        disabled={loading}
                        onClick={handleGoogleLogin}
                      >
                        {' '}
                        {t('RegisterPage.Register-AccountWith')}
                      </Button>
                    </form>
                    <hr />

                    <LinkForms
                      path={'/login'}
                      text={t('ForgotPasswordPage.Have-Acount')}
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
    </>
  );
};
