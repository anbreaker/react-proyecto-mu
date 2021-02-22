import { types } from '../types/types';

export const setErrorAction = keyValue => ({
  type: types.uiSetError,
  payload: keyValue,
});

export const removeErrorAction = () => ({
  type: types.uiRemoveError,
});

export const startLoadingAction = () => ({
  type: types.uiStartLoading,
});

export const finishLoadingAction = () => ({
  type: types.uiFinishLoading,
});
