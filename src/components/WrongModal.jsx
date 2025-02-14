import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WrongModal = ({ onClose, isOpen = true, text, secondText }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", damping: 15 }}
            className="bg-white p-4 rounded-lg shadow-lg "
          >
            <p className="text-lg font-semibold mb-2">{text}</p>
            <p className="text-gray-600">{secondText}</p>
            <motion.div
                initial={{ width: "100%" }}
                animate={{ width: 0 }}
                exit={{ width: 0 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="h-2 bg-red-500 rounded-lg"
            >

            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default WrongModal;