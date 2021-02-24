import {
  firebaseInit,
  googleAuthProvider,
} from '../../firebase/firebaseConfig';
import Swal from 'sweetalert2';

import { configureClient } from '../../api/client';
import { getMenuByRole } from '../../auth/permisos';
import { finishLoadingAction, startLoadingAction } from './ui';
import { types } from '../types/types';

export const startLoginEmailPassword = (email, password) => {
  return async (dispatch, getState, { history }) => {
    // console.log('user: ', firebaseInit.auth().currentUser);
    dispatch(startLoadingAction());

    try {
      const { user } = await firebaseInit
        .auth()
        .signInWithEmailAndPassword(email, password);
      const token = await user.getIdToken();
      dispatch(login(user.uid, user.displayName, token));

      configureClient(token);
      dispatch(finishLoadingAction());

      // TODO COMO TRADUCIR ESTOS MENSAJES...
      Swal.fire('Success', 'Bienvenido', 'success');
    } catch (error) {
      console.error('Error ->', error);

      dispatch(finishLoadingAction());
      // TODO COMO TRADUCIR ESTOS MENSAJES...
      Swal.fire('Error', error.message, 'error');
    }
  };
};

export const startGoogleLogin = () => {
  return async dispatch => {
    dispatch(startLoadingAction());

    try {
      const { user } = await firebaseInit
        .auth()
        .signInWithPopup(googleAuthProvider);
      const token = await user.getIdToken();

      dispatch(
        login(
          user.uid,
          user.displayName,
          token,
          user.photoURL,
          user.phoneNumber
        )
      );

      configureClient(token);

      dispatch(finishLoadingAction());
    } catch (error) {
      console.log(error);
      dispatch(finishLoadingAction());

      // TODO COMO TRADUCIR ESTOS MENSAJES...
      Swal.fire('Error', error.message, 'error');
    }
  };
};

export const login = (uid, displayName, token, photoURL, phoneNumber) => {
  //! HARDCODED POR EL MOMENTO
  const permisos = getMenuByRole('SuperAdmin');
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
      token,
      photoURL,
      phoneNumber,
      permisos,
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
    dispatch(startLoadingAction());
    firebaseInit
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });

        dispatch(login(user.uid, user.displayName));
        firebaseInit
          .auth()
          .currentUser.sendEmailVerification({
            url: `https://www.egestion.xyz/?email=${user.email}`,
          })
          .then(data => console.log(data, '<--Data'))
          .catch(err => console.log(err));

        dispatch(finishLoadingAction());
        // TODO COMO TRADUCIR ESTOS MENSAJES...
        Swal.fire('Success', 'Bienvenido', 'success');
      })
      .catch(error => {
        console.error('Error ->', error);

        dispatch(finishLoadingAction());

        // TODO COMO TRADUCIR ESTOS MENSAJES...
        Swal.fire('Error', error.message, 'error');
      });
  };
};
