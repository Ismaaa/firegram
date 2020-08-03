import React from 'react';
import { motion } from 'framer-motion';
import useFirestore from '../../services/firebase/hooks/firestore';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

  return (
    <div className="ImageGrid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="ImageGrid__wrapper"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            s
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              className="ImageGrid__image"
              src={doc.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
