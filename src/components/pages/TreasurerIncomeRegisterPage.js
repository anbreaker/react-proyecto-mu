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
import { getLanguaje, getUiState, getUserAuth } from '../../store/selectors';
import { removeErrorAction, setErrorAction } from '../../store/actions/ui';
import { getUsersMyOrg } from '../../api';

export const TreasurerIncomeRegisterPage = () => {
  const { t } = useTranslation('global');
  const dispatch = useDispatch();
  const location = useLocation();
  const year = location.state.year;

  const { msgError } = useSelector(getUiState);
  const loggedUser = useSelector(getUserAuth);
  const { languaje } = useSelector(getLanguaje);
  const [userSelect, setUserSelect] = useState([]);

  const { formValues, handleInputChange, setFormValues } = useForm({
    id: '',
    orgMember: '',
    date: '',
    quantity: '',
    description: '',
  });

  const { id, orgMember, date, quantity, description } = formValues;

  useEffect(() => {
    if (loggedUser.uid) {
      getUsersMyOrg()
        .then(data => {
          console.log(data);
          setUserSelect(data);
        })
        .catch(err => console.log(err));
    }
  }, [loggedUser.uid]);

  const handleChangeProfile = event => {
    event.preventDefault();

    if (isFormChangeProfileValid()) {
      // Enviar al Back en un Objeto..
      // TODO enviar este objeto al back
      // user: { uid, displayName, email, phonNumber, photURL, role }
    }
  };

  const handleDateChange = event => {
    setFormValues({
      ...formValues,
      date: event,
    });
  };

  const isFormChangeProfileValid = () => {
    if (orgMember.length <= 2) {
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
          {/* //TODO Traducir estos mensajes */}
          Ingresar pago para el año <b>{year}</b>:
        </h1>

        <p className="h5 mb-4">{t('TreasurerIncomeRegisterPage.Info')}</p>

        <div className="row mt-3 align-items-start minh-100 justify-content-center">
          {/* <!-- Content Column --> */}
          <div className="col-9 mb-4 ml-3">
            {/* <!-- Project Card Example --> */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Seleccione el usuario:
                </h6>
              </div>
              <div className="card-body">
                <form onSubmit={handleChangeProfile}>
                  <div className="row">
                    <div className="col-12">
                      <h6 className="font-weight-bold mt-0">
                        {t('TreasurerIncomeRegisterPage.Member')}:
                      </h6>
                      <Input
                        type="select"
                        name="orgMember"
                        id="orgMember"
                        value={orgMember}
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
                        format="dd,MM,y"
                        value={date}
                        onChange={handleDateChange}
                      />
                    </div>
                    <div className="col-6">
                      <h6 className="font-weight-bold mt-3">Monto:</h6>
                      <InputText
                        text={`$ 0,0`}
                        addClasses="text-right"
                        name="quantity"
                        value={quantity}
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
                        className="form-control"
                        rows="3"
                        placeholder={`Ingrese un mensaje asociado (opcional). Este texto irá en el correo generado automáticamente al usuario.`}
                        name="description"
                        value={description}
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
