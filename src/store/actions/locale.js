import { types } from '../types/types';

export const setLocaleAction = () => ({
  type: types.locale,
  payload: window.navigator.language,
});
