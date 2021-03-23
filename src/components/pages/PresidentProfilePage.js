import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import validator from 'validator';
import profile from '../../assets/img/undraw_posting_photo.svg';

import { MainLayout } from '../layout/MainLayout';
import { InputText } from '../basicComponents/InputText';
import { useForm } from '../../hooks/useForm';
import { MessageError } from '../parts/MessageError';
import { Button } from '../basicComponents/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getLocale, getUiState } from '../../store/selectors';
import { removeErrorAction, setErrorAction } from '../../store/actions/ui';
import { useUploadCloudinary } from '../../hooks/useUploadCloudinary';
import client from '../../api/client';

export const PresidentProfilePage = ({ handlerOnFocus }) => {
  const { t } = useTranslation('global');
  const dispatch = useDispatch();

  const { msgError, loading } = useSelector(getUiState);
  // eslint-disable-next-line
  const { locale } = useSelector(getLocale);

  const {
    formValues,
    handleInputChange,
    setFormValues,
    setFieldValue,
  } = useForm({
    id: '',
    displayName: '',
    address: '',
    mobile: '',
    foundation: '',
    president: '',
    treasurer: '',
    secretary: '',
    country: '',
    postCode: '',
    imgFoundation: '',
  });

  const {
    id,
    displayName,
    address,
    mobile,
    foundation,
    president,
    treasurer,
    secretary,
    country,
    postCode,
    imgFoundation,
  } = formValues;

  useEffect(() => {
    setFormValues({ ...formValues });
  }, []);

  const handleChangeProfile = event => {
    event.preventDefault();

    if (isFormChangeProfileValid()) {
      // Enviar al Back en un Objeto..
      // TODO enviar este objeto al back
      // user: { uid, displayName, email, phonNumber, photURL, role }

      client
        .post('/user', formValues)
        .then(res => console.log({ res }))
        .catch(err => console.log({ err }));
    }
  };

  const isFormChangeProfileValid = () => {
    if (displayName.length <= 2) {
      dispatch(setErrorAction('RegisterPage.Name-Required'));
      return false;
    } else if (id.length <= 2) {
      dispatch(setErrorAction('DashboardProfilePage.FirstSurname-Required'));
      return false;
    } else if (!validator.isMobilePhone(mobile)) {
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

  const handleFileChange = async event => {
    event.preventDefault();
    // customHook Function
    const uploadFile = useUploadCloudinary();

    const urlFile = await uploadFile(event.target.files[0], dispatch);
    setFieldValue('photoURL', urlFile);
  };

  return (
    <MainLayout>
      <div className="container-fluid">
        <h1 className="h3 mb-4 text-gray-800">{t('NavBars.Profile')}:</h1>

        <p className="h5 mb-4">{t('PresidentProfilePage.Info')}</p>

        <div className="row mt-3 align-items-start minh-100">
          <div className="col-lg-2">
            <div className="text-left mb-3 mr-3">
              <img
                className="rounded-circle img-fluid rounded mx-auto d-block"
                width="152"
                height="141"
                alt=""
                src={imgFoundation || profile}
              />

              <div className="card mt-3 border-bottom-success text-center">
                <input
                  id="fileSelector"
                  name="file"
                  style={{ display: 'none' }}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  hidden
                />
                <Button disabled={loading} onClick={handleUploadFile}>
                  {t('DashboardProfilePage.Profile-Picture')}
                </Button>
              </div>
            </div>
          </div>

          <div className="col-lg-9 mb-4 ml-3">
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
                        {t('DashboardSuperAdminPage.Name')}:
                      </h6>
                      <InputText
                        text={`${t('DashboardSuperAdminPage.Name')}...`}
                        name="displayName"
                        value={displayName}
                        onFocus={handlerOnFocus}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <h6 className="font-weight-bold mt-3">
                        {t('DashboardSuperAdminPage.Org-Id')}:
                      </h6>
                      <InputText
                        text={`${t('DashboardSuperAdminPage.Org-Id')}...`}
                        name="id"
                        value={id}
                        onFocus={handlerOnFocus}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-lg-6">
                      <h6 className="font-weight-bold mt-3">
                        {t('DashboardSuperAdminPage.Mobile')}:
                      </h6>
                      <InputText
                        text={`${t('DashboardSuperAdminPage.Mobile')}...`}
                        name="mobile"
                        value={mobile}
                        onFocus={handlerOnFocus}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <h6 className="font-weight-bold mt-3">
                        {t('DashboardSuperAdminPage.Foundation')}:
                      </h6>
                      <InputText
                        text={`${t('DashboardSuperAdminPage.Foundation')}...`}
                        name="foundation"
                        value={foundation}
                        onFocus={handlerOnFocus}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-lg-6">
                      <h6 className="font-weight-bold mt-3">
                        {t('DashboardSuperAdminPage.Country')}:
                      </h6>
                      <InputText
                        text={`${t('DashboardSuperAdminPage.Country')}...`}
                        name="country"
                        value={country}
                        onFocus={handlerOnFocus}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <h6 className="font-weight-bold mt-3">
                        {t('DashboardSuperAdminPage.Post-Code')}:
                      </h6>
                      <InputText
                        text={`${t('DashboardSuperAdminPage.Post-Code')}...`}
                        name="postCode"
                        value={postCode}
                        onFocus={handlerOnFocus}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <h6 className="font-weight-bold mt-3">
                    {t('DashboardSuperAdminPage.Address')}:
                  </h6>
                  <InputText
                    text={`${t('DashboardSuperAdminPage.Address')}...`}
                    name="address"
                    value={address}
                    onFocus={handlerOnFocus}
                    onChange={handleInputChange}
                    required
                  />

                  <h6 className="font-weight-bold mt-3">
                    {t('DashboardSuperAdminPage.President')}:
                  </h6>
                  <InputText
                    text={`${t('DashboardSuperAdminPage.President')}...`}
                    name="president"
                    value={president}
                    onFocus={handlerOnFocus}
                    onChange={handleInputChange}
                    required
                  />

                  <h6 className="font-weight-bold mt-3">
                    {t('NavBars.Treasurer')}:
                  </h6>
                  <InputText
                    text={`${t('NavBars.Treasurer')}...`}
                    name="treasurer"
                    value={treasurer}
                    onFocus={handlerOnFocus}
                    onChange={handleInputChange}
                    required
                  />

                  <h6 className="font-weight-bold mt-3">
                    {t('NavBars.Secretary')}:
                  </h6>
                  <InputText
                    text={`${t('NavBars.Secretary')}...`}
                    name="secretary"
                    value={secretary}
                    onFocus={handlerOnFocus}
                    onChange={handleInputChange}
                    required
                  />

                  <hr />
                  <MessageError msgError={msgError} />

                  <Button
                    type="submit"
                    variant="primary"
                    startIcon="fas fa-id-card"
                    disabled={loading}
                  >
                    {' '}
                    {t('PresidentProfilePage.Save')}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
