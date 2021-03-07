import { types } from '../types/types';

const initialState = {
  uid: '',
  displayName: '',
  token: '',
  email: '',
  photoURL: '',
  phoneNumber: '',
  role: '',
  active: false,
  permisos: [],
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        ...action.payload,
      };

    case types.logout:
      return { ...initialState };

    default:
      return state;
  }
};
