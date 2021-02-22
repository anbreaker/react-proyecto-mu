import { firebaseInit } from '../../firebase/firebaseConfig';
import Swal from 'sweetalert2';
import { configureClient } from '../../api/client';

import { types } from '../types/types';

export const startLoginEmailPassword = (email, password) => {
  return async (dispatch, getState, { history }) => {
    console.log('user: ', firebaseInit.auth().currentUser);
    try {
      const { user } = await firebaseInit
        .auth()
        .signInWithEmailAndPassword(email, password);
      const token = await user.getIdToken();
      dispatch(login(user.uid, user.displayName, token));
      configureClient(token);
      // TODO COMO TRADUCIR ESTOS MENSAJES...
      Swal.fire('Success', 'Bienvenido', 'success');
    } catch (error) {
      console.error('Error ->', error);

      // TODO COMO TRADUCIR ESTOS MENSAJES...
      Swal.fire('Error', error.message, 'error');
    }
  };
};

export const login = (uid, displayName, token) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
      token,
    },
  };
};

export const startLogout = () => {
  return async (dispatch, getState, { history }) => {
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
