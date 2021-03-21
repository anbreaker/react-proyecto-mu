import React from 'react';
import { useTranslation } from 'react-i18next';

import { MainLayout } from '../layout/MainLayout';
import { ContactWith } from '../parts/ContactWith';

export const DashboardContact = ({ handlerOnFocus }) => {
  const { t } = useTranslation('global');

  return (
    <MainLayout>
      <div className="container-fluid">
        <h1 className="h3 mb-4 text-gray-800">{t('Dashboard.Title')}</h1>

        <p className="h5 mb-4">{t('Dashboard.Info')}</p>

        <ContactWith handlerOnFocus={handlerOnFocus} />
      </div>
    </MainLayout>
  );
};
