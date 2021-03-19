import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import { configureStore } from './store/storeConfig';
import './i18n/i18nextConfig';
import { App } from './components/app/App';
import { removeErrorAction } from './store/actions/ui';

const history = createBrowserHistory();
const store = configureStore({}, history);

// Listener limpia errores de la aplicación en cada cambio de ruta
history.listen(() => {
  store.dispatch(removeErrorAction());
});

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <Router history={history}>
        <App />
      </Router>
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
);
