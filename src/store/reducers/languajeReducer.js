import { types } from '../types/types';

const initialLanguaje = {
  languaje: 'es',
};

export const languajeReducer = (state = initialLanguaje, action) => {
  switch (action.type) {
    case types.lngSpanish:
      return {
        ...state,
        languaje: action.payload,
      };
    case types.lngEnglish:
      return {
        ...state,
        languaje: action.payload,
      };
    case types.lngPortugues:
      return {
        ...state,
        languaje: action.payload,
      };

    default:
      return state;
  }
};
