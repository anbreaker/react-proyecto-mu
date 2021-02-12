import React from 'react';
import { useTranslation } from 'react-i18next';

export const ChangeLanguaje = () => {
  const { t, i18n } = useTranslation('global');

  return (
    <div className="text-center small">
      {t('LoginPage.Change-Languaje')}
      <button
        className="btn bg-transparent"
        onClick={() => i18n.changeLanguage('es')}
      >
        🇪🇸
      </button>
      <button
        className="btn bg-transparent"
        onClick={() => i18n.changeLanguage('en')}
      >
        🇬🇧
      </button>
      <button
        className="btn bg-transparent"
        onClick={() => i18n.changeLanguage('pt')}
      >
        🇵🇹
      </button>
    </div>
  );
};
