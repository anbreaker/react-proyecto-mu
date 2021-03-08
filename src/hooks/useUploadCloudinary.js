import { useEffect, useState } from 'react';

import { fileUpload } from '../helpers/fileUploads';

// TODO crear custom hook para subir archivos a cloudinary

export const useUploadCloudinary = file => {
  const [fieldValue, setFieldValue] = useState();

  useEffect(async () => {
    try {
      const url = await fileUpload(file);

      setFieldValue('photoURL', file);
      console.log('Subida la imagen...');
    } catch (error) {
      console.log('error');
    }
  }, [file]);

  console.log(fieldValue);

  return fieldValue;
};

/*
    try {
      const url = await fileUpload(file);

      setFieldValue('photoURL', url);
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
*/
