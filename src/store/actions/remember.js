import { types } from '../types/types';

export const setRememberCheckAction = () => ({
  type: types.rmbCheck,
  payload: true,
});

export const removeRememberCheckAction = () => ({
  type: types.notCheck,
  payload: false,
});
