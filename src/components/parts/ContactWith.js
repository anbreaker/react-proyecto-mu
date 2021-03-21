import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import validator from 'validator';

import { getSingleUser } from '../../api';
import { useForm } from '../../hooks/useForm';
import { removeErrorAction, setErrorAction } from '../../store/actions/ui';
import { getUiState, getUserAuth } from '../../store/selectors';
import { Button } from '../basicComponents/Button';
import { InputText } from '../basicComponents/InputText';
import { MessageError } from './MessageError';

export const ContactWith = ({ handlerOnFocus }) => {
  const { t } = useTranslation('global');

  const dispatch = useDispatch();

  const { msgError, loading } = useSelector(getUiState);

  const currentUser = useSelector(getUserAuth);

  // TODO Pensar como enviar email a usuarios desde /treasurer-income

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userIdParam = queryParams.get('userId');

  useEffect(() => {
    console.log(queryParams);
    //console.log(userIdParam);
    if (userIdParam) {
      getSingleUser(userIdParam)
        .then(value => {
          //console.log(value);
          /*setFormValues;
          ({
            email: value.email,
            name: value.contact.fullName,
            mobile: value.contact.mobile,
          });*/
        })
        .catch(err => console.log(err));
    }
  }, [userIdParam]);

  const { formValues, handleInputChange, setFormValues } = useForm({
    email: userIdParam ? '' : currentUser.email,
    name: userIdParam ? '' : currentUser.displayName,
    mobile: userIdParam ? '' : currentUser.contact.mobile,
  });

  const { email, name, mobile } = formValues;

  const handleSendMail = event => {
    event.preventDefault();

    if (isFormContacValid()) {
      console.log('Enviar mail Validado');
    } else console.log('Enviar mail Sin Validar enviado');
  };

  const isFormContacValid = () => {
    // TODO ver isLoginValid de LoginPage para incluir el mail del user como buscar ese mail... ;
    if (name.length <= 2) {
      dispatch(setErrorAction('ContactWith.Name-Required'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setErrorAction('ContactWith.Email-NotValid'));
      return false;
    } else if (!validator.isMobilePhone(mobile)) {
      dispatch(setErrorAction('ContactWith.Error-Phone'));
      return false;
    }
    dispatch(removeErrorAction());
    return true;
  };

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h4 className="m-0 mt-2 font-weight-bold text-primary text-center">
            {t('ContactWith.Contact')}
          </h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <form onSubmit={handleSendMail}>
                <div className="row">
                  <div className="col-4 text-center">
                    <h6 className="font-weight-bold mt-3 text-primary">
                      {t('ContactWith.Name')}:
                    </h6>
                    <InputText
                      addClasses="text-center"
                      text={`${t('ContactWith.Name')}...`}
                      name="name"
                      value={name}
                      onFocus={handlerOnFocus}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-4 text-center">
                    <h6 className="font-weight-bold mt-3 text-primary">
                      {t('ContactWith.Email')}:
                    </h6>
                    <InputText
                      addClasses="text-center"
                      text={`${t('ContactWith.Email')}...`}
                      name="email"
                      value={email}
                      onFocus={handlerOnFocus}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-4 text-center">
                    <h6 className="font-weight-bold mt-3 text-primary">
                      {t('ContactWith.Mobile')}:
                    </h6>
                    <InputText
                      addClasses="text-center"
                      text={`${t('ContactWith.Mobile')}...`}
                      name="mobile"
                      value={mobile}
                      onFocus={handlerOnFocus}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <br />
                <h6 className="font-weight-bold mt-3 text-center text-primary">
                  {t('ContactWith.Description')}:
                </h6>
                <textarea
                  className="form-control text-center"
                  rows="3"
                  placeholder={`${t('ContactWith.Description')}...`}
                  name="text"
                  // value={text}
                  onFocus={handlerOnFocus}
                  onChange={handleInputChange}
                ></textarea>

                <hr />

                <MessageError msgError={msgError} />

                <Button
                  type="submit"
                  variant="primary"
                  startIcon="fas fa-share-square"
                  disabled={loading}
                >
                  {' '}
                  {t('ContactWith.Send')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
