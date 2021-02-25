import { fileUpload } from '../../helpers/fileUploads';

export const uploadFileCloudinaryAction = file => {
  return async dispatch => {
    const fileUrl = await fileUpload(file);

    console.log(fileUrl, '<--fileUrl');
  };
};
