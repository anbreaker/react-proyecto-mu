import { fileUpload } from '../../helpers/fileUploads';
import { setAlertAction } from './swal';
import { updateProfileImage } from '../actions/auth';

export const uploadProfilePhoto = file => {
  return async dispatch => {
    try {
      const url = await fileUpload(file);
      dispatch(updateProfileImage(url));
      dispatch(
        setAlertAction(
          'ErrorSwal.Success',
          'DashboardProfilePage.Change-Photo',
          'success'
        )
      );
    } catch (error) {
      dispatch(
        setAlertAction(
          'ErrorSwal.Error',
          'DashboardProfilePage.Types-File',
          'error'
        )
      );
    }
  };
};
