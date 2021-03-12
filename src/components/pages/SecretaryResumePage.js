import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Search } from '../basicComponents/Search';
import { getUiState } from '../../store/selectors';
import { MainLayout } from '../layout/MainLayout';

export const SecretaryResumePage = () => {
  const { t } = useTranslation('global');

  // eslint-disable-next-line
  const { loading } = useSelector(getUiState);

  return (
    <MainLayout>
      <div className="container-fluid">
        <h1 className="h3 mb-3 text-gray-800">
          {t('SecretaryResumePage.Secretary-Resume')}
        </h1>

        <p className="h5 mb-4">{t('SecretaryResumePage.Info')}</p>

        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4 mt-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              {t('SecretaryResumePage.Activate')}
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
                    <th>{t('SecretaryResumePage.Name')}</th>
                    <th>{t('SecretaryResumePage.Email')}</th>
                    <th>{t('SecretaryResumePage.Status')}</th>
                    <th>{t('SecretaryResumePage.Change-Status')}</th>
                  </tr>
                </thead>

                {/* // TODO crear tabla dinamica... */}

                <tbody>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>architect@gmail.com</td>
                    <td>Activo</td>
                    <td>Modificar Status</td>
                  </tr>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>architect@gmail.com</td>
                    <td>Activo</td>
                    <td>Modificar Status</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-11">
            {/* // TODO En La Version Movil Desaparece */}
            <Search text={t('TreasurerResumePage.Filter')} />
          </div>
        </div>

        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4 mt-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              {t('SecretaryResumePage.Users')}
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
                    <th>{t('SecretaryResumePage.Name')}</th>
                    <th>{t('SecretaryResumePage.Email')}</th>
                    <th>{t('SecretaryResumePage.Status')}</th>
                    <th>{t('SecretaryResumePage.Change-Status')}</th>
                  </tr>
                </thead>
                <tfoot className="font-weight-bold text-info">
                  <tr>
                    <th>{t('SecretaryResumePage.Name')}</th>
                    <th>{t('SecretaryResumePage.Email')}</th>
                    <th>{t('SecretaryResumePage.Status')}</th>
                    <th>{t('SecretaryResumePage.Change-Status')}</th>
                  </tr>
                </tfoot>

                {/* // TODO crear tabla dinamica... */}

                <tbody>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>Modificar Status</td>
                  </tr>
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>Modificar Status</td>
                  </tr>
                  <tr>
                    <td>Ashton Cox</td>
                    <td>Junior Technical Author</td>
                    <td>San Francisco</td>
                    <td>Modificar Status</td>
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
