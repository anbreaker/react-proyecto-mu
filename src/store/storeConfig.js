import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer } from './reducers/authReducer';
import { languajeReducer } from './reducers/languajeReducer';
import { uiReducer } from './reducers/uiReducer';
import { localeReducer } from './reducers/localeReducer';
import { swalReducer } from './reducers/swalReducer';
import * as api from '../api';

export function configureStore(preloadedState, history) {
  const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    languaje: languajeReducer,
    locale: localeReducer,
    swal: swalReducer,
  });

  const middlewares = [thunk.withExtraArgument({ history, api })];

  const store = createStore(
    reducers,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  return store;
}
