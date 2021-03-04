// eslint-disable
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import validator from 'validator';

import MainLayout from '../layout/MainLayout';
import { InputText } from '../basicComponents/InputText';
import { useForm } from '../../hooks/useForm';
import { MessageError } from '../parts/MessageError';
import { Button } from '../basicComponents/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getLocale, getMsgError } from '../../store/selectors';
import { removeErrorAction, setErrorAction } from '../../store/actions/ui';
import client from '../../api/client';

export const TreasurerExpenseRegisterPage = ({ handlerOnFocus }) => {
  const { t } = useTranslation('global');
  const dispatch = useDispatch();

  const { msgError } = useSelector(getMsgError);
  // eslint-disable-next-line
  const { locale } = useSelector(getLocale);

  const [formValues, handleInputChange, setFormValues] = useForm({
    id: '',
    member: '',
    date: '',
    quantity: '',
    description: '',
  });

  const { id, member, date, quantity, description } = formValues;

  useEffect(() => {
    setFormValues({ ...formValues });
  }, []);

  const handleChangeProfile = event => {
    event.preventDefault();

    if (isFormChangeProfileValid()) {
      // Enviar al Back en un Objeto..
      // TODO enviar este objeto al back
      // user: { uid, displayName, email, phonNumber, photURL, role }

      client
        .post('/user', formValues)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  const isFormChangeProfileValid = () => {
    if (member.length <= 2) {
      dispatch(setErrorAction('RegisterPage.Name-Required'));
      return false;
    } else if (id.length <= 2) {
      dispatch(setErrorAction('DashboardProfilePage.FirstSurname-Required'));
      return false;
    } else if (!validator.isNumeric(quantity)) {
      dispatch(setErrorAction('DashboardProfilePage.FirstSurname-Required'));
      return false;
    }

    dispatch(removeErrorAction());
    // TODO eliminar cuando este verificado
    console.log(formValues, '<-- Viedon formValues');

    return true;
  };

  return (
    <MainLayout>
      <div className="container-fluid">
        <h1 className="h3 mb-3 text-gray-800">
          {t('TreasurerExpenseRegisterPage.Treasurer-Expense')}:
        </h1>

        <p className="h5 mb-4">{t('TreasurerExpenseRegisterPage.Info')}</p>

        <div className="row mt-3 align-items-start minh-100 justify-content-center">
          {/* <!-- Content Column --> */}
          <div className="col-9 mb-4 ml-3">
            {/* <!-- Project Card Example --> */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  {t('DashboardProfilePage.Profile-Data')}
                </h6>
              </div>
              <div className="card-body">
                <form onSubmit={handleChangeProfile}>
                  <h6 className="font-weight-bold mt-3">
                    {t('TreasurerIncomeRegisterPage.Member')}:
                  </h6>
                  <InputText
                    text={`${t('TreasurerIncomeRegisterPage.Member')}...`}
                    name="member"
                    value={member}
                    onFocus={handlerOnFocus}
                    onChange={handleInputChange}
                    required
                  />
                  <h6 className="font-weight-bold mt-3">
                    {t('TreasurerIncomeRegisterPage.Date')}:
                  </h6>
                  {/* TODO formato Fecha */}
                  <InputText
                    text={`${t('TreasurerIncomeRegisterPage.Date')}...`}
                    name="date"
                    value={date}
                    onFocus={handlerOnFocus}
                    onChange={handleInputChange}
                    required
                  />
                  <h6 className="font-weight-bold mt-3">
                    {t('TreasurerIncomeRegisterPage.Quantity')}:
                  </h6>
                  <InputText
                    text={`${t('TreasurerIncomeRegisterPage.Quantity')}...`}
                    name="quantity"
                    value={quantity}
                    onFocus={handlerOnFocus}
                    onChange={handleInputChange}
                    required
                  />
                  <h6 className="font-weight-bold mt-3">
                    {t('TreasurerIncomeRegisterPage.Description')}:
                  </h6>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder={`${t(
                      'TreasurerIncomeRegisterPage.Description'
                    )}...`}
                    name="description"
                    value={description}
                    onFocus={handlerOnFocus}
                    onChange={handleInputChange}
                  ></textarea>

                  <hr />
                  <MessageError msgError={msgError} />

                  <div className="row">
                    <div className="col-6">
                      <Button
                        type="submit"
                        variant="alert"
                        startIcon="fas fa-ban"
                      >
                        {' '}
                        {t('TreasurerIncomeRegisterPage.Cancel')}
                      </Button>
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
