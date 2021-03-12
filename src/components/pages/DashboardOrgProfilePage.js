import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'reactstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DateTimePicker from 'react-datetime-picker';

import profile from '../../assets/img/undraw_posting_photo.svg';
import { MainLayout } from '../layout/MainLayout';
import { InputText } from '../basicComponents/InputText';
import { useForm } from '../../hooks/useForm';
import { MessageError } from '../parts/MessageError';
import { Button } from '../basicComponents/Button';
import { getLanguaje, getUiState } from '../../store/selectors';
import { removeErrorAction, setErrorAction } from '../../store/actions/ui';
import { setAlertAction } from '../../store/actions/swal';
import {
  saveOrgDB,
  getAllUsers,
  getOrgsById,
  removeOrgsById,
  updateOrgDB,
} from '../../api';
import { useUploadCloudinary } from '../../hooks/useUploadCloudinary';

export const DashboardOrgProfilePage = ({ handlerOnFocus }) => {
  const { t } = useTranslation('global');
  const history = useHistory();

  const dispatch = useDispatch();

  const location = useLocation();
  const queryParmas = new URLSearchParams(location.search);
  const orgId = queryParmas.get('org');

  const { languaje } = useSelector(getLanguaje);

  const { msgError, loading } = useSelector(getUiState);

  // eslint-disable-next-line
  // const { locale } = useSelector(getLocale);

  const [userSelect, setUserSelect] = useState();

  useEffect(() => {
    if (orgId) {
      getOrgsById(orgId)
        .then(date => {
          const {
            address,
            city,
            country,
            fiscalYear,
            foundationDate,
            name,
            photoURL,
            president,
            province,
          } = date;
          setFormValues({
            address,
            city,
            country,
            fiscalYear,
            foundationDate: new Date(foundationDate),
            name,
            photoURL,
            president,
            province,
            orgId,
          });
        })
        .catch(error => console.log(error));
    }
  }, [orgId]);

  const {
    formValues,
    handleInputChange,
    setFormValues,
    setFieldValue,
  } = useForm({
    name: '',
    address: '',
    president: '',
    foundationDate: '',
    country: '',
    province: '',
    city: '',
    photoURL: '',
  });

  const {
    name,
    address,
    president,
    foundationDate,
    country,
    province,
    city,
    photoURL,
  } = formValues;

  useEffect(() => {
    // TODO sacar el jsx mantener el estado al minimo...
    getAllUsers().then(data => {
      const users = (
        <>
          {data.map(userPresident => (
            <option key={userPresident.id} value={userPresident.id}>
              {userPresident.fullName}
            </option>
          ))}
        </>
      );
      setUserSelect(users);
    });
  }, []);

  // TODO ver el temade las fechas
  // console.log({ foundationDate }, '<-- foundationDate');
  const handleDateChange = event => {
    setFormValues({
      ...formValues,
      foundationDate: event,
    });
  };

  const handleChangeProfile = async event => {
    event.preventDefault();

    if (isFormChangeProfileValid()) {
      // Enviar al Back en un Objeto..
      // TODO enviar este objeto al back
      // user: { uid, displayName, email, phonNumber, photURL, role }
      try {
        //Saved-Org
        await saveOrgDB(formValues);

        dispatch(
          setAlertAction(
            'ErrorSwal.Success',
            'DashboardOrgProfilePage.Saved-Org',
            'success'
          )
        );
        //history.push('/admin');
      } catch (error) {
        console.log({ error });
        dispatch(
          setAlertAction(
            'ErrorSwal.Error',
            'DashboardOrgProfilePage.Save-Error',
            'success'
          )
        );
      }
    }
  };

  const handleDeleteorg = event => {
    event.preventDefault();
    removeOrgsById(orgId);
    dispatch(
      setAlertAction(
        'ErrorSwal.Success',
        'DashboardOrgProfilePage.Remove-Org',
        'success'
      )
    );
    history.push('/admin');
  };

  const isFormChangeProfileValid = () => {
    if (name.length <= 2) {
      dispatch(setErrorAction('RegisterPage.Name-Required'));
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
        <h1 className="h3 mb-3 text-gray-800">
          {t('DashboardOrgProfilePage.Dashboard-Organization')}:
        </h1>

        <p className="h5 mb-4">{t('DashboardOrgProfilePage.Info')}</p>

        <div className="row mt-3 align-items-start minh-100">
          <div className="col-lg-2">
            <div className="text-left mb-3 mr-3">
              <img
                className="rounded-circle img-fluid rounded mx-auto d-block"
                width="152"
                height="141"
                alt=""
                // TODO Usar imagen de organizacion.
                src={photoURL || profile}
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
                        {t('DashboardSuperAdminPage.Name')}:
                      </h6>
                      <InputText
                        text={`${t('DashboardSuperAdminPage.Name')}...`}
                        name="name"
                        value={name}
                        onFocus={handlerOnFocus}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      {/* //TODO Debe ser un DateTimePicker */}
                      <h6 className="font-weight-bold mt-3">
                        {t('DashboardSuperAdminPage.Foundation')}:
                      </h6>
                      <DateTimePicker
                        className="form-control react-datetime-picker"
                        locale={languaje}
                        format="dd,MM,y"
                        value={foundationDate}
                        onChange={handleDateChange}
                      />
                    </div>
                    {/*  */}
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
                        {t('DashboardSuperAdminPage.Province')}:
                      </h6>
                      <InputText
                        text={`${t('DashboardSuperAdminPage.Province')}...`}
                        name="province"
                        value={province}
                        onFocus={handlerOnFocus}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-lg-6">
                      <h6 className="font-weight-bold mt-3">
                        {t('DashboardSuperAdminPage.City')}:
                      </h6>
                      <InputText
                        text={`${t('DashboardSuperAdminPage.City')}...`}
                        name="city"
                        value={city}
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
                  <Input
                    type="select"
                    name="president"
                    id="president"
                    value={president}
                    onFocus={handlerOnFocus}
                    onChange={handleInputChange}
                    required
                  >
                    <option value=""></option>
                    {userSelect}
                  </Input>

                  <hr />
                  <MessageError msgError={msgError} />
                  <div className="row">
                    <div className="col-2">
                      <Link to="/admin">
                        <Button
                          type="submit"
                          variant="warning"
                          startIcon="fas fa-arrow-left"
                          disabled={loading}
                        >
                          {' '}
                          {t('DashboardOrgProfilePage.Back')}
                        </Button>
                      </Link>
                    </div>
                    <div className="col-5">
                      <Button
                        type="button"
                        variant="alert"
                        startIcon="fas fa-exclamation-triangle"
                        disabled={loading || !!orgId !== true}
                        onClick={handleDeleteorg}
                      >
                        {' '}
                        {t('DashboardOrgProfilePage.Delete-Org')}
                      </Button>
                    </div>
                    <div className="col-5">
                      <Button
                        type="submit"
                        variant="primary"
                        startIcon="fas fa-id-card"
                        disabled={loading}
                      >
                        {' '}
                        {!!orgId
                          ? t('DashboardOrgProfilePage.Upload-Org')
                          : t('DashboardOrgProfilePage.Created-Org')}
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
