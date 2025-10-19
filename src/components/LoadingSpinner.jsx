import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-[var(--bg-main)] flex items-center justify-center z-50">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 border-4 border-[var(--bg-surface)] rounded-full"></div>
        
        {/* Spinning ring */}
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent 
          border-t-[var(--color-secondary)] rounded-full animate-spin"></div>
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          w-2 h-2 bg-[var(--color-accent)] rounded-full"></div>
      </div>
      
      <div className="ml-4">
        <p className="text-[var(--text-primary)] text-lg font-semibold">Loading Portfolio...</p>
        <p className="text-[var(--text-secondary)] text-sm">Preparing awesome content</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;