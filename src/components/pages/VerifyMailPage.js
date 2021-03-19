import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { ChangeLanguaje } from '../utils/ChangeLanguaje';
import { LinkForms } from '../basicComponents/LinkForms';

export const VerifyMailPage = () => {
  const { t } = useTranslation('global');

  return (
    <>
      <div className="container">
        <Helmet
          bodyAttributes={{
            class: 'bg-gradient-warning',
          }}
        />

        <div className="row justify-content-center pt-5">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-verify-email"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h2 text-gray-900 mb-4">
                          {t('LoginPage.Welcome')}
                        </h1>
                      </div>

                      <div className="card mb-4 py-3 border-bottom-dark">
                        <div className="card-body">
                          <h1 className="h3 font-weight-bold text-info text-center">
                            <blockquote>{t('VerifyMailPage.Info')}</blockquote>
                          </h1>
                        </div>
                      </div>

                      <hr />
                      <LinkForms
                        path={'/register'}
                        text={t('LoginPage.Create-Account')}
                      />
                      <LinkForms
                        path={'/login'}
                        text={t('ForgotPasswordPage.Have-Acount')}
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
