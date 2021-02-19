import { types } from '../types/types';

export const setSpanishAction = () => ({
  type: types.lngSpanish,
  payload: 'es',
});

//TODO
//window.navigator.language

export const setEnglishAction = () => ({
  type: types.lngEnglish,
  payload: 'en',
});

export const setPortugueseAction = () => ({
  type: types.lngPortugues,
  payload: 'pt',
});
