import React from 'react';
import { useTranslation } from 'react-i18next';

import MainLayout from '../layout/MainLayout';

export const DashboardSuperAdminPage = () => {
  const { t } = useTranslation('global');

  return (
    <MainLayout>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <h1 className="h3 mb-2 text-gray-800">
          {t('DashboardSuperAdminPage.Organizations')}
        </h1>
        <p className="mb-4">{t('DashboardSuperAdminPage.Info-Page')}</p>

        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
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
                    <th>{t('DashboardSuperAdminPage.Id')}</th>
                    <th>{t('DashboardSuperAdminPage.Name')}</th>
                    <th>{t('DashboardSuperAdminPage.Address')}</th>
                    <th>{t('DashboardSuperAdminPage.President')}</th>
                    <th>{t('DashboardSuperAdminPage.Mobile')}</th>
                    <th>{t('DashboardSuperAdminPage.Foundation')}</th>
                  </tr>
                </thead>
                <tfoot className="font-weight-bold text-info">
                  <tr>
                    <th>{t('DashboardSuperAdminPage.Id')}</th>
                    <th>{t('DashboardSuperAdminPage.Name')}</th>
                    <th>{t('DashboardSuperAdminPage.Address')}</th>
                    <th>{t('DashboardSuperAdminPage.President')}</th>
                    <th>{t('DashboardSuperAdminPage.Mobile')}</th>
                    <th>{t('DashboardSuperAdminPage.Foundation')}</th>
                  </tr>
                </tfoot>

                {/* // TODO crear tabla dinamica... */}

                <tbody>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                  </tr>
                  <tr>
                    <td>Ashton Cox</td>
                    <td>Junior Technical Author</td>
                    <td>San Francisco</td>
                    <td>66</td>
                    <td>2009/01/12</td>
                    <td>$86,000</td>
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
