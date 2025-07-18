'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const Load = () => {
   const [showLoader, setShowLoader] = useState(true);

  // useEffect(() => {
  //   setLoad(true);
  // }, []);
    useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000); // Adjust delay if needed
    return () => clearTimeout(timer);
  }, []);

  return (
     <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ top: 0 }}
          animate={{ top: '-100%' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full fixed left-0 top-0 flex items-center justify-center bg-gradient-to-t from-yellow-50 to-red-50 z-50"
        >
          <img src="/spinner.gif" alt="Spinner Gif" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Load;