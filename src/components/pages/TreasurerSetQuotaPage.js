import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { Spinner } from 'reactstrap';

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
import { getOrgFeesPerYear, setFeeToOrg } from '../../api';

export const TreasurerSetQuotaPage = ({ handlerOnFocus }) => {
  const { t } = useTranslation('global');
  const orgSel = useSelector(getUserOrgSel);
  const user = useSelector(getUserAuth);
  const { msgError, loading } = useSelector(getUiState);
  const [fees, setFees] = useState(null);
  const dispatch = useDispatch();

  const { formValues, handleInputChange } = useForm({
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
            console.log(newFees.length);
            if (newFees.length > 0) {
              setFees(newFees[0].feePerYear);
            }
            // setFees([...fees, { ...formValues }]);
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
              {/* TODO caputurar Formulario */}

              <form onSubmit={handleQuoteRegister}>
                <div className="row">
                  <div className="col-12">
                    <SelectYears
                      value={year}
                      onChange={handleInputChange}
                      onFocus={handlerOnFocus}
                      required
                    />
                  </div>
                </div>

                <div className="row">
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

                  <div className="col-12 col-lg-8 mb-4">
                    <h6 className="font-weight-bold mt-3 text-info">
                      {t('TreasurerSetQuotaPage.Amount')}:
                    </h6>
                    <div className="input-group">
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
                  </div>
                  <div className="col-lg-4 mt-3 d-flex flex-column justify-content-center">
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

                <hr />
              </form>
              <MessageError msgError={msgError} />

              <h6 className="m-0 mt-4 mb-2 font-weight-bold text-primary">
                {t('TreasurerSetQuotaPage.Table-Description')}: {year}
              </h6>
              {loading ? (
                // TODO Mejorar la presentación de este spinner
                <Spinner color="primary" />
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
                    </tr>
                  </thead>
                  <tbody>
                    {/* // TODO preguntar a Sebastian... */}
                    {Array.isArray(fees) &&
                      fees.map(fee => (
                        <tr key={fee._id}>
                          <td>{fee.description}</td>
                          <td className="text-center">
                            {fee.defaultFee.toString()}
                          </td>
                          <td className="text-right">
                            {' '}
                            {changeNum2Cur(fee.amount)}
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
