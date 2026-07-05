import React, { useEffect, useState } from 'react';
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
  FiHeart,
  FiCode
} from "react-icons/fi";
import './Footer.css';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor window scroll coordinates to toggle visibility of Scroll-To-Top trigger
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const contactInfo = [
    { label: 'Email', value: 'abedanyakundi1@gmail.com', desc: 'Direct channel' },
    { label: 'Location', value: 'Kenya', desc: 'GMT +3' },
    { label: 'Status', value: 'Available for freelance & remote work', desc: 'Active deployment' }
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Abida-ux', icon: <FiGithub />, aria: 'Open GitHub Profile' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: <FiLinkedin />, aria: 'Connect on LinkedIn' },
    { name: 'Email', url: 'mailto:abedanyakundi1@gmail.com', icon: <FiMail />, aria: 'Open Mail Client' }
  ];

  return (
    <footer className="footer-canvas" role="contentinfo">
      {/* Decorative Structural Canvas Layers */}
      <div className="footer-matrix-grid" aria-hidden="true" />
      <div className="footer-glow-accent glow-cyan" aria-hidden="true" />
      <div className="footer-glow-accent glow-purple" aria-hidden="true" />
      <div className="footer-particle micro-p1" aria-hidden="true" />
      <div className="footer-particle micro-p2" aria-hidden="true" />

      <div className="footer-section-container">
        {/* Top Multi-Column Matrix Map Architecture */}
        <div className="footer-columns-grid">
          
          {/* Column 1: Corporate Brand Identity Ecosystem */}
          <div className="footer-column brand-column">
            <div className="footer-glass-logo-frame">
              <FiCode className="brand-logo-icon" />
              <div className="logo-inner-shimmer" />
            </div>
            <div className="brand-meta-identity">
              <h3 className="brand-primary-name">Abeda Nyakundi</h3>
              <span className="brand-subtitle-role">Frontend Developer</span>
            </div>
            <p className="brand-narrative-paragraph">
              Engineering highly optimized user interfaces with clean state structures, premium design tokens, and scalable component logic.
            </p>
          </div>

          {/* Column 2: Navigational Matrix Framework */}
          <nav className="footer-column links-column" aria-label="Footer navigational quick links">
            <h4 className="column-heading-label">Quick Links</h4>
            <ul className="quick-links-ul-list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="quick-nav-anchor-link">
                    <span>{link.name}</span>
                    <div className="anchor-animated-underline" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Communication Status Coordinates Panel */}
          <div className="footer-column contact-column" role="region" aria-label="Contact availability parameters">
            <h4 className="column-heading-label">Contact</h4>
            <div className="contact-shelf-stack">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="contact-mini-glass-card">
                  <span className="contact-card-label">{info.label}</span>
                  <span className="contact-card-value">{info.value}</span>
                  <span className="contact-card-description">{info.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Social Network Nodes Hub */}
          <div className="footer-column social-column">
            <h4 className="column-heading-label">Social Layers</h4>
            <div className="social-shelf-flex-row">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circular-glass-btn"
                  aria-label={social.aria}
                >
                  <div className="social-btn-hover-glow" aria-hidden="true" />
                  <span className="social-btn-tooltip-bubble">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Horizontal Divider Line Accent */}
        <div className="footer-horizontal-divider-accent" aria-hidden="true" />

        {/* Bottom Metadata & Engineering Signature Row */}
        <div className="footer-bottom-row">
          <span className="copyright-legal-text">
            &copy; 2026 Abeda Nyakundi. All Rights Reserved.
          </span>
          <div className="engineering-signature-badge">
            <span>Designed & Built with React</span>
            <div className="signature-heart-wrapper">
              <FiHeart className="signature-animated-heart-icon" />
            </div>
          </div>
        </div>

      </div>

      {/* Floating Scroll-To-Top Component Interface Element */}
      <button 
        type="button" 
        className={`floating-scroll-top-trigger-btn ${showScrollTop ? 'trigger-is-visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top of document"
      >
        <div className="scroll-btn-hover-border-glow" aria-hidden="true" />
        <FiArrowUp className="scroll-btn-arrow-icon" />
      </button>
    </footer>
  );
};

export default Footer;