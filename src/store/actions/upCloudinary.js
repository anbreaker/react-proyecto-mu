import { fileUpload } from '../../helpers/fileUploads';

export const uploadFileCloudinaryAction = file => {
  return async dispatch => {
    // eslint-disable-next-line
    const fileUrl = await fileUpload(file);

    // TODO url cloudinary
    // Guardar URL (actualizar dato en Back)
    console.log(fileUrl, '<-- URL Cloudinary');
  };
};
