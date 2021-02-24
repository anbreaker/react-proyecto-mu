import { types } from '../types/types';

const initialState = {
  uid: '',
  displayName: '',
  token: '',
  email: '',
  photoURL: '',
  phoneNumber: '',
  role: '',
  permisos: [],
};

export const authReducer = (state = initialState, action) => {
  console.log(action, '<---- Action');

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
