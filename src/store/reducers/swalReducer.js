import { types } from '../types/types';

const initialState = {
  sms: '',
};

export const swalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.swalSetAction:
      return {
        ...state,
        alert: action.payload,
      };
    case types.swalRemoveAction:
      return {
        alert: '',
      };

    default:
      return state;
  }
};
