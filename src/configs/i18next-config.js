import i18next from 'i18next';

import global_en from '../translations/en/global.json';
import global_es from '../translations/es/global.json';
import global_pt from '../translations/pt/global.json';

const browserLanguage = window.navigator.language;

i18next.init({
  interpolation: { escapeValue: false },
  lng: browserLanguage,
  resources: {
    en: { global: global_en },
    es: { global: global_es },
    pt: { global: global_pt },
  },
});
