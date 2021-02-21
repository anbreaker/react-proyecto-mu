import { firebaseInit } from '../../firebase/firebaseConfig';
import Swal from 'sweetalert2';

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

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return dispatch => {
    firebaseInit
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });

        dispatch(login(user.uid, user.displayName));
      })
      .catch(error => {
        console.error('Error ->', error);
        Swal.fire('Error', error.message, 'error');
      });
  };
};
