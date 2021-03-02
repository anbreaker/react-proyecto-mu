import { types } from '../types/types';

const initialState = {
  alert: {
    title: '',
    text: '',
    icon: '',
  },
};

export const swalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.swalSetAction:
      return {
        ...state,
        alert: action.payload,
      };
    case types.swalRemoveAction:
      return initialState;
    default:
      return state;
  }
};
