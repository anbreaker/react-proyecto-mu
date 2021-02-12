import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { ChangeLanguaje } from '../ChangeLanguaje';
import { InputMail } from '../basicComponents/InputMail';
import { InputPassword } from '../basicComponents/InputPassword';

export const LoginPage = () => {
  const { t, i18n } = useTranslation('global');

  console.log('Crear componente linea 85?');

  return (
    <div className="container">
      <Helmet
        bodyAttributes={{
          class: 'bg-gradient-primary',
        }}
      />
      {/* <!-- Outer Row --> */}
      <div className="row justify-content-center">
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
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck"
                          >
                            {t('LoginPage.Remember')}
                          </label>
                        </div>
                      </div>
                      <a
                        href="index.html"
                        className="btn btn-primary btn-user btn-block"
                      >
                        {t('LoginPage.Login')}
                      </a>
                      <hr />
                      <a
                        href="index.html"
                        className="btn btn-google btn-user btn-block"
                      >
                        <i className="fab fa-google fa-fw"></i>{' '}
                        {t('LoginPage.Login-with')} Google
                      </a>
                      <a
                        href="index.html"
                        className="btn btn-facebook btn-user btn-block"
                      >
                        <i className="fab fa-facebook-f fa-fw"></i>{' '}
                        {t('LoginPage.Login-with')} Facebook
                      </a>
                    </form>

                    {/* Componetizar esta parte? */}
                    <hr />
                    <div className="text-center">
                      <Link to="/registro" className="small">
                        {t('LoginPage.Create-Account')}
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link to="/recuperar-pass" className="small">
                        {t('LoginPage.Forgot-Password')}
                      </Link>
                    </div>
                  </div>
                  <ChangeLanguaje />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
