import { types } from '../types/types';

const initialState = {
  uid: '',
  displayName: '',
  token: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        ...action.payload,
      };

    case types.logout:
      return {};

    default:
      return state;
  }
};
