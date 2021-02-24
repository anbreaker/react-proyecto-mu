// eslint-disable
import React from 'react';
import { useTranslation } from 'react-i18next';
import { InputText } from '../basicComponents/InputText';
import profile from '../../assets/img/undraw_profile.svg';

import MainLayout from '../layout/MainLayout';

export const DashboardProfilePage = ({ handlerOnFocus }) => {
  const { t } = useTranslation('global');

  return (
    <MainLayout>
      <div className="container-fluid">
        <h1 className="h3 mb-4 text-gray-800">{t('NavBars.Profile')}:</h1>
        <h2 className="h4 mb-4 text-gray-600">
          {t('DashboardProfilePage.Incoming')}
        </h2>

        <div className="row mt-3">
          <div className="col-lg-2">
            <div class="text-left mb-3 mr-3">
              <img
                className="img-profile rounded-circle"
                width="304"
                height="236"
                alt=""
                src={profile}
              />
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
                <InputText
                  text={t('RegisterPage.Name')}
                  name="username"
                  // value={username}
                  onFocus={handlerOnFocus}
                  // onChange={handleInputChange}
                />
                <div className="row">
                  <div className="col-lg-6">
                    <h6 className="font-weight-bold mt-3">
                      {t('DashboardProfilePage.FirtSurname')}
                    </h6>
                    <InputText />
                  </div>
                  <div className="col-lg-6">
                    <h6 className="font-weight-bold mt-3">
                      {t('DashboardProfilePage.SecondSurname')}
                    </h6>
                    <InputText />
                  </div>
                </div>

                <h6 className="font-weight-bold mt-3">Numero Fiscal:</h6>
                <InputText />

                <div className="mt-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Información de Contacto:
                  </h6>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <h6 className="font-weight-bold mt-3">Direccion:</h6>
                    <InputText />
                  </div>
                  <div className="col-lg-4">
                    <h6 className="font-weight-bold mt-3">Telefono:</h6>
                    <InputText />
                  </div>
                  <div className="col-lg-4">
                    <h6 className="font-weight-bold mt-3">Movil:</h6>
                    <InputText />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
