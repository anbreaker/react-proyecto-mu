import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button } from '../basicComponents/Button';

import { Search } from '../basicComponents/Search';
import { getUiState } from '../../store/selectors';
import { MainLayout } from '../layout/MainLayout';
import { Link, Redirect } from 'react-router-dom';
import { SelectYears } from '../basicComponents/SelectYears';
import { useForm } from '../../hooks/useForm';

export const TreasurerIncomePage = () => {
  const { t } = useTranslation('global');

  const { loading } = useSelector(getUiState);

  const { formValues, handleInputChange } = useForm({
    year: new Date().getFullYear(),
  });

  const { year } = formValues;

  return (
    <MainLayout>
      <div className="container-fluid">
        <h1 className="h3 mb-3 text-gray-800">
          {t('TreasurerIncomePage.Treasurer-Income')}
        </h1>

        <p className="h5 mb-4">{t('TreasurerIncomePage.Info')}</p>

        <div className="row">
          <div className="col-12 col-lg-4">
            <SelectYears value={year} onChange={handleInputChange} required />
          </div>

          <div className="col-12 mt-3 mt-lg-0 col-lg-3 d-flex flex-column justify-content-end">
            <Link
              to={{ pathname: '/income-register', state: { year: year } }}
              className="text-decoration-none"
            >
              <Button
                variant="success"
                startIcon="fas fa-money-check-alt"
                disabled={loading}
              >
                {' '}
                {t('TreasurerIncomePage.Payment')}
              </Button>
            </Link>
          </div>
        </div>

        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4 mt-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-primary">
              {t('TreasurerIncomePage.Table-Title')} <b>{year}</b>
            </h5>
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
