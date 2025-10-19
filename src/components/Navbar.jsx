import React, { useState, useEffect } from "react";
import cv from "../assets/cv.png";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

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

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'learning-journey', label: 'Learning' },
    { id: 'tools-setup', label: 'Tools' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="flex justify-between items-center px-10 py-4 
      bg-[var(--bg-surface)] bg-opacity-95 backdrop-blur-lg shadow-lg rounded-2xl mx-8 mt-4">

      {/* Left Logo / Brand */}
      <h1 className="text-2xl font-bold text-[var(--color-secondary)] tracking-wide cursor-pointer"
          onClick={() => scrollToSection('home')}>
        Pratibha
      </h1>

      {/* Navigation Links */}
      <nav className="flex gap-8 text-lg font-medium">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative transition-colors duration-300 hover:text-[var(--color-secondary)]
              ${activeSection === item.id 
                ? "text-[var(--color-secondary)] font-bold" 
                : "text-[var(--text-secondary)]"
              }`}
          >
            {item.label}
            {/* Active indicator */}
            {activeSection === item.id && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[var(--color-secondary)]"></span>
            )}
          </button>
        ))}
      </nav>

      {/* Right side - Theme toggle and CV Button */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button className="flex items-center gap-2 px-5 py-2 
          bg-gradient-to-r from-[var(--color-secondary)] to-purple-700 text-white 
          rounded-full shadow-md hover:scale-105 hover:shadow-lg 
          transition-all duration-300">
          <img src={cv} alt="CV Icon" className="w-5 h-5" />
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Navbar;
