import { fileUpload } from '../../helpers/fileUploads';
import { setAlertAction } from './swal';

export const uploadFileCloudinaryAction = file => {
  return async dispatch => {
    const fileUrl = await fileUpload(file);

    // TODO url cloudinary
    // Guardar URL (actualizar dato en Back)
    console.log(fileUrl, '<-- URL Cloudinary');
  };
};

export const checkDataTypeImg = file => {
  return dispatch => {
    if (file.type === 'image/jpeg' || file.type === 'image/png') {
      dispatch(uploadFileCloudinaryAction(file));
      dispatch(
        setAlertAction(
          'ErrorSwal.Success',
          'DashboardProfilePage.Change-Photo',
          'success'
        )
      );
    } else {
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
