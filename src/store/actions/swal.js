import { types } from '../types/types';

export const setAction = sms => ({
  type: types.swalSetAction,
  payload: (alert = {
    icon: 'error',
    title: 'Ups...',
    text: 'Something went wrong',
  }),
});

export const removeAction = () => ({
  type: types.swalRemoveAction,
  payload: '',
});
