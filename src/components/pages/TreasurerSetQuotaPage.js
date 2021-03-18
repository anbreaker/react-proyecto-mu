import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { Input, Label } from 'reactstrap';

import { Button } from '../basicComponents/Button';
import { getUiState, getUserOrgSel, getUserAuth } from '../../store/selectors';
import { MainLayout } from '../layout/MainLayout';
import { InputText } from '../basicComponents/InputText';
import { useForm } from '../../hooks/useForm';
import { removeErrorAction, setErrorAction } from '../../store/actions/ui';
import { MessageError } from '../parts/MessageError';
import SelectYears from '../basicComponents/SelectYears';
import { changeNum2Cur } from '../utils/formatNumber';
import { getOrgFeesPerYear } from '../../api';

export const TreasurerSetQuotaPage = ({ handlerOnFocus }) => {
  const { t } = useTranslation('global');
  const orgSel = useSelector(getUserOrgSel);
  const user = useSelector(getUserAuth);
  const { msgError, loading } = useSelector(getUiState);
  const [fees, setFees] = useState([]);
  const dispatch = useDispatch();

  const { formValues, handleInputChange } = useForm({
    year: new Date().getFullYear(),
    description: '',
    amount: '',
    setFee: '',
  });

  const { year, description, amount, setFee } = formValues;

  useEffect(() => {
    // TODO Agregar spinner loading y mensaje error
    // TODO Migrar esto a redux
    if (!user.uid) return;
    getOrgFeesPerYear(year)
      .then(data => {
        return setFees(data);
      })
      .catch(err => console.log(err));
  }, [year, user]);

  const handleQuoteRegister = event => {
    event.preventDefault();

    if (isFormValid()) {
      //Enviar al Back...
      console.log(formValues);
    }
  };

  const isFormValid = () => {
    if (!validator.isNumeric(amount)) {
      dispatch(setErrorAction(t('TreasurerSetQuotaPage.Amount-Error')));
      return false;
    } else if (!validator.isNumeric(setFee)) {
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
                  <div className="col-4">
                    <SelectYears
                      value={year}
                      onChange={handleInputChange}
                      onFocus={handlerOnFocus}
                      required
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <h6 className="font-weight-bold mt-3 text-info">
                      {t('TreasurerIncomeRegisterPage.Description')}:
                    </h6>

                    <InputText
                      text={`${t('TreasurerSetQuotaPage.Description-Text')}...`}
                      name="description"
                      value={description}
                      onFocus={handlerOnFocus}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-12 col-lg-4 mb-4">
                    <h6 className="font-weight-bold mt-3 text-info">
                      {t('TreasurerSetQuotaPage.Amount')}:
                    </h6>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <input
                            name="setFee"
                            type="checkbox"
                            value={setFee}
                            onFocus={handlerOnFocus}
                            onChange={handleInputChange}
                            type="checkbox"
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
                  <div className="col-lg-2 mt-3 d-flex flex-column justify-content-center">
                    <Button
                      type="submit"
                      variant="primary"
                      startIcon="fas fa-id-card"
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

              <h6 className="m-0 mt-4 mb-2 font-weight-bold text-info">
                {t('TreasurerSetQuotaPage.Table-Description')}: {year}
              </h6>
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

                {/* // TODO crear tabla dinamica... */}

                <tbody>
                  {fees &&
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
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
