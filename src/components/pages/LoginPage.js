import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { ChangeLanguaje } from '../utils/ChangeLanguaje';
import { InputMail } from '../basicComponents/InputMail';
import { InputPassword } from '../basicComponents/InputPassword';
import { LinkForms } from '../basicComponents/LinkForms';
import { Button } from '../basicComponents/Button';
import { UniqueCheckbox } from '../basicComponents/UniqueCheckbox';

//Borrar al No ser Necesaria... (facilidad a la hora de trabajar...)
import { NavbarForDevOnly } from '../utils/NavbarForDevOnly';

export const LoginPage = () => {
  const { t } = useTranslation('global');

  return (
    <>
      {/* Borrar al No ser Necesaria... (facilidad a la hora de trabajar...) */}
      <NavbarForDevOnly />

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
                          {t('LoginPage.Welcome')}!
                        </h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <InputMail text={t('LoginPage.Enter-mail')} />
                        </div>
                        <div className="form-group">
                          <InputPassword text={t('LoginPage.Password')} />
                        </div>

                        <UniqueCheckbox text={t('LoginPage.Remember')} />

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
                          {' '}
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
