import React, { useState } from 'react';

const ALLOWED_TYPES = ['image/png', 'image/jpeg'];

const UploadForm = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const onChangeHandler = (event) => {
    const uploadedFile = event.target.files[0];

    if (uploadedFile && ALLOWED_TYPES.includes(uploadedFile.type)) {
      setImage(uploadedFile);
      setError('');
    } else {
      setImage(null);
      setError('Please select a valid image file. PNG or JPEG');
    }
  };

  return (
    <form action="#">
      <input type="file" onChange={onChangeHandler} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {image && image.name}
      </div>
    </form>
  );
};

export default UploadForm;
