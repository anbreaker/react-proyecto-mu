import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Helmet from 'react-helmet';
import validator from 'validator';
import Swal from 'sweetalert2';
import {
  firebaseInit,
  googleAuthProvider,
} from '../../firebase/firebaseConfig';

import { useForm } from '../../hooks/UseForm';
import { Button } from '../basicComponents/Button';
import { ChangeLanguaje } from '../utils/ChangeLanguaje';
import { LinkForms } from '../basicComponents/LinkForms';
import { InputMail } from '../basicComponents/InputMail';
import { InputPassword } from '../basicComponents/InputPassword';
import { InputText } from '../basicComponents/InputText';
import { setErrorAction, removeErrorAction } from '../../store/actions/ui';
import { getMsgError } from '../../store/selectors';

//Borrar al No ser Necesaria... (facilidad a la hora de trabajar...)
import { NavbarForDevOnly } from '../utils/NavbarForDevOnly';

import '../../assets/css/style.css';

export const RegisterPage = () => {
  const { t } = useTranslation('global');

  const dispatch = useDispatch();

  const { msgError } = useSelector(getMsgError);

  const [formValues, handleInputChange] = useForm({
    username: '',
    surname: '',
    organization: '',
    idFiscal: '',
    email: '',
    password: '',
    password2: '',
  });

  const {
    username,
    surname,
    organization,
    idFiscal,
    email,
    password,
    password2,
  } = formValues;

  const handleRegister = event => {
    event.preventDefault();
    if (isFormValid()) {
      console.log(isFormValid(), 'Formulario Valido');
    }
  };

  const isFormValid = () => {
    if (username.trim().length === 0) {
      dispatch(setErrorAction(t('RegisterPage.Name-Required')));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setErrorAction(t('RegisterPage.Email-NotValid')));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setErrorAction(t('RegisterPage.Password-Error')));
      return false;
    }

    dispatch(removeErrorAction());
    return true;
  };

  return (
    <>
      {/* Borrar al No ser Necesaria... (facilidad a la hora de trabajar...) */}
      <NavbarForDevOnly />

      <div className="container">
        <Helmet
          bodyAttributes={{
            class: 'bg-gradient-success',
          }}
        />
        <div className="container">
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
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <InputText
                            text={t('RegisterPage.Name')}
                            name="username"
                            value={username}
                            onChange={handleInputChange}
                          />
                        </div>
                        {/* 
                       <div className="col-sm-6">
                          <InputText
                            text={t('RegisterPage.Surname')}
                            name="surname"
                            value={surname}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <InputText
                            text={t('RegisterPage.Organization')}
                            name="organization"
                            value={organization}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-sm-6">
                          <InputText
                            text={t('RegisterPage.Fiscal')}
                            name="idFiscal"
                            value={idFiscal}
                            onChange={handleInputChange}
                          />
                        </div>
                      */}
                      </div>
                      <div className="form-group">
                        <InputMail
                          text={t('LoginPage.Enter-mail')}
                          name="email"
                          value={email}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <InputPassword
                            text={t('LoginPage.Password')}
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-sm-6">
                          <InputPassword
                            text={t('RegisterPage.Repeat-Password')}
                            name="password2"
                            value={password2}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      {/* Preguntar por el onBlur */}
                      {msgError && (
                        <div>
                          <Button
                            disabled={true}
                            variant="alert"
                            startIcon="fas fa-exclamation-triangle"
                          >
                            {' '}
                            {msgError}
                          </Button>
                          <hr />
                        </div>
                      )}

                      <Button type="submit" variant="primary">
                        {t('RegisterPage.Register-Account')}
                      </Button>

                      <hr />

                      <Button
                        type="submit"
                        variant="google"
                        startIcon="fab fa-google fa-fw"
                      >
                        {' '}
                        {t('RegisterPage.Register-With')} Google
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
