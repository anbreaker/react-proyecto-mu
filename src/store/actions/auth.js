import { firebaseInit } from '../../firebase/firebaseConfig';
import Swal from 'sweetalert2';

import { types } from '../types/types';

export const startLoginEmailPassword = (email, password) => {
  return dispatch => {
    firebaseInit
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        console.log(user.uid, user.displayName);

        // TODO COMO TRADUCIR ESTOS MENSAJES...
        Swal.fire('Success', 'Bienvenido', 'success');
      })
      .catch(error => {
        console.error('Error ->', error);

        // TODO COMO TRADUCIR ESTOS MENSAJES...
        Swal.fire('Error', error.message, 'error');
      });
  };
};

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

        // TODO COMO TRADUCIR ESTOS MENSAJES...
        Swal.fire('Success', 'Bienvenido', 'success');
      })
      .catch(error => {
        console.error('Error ->', error);

        // TODO COMO TRADUCIR ESTOS MENSAJES...
        Swal.fire('Error', error.message, 'error');
      });
  };
};
