import { useState, useEffect } from 'react';
import { firebaseFirestore, firebaseStorage, timestamp } from '..';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = firebaseStorage.ref(file.name);
    const collectionRef = firebaseFirestore.collection('images');

    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const downloadUrl = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        await collectionRef.add({ url: downloadUrl, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
