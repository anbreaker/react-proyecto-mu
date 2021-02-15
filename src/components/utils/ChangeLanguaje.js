import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const ChangeLanguaje = () => {
  const { t, i18n } = useTranslation('global');

  const [languaje, setLanguaje] = useState('');

  const handleLanguajeChange = ({ target }) => {
    const { name } = target;

    if (name === 'es') setLanguaje('es');
    if (name === 'en') setLanguaje('en');
    if (name === 'pt') setLanguaje('pt');
  };

  useEffect(() => {
    i18n.changeLanguage(languaje);
  }, [languaje]);

  return (
    <div className="text-center small">
      {t('LoginPage.Change-Languaje')}
      <button
        className="btn bg-transparent"
        name="es"
        onClick={handleLanguajeChange}
      >
        🇪🇸
      </button>
      <button
        className="btn bg-transparent"
        name="en"
        onClick={handleLanguajeChange}
      >
        🇬🇧
      </button>
      <button
        className="btn bg-transparent"
        name="pt"
        onClick={handleLanguajeChange}
      >
        🇵🇹
      </button>
    </div>
  );
};
