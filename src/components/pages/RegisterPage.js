import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { Button } from '../basicComponents/Button';
import { ChangeLanguaje } from '../utils/ChangeLanguaje';
import { FooterForms } from '../basicComponents/FooterForms';

import { InputMail } from '../basicComponents/InputMail';
import { InputPassword } from '../basicComponents/InputPassword';
import { InputText } from '../basicComponents/InputText';

//Borrar al No ser Necesaria... (facilidad a la hora de trabajar...)
import { NavbarForDevOnly } from '../utils/NavbarForDevOnly';

export const RegisterPage = () => {
  const { t } = useTranslation('global');

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
                          <InputText text={t('RegisterPage.Name')} />
                        </div>
                        <div className="col-sm-6">
                          <InputText text={t('RegisterPage.Surname')} />
                        </div>
                      </div>
                      <div className="form-group">
                        <InputMail text={t('LoginPage.Enter-mail')} />
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <InputPassword text={t('LoginPage.Password')} />
                        </div>
                        <div className="col-sm-6">
                          <InputPassword
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
                        {t('LoginPage.Login')}
                      </Button>

                      <hr />
                      <Button
                        type="submit"
                        variant="google"
                        startIcon="fab fa-google fa-fw"
                        onClick={event => {
                          event.preventDefault();
                          return console.log('click google');
                        }}
                      >
                        {t('LoginPage.Login-with')} Google
                      </Button>

                      <Button
                        type="submit"
                        variant="facebook"
                        startIcon="fab fa-facebook-f fa-fw"
                        onClick={event => {
                          event.preventDefault();
                          return console.log('click facebook');
                        }}
                      >
                        {t('LoginPage.Login-with')} Facebook
                      </Button>
                    </form>
                    <hr />

                    <FooterForms
                      path={'/login'}
                      text={t('ForgotPasswordPage.Have-Acount')}
                    />
                    <FooterForms
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
