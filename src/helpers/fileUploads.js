const { REACT_APP_CLOUDINARY } = process.env;

export const fileUpload = async file => {
  console.log(REACT_APP_CLOUDINARY, '<--URL');

  const formData = new FormData();
  formData.append('upload_preset', 'egestion');
  formData.append('file', file);

  try {
    const response = await fetch(REACT_APP_CLOUDINARY, {
      method: 'POST',
      body: formData,
    });

    console.log(response, '<---ver response!!');

    if (response.ok) {
      console.log('en el if');

      const cloudinaryResponse = await response.json();
      return cloudinaryResponse.secure_url;
    } else {
      await response.json();
    }
  } catch (error) {
    throw error;
  }

  //return url de img
};
