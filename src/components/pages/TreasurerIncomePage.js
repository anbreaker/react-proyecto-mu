import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spinner, Input } from 'reactstrap';

import { Button } from '../basicComponents/Button';
import {
  getFiscalYear,
  getUiState,
  getUserOrgSel,
} from '../../store/selectors';
import { MainLayout } from '../layout/MainLayout';
import { SelectYears } from '../basicComponents/SelectYears';
import { useForm } from '../../hooks/useForm';
import { formatToLocaleDate } from '../utils/dateFormat';
import { changeNum2Cur } from '../utils/formatNumber';
import { getAllUsers } from '../../api/user';
import { deletePayment } from '../../api';
import { updatePaymentOrgSel } from '../../store/actions/auth';
import Swal from 'sweetalert2';
import { setAlertAction } from '../../store/actions/swal';
import ModalPayment from '../parts/ModalPayment';

export const TreasurerIncomePage = () => {
  const { t } = useTranslation('global');
  const dispatch = useDispatch();

  const { loading } = useSelector(getUiState);
  const fiscalYear = useSelector(getFiscalYear);
  const [payments, setPayments] = useState([]);
  const orgSel = useSelector(getUserOrgSel);
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const [paymentId, setPaymentId] = useState('');

  const toggle = () => setModal(!modal);

  const { formValues, handleInputChange } = useForm({
    year: new Date().getFullYear(),
  });

  const { year, userFilter } = formValues;

  useEffect(() => {
    getAllUsers(orgSel._id)
      .then(data => setUsers(data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    setPayments(
      fiscalYear &&
        (fiscalYear
          .find(fy => fy.year == year)
          ?.payment.filter(pay => {
            if (!userFilter) return true;
            return pay.userId === userFilter;
          }) ??
          [])
    );
  }, [year, userFilter, fiscalYear]);

  const handlePaymentDelete = paymentId => {
    Swal.fire({
      title: t('ErrorSwal.Confirmation-Sure'),
      text: t('ErrorSwal.Warning-undone'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: t('ErrorSwal.Confirm-Delete'),
      cancelButtonText: t('ErrorSwal.Confirm-Cancel'),
    }).then(result => {
      if (result.value) {
        deletePayment(year, paymentId)
          .then(data => {
            dispatch(updatePaymentOrgSel(data));
            dispatch(
              setAlertAction(
                'ErrorSwal.Success',
                'TreasurerIncomePage.Remove-Pay',
                'success'
              )
            );
          })
          .catch(err => {
            console.log(err);
            dispatch(
              setAlertAction(
                'ErrorSwal.Error',
                'DashboardOrgProfilePage.Save-Error',
                'success'
              )
            );
          });
      }
    });
  };

  return (
    <MainLayout>
      <div className="container-fluid">
        <ModalPayment
          open={modal}
          toggle={toggle}
          year={year}
          paymentId={paymentId}
        />
        <h1 className="h3 mb-3 text-gray-800">
          {t('TreasurerIncomePage.Treasurer-Income')}
        </h1>

        <h5 className="mb-4">{t('TreasurerIncomePage.Info')}</h5>

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
        <div className="row">
          <div className="col-12 col-lg-6">
            <h6 className="font-weight-bold mt-3 text-info">
              {t('TreasurerIncomeRegisterPage.Member')}:
            </h6>
            <Input
              type="select"
              name="userFilter"
              id="userFilter"
              value={userFilter}
              onChange={handleInputChange}
              required
            >
              <option value="">{t('TreasurerIncomePage.All-Users')}</option>

              {users &&
                users.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.fullName}
                  </option>
                ))}
            </Input>
          </div>
        </div>
        <div className="card shadow mb-4 mt-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-primary">
              {t('TreasurerIncomePage.Table-Title')} <b>{year}</b>
            </h5>
          </div>
          <div className="card-body">
            {loading ? (
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
                      <th>#</th>
                      <th>{t('TreasurerIncomePage.Username')}</th>
                      <th className="text-center">
                        {t('TreasurerIncomePage.Date')}
                      </th>
                      <th className="text-center">
                        {t('TreasurerIncomePage.Amount-Paid')}
                      </th>
                      <th className="text-center">
                        {t('TreasurerIncomePage.Payment-Method')}
                      </th>
                      <th className="text-center">
                        {t('TreasurerIncomePage.Actions')}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {payments?.map((pay, index) => (
                      <tr key={pay._id}>
                        <td>{index + 1}</td>
                        <td>{pay.userName}</td>
                        <td className="text-center">
                          {formatToLocaleDate(pay.date)}
                        </td>
                        <td className="text-right">
                          {changeNum2Cur(pay.amount)}
                        </td>
                        <td className="text-center">{pay.paymentMethod}</td>
                        <td className="text-center">
                          <i
                            className="fas fa-eye text-primary pr-2"
                            role="button"
                            onClick={() => {
                              setPaymentId(pay._id);
                              setModal(true);
                            }}
                          ></i>
                          <i
                            className="fas fa-trash text-primary pl-2"
                            role="button"
                            onClick={() => handlePaymentDelete(pay._id)}
                          ></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
