export default async (imageFile) => {
  const formData = new FormData();
  formData.append('file', imageFile);
  formData.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET);

  try {
    const value = await fetch(process.env.CLOUDINARY_URL, {
      method: 'POST',
      body: formData,
    });
    return value.json();
  } catch (error) { alert('hi'); return error.message; }
};
