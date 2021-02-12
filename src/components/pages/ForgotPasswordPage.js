import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { FooterForms } from '../basicComponents/FooterForms';
import { InputMail } from '../basicComponents/InputMail';
import { ChangeLanguaje } from '../utils/ChangeLanguaje';

export const ForgotPasswordPage = () => {
  const { t } = useTranslation('global');

  return (
    <div>
      <Helmet
        bodyAttributes={{
          class: 'bg-gradient-info',
        }}
      />
      <div className="container">
        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-2">
                          ¿Olvidaste la contraseña?
                        </h1>
                        <p className="mb-4">
                          {t('ForgotPasswordPage.Consuelo-Sentence')}
                        </p>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <InputMail text={t('LoginPage.Enter-mail')} />
                        </div>
                        <a
                          href="login.html"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Reiniciar contraseña
                        </a>
                      </form>

                      <hr />
                      <FooterForms
                        path={'/login'}
                        text={t('ForgotPasswordPage.Have-Acount')}
                      />
                      <FooterForms
                        path={'/registro'}
                        text={t('LoginPage.Create-Account')}
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
    </div>
  );
};
