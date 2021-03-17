import React from 'react';
import { useTranslation } from 'react-i18next';

export const CardsProfile = () => {
  const { t } = useTranslation('global');
  const name = 'mirar';

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            {t('DashboardOrgProfilePage.Data-Org')}
          </h6>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col-3">
                  <h6 className="font-weight-bold mt-3">
                    {t('Dashboard.Name')}:
                  </h6>
                  <p>{`${t('Dashboard.Name')}...`}</p>
                </div>
                <div className="col-3">
                  <h6 className="font-weight-bold mt-3">
                    {t('Dashboard.Foundation')}:
                  </h6>
                  <p> {t('Dashboard.Foundation')}:</p>
                </div>
                <div className="col-3">
                  <h6 className="font-weight-bold mt-3">
                    {t('Dashboard.Country')}:
                  </h6>
                  <p> {t('Dashboard.Country')}:</p>
                </div>
                <div className="col-3">
                  <h6 className="font-weight-bold mt-3">
                    {t('Dashboard.Country')}:
                  </h6>
                  <p> {t('Dashboard.Country')}:</p>
                </div>
              </div>

              <div className="row">
                <div className="col-3">
                  <h6 className="font-weight-bold mt-3">
                    {t('Dashboard.City')}:
                  </h6>
                  <p> {t('Dashboard.City')}:</p>
                </div>
                <div className="col-3">
                  <h6 className="font-weight-bold mt-3">
                    {t('Dashboard.City')}:
                  </h6>
                  <p> {t('Dashboard.City')}:</p>
                </div>
                <div className="col-3">
                  <h6 className="font-weight-bold mt-3">
                    {t('Dashboard.Address')}:
                  </h6>
                  <p>{t('Dashboard.Address')}:</p>
                </div>
                <div className="col-3">
                  <h6 className="font-weight-bold mt-3">
                    {t('Dashboard.President')}:
                  </h6>
                  <p>{t('Dashboard.President')}:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
