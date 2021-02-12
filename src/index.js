import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import { App } from './components/app/App';
import global_en from './translations/en/global.json';
import global_es from './translations/es/global.json';
import global_pt from './translations/pt/global.json';

export const i18n = i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    en: { global: global_en },
    es: { global: global_es },
    pt: { global: global_pt },
  },
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </I18nextProvider>,
  document.getElementById('root')
);
