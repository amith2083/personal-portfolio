
'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Load = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-yellow-100 to-red-100 z-50"
        >
          <motion.img 
            src="/spinner.gif" 
            alt="Loading" 
            initial={{ scale: 0.5, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 1.5, loop: Infinity }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Load;