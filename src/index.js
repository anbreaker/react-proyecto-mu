import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/storeConfig';

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import { App } from './components/app/App';
import './configs/i18next-config';

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
);
