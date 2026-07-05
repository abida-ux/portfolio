import React, { useEffect, useRef, useState } from 'react';
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiTwitter, 
  FiArrowRight, 
  FiDownload, 
  FiCode, 
  FiLayers, 
  FiChevronDown 
} from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const [typedSubtitle, setTypedSubtitle] = useState('');
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const cardRef = useRef(null);
  const bgGridRef = useRef(null);

  const subtitles = [
    "Frontend Developer",
    "Future Full-Stack Engineer",
    "UI/UX Enthusiast"
  ];
  
  const techBadges = ['React', 'JavaScript', 'Node.js', 'CSS/HTML', 'Git'];

  // Typing animation engine
  useEffect(() => {
    let timer;
    const currentText = subtitles[subtitleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && typedSubtitle === currentText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedSubtitle === '') {
      setIsDeleting(false);
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    } else {
      timer = setTimeout(() => {
        setTypedSubtitle(
          isDeleting 
            ? currentText.substring(0, typedSubtitle.length - 1)
            : currentText.substring(0, typedSubtitle.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [typedSubtitle, isDeleting, subtitleIndex]);

  // Subtle premium mouse parallax tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current || !bgGridRef.current) return;
      
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) * 0.015;
      const moveY = (clientY - window.innerHeight / 2) * 0.015;

      cardRef.current.style.transform = `translate3d(${moveX * 1.2}px, ${moveY * 1.2}px, 0) rotateY(${moveX * 0.5}deg) rotateX(${-moveY * 0.5}deg)`;
      bgGridRef.current.style.transform = `translate3d(${moveX * -0.8}px, ${moveY * -0.8}px, 0)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-section" aria-label="Introduction Summary">
      {/* Premium Ambience Lighting & Background Grids */}
      <div ref={bgGridRef} className="hero-ambient-grid" />
      <div className="glow-orb glow-cyan" />
      <div className="glow-orb glow-purple" />
      <div className="glow-orb glow-blue" />

      <div className="hero-container">
        
        {/* Left Informational Structural Block */}
        <div className="hero-content-block">
          <div className="fade-in-element item-delay-1">
            <span className="hero-greeting">
              <span className="hand-wave">👋</span> Hello, I'm
            </span>
          </div>

          <h1 className="hero-title fade-in-element item-delay-2">
            Abeda Nyakundi
          </h1>

          <div className="hero-subtitle-wrapper fade-in-element item-delay-3" aria-live="polite">
            <span className="hero-subtitle">{typedSubtitle}</span>
            <span className="typing-cursor" aria-hidden="true">|</span>
          </div>

          <p className="hero-description fade-in-element item-delay-4">
            Crafting meticulous, visually striking web experiences. Focused on merging exceptional 
            interactive design with highly scalable modern tech stacks to deliver cutting-edge engineering solutions.
          </p>

          {/* Call To Actions */}
          <div className="hero-actions-row fade-in-element item-delay-5">
            <a href="#projects" className="btn-primary" role="button">
              <span>View Projects</span>
              <FiArrowRight className="btn-icon" />
              <div className="btn-glow-layer" />
            </a>
            
            <a href="/resume.pdf" download className="btn-secondary" role="button">
              <span>Download CV</span>
              <FiDownload className="btn-icon" />
            </a>
          </div>

          {/* Social Network Access Layout Block */}
          <div className="hero-socials-row fade-in-element item-delay-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-glass-icon" aria-label="GitHub Profile">
              <FiGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-glass-icon" aria-label="LinkedIn Profile">
              <FiLinkedin />
            </a>
            <a href="mailto:contact@domain.com" className="social-glass-icon" aria-label="Send Email Link">
              <FiMail />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-glass-icon" aria-label="X Twitter Profile">
              <FiTwitter />
            </a>
          </div>
        </div>

        {/* Right Graphical Portfolio Composition Presentation Block */}
        <div className="hero-visual-block fade-in-element item-delay-3">
          
          {/* Abstract Floating Geometries */}
          <div className="floating-accent-shape shape-bracket-left" aria-hidden="true"><FiCode /></div>
          <div className="floating-accent-shape shape-layers" aria-hidden="true"><FiLayers /></div>
          <div className="particle-dot p-1" aria-hidden="true" />
          <div className="particle-dot p-2" aria-hidden="true" />

          {/* Main Floating Interactive Developer Presentation Card */}
          <div ref={cardRef} className="premium-dev-card">
            <div className="card-inner-glow" />
            
            <div className="card-header-status">
              <div className="status-indicator-dot">
                <div className="pulse-layer" />
              </div>
              <span className="status-text">Available for freelance</span>
            </div>

            <div className="profile-image-container">
              <div className="profile-image-placeholder">
                <span>AN</span>
              </div>
            </div>

            <h3 className="card-profile-name">Abeda Nyakundi</h3>
            <p className="card-profile-role">Frontend Developer</p>

            <div className="card-divider" />

            <div className="card-badge-container">
              {techBadges.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Modern UI Layout Architecture Core Scroll Indicator */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <span className="scroll-text">Scroll Down</span>
        <FiChevronDown className="scroll-arrow" />
      </div>
    </section>
  );
};

export default Hero;