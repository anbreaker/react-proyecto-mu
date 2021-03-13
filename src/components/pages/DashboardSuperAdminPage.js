import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import { MainLayout } from '../layout/MainLayout';
import { Button } from '../basicComponents/Button';
import { Search } from '../basicComponents/Search';
import { MessageError } from '../parts/MessageError';
import { getAllOrgs } from '../../api';
import { getUiState } from '../../store/selectors';
import {
  startLoadingAction,
  finishLoadingAction,
  removeErrorAction,
  setErrorAction,
} from '../../store/actions/ui';
import { formatToLocaleDate } from '../utils/dateFormat';

export const DashboardSuperAdminPage = () => {
  const { t } = useTranslation('global');
  const [orgs, setOrgs] = useState(null);
  const dispatch = useDispatch();
  const { loading, msgError } = useSelector(getUiState);

  useEffect(() => {
    dispatch(startLoadingAction());
    dispatch(removeErrorAction());

    getAllOrgs()
      .then(data => {
        const orgItems = data;
        dispatch(finishLoadingAction());
        setOrgs(orgItems);
      })
      .catch(err => {
        console.log(err);
        dispatch(
          setErrorAction('Error al cargar la información de organizaciones')
        );
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
          <div className="col-8 d-none">
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
            <MessageError msgError={msgError} />
            {!msgError &&
              (loading ? (
                <div className="d-flex justify-content-center">
                  <Spinner color="primary" />
                </div>
              ) : (
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

                    <tbody>
                      <>
                        {orgs &&
                          orgs.map(org => (
                            <tr key={org._id}>
                              <td>{org.name}</td>
                              <td>{org.country}</td>
                              <td>{org.city}</td>
                              <td>{org.address}</td>
                              <td>{formatToLocaleDate(org.foundationDate)}</td>

                              <td className="text-center">
                                <Link to={`/admin-org?org=${org._id}`}>
                                  <i className="fas fa-eye"></i>
                                </Link>
                              </td>
                            </tr>
                          ))}
                      </>
                    </tbody>
                    {/* <tbody>{orgs}</tbody> */}
                  </table>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* <!-- /.container-fluid -->  */}
    </MainLayout>
  );
};
