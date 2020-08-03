import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import useStorage from '../../services/firebase/hooks/storage';

const ProgressBar = ({ file, setFile }) => {
  const { progress, url, error } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  if (error) return <div>{error}</div>;

  return (
    <motion.div
      className="ProgressBar"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
    />
  );
};

export default ProgressBar;
