import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
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
  getLanguaje,
  getUiState,
  getUserAuth,
  getUserOrgSel,
} from '../../store/selectors';
import { removeErrorAction, setErrorAction } from '../../store/actions/ui';
import { getUsersMyOrg, setPayment } from '../../api';

export const TreasurerIncomeRegisterPage = () => {
  const { t } = useTranslation('global');
  const dispatch = useDispatch();
  const location = useLocation();
  const year = location.state.year;

  const { msgError } = useSelector(getUiState);
  const loggedUser = useSelector(getUserAuth);
  const orgSel = useSelector(getUserOrgSel);
  const { languaje } = useSelector(getLanguaje);
  const [userSelect, setUserSelect] = useState([]);

  const { formValues, handleInputChange, setFormValues } = useForm({
    userId: '',
    year: year,
    date: new Date(),
    amount: '',
    desc: '',
  });

  const { userId, date, amount, desc } = formValues;

  useEffect(() => {
    if (loggedUser.uid) {
      getUsersMyOrg()
        .then(data => {
          setUserSelect(data);
        })
        .catch(err => console.log(err));
    }
  }, [loggedUser.uid]);

  useEffect(() => {
    if (userId) {
      const user = userSelect.find(u => u.id === userId);
      console.log(user);
      const orgDataUser = user.organizations.find(
        org => org._id === orgSel._id
      );
      console.log(orgDataUser);
      if (orgDataUser.length > 0) {
        return console.log('hay una cuota ya establecida');
        // poner en el select
      }

      // Si no hay una cuota establecida para el usuario se asume que entonces
      // debe pagar la cuota por defecto para el año y hay que buscarla
      const feePerYear = orgSel.fiscalYear
        .find(fy => fy.year === year)
        ?.feePerYear.find(fee => fee.defaultFee);

      console.log(feePerYear);
    }
  }, [userId]);

  const handleSubmit = event => {
    event.preventDefault();

    if (isFormChangeProfileValid()) {
      setPayment(formValues)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
  };

  const handleDateChange = event => {
    setFormValues({
      ...formValues,
      date: event,
    });
  };

  const isFormChangeProfileValid = () => {
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
          {/* <!-- Content Column --> */}
          <div className="col-9 mb-4 ml-3">
            {/* <!-- Project Card Example --> */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  {t('TreasurerIncomeRegisterPage.Select-User')}
                </h6>
              </div>
              <div className="card-body text-info">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12">
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
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <h6 className="font-weight-bold mt-3">
                        {/* //TODO Traducir */}
                        Cuota asociada al usuario:
                      </h6>
                      <div className="col-lg-12 mb-4 p-0">
                        <div className="card text-dark border-warning">
                          {/* //TODO Traducir */}
                          <div className="card-body">
                            No existe ninguna cuota por defecto para el año,
                            debe crear una para que sea asignada a los miembros
                            de la organización.
                          </div>
                        </div>
                      </div>
                      <Input
                        type="select"
                        name="quotaYear"
                        id="quotaYear"
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
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <h6 className="font-weight-bold mt-3">
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
                      <h6 className="font-weight-bold mt-3">
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
