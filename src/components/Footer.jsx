import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/pratibhayadav28/', icon: 'Li' },
    { name: 'GitHub', href: 'https://github.com/pratibhaWebDev', icon: 'Gh' },
    // { name: 'Twitter', href: 'https://twitter.com/pratibhayadav', icon: 'Tw' },
    { name: 'Email', href: 'mailto:pratibha875695@gmail.com', icon: '@' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[var(--bg-surface)] border-t border-[var(--bg-hover)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-secondary)] mb-4">
              Pratibha Yadav
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6 max-w-md">
              Full Stack Developer passionate about creating innovative web solutions 
              using modern technologies and AI-assisted development tools.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-[var(--bg-hover)] rounded-lg flex items-center justify-center 
                    hover:bg-[var(--color-secondary)] transition-colors duration-300 group"
                  aria-label={social.name}
                >
                  <span className="text-[var(--text-secondary)] group-hover:text-white font-bold text-xs sm:text-sm">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[var(--color-primary)] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-[var(--text-secondary)] hover:text-[var(--color-secondary)] 
                      transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-[var(--color-primary)] mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <p className="text-[var(--text-secondary)] text-sm">
                📧 pratibha875695@gmail.com
              </p>
              <p className="text-[var(--text-secondary)] text-sm">
                📱 +91 6307531976
              </p>
              <p className="text-[var(--text-secondary)] text-sm">
                📍 Varanasi,UP
              </p>
            </div>
            
            <button 
              onClick={() => scrollToSection('#contact')}
              className="mt-4 px-4 py-2 bg-[var(--color-secondary)] text-white text-sm rounded-lg 
                hover:bg-purple-700 transition-colors duration-300 font-semibold"
            >
              Start a Project
            </button>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-[var(--bg-hover)] mt-8 pt-8 
          flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-[var(--text-secondary)] text-sm">
            © {currentYear} Pratibha Yadav. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm">
            <button className="text-[var(--text-secondary)] hover:text-[var(--color-secondary)] 
              transition-colors duration-300">
              Privacy Policy
            </button>
            <button className="text-[var(--text-secondary)] hover:text-[var(--color-secondary)] 
              transition-colors duration-300">
              Terms of Service
            </button>
          </div>
        </div>
        
        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-hover)] 
              hover:bg-[var(--color-secondary)] text-[var(--text-secondary)] hover:text-white 
              rounded-lg transition-colors duration-300 text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;