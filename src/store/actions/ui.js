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
  payload: true,
});

export const finishLoadingAction = () => ({
  type: types.uiFinishLoading,
  payload: false,
});

export const menuUserToggle = value => ({
  type: types.uiMenuUserToggle,
  payload: value,
});
