import { firebaseInit } from '../../firebase/firebaseConfig';

import { types } from '../types/types';

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export const startLogout = () => {
  return async dispatch => {
    await firebaseInit.auth().signOut();

    dispatch(logout());
  };
};

export const logout = () => ({
  type: types.logout,
});