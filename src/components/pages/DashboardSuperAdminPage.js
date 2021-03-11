import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { MainLayout } from '../layout/MainLayout';
import { Button } from '../basicComponents/Button';
import { Search } from '../basicComponents/Search';
import { getMsgError } from '../../store/selectors';
import { getAllOrgs } from '../../api';

export const DashboardSuperAdminPage = () => {
  const { t } = useTranslation('global');
  const [orgs, setOrgs] = useState();

  const { loading } = useSelector(getMsgError);

  useEffect(() => {
    getAllOrgs().then(data => {
      const orgItems = (
        <>
          {data.map(org => (
            <tr key={org._id}>
              <td>{org.name}</td>
              <td>{org.country}</td>
              <td>{org.city}</td>
              <td>{org.address}</td>
              <td>{org.foundationDate}</td>

              {/* TODO endpoint */}
              {/* /admin-org?org=org._id */}
              {/* Boton de volver en el profile del detalle */}
              <td className="text-center">
                <Link to={`/admin-org?org=${org._id}`}>
                  <i className="fas fa-eye"></i>
                </Link>
              </td>
            </tr>
          ))}
        </>
      );
      setOrgs(orgItems);
    });
  }, []);

  return (
    <MainLayout>
      <div className="container-fluid">
        <h1 className="h3 mb-3 text-gray-800">
          {t('DashboardSuperAdminPage.Organizations')}
        </h1>

        <p className="h5 mb-4">{t('DashboardSuperAdminPage.Info-Page')}</p>

        <div className="row">
          <div className="col-8">
            <Search text={t('DashboardSuperAdminPage.Search-Organizations')} />
          </div>

          <div className="col-4">
            <Link to="/admin-org">
              <Button
                variant="primary"
                startIcon="fas fa-plus-square"
                disabled={loading}
              >
                {' '}
                {t('DashboardSuperAdminPage.Add-Org')}
              </Button>
            </Link>
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
                    <th>{t('DashboardSuperAdminPage.Name')}</th>
                    <th>{t('DashboardSuperAdminPage.Country')}</th>
                    <th>{t('DashboardSuperAdminPage.City')}</th>
                    <th>{t('DashboardSuperAdminPage.Address')}</th>
                    <th>{t('DashboardSuperAdminPage.Foundation')}</th>
                    <th>{t('DashboardSuperAdminPage.View-Details')}</th>
                  </tr>
                </thead>

                <tbody>{orgs}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.container-fluid -->  */}
    </MainLayout>
  );
};
