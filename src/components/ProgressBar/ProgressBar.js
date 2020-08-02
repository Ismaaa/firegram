import React, { useEffect } from 'react';
import { useStorage } from '../../services/firebase/hooks';

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <div className="progress-bar" />;
};

export default ProgressBar;
