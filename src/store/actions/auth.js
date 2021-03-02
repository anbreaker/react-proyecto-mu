import {
  firebaseInit,
  googleAuthProvider,
} from '../../firebase/firebaseConfig';
import Swal from 'sweetalert2';

import { configureClient } from '../../api/client';
import { getMenuByRole } from '../../auth/permisos';
import { finishLoadingAction, startLoadingAction } from './ui';
import { setAlertAction } from './swal';
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
      dispatch(
        login(
          user.uid,
          user.displayName,
          token,
          user.photoURL,
          user.email,
          user.phoneNumber
        )
      );

      configureClient(token);
      dispatch(finishLoadingAction());

      dispatch(
        setAlertAction({
          title: 'Success',
          text: 'Bienvenido',
          icon: 'success',
        })
      );
    } catch (error) {
      //console.error('Error ->', error);
      dispatch(finishLoadingAction());
      dispatch(
        setAlertAction({
          title: 'ErrorSwal.Error',
          text: `ErrorSwal.${error.code}`,
          icon: 'error',
        })
      );
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
          user.email,
          user.phoneNumber
        )
      );

      configureClient(token);

      dispatch(finishLoadingAction());
    } catch (error) {
      console.log(error);
      dispatch(finishLoadingAction());

      // TODO como traducir estos mensajes...
      Swal.fire('Error', error.message, 'error');
    }
  };
};

export const login = (
  uid,
  displayName,
  token,
  photoURL,
  email,
  phoneNumber
) => {
  //! HARDCODED POR EL MOMENTO
  const permisos = getMenuByRole('SuperAdmin');

  return {
    type: types.login,
    payload: {
      uid,
      displayName,
      token,
      photoURL,
      email,
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
            // TODO preguntar por esto a Luis (user.email???)
            url: `https://www.egestion.xyz/login?user=${user.email}`,
          })
          .then(data => () => {}) // TODO ver despues...
          .catch(err => console.log(err));

        dispatch(finishLoadingAction());
        // TODO como traducir estos mensajes...
        Swal.fire('Success', 'Bienvenido', 'success');
      })
      .catch(error => {
        console.error('Error ->', error);

        dispatch(finishLoadingAction());

        // TODO como traducir estos mensajes...
        Swal.fire('Error', error.message, 'error');
      });
  };
};

export const recoveryPassAction = email => {
  return dispatch => {
    dispatch(startLoadingAction());
    firebaseInit
      .auth()
      .sendPasswordResetEmail(email, {
        url: `https://www.egestion.xyz/login?user=${email}`,
      })
      .then(() => {
        // TODO como traducir estos mensajes...
        dispatch(finishLoadingAction());
        Swal.fire('Success', 'Enviado email', 'success');
      })
      // dispatch error y success
      .catch(error => {
        dispatch(finishLoadingAction());
        // TODO como traducir estos mensajes...
        Swal.fire('Error', error.message, 'error');
        console.log(error);
      });
  };
};
