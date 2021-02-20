import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer } from './reducers/authReducer';
import { languajeReducer } from './reducers/languajeReducer';
import { uiReducer } from './reducers/uiReducer';
import { localeReducer } from './reducers/localeReducer';

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  languaje: languajeReducer,
  locale: localeReducer,
});

const middlewares = [thunk];

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
