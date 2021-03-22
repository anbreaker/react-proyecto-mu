import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link, useHistory } from 'react-router-dom';
import { Input } from 'reactstrap';
import clsx from 'clsx';
import Select from 'react-select';

import profile from '../../assets/img/undraw_profile.svg';
import { MainLayout } from '../layout/MainLayout';
import { InputText } from '../basicComponents/InputText';
import { useForm } from '../../hooks/useForm';
import { MessageError } from '../parts/MessageError';
import { Button } from '../basicComponents/Button';
import {
  // getLocale,
  getUiState,
  getUserAuth,
  userStatus,
} from '../../store/selectors';
import {
  removeErrorAction,
  setErrorAction,
  startLoadingAction,
  finishLoadingAction,
} from '../../store/actions/ui';
import { setAlertAction } from '../../store/actions/swal';
import { updateProfileAction } from '../../store/actions/auth';
import { useUploadCloudinary } from '../../hooks/useUploadCloudinary';
import { getSingleUser, saveUserDB, getAllOrgs } from '../../api/index';

export const DashboardProfilePage = ({ handlerOnFocus }) => {
  const { t } = useTranslation('global');
  const dispatch = useDispatch();
  const history = useHistory();

  const uStatus = useSelector(userStatus);

  const [allOrgs, setAllOrgs] = useState({});
  const [orgsUser, setOrgsUser] = useState([]);

  const roles = ['Member', 'Treasurer', 'President', 'Secretary', 'SuperAdmin'];

  const location = useLocation();
  const queryParmas = new URLSearchParams(location.search);
  const userId = queryParmas.get('user');

  const { msgError, loading } = useSelector(getUiState);

  const currentUser = useSelector(getUserAuth);

  const descompone = ({
    displayName,
    firstSurname,
    secondSurname,
    email,
    fiscalNumber,
    photoURL,
    contact,
    role,
  }) => ({
    displayName,
    firstSurname,
    secondSurname,
    email,
    fiscalNumber,
    photoURL,
    role,
    address: contact && contact.address,
    mobile: contact && contact.mobile,
    phone: contact && contact.homePhone,
  });

  const {
    formValues,
    handleInputChange,
    setFieldValue,
    setFormValues,
  } = useForm({});

  const {
    displayName,
    firstSurname,
    secondSurname,
    email,
    fiscalNumber,
    address,
    mobile,
    phone,
    photoURL,
    role: rol,
  } = formValues;

  useEffect(() => {
    if (userId) {
      dispatch(startLoadingAction());
      getSingleUser(userId).then(user => {
        setFormValues(descompone(user));
        getAllOrgs()
          .then(data => {
            const orgsArray = [];
            data.map(org =>
              orgsArray.push({ value: org._id, label: org.name })
            );
            const orgsFiltered = orgsArray.filter(
              org => user.organizations.findIndex(o => o._id === org.value) >= 0
            );
            setOrgsUser(orgsFiltered);
            setAllOrgs(orgsArray);
          })
          .finally(() => {
            dispatch(finishLoadingAction());
          });
      });

      return;
    }
    setFormValues(descompone(currentUser));
  }, [userId]);

  const handleChangeProfile = event => {
    event.preventDefault();

    if (isFormChangeProfileValid()) {
      if (!userId) {
        // Si viene el userId entonces lo está editando un admin y no debe despachar la acción
        dispatch(updateProfileAction(formValues));
        return;
      }
      // Si viene el userId se llama directo a la api
      formValues.orgs = orgsUser;
      saveUserDB(formValues)
        .then(() => {
          dispatch(
            setAlertAction(
              'ErrorSwal.Success',
              'ErrorSwal.SuccessUpdateProfile',
              'success'
            )
          );
          history.push('/users-admin');
        })
        .catch(err => {
          dispatch(
            setAlertAction('ErrorSwal.Error', `ErrorSwal.${err.code}`, 'error')
          );
        });
    }
  };

  const isFormChangeProfileValid = () => {
    if (displayName.length <= 2) {
      dispatch(setErrorAction('RegisterPage.Name-Required'));
      return false;
    } else if (firstSurname.length <= 2) {
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
        <h1 className="h3 mb-3 text-gray-800">{t('NavBars.Profile')}:</h1>

        <p className="h5 mb-4">
          {uStatus === 'NotRegistered'
            ? t('DashboardProfilePage.Incoming')
            : ''}
        </p>

        <div className="row mt-3 align-items-start minh-100">
          <div className="col-lg-2">
            <div className="text-left mb-3 mr-3">
              <img
                className="rounded-circle img-fluid rounded mx-auto d-block"
                width="152"
                height="141"
                alt=""
                src={photoURL || profile}
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
                <h6 className="font-weight-bold">
                  {t('DashboardProfilePage.EmailUser')}
                </h6>
                <form onSubmit={handleChangeProfile}>
                  <InputText
                    text={t(email)}
                    name="email"
                    value={email}
                    disabled
                  />
                  <h6 className="font-weight-bold mt-3">
                    {t('RegisterPage.Name')}:
                  </h6>
                  <InputText
                    text={t(displayName || 'RegisterPage.Name')}
                    name="displayName"
                    value={displayName}
                    onFocus={handlerOnFocus}
                    onChange={handleInputChange}
                  />
                  <div className="row">
                    <div className="col-lg-6">
                      <h6 className="font-weight-bold mt-3">
                        {t('DashboardProfilePage.FirtSurname')}:
                      </h6>
                      <InputText
                        text={`${t('DashboardProfilePage.FirtSurname')}...`}
                        name="firstSurname"
                        value={firstSurname}
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
                        value={secondSurname}
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
                    value={fiscalNumber}
                    onFocus={handlerOnFocus}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="mt-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      {t('DashboardProfilePage.Contact-Information')}:
                    </h6>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <h6 className="font-weight-bold mt-3">
                        {t('DashboardProfilePage.Address')}:
                      </h6>
                      <InputText
                        text={`${t('DashboardProfilePage.Address')}...`}
                        name="address"
                        value={address}
                        onFocus={handlerOnFocus}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <h6 className="font-weight-bold mt-3">
                        {t('DashboardProfilePage.Mobile')}:
                      </h6>
                      <InputText
                        text={`${t('DashboardProfilePage.Mobile')}...`}
                        name="mobile"
                        value={mobile || ''}
                        required
                        onFocus={handlerOnFocus}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-6">
                      <h6 className="font-weight-bold mt-3">
                        {t('DashboardProfilePage.Telephone')}:
                      </h6>
                      <InputText
                        text={`${t('DashboardProfilePage.Telephone')}...`}
                        name="phone"
                        value={phone}
                        onFocus={handlerOnFocus}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {currentUser.id !== userId && userId && (
                    <>
                      <hr />

                      <h6 className="m-0 font-weight-bold text-primary">
                        {t('DashboardProfilePage.Role')}
                      </h6>

                      <Input
                        className="mt-3"
                        type="select"
                        name="role"
                        id="role"
                        value={rol}
                        onChange={handleInputChange}
                        onFocus={handlerOnFocus}
                      >
                        {roles.map(rol => (
                          <option key={rol} value={rol}>
                            {rol}
                          </option>
                        ))}
                      </Input>
                    </>
                  )}

                  {userId && (
                    <>
                      <hr />
                      <div className="mt-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                          {t('DashboardProfilePage.Organizations')}
                        </h6>
                        <div className="row mt-3">
                          <div className="col-12">
                            <Select
                              value={orgsUser}
                              isMulti
                              placeholder={t(
                                'DashboardProfilePage.PlaceHolder-Select'
                              )}
                              name="orgSelect"
                              options={allOrgs}
                              className="basic-multi-select"
                              classNamePrefix="select"
                              onChange={values => setOrgsUser(values)}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  <hr />
                  <MessageError msgError={msgError} />
                  <div className="row">
                    <div className={clsx(userId ? 'col-4' : 'd-none')}>
                      {' '}
                      <Link to="/users-admin" className="text-decoration-none">
                        <Button
                          type="submit"
                          variant="warning"
                          startIcon="fas fa-arrow-left"
                          disabled={loading}
                        >
                          {t('DashboardOrgProfilePage.Back')}
                        </Button>
                      </Link>
                    </div>
                    <div className={clsx(userId ? 'col-8' : 'col-12')}>
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
