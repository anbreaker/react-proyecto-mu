import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'reactstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DateTimePicker from 'react-datetime-picker';
import Swal from 'sweetalert2';
import { Spinner } from 'reactstrap';

import profile from '../../assets/img/undraw_posting_photo.svg';
import { MainLayout } from '../layout/MainLayout';
import { InputText } from '../basicComponents/InputText';
import { useForm } from '../../hooks/useForm';
import { MessageError } from '../parts/MessageError';
import { Button } from '../basicComponents/Button';
import {
  getLanguaje,
  getUiState,
  getUserRole,
  getUserOrgSel,
  getInternalUserId,
} from '../../store/selectors';
import {
  removeErrorAction,
  setErrorAction,
  startLoadingAction,
  finishLoadingAction,
} from '../../store/actions/ui';
import { setAlertAction } from '../../store/actions/swal';
import {
  saveOrgDB,
  getAllUsers,
  getOrgById,
  removeOrgsById,
  getUsersMyOrg,
} from '../../api';
import { useUploadCloudinary } from '../../hooks/useUploadCloudinary';
import ForbiddenCard from '../parts/ForbiddenCard';

export const DashboardOrgProfilePage = ({ handlerOnFocus }) => {
  const { t } = useTranslation('global');
  const history = useHistory();

  const dispatch = useDispatch();
  const userRole = useSelector(getUserRole);
  const selOrg = useSelector(getUserOrgSel);
  const userId = useSelector(getInternalUserId);

  const location = useLocation();
  const queryParmas = new URLSearchParams(location.search);
  const orgId = queryParmas.get('org');

  const { languaje } = useSelector(getLanguaje);
  const { msgError, loading } = useSelector(getUiState);
  const [userSelect, setUserSelect] = useState([]);
  const [forbiddenAccess, setForbiddenAccess] = useState(false);

  useEffect(() => {
    dispatch(startLoadingAction());
    getOrgById(orgId)
      .then(org => {
        setFormValues({
          ...org,
          orgId: orgId,
          foundationDate: new Date(org.foundationDate),
        });
        if (org.president != userId && userRole != 'SuperAdmin') {
          return setForbiddenAccess(true);
        }
        setForbiddenAccess(false);
      })
      .catch(error => console.log(error))
      .finally(() => {
        dispatch(finishLoadingAction());
      });
    return;
  }, [orgId, selOrg]);

  useEffect(() => {
    // Si el usuario es SuperAdmin se listan todos los usuarios en los select
    if (userRole === 'SuperAdmin') {
      getAllUsers()
        .then(data => {
          if (data.status === 'error') return setUserSelect([]);
          setUserSelect(data);
        })
        .catch(err => {
          console.log(err);
          setUserSelect([]);
        });
      return;
    }
    // Si el usuario es Presidente se listan sólo los usuarios de su organización en los select
    if (userRole === 'President') {
      getUsersMyOrg()
        .then(data => {
          if (data.status === 'error') return setUserSelect([]);
          setUserSelect(data);
        })
        .catch(err => {
          console.log(err);
          setUserSelect([]);
        });
      return;
    }
  }, []);

  const {
    formValues,
    handleInputChange,
    setFormValues,
    setFieldValue,
  } = useForm({
    name: '',
    address: '',
    president: '',
    treasurer: '',
    secretary: '',
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
    treasurer,
    secretary,
    foundationDate,
    country,
    province,
    city,
    photoURL,
  } = formValues;

  const handleDateChange = event => {
    setFormValues({
      ...formValues,
      foundationDate: event,
    });
  };

  const handleChangeProfile = async event => {
    event.preventDefault();

    if (isFormChangeProfileValid()) {
      dispatch(startLoadingAction());
      try {
        //Saved-Org
        if (userRole === 'President') {
          // Se debe indicar al back la organización a modificar
          formValues.orgId = selOrg.id;
        }
        await saveOrgDB(formValues);

        dispatch(
          setAlertAction(
            'ErrorSwal.Success',
            'DashboardOrgProfilePage.Saved-Org',
            'success'
          )
        );

        if (userRole === 'SuperAdmin') history.push('/admin');
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
      dispatch(finishLoadingAction());
    }
  };

  const handleDeleteorg = event => {
    event.preventDefault();
    Swal.fire({
      title: t('ErrorSwal.Confirmation-Sure'),
      text: t('ErrorSwal.Warning-undone'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: t('ErrorSwal.Confirm-Delete'),
      cancelButtonText: t('ErrorSwal.Confirm-Cancel'),
    }).then(result => {
      if (result.value) {
        removeOrgsById(orgId);
        dispatch(
          setAlertAction(
            'ErrorSwal.Success',
            'DashboardOrgProfilePage.Remove-Org',
            'success'
          )
        );
        history.push('/admin');
      }
    });
  };

  const isFormChangeProfileValid = () => {
    if (name.length <= 2) {
      dispatch(setErrorAction('RegisterPage.Name-Required'));
      return false;
    } else if (address.length <= 2) {
      dispatch(setErrorAction('DashboardProfilePage.Mobile-Need'));
      return false;
    } else if (!foundationDate) {
      dispatch(setErrorAction('DashboardOrgProfilePage.Foundation-Need'));
      return false;
    }

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
        <h1 className="h3 mb-3 text-gray-800">
          {t('DashboardOrgProfilePage.Dashboard-Organization')}:
        </h1>

        <p className="h5 mb-4">
          {userRole === 'President'
            ? t('DashboardOrgProfilePage.Info-President')
            : t('DashboardOrgProfilePage.Info')}
        </p>
        {forbiddenAccess ? (
          <ForbiddenCard text={t('App.ForbiddenAccess')} />
        ) : (
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

                      {userSelect &&
                        userSelect.map(user => (
                          <option key={user.id} value={user.id}>
                            {user.fullName}
                          </option>
                        ))}
                    </Input>
                    {orgId && (
                      <h6 className="font-weight-bold mt-3 text-warning">
                        {t('DashboardSuperAdminPage.Advise')}
                      </h6>
                    )}
                    <h6 className="font-weight-bold mt-3">
                      {t('DashboardSuperAdminPage.Treasurer')}:
                    </h6>
                    <Input
                      type="select"
                      name="treasurer"
                      id="treasurer"
                      value={treasurer}
                      onFocus={handlerOnFocus}
                      onChange={handleInputChange}
                      disabled={userRole != 'President'}
                    >
                      <option value=""></option>

                      {userSelect &&
                        userSelect.map(user => (
                          <option key={user.id} value={user.id}>
                            {user.fullName}
                          </option>
                        ))}
                    </Input>
                    <h6 className="font-weight-bold mt-3">
                      {t('DashboardSuperAdminPage.Secretary')}:
                    </h6>
                    <Input
                      type="select"
                      name="secretary"
                      id="secretary"
                      value={secretary}
                      onFocus={handlerOnFocus}
                      onChange={handleInputChange}
                      disabled={userRole != 'President'}
                    >
                      <option value=""></option>

                      {userSelect &&
                        userSelect.map(user => (
                          <option key={user.id} value={user.id}>
                            {user.fullName}
                          </option>
                        ))}
                    </Input>
                    <hr />
                    <MessageError msgError={msgError} />
                    <div className="row">
                      <div className="col-2">
                        <Link to="/admin" className="text-decoration-none">
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
                      <div className="col-5">
                        <Button
                          type="button"
                          variant="alert"
                          startIcon={!loading && 'fas fa-exclamation-triangle'}
                          disabled={loading || userRole !== 'SuperAdmin'}
                          onClick={handleDeleteorg}
                        >
                          {' '}
                          {loading ? (
                            <Spinner />
                          ) : (
                            t('DashboardOrgProfilePage.Delete-Org')
                          )}
                        </Button>
                      </div>
                      <div className="col-5">
                        <Button
                          type="submit"
                          variant="primary"
                          startIcon={!loading && 'fas fa-id-card'}
                          disabled={loading}
                        >
                          {' '}
                          {loading ? (
                            <Spinner />
                          ) : !!orgId ? (
                            t('DashboardOrgProfilePage.Upload-Org')
                          ) : (
                            t('DashboardOrgProfilePage.Created-Org')
                          )}
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};
