import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { getSwalSms } from '../../store/selectors';

// TODO...

export const SweetAlert = (...props) => {
  const { alert, onClose } = props;

  const { sms } = useSelector(getSwalSms);
  console.log(sms);

  useEffect(() => {
    if (alert) Swal.fire(alert).then(onClose);
  }, [alert, onClose]);

  return null;
};
