import { fileUpload } from '../helpers/fileUploads';
import { setAlertAction } from '../store/actions/swal';

export const useUploadCloudinary = () => {
  const uploadImage = async (file, dispatch) => {
    try {
      const url = await fileUpload(file);

      dispatch(
        setAlertAction(
          'ErrorSwal.Success',
          'DashboardProfilePage.Change-Photo',
          'success'
        )
      );

      return url;
    } catch (error) {
      dispatch(
        setAlertAction(
          'ErrorSwal.Error',
          'DashboardProfilePage.Types-File',
          'error'
        )
      );
      return null;
    }
  };

  return uploadImage;
};
