import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { useForm } from '../../hooks/UseForm';
import { ChangeLanguaje } from '../utils/ChangeLanguaje';
import { InputMail } from '../basicComponents/InputMail';
import { InputPassword } from '../basicComponents/InputPassword';
import { LinkForms } from '../basicComponents/LinkForms';
import { Button } from '../basicComponents/Button';
import { UniqueCheckbox } from '../basicComponents/UniqueCheckbox';
import { login } from '../../store/actions/auth';

//Borrar al No ser Necesaria... (facilidad a la hora de trabajar...)
import { NavbarForDevOnly } from '../utils/NavbarForDevOnly';

export const LoginPage = () => {
  const { t } = useTranslation('global');

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formValues;

  const handleLogin = event => {
    event.preventDefault();
    dispatch(login(email, password));
  };

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
                      <form className="user" onSubmit={handleLogin}>
                        <div className="form-group">
                          <InputMail
                            text={t('LoginPage.Enter-mail')}
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <InputPassword
                            text={t('LoginPage.Password')}
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                          />
                        </div>

                        <UniqueCheckbox text={t('LoginPage.Remember')} />

                        <Button
                          type="submit"
                          variant="primary"
                          startIcon="fas fa-sign-in-alt"
                        >
                          {' '}
                          {t('LoginPage.Login')}
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
