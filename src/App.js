import React, { useState } from 'react';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import MainHeading from './components/MainHeading';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div id="main">
      <MainHeading />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
