// eslint-disable
import React from 'react';
import { useDispatch } from 'react-redux';

import { MainLayout } from '../layout/MainLayout';
import { Button } from '../basicComponents/Button';
import { setAlertAction } from '../../store/actions/swal';
import Swal from 'sweetalert2';

export const Dashboard = () => {
  //! Sólo para pruebas
  const dispatch = useDispatch();

  const handleClickExito = () => {
    dispatch(
      setAlertAction('ErrorSwal.Success', 'ErrorSwal.Welcome', 'success')
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

  const handleClickLoading = () => {
    Swal.fire({
      title: 'Uploading...',
      text: 'Please wait...',
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });

    setTimeout(() => {
      Swal.close();
    }, 1500);
  };
  const handleClickDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f5365c',
      cancelButtonColor: '#5E72E4',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.value) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
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
        <Button type="button" variant="primary" onClick={handleClickLoading}>
          Loading Example
        </Button>
        <Button type="button" variant="alert" onClick={handleClickDelete}>
          Delete
        </Button>
      </div>
    </MainLayout>
  );
};
