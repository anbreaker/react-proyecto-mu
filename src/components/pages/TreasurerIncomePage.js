import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button } from '../basicComponents/Button';

import { getFiscalYear, getUiState } from '../../store/selectors';
import { MainLayout } from '../layout/MainLayout';
import { Link } from 'react-router-dom';
import { SelectYears } from '../basicComponents/SelectYears';
import { useForm } from '../../hooks/useForm';
import { formatToLocaleDate } from '../utils/dateFormat';
import { changeNum2Cur } from '../utils/formatNumber';

export const TreasurerIncomePage = () => {
  const { t } = useTranslation('global');

  const { loading } = useSelector(getUiState);
  const fiscalYear = useSelector(getFiscalYear);
  const [payments, setPayments] = useState([]);

  const { formValues, handleInputChange } = useForm({
    year: new Date().getFullYear(),
  });

  const { year } = formValues;

  useEffect(() => {
    console.log(fiscalYear.find(fy => fy.year == year)?.payment ?? []);
    setPayments(fiscalYear.find(fy => fy.year == year)?.payment ?? []);
  }, [year]);

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
                  {/* // TODO Traducir */}
                  <tr>
                    <th>{t('TreasurerIncomePage.Username')}</th>
                    <th className="text-center">
                      {t('TreasurerIncomePage.Date')}
                    </th>
                    <th className="text-center">
                      {/* // TODO Quantity no corresponde, debe ser Monto */}
                      Monto
                    </th>
                    <th className="text-center">Método de pago</th>
                    <th className="text-center">Ver Detalles</th>
                    <th className="text-center">Reenviar Mail</th>
                  </tr>
                </thead>

                {/* // TODO crear tabla dinamica... */}

                <tbody>
                  {payments.map(pay => (
                    <tr key={pay._id}>
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
                          className="fas fa-eye text-primary"
                          role="button"
                        ></i>
                      </td>
                      <td className="text-center">
                        <i
                          className="fas fa-envelope text-primary"
                          role="button"
                        ></i>
                      </td>
                    </tr>
                  ))}
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
