import { types } from '../types/types';

const initialState = {
  locale: window.navigator.language,
};

export const localeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.locale:
      return {
        ...state,
        locale: action.payload,
      };

    default:
      return state;
  }
};
