import { types } from '../types/types';

const initialState = {
  uid: '',
  displayName: '',
  active: 'false',
  token: '',
  email: '',
  photoURL: '',
  phoneNumber: '',
  role: '',
  // TODO PREGUNTAR POR LOS DOS ACTIVE CON TIPOS DIFERENTES...
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
      return {};

    default:
      return state;
  }
};
