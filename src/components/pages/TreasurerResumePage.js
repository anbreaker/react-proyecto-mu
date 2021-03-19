import React from 'react';
import { useTranslation } from 'react-i18next';

import { MainLayout } from '../layout/MainLayout';
import { InfoCards } from '../parts/InfoCards';

export const TreasurerResumePage = () => {
  const { t } = useTranslation('global');

  return (
    <MainLayout>
      <div className="container-fluid">
        <h1 className="h3 mb-3 text-gray-800">
          {t('TreasurerResumePage.Treasurer-Resume')}
        </h1>

        <p className="h5 mb-4">{t('TreasurerResumePage.Info')}</p>

        <div className="row">
          {/* TODO GRAFICA */}

          <div className="col-xl-12 col-lg-7">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  {/* TODO Graficas etc... */}
                  Crear Graficas...
                </h6>
              </div>
              <div className="card-body">
                <div className="chart-area">
                  <div className="chartjs-size-monitor">
                    <div className="chartjs-size-monitor-expand">
                      <div className=""></div>
                    </div>
                    <div className="chartjs-size-monitor-shrink">
                      <div className=""></div>
                    </div>
                  </div>
                  <canvas
                    id="myAreaChart"
                    width="849"
                    height="360"
                    className="chartjs-render-monitor"
                  ></canvas>
                </div>
                <hr />
                Styling for the area chart can be found in the
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="row">
          <InfoCards
            text={t('TreasurerResumePage.Income')}
            variantBorder={'border-bottom-success'}
            variantText={'text-success'}
          />

          <InfoCards
            text={t('TreasurerResumePage.Expenses')}
            variantBorder={'border-bottom-danger'}
            variantText={'text-danger'}
          />

          <InfoCards
            text={t('TreasurerResumePage.Net')}
            variantBorder={'border-bottom-info'}
            variantText={'text-info'}
          />
        </div>

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
    </MainLayout>
  );
};
