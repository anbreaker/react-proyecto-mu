import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Helmet from 'react-helmet';
import validator from 'validator';
import Swal from 'sweetalert2';
import { startRegisterWithEmailPasswordName } from '../../api/dispatchs';

import { useForm } from '../../hooks/useForm';
import { Button } from '../basicComponents/Button';
import { ChangeLanguaje } from '../utils/ChangeLanguaje';
import { LinkForms } from '../basicComponents/LinkForms';
import { InputMail } from '../basicComponents/InputMail';
import { InputPassword } from '../basicComponents/InputPassword';
import { InputText } from '../basicComponents/InputText';
import { setErrorAction, removeErrorAction } from '../../store/actions/ui';
import { getMsgError, getLocale } from '../../store/selectors';
import '../../assets/css/style.css';

//Borrar al No ser Necesaria... (facilidad a la hora de trabajar...)
import { NavbarForDevOnly } from '../utils/NavbarForDevOnly';
import { MessageError } from '../parts/MessageError';

export const RegisterPage = ({ handlerOnFocus }) => {
  const { t } = useTranslation('global');

  const dispatch = useDispatch();

  const { msgError } = useSelector(getMsgError);
  const { locale } = useSelector(getLocale);

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
      console.log('entra');
      /*startRegisterWithEmailPasswordName({
        username,
        surname,
        organization,
        idFiscal,
        email,
        password,
      });*/
      console.log(username, surname, organization, idFiscal, email, password);
    }
  };

  const isFormValid = () => {
    if (username.length <= 2) {
      dispatch(setErrorAction('RegisterPage.Name-Required'));
      return false;
    } else if (surname.length <= 2) {
      dispatch(setErrorAction('RegisterPage.Surname-Required'));
      return false;
    }
    // else if (!validator.isTaxID(idFiscal, locale)) {
    //   dispatch(setErrorAction('RegisterPage.Fiscal-NotValid'));
    //   return false;
    // }
    else if (!validator.isEmail(email)) {
      dispatch(setErrorAction('RegisterPage.Email-NotValid'));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setErrorAction('RegisterPage.Password-Error'));
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
                            onFocus={handlerOnFocus}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="col-sm-6">
                          <InputText
                            text={t('RegisterPage.Surname')}
                            name="surname"
                            value={surname}
                            onFocus={handlerOnFocus}
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
                            onFocus={handlerOnFocus}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-sm-6">
                          <InputText
                            text={t('RegisterPage.Fiscal')}
                            name="idFiscal"
                            value={idFiscal}
                            onFocus={handlerOnFocus}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <InputMail
                          text={t('LoginPage.Enter-mail')}
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
                      >
                        {' '}
                        {t('RegisterPage.Register-Account')}
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
