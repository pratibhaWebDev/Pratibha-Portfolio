import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-[var(--bg-main)] flex items-center justify-center z-50"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          {/* Logo Animation */}
          <motion.div
            className="text-4xl font-bold text-[var(--color-secondary)] mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Pratibha
          </motion.div>

          {/* Loading Spinner */}
          <motion.div
            className="w-16 h-16 border-4 border-gray-200 border-t-[var(--color-secondary)] rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />

          {/* Progress Bar */}
          <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--color-secondary)] to-purple-700"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Progress Text */}
          <motion.p
            className="text-[var(--text-secondary)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {Math.round(progress)}%
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
