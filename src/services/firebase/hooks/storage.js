import { useState, useEffect } from 'react';
import { firebaseStorage } from '..';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = firebaseStorage.ref(file);
    storageRef.put(file).on(
      'state_changed',
      (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (uploadError) => {
        setError(uploadError);
      },
      async () => {
        const downloadUrl = await storageRef.getDownloadURL();
        setUrl(downloadUrl);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
