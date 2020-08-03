import React, { useState } from 'react';
import ProgressBar from '../ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    const selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  return (
    <form className="UploadForm">
      <label className="UploadForm__label" htmlFor="UploadForm__input">
        +
        <input
          id="UploadForm__input"
          className="UploadForm__input"
          type="file"
          onChange={handleChange}
        />
      </label>

      {/* <div className="output"> */}
      {/*  {error && <div className="error">{error}</div>} */}
      {/*  {file && <div>{file.name}</div>} */}
      {/*  {file && <ProgressBar file={file} setFile={setFile} />} */}
      {/* </div> */}
    </form>
  );
};

export default UploadForm;
