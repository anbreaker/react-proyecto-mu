import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import { MainLayout } from '../layout/MainLayout';
import { MessageError } from '../parts/MessageError';
import { getAllUsers } from '../../api';
import { getUiState } from '../../store/selectors';
import {
  startLoadingAction,
  finishLoadingAction,
  removeErrorAction,
  setErrorAction,
} from '../../store/actions/ui';

export const UsersAdminPage = () => {
  const { t } = useTranslation('global');
  const [users, setUsers] = useState(null);
  const dispatch = useDispatch();
  const { loading, msgError } = useSelector(getUiState);

  useEffect(() => {
    dispatch(startLoadingAction());
    dispatch(removeErrorAction());

    getAllUsers()
      .then(data => {
        dispatch(finishLoadingAction());
        setUsers(data);
      })
      .catch(err => {
        console.log(err);
        dispatch(setErrorAction('Error al cargar la información de usuarios'));
      });
  }, []);

  return (
    <MainLayout>
      <div className="container-fluid">
        <h1 className="h3 mb-3 text-gray-800">{t('UsersAdminPage.Title')}</h1>

        <p className="h5 mb-4">{t('UsersAdminPage.Description')}</p>

        <div className="card shadow mb-4 mt-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              {t('UsersAdminPage.Users')}
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
                        <th>{t('UsersAdminPage.displayName')}</th>
                        <th>{t('UsersAdminPage.firstSurname')}</th>
                        <th>{t('UsersAdminPage.secondSurname')}</th>
                        <th>{t('UsersAdminPage.email')}</th>
                        <th>{t('UsersAdminPage.View-Details')}</th>
                      </tr>
                    </thead>

                    <tbody>
                      <>
                        {users &&
                          users.map(user => (
                            <tr key={user._id}>
                              <td>{user.displayName}</td>
                              <td>{user.firstSurname}</td>
                              <td>{user.secondSurname}</td>
                              <td>{user.email}</td>
                              <td className="text-center">
                                <Link to={`/profile?user=${user._id}`}>
                                  <i className="fas fa-eye"></i>
                                </Link>
                              </td>
                            </tr>
                          ))}
                      </>
                    </tbody>
                  </table>
                </div>
              ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
