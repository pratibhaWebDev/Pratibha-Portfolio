import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check if user has a theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    // Toggle CSS variables for light theme
    const root = document.documentElement;
    if (newTheme) {
      // Dark theme (current)
      root.style.setProperty('--bg-main', '#111827');
      root.style.setProperty('--bg-surface', '#1F2937');
      root.style.setProperty('--bg-hover', '#374151');
      root.style.setProperty('--text-primary', '#F9FAFB');
      root.style.setProperty('--text-secondary', '#9CA3AF');
      root.style.setProperty('--color-primary', '#F9FAFB');
    } else {
      // Light theme
      root.style.setProperty('--bg-main', '#FFFFFF');
      root.style.setProperty('--bg-surface', '#F8FAFC');
      root.style.setProperty('--bg-hover', '#E2E8F0');
      root.style.setProperty('--text-primary', '#1F2937');
      root.style.setProperty('--text-secondary', '#64748B');
      root.style.setProperty('--color-primary', '#1F2937');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-[var(--bg-hover)] hover:bg-[var(--color-secondary)] 
        transition-colors duration-300 group"
      aria-label="Toggle theme"
    >
      {isDark ? (
        // Sun icon for light mode
        <svg className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-white" 
          fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-white" 
          fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;