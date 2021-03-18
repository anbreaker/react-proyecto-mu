import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { getUserAuth } from '../../store/selectors';
import { Button } from '../basicComponents/Button';
import { InputText } from '../basicComponents/InputText';

export const ContactAdmin = ({ handlerOnFocus }) => {
  const { t } = useTranslation('global');

  const {
    email: emailDefault,
    displayName: nameDefault,
    contact: contactDefault,
  } = useSelector(getUserAuth);

  const { formValues, handleInputChange, setFormValues } = useForm({
    email: '',
    displayName: '',
    contact: '',
  });
  const { email, displayName, contact } = formValues;

  useEffect(() => {
    setFormValues({ ...formValues });
  }, []);

  const handleChangeContact = event => {
    event.preventDefault();
    console.log('Enviar mail');
  };

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary text-center">
            {t('ContactAdmin.Contact')}
          </h6>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <form onSubmit={handleChangeContact}>
                <div className="row">
                  <div className="col-4 text-center">
                    <h6 className="font-weight-bold mt-3 text-primary">
                      {t('ContactAdmin.Name')}:
                    </h6>
                    <InputText
                      text={`${t('ContactAdmin.Name')}...`}
                      name="name"
                      value={displayName || nameDefault}
                      onFocus={handlerOnFocus}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-4 text-center">
                    <h6 className="font-weight-bold mt-3 text-primary">
                      {t('ContactAdmin.Email')}:
                    </h6>
                    <InputText
                      text={`${t('ContactAdmin.Email')}...`}
                      name="email"
                      value={emailDefault}
                      onFocus={handlerOnFocus}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-4 text-center">
                    <h6 className="font-weight-bold mt-3 text-primary">
                      {t('ContactAdmin.Mobile')}:
                    </h6>
                    <InputText
                      text={`${t('ContactAdmin.Mobile')}...`}
                      name="mobile"
                      value={contactDefault.mobile}
                      onFocus={handlerOnFocus}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <br />
                <h6 className="font-weight-bold mt-3 text-center text-primary">
                  {t('ContactAdmin.Description')}:
                </h6>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder={`${t('ContactAdmin.Description')}...`}
                  name="text"
                  // value={text}
                  onFocus={handlerOnFocus}
                  onChange={handleInputChange}
                ></textarea>

                <hr />

                <div className="col-12">
                  <Button
                    type="submit"
                    variant="primary"
                    startIcon="fas fa-share-square"
                  >
                    {' '}
                    {t('ContactAdmin.Send')}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
