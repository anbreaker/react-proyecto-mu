import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSpanishAction,
  setEnglishAction,
  setPortugueseAction,
} from '../../store/actions/languaje';
import { getLanguaje } from '../../store/selectors';

export const ChangeLanguaje = () => {
  const { t, i18n } = useTranslation('global');
  const dispatch = useDispatch();

  const { languaje } = useSelector(getLanguaje);

  const handleLanguajeChange = ({ target }) => {
    const { name } = target;

    if (name === 'es') dispatch(setSpanishAction('es'));
    if (name === 'en') dispatch(setEnglishAction('en'));
    if (name === 'pt') dispatch(setPortugueseAction('pt'));
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

// strore /action
