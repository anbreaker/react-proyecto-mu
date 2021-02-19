import { types } from '../types/types';

export const setErrorAction = key => ({
  type: types.uiSetError,
  payload: key,
});

export const removeErrorAction = () => ({
  type: types.uiRemoveError,
});
