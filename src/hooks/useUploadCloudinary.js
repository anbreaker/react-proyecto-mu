import { fileUpload } from '../helpers/fileUploads';
import { setAlertAction } from '../store/actions/swal';

// TODO crear custom hook para subir archivos a cloudinary
// TODO Como usar dispatch sin redux...

export const useUploadCloudinary = async file => {
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
  }
};
