// eslint-disable
import React from 'react';
import { useTranslation } from 'react-i18next';
import profile from '../../assets/img/undraw_profile.svg';

import MainLayout from '../layout/MainLayout';
import { InputText } from '../basicComponents/InputText';
import { useForm } from '../../hooks/useForm';
import { MessageError } from '../parts/MessageError';
import { Button } from '../basicComponents/Button';
import { useSelector } from 'react-redux';
import { getMsgError, getUserAuth } from '../../store/selectors';

export const DashboardProfilePage = ({ handlerOnFocus }) => {
  const { t } = useTranslation('global');

  const { msgError, loading } = useSelector(getMsgError);

  const { displayName, phoneNumber, photoURL, email } = useSelector(
    getUserAuth
  );

  const user = useSelector(getUserAuth);
  console.log(user);

  const [formValues, handleInputChange] = useForm({
    username: displayName,
    email: email,
    firstsurname: '',
    secondsurname: '',
    fiscalNumber: '',
    address: '',
    mobile: phoneNumber,
    phone: '',
    photo: photoURL,
  });

  const {
    username,
    firstSurname,
    secondSurname,
    emailUser,
    fiscalNumber,
    address,
    phone,
    mobile,
  } = formValues;

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

              {/* TODO Colocar input y preparar subida de imagenes */}
              <div class="card mt-3 border-bottom-success text-center">
                <Button class="card-body">
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
                <h6 className="font-weight-bold">{t('RegisterPage.Name')}:</h6>
                <form>
                  <InputText
                    text={t(displayName ? displayName : 'RegisterPage.Name')}
                    name="username"
                    value={username}
                    onFocus={handlerOnFocus}
                    onChange={handleInputChange}
                  />

                  <h6 className="font-weight-bold mt-3">
                    {t('LoginPage.Enter-Mail')}:
                  </h6>
                  <InputText
                    text={t(email ? email : 'LoginPage.Enter-Mail')}
                    name="email"
                    value={email}
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
                    <div className="col-lg-4">
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
                    <div className="col-lg-4">
                      <h6 className="font-weight-bold mt-3">
                        {t('DashboardProfilePage.Mobile')}:
                      </h6>
                      <InputText
                        text={`${t('DashboardProfilePage.Mobile')}...`}
                        name="mobile"
                        value={mobile}
                        onFocus={handlerOnFocus}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-lg-4">
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
                  <hr />

                  <MessageError msgError={msgError} />

                  <Button
                    type="submit"
                    variant="primary"
                    startIcon="fas fa-id-card"
                    disabled={loading}
                  >
                    {' '}
                    {t('DashboardProfilePage.Update-Profile')}
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
