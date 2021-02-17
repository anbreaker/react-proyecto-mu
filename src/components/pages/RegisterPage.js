import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import {
  googleAuthProvider,
  facebookAuth,
  authFirebase,
  firebaseInit,
  facebookAuthprovider,
} from '../firebase';

import { Button } from '../basicComponents/Button';
import { ChangeLanguaje } from '../utils/ChangeLanguaje';
import { LinkForms } from '../basicComponents/LinkForms';
import { InputMail } from '../basicComponents/InputMail';
import { InputPassword } from '../basicComponents/InputPassword';
import { InputText } from '../basicComponents/InputText';

//Borrar al No ser Necesaria... (facilidad a la hora de trabajar...)
import { NavbarForDevOnly } from '../utils/NavbarForDevOnly';

export const RegisterPage = () => {
  const { t } = useTranslation('global');

  const [inputValues, setinputValues] = useState({
    username: '',
    email: '',
    surname: '',
    password: '',
    password2: '',
    idFiscal: '',
    organization: '',
  });

  const handlerOnChange = ev => {
    ev.preventDefault();
    setinputValues({ ...inputValues, [ev.target.name]: ev.target.value });
  };

  const {
    username,
    email,
    surname,
    password,
    password2,
    idFiscal,
    organization,
  } = inputValues;

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
                    <form className="user">
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <InputText
                            name="username"
                            value={username}
                            onChange={handlerOnChange}
                            text={t('RegisterPage.Name')}
                            required
                          />
                        </div>
                        <div className="col-sm-6">
                          <InputText
                            name="surname"
                            value={surname}
                            onChange={handlerOnChange}
                            text={t('RegisterPage.Surname')}
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <InputText
                            name="organization"
                            value={organization}
                            onChange={handlerOnChange}
                            text={t('RegisterPage.Organization')}
                          />
                        </div>
                        <div className="col-sm-6">
                          <InputText
                            name="idFiscal"
                            value={idFiscal}
                            onChange={handlerOnChange}
                            text={t('RegisterPage.Fiscal')}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <InputMail
                          name="email"
                          value={email}
                          onChange={handlerOnChange}
                          text={t('LoginPage.Enter-mail')}
                          required
                        />
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <InputPassword
                            name="password"
                            value={password}
                            onChange={handlerOnChange}
                            text={t('LoginPage.Password')}
                          />
                        </div>
                        <div className="col-sm-6">
                          <InputPassword
                            name="password2"
                            value={password2}
                            onChange={handlerOnChange}
                            text={t('RegisterPage.Repeat-Password')}
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        onClick={event => {
                          event.preventDefault();
                          return console.log('click');
                        }}
                      >
                        {t('RegisterPage.Register-Account')}
                      </Button>

                      <hr />
                      <Button
                        type="submit"
                        variant="google"
                        startIcon="fab fa-google fa-fw"
                        onClick={event => {
                          event.preventDefault();
                          firebaseInit
                            .auth()
                            .signInWithPopup(googleAuthProvider)
                            .then(data => console.log(data))
                            .catch(err => console.log(err));
                        }}
                      >
                        {' '}
                        {t('RegisterPage.Register-With')} Google
                      </Button>

                      <Button
                        type="submit"
                        variant="facebook"
                        startIcon="fab fa-facebook-f fa-fw"
                        onClick={event => {
                          event.preventDefault();
                          firebaseInit
                            .auth()
                            .signInWithPopup(facebookAuthprovider)
                            .then(data => console.log(data))
                            .catch(errv => console.log(errv));
                        }}
                      >
                        {t('RegisterPage.Register-With')} Facebook
                      </Button>
                    </form>
                    <hr />

                    <LinkForms path={'/login'} text={t('Volver')} />
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
