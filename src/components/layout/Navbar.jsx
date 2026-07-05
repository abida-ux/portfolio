import React, { useState, useEffect } from 'react';
import { 
  FiHome, 
  FiUser, 
  FiCpu, 
  FiFolder, 
  FiBriefcase, 
  FiMail, 
  FiSun, 
  FiMoon, 
  FiMenu, 
  FiX, 
  FiTerminal 
} from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeLink, setActiveLink] = useState('Home');

  const navItems = [
    { name: 'Home', icon: <FiHome aria-hidden="true" />, href: '#home' },
    { name: 'About', icon: <FiUser aria-hidden="true" />, href: '#about' },
    { name: 'Skills', icon: <FiCpu aria-hidden="true" />, href: '#skills' },
    { name: 'Projects', icon: <FiFolder aria-hidden="true" />, href: '#projects' },
    { name: 'Experience', icon: <FiBriefcase aria-hidden="true" />, href: '#experience' },
    { name: 'Contact', icon: <FiMail aria-hidden="true" />, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-theme');
  };

  const handleNavLinkClick = (name) => {
    setActiveLink(name);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-container" aria-label="Main Navigation">
        {/* Logo Section */}
        <a href="#home" className="navbar-logo" onClick={() => handleNavLinkClick('Home')}>
          <div className="logo-icon-wrapper">
            <FiTerminal className="logo-icon" />
          </div>
          <span className="logo-text">
            SKIMTECH<span className="logo-dot">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="navbar-links" role="menubar">
          {navItems.map((item) => (
            <li key={item.name} role="none">
              <a
                href={item.href}
                role="menuitem"
                className={`navbar-link ${activeLink === item.name ? 'active' : ''}`}
                onClick={() => handleNavLinkClick(item.name)}
              >
                <span className="link-icon">{item.icon}</span>
                <span className="link-text">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Action Controls Section */}
        <div className="navbar-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>

          <a href="#contact" className="hire-button" onClick={() => handleNavLinkClick('Contact')}>
            <span className="hire-button-text">Hire Me</span>
            <div className="hire-button-glow"></div>
          </a>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={toggleMobileMenu}
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div 
          id="mobile-nav-menu" 
          className={`mobile-menu-drawer ${isMobileMenuOpen ? 'active' : ''}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <ul className="mobile-links" role="menu">
            {navItems.map((item) => (
              <li key={item.name} role="none">
                <a
                  href={item.href}
                  role="menuitem"
                  className={`mobile-link ${activeLink === item.name ? 'active' : ''}`}
                  onClick={() => handleNavLinkClick(item.name)}
                >
                  <span className="mobile-link-icon">{item.icon}</span>
                  <span className="mobile-link-text">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;