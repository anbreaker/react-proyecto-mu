export const fileUpload = async file => {
  // url cloudinary API KEY...
  const cloudUrl = process.env.REACT_APP_API_KEY;
  const preset = process.env.REACT_APP_PRESET;

  console.log(cloudUrl, '<--URL');
  console.log(preset, '<--Preset');

  const formData = new FormData();
  formData.append('upload_preset', 'egestion');
  formData.append('file', file);

  try {
    const response = await fetch(
      // NO ENTIENDO XQ NO LEE LA VARIABLE DE ENTORNO!!!!
      cloudUrl,
      {
        method: 'POST',
        body: formData,
      }
    );

    console.log(response.ok, '<---ver response!!');

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
