import {
  firebaseInit,
  googleAuthProvider,
} from '../../firebase/firebaseConfig';

import { configureClient } from '../../api/client';
import { getMenuByRole } from '../../auth/permisos';
import { finishLoadingAction, startLoadingAction } from './ui';
import { setAlertAction } from './swal';
import { types } from '../types/types';

export const startLoginEmailPassword = (email, password) => {
  return async (dispatch, getState, { history, api }) => {
    // console.log('user: ', firebaseInit.auth().currentUser);
    dispatch(startLoadingAction());

    try {
      const { user } = await firebaseInit
        .auth()
        .signInWithEmailAndPassword(email, password);

      console.log(user, ',<---User');

      const token = await user.getIdToken();

      dispatch(login({ ...user, token }));

      dispatch(finishLoadingAction());

      // TODO ventana Modal
    } catch (error) {
      console.log(error);
      dispatch(finishLoadingAction());

      dispatch(
        setAlertAction('ErrorSwal.Error', `ErrorSwal.${error.code}`, 'error')
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

      dispatch(login({ ...user, token }));

      dispatch(finishLoadingAction());
    } catch (error) {
      console.log(error);
      dispatch(finishLoadingAction());

      dispatch(
        setAlertAction('ErrorSwal.Error', `ErrorSwal.${error.code}`, 'error')
      );
    }
  };
};

export const login = userData => {
  return async (dispatch, getState, { history, api }) => {
    if (userData.emailVerified) {
      configureClient(userData.token);
      const dataUserDB = await api.checkUserDB();
      userData = { ...userData, ...dataUserDB };
      dispatch(finishLogin(userData));
      return;
    }
    dispatch(
      setAlertAction(
        'ErrorSwal.Error',
        `ErrorSwal.auth/email-not-verified`,
        'error'
      )
    );
  };
};

export const finishLogin = ({
  uid,
  displayName,
  token,
  photoURL,
  email,
  phoneNumber,
  active,
  role,
}) => {
  const permisos = getMenuByRole(role);
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
      token,
      photoURL,
      email,
      phoneNumber,
      role,
      active,
      permisos,
    },
  };
};

export const startLogout = () => {
  return async (dispatch, getState, { history }) => {
    await firebaseInit.auth().signOut();
    dispatch(logout());
    history.push('/');
  };
};

export const logout = () => ({
  type: types.logout,
});

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch, getState, { history }) => {
    dispatch(startLoadingAction());
    firebaseInit
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        firebaseInit
          .auth()
          .currentUser.sendEmailVerification({
            // TODO preguntar por esto a Luis (user.email???)
            url: `https://www.egestion.xyz/login?user=${user.email}`,
          })
          .then(data => {
            console.log(data);
            dispatch(
              setAlertAction(
                'ErrorSwal.Success',
                'RegisterPage.Verify-Email',
                'success'
              )
            );
            history.push('/verify');
          }) // TODO Pedir explicacion?? para entender...
          .catch(err => console.log(err));

        dispatch(finishLoadingAction());
      })
      .catch(error => {
        console.error('Error ->', error);

        dispatch(finishLoadingAction());

        dispatch(
          setAlertAction('ErrorSwal.Error', `ErrorSwal.${error.code}`, 'error')
        );
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
        dispatch(finishLoadingAction());

        dispatch(
          setAlertAction(
            'ErrorSwal.Success',
            'ErrorSwal.Password-Send',
            'success'
          )
        );
      })

      .catch(error => {
        dispatch(finishLoadingAction());

        dispatch(
          setAlertAction('ErrorSwal.Error', `ErrorSwal.${error.code}`, 'error')
        );
        console.log(error);
      });
  };
};
