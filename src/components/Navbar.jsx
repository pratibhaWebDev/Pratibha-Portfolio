import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import cv from "../assets/cv.png";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Account for fixed navbar
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'analytics', 'learning-journey', 'tools-setup', 'experience', 'projects', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar-container')) {
        setIsMoreMenuOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Main navigation items (shorter list for desktop)
  const mainNavigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  // Additional navigation items for "More" dropdown
  const additionalNavigationItems = [
    { id: 'analytics', label: 'Analytics' },
    { id: 'learning-journey', label: 'Learning Journey' },
    { id: 'tools-setup', label: 'Tools Setup' },
    { id: 'experience', label: 'Experience' },
    { id: 'blog', label: 'Blog' }
  ];

  // All navigation items for mobile menu
  const allNavigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'learning-journey', label: 'Learning Journey' },
    { id: 'tools-setup', label: 'Tools Setup' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.div 
      className="navbar-container flex justify-between items-center px-3 sm:px-4 lg:px-8 py-2 sm:py-3 lg:py-4 
        bg-[var(--bg-surface)] bg-opacity-95 backdrop-blur-lg shadow-xl rounded-xl sm:rounded-2xl mx-2 sm:mx-4 lg:mx-8 mt-2 sm:mt-4
        border border-[var(--bg-hover)]"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >

      {/* Left Logo / Brand */}
      <motion.div 
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => scrollToSection('home')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Logo Icon */}
        <motion.div 
          className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[var(--color-secondary)] to-purple-600 
            rounded-lg flex items-center justify-center shadow-lg"
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
        >
          <span className="text-white font-bold text-xs sm:text-sm lg:text-base">P</span>
        </motion.div>
        
        {/* Brand Text */}
        <div className="flex flex-col">
          <motion.h1 
            className="text-sm sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-[var(--color-secondary)] 
              via-purple-600 to-[var(--color-secondary)] bg-clip-text text-transparent
              tracking-tight leading-none"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: 'linear' 
            }}
            style={{
              backgroundSize: '200% 100%',
            }}
          >
            Pratibha
          </motion.h1>
          <motion.span 
            className="text-xs text-[var(--text-secondary)] font-medium tracking-wider
              hidden lg:block"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Developer
          </motion.span>
        </div>
      </motion.div>

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:flex gap-4 xl:gap-6 text-base lg:text-lg font-medium">
        {mainNavigationItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative transition-colors duration-300 hover:text-[var(--color-secondary)]
              ${activeSection === item.id 
                ? "text-[var(--color-secondary)] font-bold" 
                : "text-[var(--text-secondary)]"
              }`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {item.label}
            {/* Active indicator */}
            {activeSection === item.id && (
              <motion.span 
                className="absolute left-0 -bottom-1 w-full h-[2px] bg-[var(--color-secondary)]"
                layoutId="activeIndicator"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
        
        {/* More Dropdown */}
        <div className="relative">
          <motion.button
            onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
            className={`relative transition-colors duration-300 hover:text-[var(--color-secondary)]
              ${additionalNavigationItems.some(item => activeSection === item.id)
                ? "text-[var(--color-secondary)] font-bold" 
                : "text-[var(--text-secondary)]"
              }`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            More
            <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            {/* Active indicator for any item in more menu */}
            {additionalNavigationItems.some(item => activeSection === item.id) && (
              <motion.span 
                className="absolute left-0 -bottom-1 w-full h-[2px] bg-[var(--color-secondary)]"
                layoutId="activeIndicator"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
          
          {/* More Dropdown Menu */}
          <motion.div
            className="absolute top-full left-0 mt-2 w-48 
              bg-[var(--bg-surface)] bg-opacity-95 backdrop-blur-lg shadow-lg rounded-2xl p-2 z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ 
              opacity: isMoreMenuOpen ? 1 : 0, 
              y: isMoreMenuOpen ? 0 : -10 
            }}
            transition={{ duration: 0.2 }}
            style={{ display: isMoreMenuOpen ? 'block' : 'none' }}
          >
            {additionalNavigationItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMoreMenuOpen(false);
                }}
                className={`w-full text-left p-3 rounded-lg text-sm font-medium transition-colors duration-300
                  ${activeSection === item.id 
                    ? "bg-[var(--color-secondary)] text-white" 
                    : "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]"
                  }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden p-2 text-[var(--color-secondary)]"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Right side - Theme toggle and CV Button */}
      <div className="hidden lg:flex items-center gap-3 xl:gap-4">
        <ThemeToggle />
        <motion.button 
          className="group flex items-center gap-2 px-4 py-2.5 
            bg-gradient-to-r from-[var(--color-secondary)] via-purple-600 to-[var(--color-secondary)]
            text-white rounded-full shadow-lg hover:shadow-xl
            transition-all duration-300 text-sm font-medium
            border border-purple-500/20"
          whileHover={{ 
            scale: 1.05, 
            y: -2,
            boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            backgroundPosition: {
              duration: 3,
              repeat: Infinity,
              ease: 'linear'
            }
          }}
          style={{
            backgroundSize: '200% 100%',
          }}
        >
          <motion.img 
            src={cv} 
            alt="CV Icon" 
            className="w-4 h-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="hidden xl:inline">Download CV</span>
          <motion.span 
            className="text-xs opacity-70"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↓
          </motion.span>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="lg:hidden absolute top-full left-4 right-4 mt-2 
          bg-[var(--bg-surface)] bg-opacity-95 backdrop-blur-lg shadow-lg rounded-2xl p-4 z-50"
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0, 
          y: isMobileMenuOpen ? 0 : -10 
        }}
        transition={{ duration: 0.2 }}
        style={{ display: isMobileMenuOpen ? 'block' : 'none' }}
      >
        <div className="grid grid-cols-2 gap-2">
          {allNavigationItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`p-3 rounded-lg text-sm font-medium transition-colors duration-300
                ${activeSection === item.id 
                  ? "bg-[var(--color-secondary)] text-white" 
                  : "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]"
                }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--bg-hover)]">
          <ThemeToggle />
          <motion.button 
            className="flex items-center gap-2 px-4 py-2.5 
              bg-gradient-to-r from-[var(--color-secondary)] via-purple-600 to-[var(--color-secondary)]
              text-white rounded-full shadow-lg text-sm font-medium
              border border-purple-500/20"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(139, 92, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              backgroundPosition: {
                duration: 3,
                repeat: Infinity,
                ease: 'linear'
              }
            }}
            style={{
              backgroundSize: '200% 100%',
            }}
          >
            <motion.img 
              src={cv} 
              alt="CV Icon" 
              className="w-4 h-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            Download CV
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
