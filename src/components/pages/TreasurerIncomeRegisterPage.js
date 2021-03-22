import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useHistory, useLocation } from 'react-router-dom';
import validator from 'validator';
import { Input } from 'reactstrap';
import DateTimePicker from 'react-datetime-picker';

import { MainLayout } from '../layout/MainLayout';
import { InputText } from '../basicComponents/InputText';
import { useForm } from '../../hooks/useForm';
import { MessageError } from '../parts/MessageError';
import { Button } from '../basicComponents/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFeePerYear,
  getLanguaje,
  getUiState,
  getUserAuth,
  getUserOrgSel,
} from '../../store/selectors';
import { removeErrorAction, setErrorAction } from '../../store/actions/ui';
import { getUsersMyOrg, setPayment } from '../../api';
import { changeNum2Cur, formatNumber } from '../utils/formatNumber';
import { InfoCards } from '../parts/InfoCards';
import { setAlertAction } from '../../store/actions/swal';
import { updatePaymentOrgSel } from '../../store/actions/auth';

export const TreasurerIncomeRegisterPage = () => {
  const { t } = useTranslation('global');
  const dispatch = useDispatch();
  const location = useLocation();
  const year = location.state.year;
  const history = useHistory();

  const { msgError } = useSelector(getUiState);
  const loggedUser = useSelector(getUserAuth);
  const orgSel = useSelector(getUserOrgSel);
  const { languaje } = useSelector(getLanguaje);
  const feeOrgSel = useSelector(getFeePerYear(year));

  const [defaultQuotaError, setDefaultQuotaError] = useState(false);
  const [userSelect, setUserSelect] = useState([]);
  const [quotaSelect, setquotaSelect] = useState([]);
  const [payToDate, setPayToDate] = useState(0);
  const [balance, setBalance] = useState(0);

  const {
    formValues,
    handleInputChange,
    setFormValues,
    setFieldValue,
  } = useForm({
    userId: '',
    year: year,
    date: new Date(),
    amount: '',
    desc: '',
    quotaYear: '',
    paymentMethod: '',
    bank: '',
    checkNumber: '',
    dueDate: '',
  });

  const {
    userId,
    date,
    amount,
    desc,
    quotaYear,
    paymentMethod,
    bank,
    checkNumber,
    dueDate,
  } = formValues;

  useEffect(() => {
    if (loggedUser.uid) {
      getUsersMyOrg()
        .then(data => {
          setUserSelect(data);

          if (!feeOrgSel || feeOrgSel.length <= 0) setDefaultQuotaError(true);
          setquotaSelect(feeOrgSel);
        })
        .catch(err => console.log(err));
    }
  }, [loggedUser.uid]);

  useEffect(() => {
    if (userId) {
      const user = userSelect.find(u => u.id === userId);

      const fiscalYear = user.organizations
        .find(org => org._id === orgSel._id)
        ?.fiscalYear.find(fy => fy.year == year);

      if (fiscalYear) {
        const montoPagado =
          fiscalYear?.payment.reduce((acc, val) => acc + val.amount, 0) ?? 0;
        setPayToDate(montoPagado);
        setBalance(fiscalYear?.feePerYear?.amount - montoPagado ?? 0);
        setFieldValue('quotaYear', fiscalYear?.feePerYear?.id);
        return;
      }

      // Si no hay una cuota establecida para el usuario se asume que entonces
      // debe pagar la cuota por defecto para el año y hay que buscarla
      // Además significa que el usuario no ha realizado pagos este año
      // (de lo contrario tendría ya una cuota establecida)
      const feePerYear = feeOrgSel.find(fee => fee.defaultFee);
      if (!feePerYear) return setDefaultQuotaError(true);

      setFieldValue('quotaYear', feePerYear._id);
      setPayToDate(0);
      setBalance(feePerYear.amount);
    }
  }, [userId]);

  useEffect(() => {
    const feePerYear = feeOrgSel.find(fee => fee._id === quotaYear);

    setBalance(feePerYear?.amount - payToDate ?? 0);
  }, [quotaYear]);

  const handleSubmit = event => {
    event.preventDefault();

    if (isFormChangeProfileValid()) {
      setPayment(formValues)
        .then(data => {
          dispatch(updatePaymentOrgSel(data));
          dispatch(
            setAlertAction(
              'ErrorSwal.Success',
              'TreasurerIncomeRegisterPage.SaveSuccess',
              'success'
            )
          );
          history.push('/treasurer-income');
        })
        .catch(err => {
          console.log(err);
          setErrorAction('TreasurerIncomeRegisterPage.SaveFail');
        });
    }
  };

  const handleDateChange = event => {
    setFormValues({
      ...formValues,
      date: event,
    });
  };

  const handleDueDateChange = event => {
    setFormValues({
      ...formValues,
      dueDate: event,
    });
  };

  const isFormChangeProfileValid = () => {
    if (!parseInt(amount) || parseInt(amount) <= 0) {
      dispatch(setErrorAction('TreasurerIncomeRegisterPage.ErrorAmount'));
      return false;
    } //ErrorAmountExceeded
    if (parseInt(amount) > balance) {
      dispatch(
        setErrorAction('TreasurerIncomeRegisterPage.ErrorAmountExceeded')
      );
      return false;
    }
    if (userId.length <= 2) {
      dispatch(setErrorAction('RegisterPage.Name-Required'));
      return false;
    } else if (!validator.isNumeric(amount)) {
      dispatch(setErrorAction('DashboardProfilePage.FirstSurname-Required'));
      return false;
    }

    dispatch(removeErrorAction());

    return true;
  };

  return (
    <MainLayout>
      <div className="container-fluid">
        <h1 className="h3 mb-3 text-gray-800">
          {t('TreasurerIncomeRegisterPage.Enter-Pay')} <b>{year}</b>:
        </h1>

        <p className="h5 mb-4">{t('TreasurerIncomeRegisterPage.Info')}</p>

        <div className="row mt-3 align-items-start minh-100 justify-content-center">
          <div className="col-9 mb-4 ml-3">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  {t('TreasurerIncomeRegisterPage.Select-User')}
                </h6>
              </div>
              <div className="card-body text-info">
                <form onSubmit={handleSubmit}>
                  {defaultQuotaError ? (
                    <div className="col-lg-12 mb-4 p-0">
                      <div className="card text-dark border-warning">
                        <div className="card-body">
                          {t('TreasurerIncomeRegisterPage.Not-Quota')}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <h6 className="font-weight-bold mt-0">
                            {t('TreasurerIncomeRegisterPage.Member')}:
                          </h6>
                          <Input
                            type="select"
                            name="userId"
                            id="userId"
                            value={userId}
                            onChange={handleInputChange}
                            required
                          >
                            <option value=""></option>

                            {userSelect &&
                              userSelect.map(user => (
                                <option key={user.id} value={user.id}>
                                  {user.fullName}
                                </option>
                              ))}
                          </Input>
                        </div>
                        <div className="col-12 col-lg-6">
                          <h6 className="font-weight-bold mt-3 mt-lg-0">
                            {t('TreasurerIncomeRegisterPage.User-Fee')}
                          </h6>

                          <Input
                            type="select"
                            name="quotaYear"
                            id="quotaYear"
                            value={quotaYear}
                            onChange={handleInputChange}
                            required
                          >
                            <option value=""></option>

                            {quotaSelect &&
                              quotaSelect.map(quota => (
                                <option key={quota._id} value={quota._id}>
                                  {`${quota.description} - ${changeNum2Cur(
                                    quota.amount
                                  )}`}
                                </option>
                              ))}
                          </Input>
                        </div>
                      </div>

                      <div className="row mt-4">
                        <InfoCards
                          text={t('Dashboard.Payments')}
                          variantBorder={'border-bottom-success'}
                          variantText={'text-success'}
                          quantity={formatNumber(payToDate)}
                          addClases={'col-12 col-lg-6'}
                        />
                        <InfoCards
                          text={t('Dashboard.Balance')}
                          variantBorder={'border-bottom-danger'}
                          variantText={'text-danger'}
                          quantity={formatNumber(balance)}
                          addClases={'col-12 col-lg-6'}
                        />
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <h6 className="font-weight-bold mt-0">
                            {t('TreasurerIncomeRegisterPage.Date')}:
                          </h6>
                          <DateTimePicker
                            className="form-control react-datetime-picker"
                            locale={languaje}
                            format="dd/MM/yyyy"
                            value={date}
                            onChange={handleDateChange}
                          />
                        </div>
                        <div className="col-6">
                          <h6 className="font-weight-bold mt-0">
                            {t('TreasurerIncomeRegisterPage.Quantity')}:
                          </h6>
                          <InputText
                            text={`$ 0,0`}
                            addClasses="text-right"
                            name="amount"
                            value={amount}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <h6 className="font-weight-bold mt-3">
                            {t('TreasurerIncomeRegisterPage.Payment-Method')}
                          </h6>

                          <Input
                            type="select"
                            name="paymentMethod"
                            id="paymentMethod"
                            value={paymentMethod}
                            onChange={handleInputChange}
                            required
                          >
                            <option value=""></option>
                            <option value="Efectivo">Efectivo</option>
                            <option value="Transferencia">Transferencia</option>
                            <option value="Cheque">Cheque</option>
                          </Input>
                        </div>
                        <div className="col-12 col-lg-6">
                          <h6 className="font-weight-bold mt-3">
                            {t('TreasurerIncomeRegisterPage.Bank')}:
                          </h6>

                          <InputText
                            text={`${t('TreasurerIncomeRegisterPage.Bank')}...`}
                            name="bank"
                            value={bank}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <h6 className="font-weight-bold mt-3">
                            {t('TreasurerIncomeRegisterPage.Check-Number')}
                          </h6>

                          <InputText
                            text={`${t(
                              'TreasurerIncomeRegisterPage.Check-Number'
                            )}...`}
                            name="checkNumber"
                            value={checkNumber}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-12 col-lg-6">
                          <h6 className="font-weight-bold mt-3">
                            {t('TreasurerIncomeRegisterPage.Expiration-Date')}
                          </h6>

                          <DateTimePicker
                            className="form-control react-datetime-picker"
                            locale={languaje}
                            format="dd/MM/yyyy"
                            value={dueDate}
                            onChange={handleDueDateChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <h6 className="font-weight-bold mt-3">
                            {t('TreasurerIncomeRegisterPage.Description')}:
                          </h6>
                          <textarea
                            className="form-control text-justify"
                            rows="3"
                            placeholder={t(
                              'TreasurerIncomeRegisterPage.Description-Sms'
                            )}
                            name="desc"
                            value={desc}
                            onChange={handleInputChange}
                          ></textarea>
                        </div>
                      </div>
                    </>
                  )}

                  <hr />
                  <MessageError msgError={msgError} />

                  <div className="row">
                    <div className="col-6">
                      <Link
                        to="/treasurer-income"
                        className="text-decoration-none"
                      >
                        <Button
                          type="submit"
                          variant="warning"
                          startIcon="fas fa-arrow-left"
                        >
                          {t('DashboardOrgProfilePage.Back')}
                        </Button>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Button
                        type="submit"
                        variant="primary"
                        startIcon="fas fa-id-card"
                        disabled={defaultQuotaError}
                      >
                        {' '}
                        {t('TreasurerIncomeRegisterPage.Add-Pay')}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
