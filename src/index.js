import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import { configureStore } from './store/storeConfig';
import { firebaseInit } from './firebase/firebaseConfig';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import { App } from './components/app/App';
import './i18n/i18nextConfig';
import { login } from './store/actions/auth';
import { configureClient } from './api/client';

const history = createBrowserHistory();

const store = configureStore({}, history);

firebaseInit.auth().onAuthStateChanged(user => {
  if (user) {
    user.getIdToken().then(token => {
      store.dispatch(login(user.uid, user.displayName, token));
      configureClient(token);
    });
  }
});

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
