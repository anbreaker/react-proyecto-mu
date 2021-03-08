import React from 'react';
import { useTranslation } from 'react-i18next';

import { MainLayout } from '../layout/MainLayout';

export const DisabledUserPage = () => {
  const { t } = useTranslation('global');

  return (
    <MainLayout>
      <div className="container-fluid">
        <h1 className="h3 mb-4 text-gray-800">{t('DisabledUserPage.Info')}</h1>
      </div>
    </MainLayout>
  );
};
