// eslint-disable
import React from 'react';
import { useDispatch } from 'react-redux';

import MainLayout from '../layout/MainLayout';
import { Button } from '../basicComponents/Button';
import { setAlertAction } from '../../store/actions/swal';

export const Dashboard = () => {
  //! Sólo para pruebas
  const dispatch = useDispatch();

  const handleClickExito = () => {
    dispatch(
      setAlertAction({
        title: 'ErrorSwal.Success',
        text: 'ErrorSwal.Welcome',
        icon: 'success',
      })
    );
  };

  const handleClickError = () => {
    dispatch(
      setAlertAction(
        'ErrorSwal.Error',
        'ErrorSwal.auth/user-not-found',
        'error'
      )
    );
  };

  return (
    <MainLayout>
      <div className="container-fluid">
        <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>
        <Button type="button" variant="primary" onClick={handleClickExito}>
          Alerta Exito
        </Button>
        <Button type="button" variant="alert" onClick={handleClickError}>
          Alerta Error
        </Button>
      </div>
    </MainLayout>
  );
};
