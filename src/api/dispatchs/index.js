import client from '../index';
import { types } from '../../store/types/types';
import { login } from '../../store/actions/auth';
import { authFirebase } from '../../firebase/firebaseConfig';
import Swal from 'sweetalert2';
/* export const dispatchLogin = data => {
  console.log(data);
  return dispatch => {
    client
      .login(data)
      .then(res => {
        //(dispatch(login(res.uid, res.displayname));
        console.log(res);
      })
      .cath(err => {
        // dispatch() TODO dispatch general para manejar errores y spinners
        console.log(err);
      });
  };
}; */

export const dispatchLogout = () => {
  return dispatch => {
    client.logout().then(res => {
      dispatch(types.logout);
      console.log(res);
    });
  };
};

export const startRegisterWithEmailPasswordName = (
  email,
  password,
  username,
  surname,
  organization,
  fiscalNumber
) => {
  return dispatch => {
    console.log(dispatch);
    console.log('JJJ');
    authFirebase.auth().createUserWithEmailAndPassword(email, password);
  };
  /*      .then(data => console.log(data))
        async ({ user }) => {
        await user.updateProfile({
          displayName: `${username} ${surname}`,
          email:email,
          organization: organization,
          fiscalNumber: fiscalNumber
        });
        console.log(user)
        
        dispatch(login(user.uid, user.displayName));
      })
      .catch(error => {
        console.error('Error ->', error);
        Swal.fire('Error', error.message, 'error');
      });
  }; */
};
