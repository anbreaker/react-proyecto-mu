// eslint-disable
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import validator from 'validator';
import profile from '../../assets/img/undraw_profile.svg';

import MainLayout from '../layout/MainLayout';
import { InputText } from '../basicComponents/InputText';
import { useForm } from '../../hooks/useForm';
import { MessageError } from '../parts/MessageError';
import { Button } from '../basicComponents/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getLocale, getMsgError, getUserAuth } from '../../store/selectors';
import { removeErrorAction, setErrorAction } from '../../store/actions/ui';
import { uploadFileCloudinaryAction } from '../../store/actions/upCloudinary';
import client from '../../api/client';

export const DashboardOrgProfilePage = ({ handlerOnFocus }) => {
  const { t } = useTranslation('global');
  const dispatch = useDispatch();

  const { msgError, loading } = useSelector(getMsgError);
  // eslint-disable-next-line
  const { locale } = useSelector(getLocale);

  const user = useSelector(getUserAuth);

  const [formValues, handleInputChange, setFormValues] = useForm({
    displayName: '',
    id: '',
    foundation: '',
    email: '',
    president: '',
    address: '',
    phoneNumber: '',
    country: '',
    photoURL: '',
  });

  const {
    displayName,
    id,
    foundation,
    email,
    president,
    address,
    phoneNumber,
    country,
    photoURL,
  } = formValues;

  useEffect(() => {
    setFormValues({ ...formValues, ...user });
  }, [user]);

  const handleChangeProfile = event => {
    event.preventDefault();

    if (isFormChangeProfileValid()) {
      // Enviar al Back en un Objeto..
      // TODO enviar este objeto al back
      // user: { uid, displayName, email, phonNumber, photURL, role }

      client
        .post('/user', formValues)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  const isFormChangeProfileValid = () => {
    if (displayName.length <= 2) {
      dispatch(setErrorAction('RegisterPage.Name-Required'));
      return false;
    } else if (id.length <= 2) {
      dispatch(setErrorAction('DashboardProfilePage.FirstSurname-Required'));
      return false;
    } else if (!validator.isMobilePhone(phoneNumber)) {
      dispatch(setErrorAction('DashboardProfilePage.Mobile-Need'));
      return false;
    } else if (address.length <= 2) {
      dispatch(setErrorAction('DashboardProfilePage.Mobile-Need'));
      return false;
    }
    /*
    else if (!validator.isTaxID(fiscalNumber, locale)) {
      dispatch(setErrorAction('RegisterPage.Fiscal-NotValid'));
      return false;
    }
    */

    dispatch(removeErrorAction());
    // TODO eliminar cuando este verificado
    console.log(formValues, '<-- Viedon formValues');

    return true;
  };

  const handleUploadFile = () => {
    document.querySelector('#fileSelector').click();
  };

  const handleFileChange = event => {
    const file = event.target.files[0];

    if (file) dispatch(uploadFileCloudinaryAction(file));
  };

  return (
    <MainLayout>
      <div className="container-fluid">
        <h1 className="h3 mb-4 text-gray-800">{t('NavBars.Profile')}:</h1>
        <h2 className="h4 mb-4 text-gray-600">
          {t('DashboardProfilePage.Incoming')}
        </h2>

        <div className="row mt-3 align-items-start minh-100">
          <div className="col-lg-2">
            <div className="text-left mb-3 mr-3">
              <img
                className="rounded-circle img-fluid rounded mx-auto d-block"
                width="152"
                height="141"
                alt=""
                src={photoURL ? photoURL : profile}
              />

              <div className="card mt-3 border-bottom-success text-center">
                <input
                  id="fileSelector"
                  name="file"
                  style={{ display: 'none' }}
                  type="file"
                  onChange={handleFileChange}
                />
                <Button disabled={loading} onClick={handleUploadFile}>
                  {t('DashboardProfilePage.Profile-Picture')}
                </Button>
              </div>
            </div>
          </div>

          {/* <!-- Content Column --> */}
          <div className="col-lg-9 mb-4 ml-3">
            {/* <!-- Project Card Example --> */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  {t('DashboardProfilePage.Profile-Data')}
                </h6>
              </div>
              <div className="card-body">
                <form onSubmit={handleChangeProfile}>
                  <div className="row">
                    <div className="col-lg-6">
                      <h6 className="font-weight-bold mt-3">
                        {t('DashboardProfilePage.FirtSurname')}:
                      </h6>
                      <InputText
                        text={`${t('DashboardProfilePage.FirtSurname')}...`}
                        name="firstSurname"
                        value={id}
                        onFocus={handlerOnFocus}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <h6 className="font-weight-bold mt-3">
                        {t('DashboardProfilePage.SecondSurname')}:
                      </h6>
                      <InputText
                        text={`${t('DashboardProfilePage.SecondSurname')}...`}
                        name="secondSurname"
                        value={foundation}
                        onFocus={handlerOnFocus}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/*  */}
                    <div className="col-lg-6">
                      <h6 className="font-weight-bold mt-3">
                        {t('DashboardProfilePage.FirtSurname')}:
                      </h6>
                      <InputText
                        text={`${t('DashboardProfilePage.FirtSurname')}...`}
                        name="firstSurname"
                        value={id}
                        onFocus={handlerOnFocus}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <h6 className="font-weight-bold mt-3">
                        {t('DashboardProfilePage.SecondSurname')}:
                      </h6>
                      <InputText
                        text={`${t('DashboardProfilePage.SecondSurname')}...`}
                        name="secondSurname"
                        value={foundation}
                        onFocus={handlerOnFocus}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/*  */}
                    <div className="col-lg-6">
                      <h6 className="font-weight-bold mt-3">
                        {t('DashboardProfilePage.FirtSurname')}:
                      </h6>
                      <InputText
                        text={`${t('DashboardProfilePage.FirtSurname')}...`}
                        name="firstSurname"
                        value={id}
                        onFocus={handlerOnFocus}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <h6 className="font-weight-bold mt-3">
                        {t('DashboardProfilePage.SecondSurname')}:
                      </h6>
                      <InputText
                        text={`${t('DashboardProfilePage.SecondSurname')}...`}
                        name="secondSurname"
                        value={foundation}
                        onFocus={handlerOnFocus}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <h6 className="font-weight-bold mt-3">
                    {t('DashboardProfilePage.Fiscal')}:
                  </h6>
                  <InputText
                    text={`${t('DashboardProfilePage.Fiscal')}...`}
                    name="fiscalNumber"
                    value={president}
                    onFocus={handlerOnFocus}
                    onChange={handleInputChange}
                    required
                  />
                  <h6 className="font-weight-bold mt-3">
                    {t('DashboardProfilePage.Fiscal')}:
                  </h6>
                  <InputText
                    text={`${t('DashboardProfilePage.Fiscal')}...`}
                    name="fiscalNumber"
                    value={president}
                    onFocus={handlerOnFocus}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="mt-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      {t('DashboardProfilePage.Contact-Information')}:
                    </h6>
                  </div>
                  <hr />
                  <MessageError msgError={msgError} />
                  <div className="row">
                    <div className="col-6">
                      <Button
                        type="submit"
                        variant="alert"
                        startIcon="fas fa-id-card"
                        disabled={loading}
                      >
                        {' '}
                        Eliminar...
                      </Button>
                    </div>
                    <div className="col-6">
                      <Button
                        type="submit"
                        variant="primary"
                        startIcon="fas fa-id-card"
                        disabled={loading}
                      >
                        {' '}
                        {t('DashboardProfilePage.Update-Profile')}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};