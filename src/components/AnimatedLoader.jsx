import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLoader = ({ size = 'medium', color = 'var(--color-secondary)' }) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
  };

  return (
    <div className="flex justify-center items-center">
      <motion.div
        className={`${sizeClasses[size]} rounded-full border-4 border-gray-200`}
        style={{ borderTopColor: color }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};

export default AnimatedLoader;
