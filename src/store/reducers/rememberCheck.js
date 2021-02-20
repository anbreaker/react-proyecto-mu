import { types } from '../types/types';

const initialState = {
  check: false,
};

export const rememberCheck = (state = initialState, action) => {
  switch (action.type) {
    case types.rmbCheck:
      return {
        check: action.payload,
      };

    case types.notCheck:
      return {
        check: action.payload,
      };

    default:
      return state;
  }
};
