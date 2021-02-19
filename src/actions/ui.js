import { types } from '../types/types';

export const setErrorAction = error => ({
  type: types.uiSetError,
  payload: error,
});
export const removeErrorAction = () => ({
  type: types.uiRemoveError,
});
