import React from 'react';
import { motion } from 'framer-motion';
import useFirestore from '../../services/firebase/hooks/firestore';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

  console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            s
            onClick={() => setSelectedImg(doc.downloadUrl)}
          >
            <motion.img
              src={doc.downloadUrl}
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
