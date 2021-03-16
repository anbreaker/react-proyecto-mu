import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { removeAlertAction } from '../../store/actions/swal';

export const SweetAlert = ({ alert, children }) => {
  const { t } = useTranslation('global');
  const dispatch = useDispatch();

  useEffect(() => {
    if (alert.text)
      Swal.fire(t(alert.title), t(alert.text), alert.icon).then(() => {
        dispatch(removeAlertAction());
      });
  }, [alert]);

  return children;
};
