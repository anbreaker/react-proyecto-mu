import { types } from '../types/types';

export const setSpanishAction = () => ({
  type: types.lngSpanish,
  payload: 'es',
});

export const setEnglishAction = () => ({
  type: types.lngEnglish,
  payload: 'en',
});

export const setPortugueseAction = () => ({
  type: types.lngPortugues,
  payload: 'pt',
});
