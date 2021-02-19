import {
  firebaseInit,
  googleAuthProvider,
} from '../../firebase/firebaseConfig';

import { types } from '../types/types';

export const startGoogleLogin = () => {
  return dispatch => {
    firebaseInit
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => dispatch(login(user.uid, user.displayName)));
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
