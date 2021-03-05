import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button } from '../basicComponents/Button';

import { Search } from '../basicComponents/Search';
import { getMsgError } from '../../store/selectors';
import { MainLayout } from '../layout/MainLayout';

export const SecretaryMeetingsPage = () => {
  const { t } = useTranslation('global');

  const { loading } = useSelector(getMsgError);

  return (
    <MainLayout>
      <div className="container-fluid">
        <h1 className="h3 mb-3 text-gray-800">
          {t('SecretaryMeetingsPage.SecretaryMeetings')}
        </h1>

        <p className="h5 mb-4">{t('SecretaryMeetingsPage.Info')}</p>

        <div className="row">
          <div className="col-9">
            <Search text={t('TreasurerResumePage.Filter')} variant="success" />
          </div>

          <div className="col-3">
            <Button
              variant="success"
              startIcon="fas fa-plus-circle"
              disabled={loading}
            >
              {' '}
              {t('SecretaryMeetingsPage.New-Meeting')}
            </Button>
          </div>
        </div>

        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4 mt-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              {t('DashboardSuperAdminPage.Organizations')}
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead className="font-weight-bold text-info">
                  <tr>
                    <th>{t('SecretaryMeetingsPage.Date')}</th>
                    <th>{t('SecretaryMeetingsPage.Assistants')}</th>
                    <th>{t('SecretaryMeetingsPage.View-Details')}</th>
                  </tr>
                </thead>
                <tfoot className="font-weight-bold text-info">
                  <tr>
                    <th>{t('SecretaryMeetingsPage.Date')}</th>
                    <th>{t('SecretaryMeetingsPage.Assistants')}</th>
                    <th>{t('SecretaryMeetingsPage.View-Details')}</th>
                  </tr>
                </tfoot>

                {/* // TODO crear tabla dinamica... */}

                <tbody>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                  </tr>
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.container-fluid -->  */}
    </MainLayout>
  );
};
