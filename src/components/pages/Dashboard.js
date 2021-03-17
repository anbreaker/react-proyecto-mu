// eslint-disable
import React from 'react';
import { useTranslation } from 'react-i18next';

import { MainLayout } from '../layout/MainLayout';
import { InfoCards } from '../parts/InfoCards';

export const Dashboard = () => {
  const { t } = useTranslation('global');

  return (
    <MainLayout>
      <div className="container-fluid">
        <h1 className="h3 mb-4 text-gray-800">{t('Dashboard.Welcome')}</h1>

        <p className="h5 mb-4">{t('Dashboard.Resume')}</p>

        <div className="row">
          <InfoCards
            text={t('TreasurerResumePage.Income')}
            variantBorder={'border-bottom-success'}
            variantText={'text-success'}
            quantity={'200'}
          />

          <InfoCards
            text={t('TreasurerResumePage.Expenses')}
            variantBorder={'border-bottom-danger'}
            variantText={'text-danger'}
            quantity={'200'}
          />

          <InfoCards
            text={t('TreasurerResumePage.Net')}
            variantBorder={'border-bottom-info'}
            variantText={'text-info'}
            quantity={'200'}
          />
        </div>
      </div>
    </MainLayout>
  );
};
