import client from '../api/client';
import { setAlertAction } from '../store/actions/swal';

export const useSendGrid = () => {
  console.log('custom hook');
  const sendMail = async (formValues, dispatch) => {
    try {
      if (location.pathname === '/dashboard') {
        console.log({ ...formValues, type: 'CONTACT' }, '<--- Ver!!');

        await client.senderMail(
          {
            email: process.env.REACT_APP_CONTACT_ADMIN,
            type: 'CONTACT',
            data: {
              userEmail: formValues.email,
              name: formValues.name,
              mobile: formValues.mobile,
              message: formValues.message,
            },
          },
          dispatch(
            setAlertAction(
              'ErrorSwal.Success',
              'ContactWith.Send-Email',
              'success'
            )
          )
        );
      } else {
        console.log({ ...formValues, type: 'INVOICE' });
        dispatch(
          setAlertAction('ErrorSwal.Error', 'ContactWith.Send-Error', 'error')
        );
        await client.senderMail({ ...formValues, type: 'INVOICE' });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return sendMail;
};
