import React from 'react';
import { motion } from 'framer-motion';


const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-lg mx-4 border border-gray-700">
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <h2 className="text-xl text-white font-semibold">{title}</h2>
          <button
            className="text-gray-400 text-2xl hover:text-white transition-colors"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
