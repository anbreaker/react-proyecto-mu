// eslint-disable
import React from 'react';
import { useTranslation } from 'react-i18next';

import { MainLayout } from '../layout/MainLayout';
import { CardsProfile } from '../parts/CardsProfile';
import { ContactAdmin } from '../parts/ContactAdmin';
import { InfoCards } from '../parts/InfoCards';

export const Dashboard = ({ handlerOnFocus }) => {
  const { t } = useTranslation('global');

  return (
    <MainLayout>
      <div className="container-fluid">
        <h1 className="h3 mb-4 text-gray-800">{t('Dashboard.Welcome')}</h1>

        <p className="h5 mb-4">{t('Dashboard.Resume')}</p>

        <CardsProfile />

        <div className="row">
          <InfoCards
            text={t('Dashboard.Annual-Fee')}
            variantBorder={'border-bottom-danger'}
            variantText={'text-danger'}
            quantity={'1200'}
          />

          <InfoCards
            text={t('Dashboard.Payments')}
            variantBorder={'border-bottom-success'}
            variantText={'text-success'}
            quantity={'200'}
          />

          <InfoCards
            text={t('Dashboard.Balance')}
            variantBorder={'border-bottom-info'}
            variantText={'text-info'}
            quantity={'1000'}
          />
        </div>
      </div>

      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead className="font-weight-bold text-primary">
              <tr>
                <th>{t('Dashboard.Payments')}</th>
                <th>{t('Dashboard.Date-Pay')}</th>
                <th>{t('DashboardSuperAdminPage.Address')}</th>
              </tr>
            </thead>
            <tfoot className="font-weight-bold text-primary">
              <tr>
                <th>{t('Dashboard.Payments')}</th>
                <th>{t('Dashboard.Date-Pay')}</th>
                <th>{t('DashboardSuperAdminPage.Address')}</th>
              </tr>
            </tfoot>

            {/* // TODO crear tabla dinamica... */}

            <tbody>
              <tr>
                <td>Tiger Nixon</td>
                <td>14-03-2021</td>
                <td>Edinburgh</td>
              </tr>
              <tr>
                <td>Garrett Winters</td>
                <td>14-03-2021</td>
                <td>Tokyo</td>
              </tr>
              <tr>
                <td>Ashton Cox</td>
                <td>14-03-2021</td>
                <td>San Francisco</td>
              </tr>
            </tbody>
          </table>

          <hr />
          <ContactAdmin handlerOnFocus={handlerOnFocus} />
        </div>
      </div>
    </MainLayout>
  );
};
