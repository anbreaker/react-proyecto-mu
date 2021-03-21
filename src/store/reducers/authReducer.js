import { types } from '../types/types';

const initialState = {
  uid: '',
  id: '',
  emailVerified: false,
  loginStatus: '',
  displayName: '',
  firstSurname: '',
  secondSurname: '',
  fiscalNumber: '',
  token: '',
  email: '',
  photoURL: '',
  contact: { mobile: '', homePhone: '', address: '' },
  role: '',
  active: false,
  permisos: [],
  organizations: [],
  orgSelected: {},
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

    case types.loginStatusChange:
      return { ...state, loginStatus: action.payload };

    case types.setProfileImg:
      return { ...state, ...action.payload };

    case types.changeOrg:
      return { ...state, orgSelected: action.payload };

    default:
      return state;
  }
};
