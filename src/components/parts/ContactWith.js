import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import validator from 'validator';

import { getSingleUser } from '../../api';
import { useForm } from '../../hooks/useForm';
import { removeErrorAction, setErrorAction } from '../../store/actions/ui';
import { getUiState, getUserAuth } from '../../store/selectors';
import { Button } from '../basicComponents/Button';
import { InputText } from '../basicComponents/InputText';
import { MessageError } from './MessageError';
import { useSendGrid } from '../../hooks/useSendMail';

export const ContactWith = ({ title, handlerOnFocus }) => {
  const { t } = useTranslation('global');
  const history = useHistory();

  const dispatch = useDispatch();

  const { msgError, loading } = useSelector(getUiState);

  const currentUser = useSelector(getUserAuth);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userIdParam = queryParams.get('userId');

  const { formValues, handleInputChange, setFormValues } = useForm({
    email: userIdParam ? '' : currentUser.email,
    name: userIdParam ? '' : currentUser.displayName,
    mobile: userIdParam ? '' : currentUser.contact.mobile,
    message: '',
  });

  useEffect(() => {
    if (userIdParam) {
      getSingleUser(userIdParam)
        .then(data => {
          setFormValues({
            name: data.fullName,
            email: data.email,
            mobile: data.contact.mobile,
          });
        })
        .catch(err => console.log(err));
    }
  }, [userIdParam]);

  const { email, name, mobile, message } = formValues;

  const handleSendMail = async event => {
    event.preventDefault();

    if (isFormContacValid()) {
      const sendMail = useSendGrid();

      let type;
      if (location.pathname === '/dashboard') type = 'CONTACT';
      if (location.pathname === '/contact/user') type = 'ADMIN';

      sendMail(formValues, dispatch, type);
    }
  };

  const isFormContacValid = () => {
    if (name.length <= 2) {
      dispatch(setErrorAction('ContactWith.Name-Required'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setErrorAction('ContactWith.Email-NotValid'));
      return false;
    } else if (!validator.isMobilePhone(mobile)) {
      dispatch(setErrorAction('ContactWith.Error-Phone'));
      return false;
    } else if (message.length <= 2) {
      dispatch(setErrorAction('ContactWith.Empty-Message'));
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
            {title}
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
                  placeholder={`${t('ContactWith.Suggestion')}...`}
                  name="message"
                  value={message}
                  onFocus={handlerOnFocus}
                  onChange={handleInputChange}
                ></textarea>

                <hr />

                <MessageError msgError={msgError} />

                <div className="row">
                  {userIdParam && (
                    <div className="col-3">
                      <Button
                        type="button"
                        variant="warning"
                        startIcon="fas fa-arrow-left"
                        onClick={() => history.goBack()}
                      >
                        {t('DashboardOrgProfilePage.Back')}
                      </Button>
                    </div>
                  )}

                  <div className={userIdParam ? 'col-9' : 'col-12'}>
                    <Button
                      type="submit"
                      variant="primary"
                      startIcon="fas fa-share-square"
                      disabled={loading}
                    >
                      {' '}
                      {t('ContactWith.Send')}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
