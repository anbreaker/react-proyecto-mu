import client from '../api/client';
import { setAlertAction } from '../store/actions/swal';

export const useSendGrid = () => {
  const sendMail = async (formValues, dispatch, type) => {
    try {
      await client.senderMail(
        {
          email: process.env.REACT_APP_CONTACT_ADMIN,
          type: type,
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
    } catch (error) {
      dispatch(
        setAlertAction('ErrorSwal.Error', 'ContactWith.Send-Error', 'error')
      );
      console.log(error);
    }
  };
  return sendMail;
};
