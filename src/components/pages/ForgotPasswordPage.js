import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import validator from 'validator';

import { LinkForms } from '../basicComponents/LinkForms';
import { InputMail } from '../basicComponents/InputMail';
import { ChangeLanguaje } from '../utils/ChangeLanguaje';
import { Button } from '../basicComponents/Button';
import { useForm } from '../../hooks/useForm';
import { getMsgError } from '../../store/selectors';
import { setErrorAction, removeErrorAction } from '../../store/actions/ui';
import { MessageError } from '../parts/MessageError';
import { recoveryPassAction } from '../../store/actions/auth';

export const ForgotPasswordPage = ({ handlerOnFocus }) => {
  const { t } = useTranslation('global');

  const history = useHistory();

  const dispatch = useDispatch();

  const { msgError } = useSelector(getMsgError);

  const { formValues, handleInputChange } = useForm({ email: '' });

  const { email } = formValues;

  const handleResetPassword = event => {
    event.preventDefault();
    if (!validator.isEmail(email)) {
      dispatch(setErrorAction('RegisterPage.Email-NotValid'));
      return false;
    }

    dispatch(recoveryPassAction(email));

    history.push('/verify');

    dispatch(removeErrorAction());
    return true;
  };

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: 'bg-gradient-info',
        }}
      />
      <div className="container pt-5">
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
                          {t('LoginPage.Forgot-Password')}
                        </h1>
                        <p className="mb-4">
                          {t('ForgotPasswordPage.Consuelo-Sentence')}
                        </p>
                      </div>

                      <form className="user" onSubmit={handleResetPassword}>
                        <div className="form-group">
                          <InputMail
                            text={t('LoginPage.Enter-Mail')}
                            name="email"
                            value={email}
                            onFocus={handlerOnFocus}
                            onChange={handleInputChange}
                          />
                        </div>

                        <MessageError msgError={msgError} />

                        <Button
                          type="submit"
                          variant="primary"
                          startIcon="fas fa-redo"
                        >
                          {' '}
                          {t('ForgotPasswordPage.Reset-Password')}
                        </Button>
                      </form>

                      <hr />
                      <LinkForms
                        path={'/login'}
                        text={t('ForgotPasswordPage.Have-Acount')}
                      />
                      <LinkForms
                        path={'/register'}
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
    </>
  );
};
