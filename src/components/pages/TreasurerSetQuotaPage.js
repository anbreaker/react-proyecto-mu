import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { Spinner } from 'reactstrap';
import Swal from 'sweetalert2';

import { Button } from '../basicComponents/Button';
import { getUiState, getUserOrgSel, getUserAuth } from '../../store/selectors';
import { MainLayout } from '../layout/MainLayout';
import { InputText } from '../basicComponents/InputText';
import { useForm } from '../../hooks/useForm';
import {
  finishLoadingAction,
  removeErrorAction,
  setErrorAction,
  startLoadingAction,
} from '../../store/actions/ui';
import { MessageError } from '../parts/MessageError';
import { SelectYears } from '../basicComponents/SelectYears';
import { changeNum2Cur } from '../utils/formatNumber';
import { getOrgFeesPerYear, setFeeToOrg, deleteFee } from '../../api';
import { setAlertAction } from '../../store/actions/swal';

export const TreasurerSetQuotaPage = ({ handlerOnFocus }) => {
  const { t } = useTranslation('global');
  const orgSel = useSelector(getUserOrgSel);
  const user = useSelector(getUserAuth);
  const { msgError, loading } = useSelector(getUiState);
  const [fees, setFees] = useState(null);
  const dispatch = useDispatch();

  const { formValues, handleInputChange, reset } = useForm({
    year: new Date().getFullYear(),
    desc: '',
    amount: '',
    defaultFee: false,
  });

  const { year, desc, amount, defaultFee } = formValues;

  useEffect(() => {
    if (!user.uid) return;
    dispatch(startLoadingAction());
    getOrgFeesPerYear(year)
      .then(data => setFees(data))
      .catch(err => dispatch(setErrorAction(err.message)))
      .finally(() => dispatch(finishLoadingAction()));
  }, [year, user.uid]);

  const handleQuoteRegister = event => {
    event.preventDefault();
    if (isFormValid()) {
      //Enviar al Back...
      setFeeToOrg(formValues)
        .then(org => {
          if (org) {
            const newFees = org.fiscalYear.filter(
              fy => fy.year === parseInt(year)
            );
            if (newFees.length > 0) {
              setFees(newFees[0].feePerYear);
            }
            reset();
          }
        })
        .catch(err => console.log(err));
    }
  };

  const isFormValid = () => {
    if (!validator.isNumeric(amount)) {
      dispatch(setErrorAction(t('TreasurerSetQuotaPage.Amount-Error')));
      return false;
    }
    dispatch(removeErrorAction());
    return true;
  };

  const handleDeleteFee = feeId => {
    Swal.fire({
      title: t('ErrorSwal.Confirmation-Sure'),
      text: t('ErrorSwal.Warning-undone'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: t('ErrorSwal.Confirm-Delete'),
      cancelButtonText: t('ErrorSwal.Confirm-Cancel'),
    }).then(result => {
      if (result.value) {
        deleteFee({ feeId, year })
          .then(data => {
            setFees(data);
            dispatch(
              setAlertAction(
                'ErrorSwal.Success',
                'DashboardOrgProfilePage.Remove-Org',
                'success'
              )
            );
          })
          .catch(err => console.log(err));
      }
    });
  };

  return (
    <MainLayout>
      <div className="container-fluid">
        <h1 className="h3 mb-3 text-gray-800">
          {t('TreasurerSetQuotaPage.Info')}:
        </h1>

        <p className="h5 mb-4">{t('TreasurerSetQuotaPage.Description')}</p>

        <div className="card shadow mb-4 mt-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              {`${t('TreasurerSetQuotaPage.SubTitle')}: ${orgSel.name}`}
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <form onSubmit={handleQuoteRegister}>
                <div className="col-12">
                  <SelectYears
                    value={year}
                    onChange={handleInputChange}
                    onFocus={handlerOnFocus}
                    required
                  />
                </div>
                <div className="col-12">
                  <h6 className="font-weight-bold mt-3 text-info">
                    {t('TreasurerIncomeRegisterPage.Description')}:
                  </h6>
                  <textarea
                    className="form-control"
                    rows="2"
                    placeholder={t('TreasurerSetQuotaPage.Description-Text')}
                    name="desc"
                    value={desc}
                    onFocus={handlerOnFocus}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div class="col-12">
                  <h6 className="font-weight-bold mt-3 text-info">
                    {t('TreasurerSetQuotaPage.Amount')}:
                  </h6>
                  <div className="row">
                    <div className="input-group mb-3 col-8">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <input
                            name="defaultFee"
                            type="checkbox"
                            value={defaultFee}
                            onFocus={handlerOnFocus}
                            onChange={handleInputChange}
                            aria-label={`${t(
                              'TreasurerSetQuotaPage.Default-Fee'
                            )}`}
                          />
                        </div>
                      </div>

                      <InputText
                        text={changeNum2Cur(0)}
                        name="amount"
                        value={amount}
                        onFocus={handlerOnFocus}
                        onChange={handleInputChange}
                        addClasses="text-right"
                        required
                      />
                    </div>

                    <div className="col-4">
                      <Button
                        type="submit"
                        variant="primary"
                        startIcon="fas fa-money-check-alt"
                        disabled={loading}
                      >
                        {' '}
                        {t('TreasurerIncomeRegisterPage.Add-Pay')}
                      </Button>
                    </div>
                  </div>
                </div>

                <hr />
              </form>
              <MessageError msgError={msgError} />

              <h6 className="m-0 mt-4 mb-2 font-weight-bold text-primary">
                {t('TreasurerSetQuotaPage.Table-Description')}: {year}
              </h6>
              {loading ? (
                // TODO Mejorar la presentación de este spinner
                <div className="col-lg-12 m-3 d-flex justify-content-center">
                  <Spinner color="primary" />
                </div>
              ) : (
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing="0"
                >
                  <thead className="font-weight-bold text-info">
                    <tr>
                      <th>Descripción</th>
                      <th className="text-center">Cuota por defecto</th>
                      <th className="text-center">Cuota Definida</th>
                      <th className="text-center">Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* // TODO preguntar a Sebastian... */}
                    {Array.isArray(fees) &&
                      fees.map(fee => (
                        <tr key={fee._id}>
                          <td>{fee.description}</td>
                          <td className="text-center">
                            {fee.defaultFee ? 'SI' : 'NO'}
                          </td>
                          <td className="text-right">
                            {' '}
                            {changeNum2Cur(fee.amount)}
                          </td>
                          <td className="text-center">
                            <i
                              role="button"
                              onClick={() => handleDeleteFee(fee._id)}
                              className="fas fa-trash text-primary"
                            ></i>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
