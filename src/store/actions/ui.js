import { types } from '../types/types';

export const setErrorAction = msg => ({
  type: types.uiSetError,
  payload: msg,
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

export const setShowSidebar = value => ({
  type: types.uiSetShowSidebar,
  payload: value,
});
