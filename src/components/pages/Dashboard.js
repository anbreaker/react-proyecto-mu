import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';

import { getUserFiscalYear, getUserName } from '../../store/selectors';
import { SelectYears } from '../basicComponents/SelectYears';
import { MainLayout } from '../layout/MainLayout';
import { CardsProfile } from '../parts/CardsProfile';
import { ContactAdmin } from '../parts/ContactAdmin';
import { InfoCards } from '../parts/InfoCards';
import { changeNum2Cur } from '../utils/formatNumber';
import { formatToLocaleDate } from '../utils/dateFormat';

export const Dashboard = ({ handlerOnFocus }) => {
  const { t } = useTranslation('global');

  const name = useSelector(getUserName);

  const { formValues, handleInputChange } = useForm({
    year: new Date().getFullYear(),
  });

  const { year } = formValues;
  const fiscalYear = useSelector(getUserFiscalYear(year));

  const [quota, setquota] = useState(0);
  const [payToDate, setPayToDate] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    console.log(fiscalYear);
    const q = fiscalYear?.feePerYear?.amount;
    setquota(changeNum2Cur(q) ?? 0);
    const pay = fiscalYear?.payment.reduce((acc, val) => acc + val.amount, 0);
    setPayToDate(changeNum2Cur(pay) ?? 0);
    setBalance(changeNum2Cur(q - pay) ?? 0);
  }, [year]);

  return (
    <MainLayout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex">
            <h4 className="mb-4 text-gray-800">
              {t('Dashboard.Welcome')}, {name}. {t('Dashboard.Resume')}
            </h4>
          </div>
          <div className="col-12 col-lg-4 mb-3">
            <SelectYears value={year} onChange={handleInputChange} required />
          </div>
        </div>

        <CardsProfile />

        <div className="row">
          <InfoCards
            text={t('Dashboard.Annual-Fee')}
            variantBorder={'border-bottom-danger'}
            variantText={'text-danger'}
            quantity={quota}
          />

          <InfoCards
            text={t('Dashboard.Payments')}
            variantBorder={'border-bottom-success'}
            variantText={'text-success'}
            quantity={payToDate}
          />

          <InfoCards
            text={t('Dashboard.Balance')}
            variantBorder={'border-bottom-info'}
            variantText={'text-info'}
            quantity={balance}
          />
        </div>
      </div>

      <div className="card-body">
        <div className="row">
          <div className="col-12">
            {' '}
            <h4 className="mb-4 text-primary">{t('Dashboard.Payments')}</h4>
          </div>
        </div>
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead className="font-weight-bold text-primary">
              <tr>
                <th className="text-center">{t('Dashboard.Date-Pay')}</th>
                <th className="text-right">{t('Dashboard.Amount-Paid')}</th>
                <th className="text-center">{t('Dashboard.Payment-Method')}</th>
                <th className="text-center">{t('Dashboard.Bank')}</th>
              </tr>
            </thead>

            <tbody>
              {fiscalYear?.payment.map(pay => (
                <tr key={pay._id}>
                  <td className="text-center">
                    {formatToLocaleDate(pay.date)}
                  </td>
                  <td className="text-right">{changeNum2Cur(pay.amount)}</td>
                  <td className="text-center">{pay.paymentMethod}</td>
                  <td className="text-center">{pay.bank}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <hr />
          <ContactAdmin handlerOnFocus={handlerOnFocus} />
        </div>
      </div>
    </MainLayout>
  );
};
