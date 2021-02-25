import { fileUpload } from '../../helpers/fileUploads';

export const uploadFileCloudinaryAction = file => {
  return async dispatch => {
    // eslint-disable-next-line
    const fileUrl = await fileUpload(file);
    console.log(fileUrl, '<-- URL Cloudinary');
  };
};
