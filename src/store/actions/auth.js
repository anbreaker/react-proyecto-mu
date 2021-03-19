import {
  firebaseInit,
  googleAuthProvider,
} from '../../firebase/firebaseConfig';

import {
  configureClient,
  setHeaderOrgId,
  removeHeaderOrgId,
} from '../../api/client';
import { getMenuByRole } from '../../auth/permisos';
import { finishLoadingAction, setErrorAction, startLoadingAction } from './ui';
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

      const token = await user.getIdToken();

      dispatch(login({ ...user, token }));

      dispatch(finishLoadingAction());
    } catch (error) {
      console.log({ error });
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
      console.log({ error });
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
      try {
        configureClient(userData.token);
        const dataUserDB = await api.checkUserDB();
        if (dataUserDB.organizations && dataUserDB.organizations.length > 0) {
          dispatch(getOrgData(dataUserDB.organizations[0]._id));
        }
        userData = { ...userData, ...dataUserDB };
        dispatch(updateAuth(userData));
      } catch (error) {
        console.log(`ErrorSwal.${error}`);
        dispatch(
          setAlertAction('ErrorSwal.Error', `ErrorSwal.${error}`, 'error')
        );
      } finally {
        return;
      }
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

export const updateAuth = ({
  uid,
  id,
  displayName,
  firstSurname,
  secondSurname,
  fiscalNumber,
  token,
  photoURL,
  email,
  contact,
  active,
  role,
  organizations: orgs,
}) => {
  const permisos = getMenuByRole(role);
  return {
    type: types.login,
    payload: {
      uid,
      id,
      displayName,
      firstSurname,
      secondSurname,
      fiscalNumber,
      token,
      photoURL,
      email,
      contact,
      role,
      active,
      permisos,
      organizations: orgs,
    },
  };
};

export const changeOrgAction = org => {
  return {
    type: types.changeOrg,
    payload: org,
  };
};

export const getOrgData = orgId => {
  return async (dispatch, getState, { history, api }) => {
    dispatch(startLoadingAction());
    setHeaderOrgId(orgId);
    api
      .getOrgById()
      .then(data => dispatch(changeOrgAction(data)))
      .catch(err => {
        console.log(err);
        dispatch(setErrorAction(err.message));
      })
      .finally(() => dispatch(finishLoadingAction()));
  };
};

export const startLogout = () => {
  return async (dispatch, getState, { history }) => {
    await firebaseInit.auth().signOut();
    dispatch(logout());
    removeHeaderOrgId();
    history.push('/');
  };
};

export const logout = () => ({
  type: types.logout,
});

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return async (dispatch, getState, { history }) => {
    dispatch(startLoadingAction());
    firebaseInit
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        firebaseInit
          .auth()
          .currentUser.sendEmailVerification({
            url: `https://www.egestion.xyz/login?user=${user.email}`,
          })
          .then(data => {
            console.log({ data });
            dispatch(
              setAlertAction(
                'ErrorSwal.Success',
                'RegisterPage.Verify-Email',
                'success'
              )
            );
            history.push('/verify');
          })
          .catch(err => console.log({ err }));

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
  return async dispatch => {
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
        console.log({ error });
      });
  };
};

export const updateProfileImage = url => {
  return {
    type: types.setProfileImg,
    payload: {
      photoURL: url,
    },
  };
};

export const updateProfileAction = userData => {
  return async (dispatch, getState, { history, api }) => {
    try {
      const { uid } = getState().auth;
      const resp = await api.saveUserDB({ ...userData, uid });
      dispatch(updateAuth(resp));
      dispatch(
        setAlertAction(
          'ErrorSwal.Success',
          'ErrorSwal.SuccessUpdateProfile',
          'success'
        )
      );
      history.push('/dashboard');
    } catch (error) {
      dispatch(
        setAlertAction('ErrorSwal.Error', `ErrorSwal.${error.code}`, 'error')
      );
      console.log({ error });
    }
  };
};
