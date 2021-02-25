export const fileUpload = async file => {
  // url cloudinary API KEY...
  const cloudinaryUrl = process.env.REACT_APP_CLOUDINARY;
  const preset = process.env.REACT_APP_PRESET;

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', preset);

  try {
    const response = await fetch(cloudinaryUrl, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const cloudinaryResponse = await response.json();
      return cloudinaryResponse.secure_url;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }

  //return url de img
};
