import { types } from '../types/types';

export const setErrorAction = keyValue => ({
  type: types.uiSetError,
  payload: keyValue,
});

export const removeErrorAction = () => ({
  type: types.uiRemoveError,
});
