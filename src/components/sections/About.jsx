import React, { useEffect, useState, useRef } from 'react';
import { 
  FiUser, 
  FiMapPin, 
  FiBriefcase, 
  FiCpu, 
  FiCode, 
  FiCompass, 
  FiBookOpen, 
  FiUsers, 
  FiDownload, 
  FiMessageSquare 
} from 'react-icons/fi';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to orchestrate coordinated CSS entry frames
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Structural arrays for data mapping architectures
  const corePillars = [
    {
      title: "Frontend Development",
      desc: "Architecting clean, responsive, high-performance interfaces using modern libraries and standards.",
      icon: <FiCode />
    },
    {
      title: "Problem Solving",
      desc: "Breaking down complex logical puzzles into modular, efficient, and scalable program structures.",
      icon: <FiCompass />
    },
    {
      title: "Continuous Learning",
      desc: "Consistently expanding system capabilities, moving aggressively towards full-stack engineering proficiency.",
      icon: <FiBookOpen />
    },
    {
      title: "Team Collaboration",
      desc: "Communicating ideas fluidly, aligning codebases to strategic design specifications seamlessly.",
      icon: <FiUsers />
    }
  ];

  const personalDetails = [
    { label: "Name", val: "Abeda Nyakundi", icon: <FiUser /> },
    { label: "Location", val: "Kenya", icon: <FiMapPin /> },
    { label: "Role", val: "Frontend Developer", icon: <FiBriefcase /> },
    { label: "Experience", val: "Personal Projects Focus", icon: <FiCpu /> },
    { label: "Languages", val: "English & Swahili", icon: <FiBookOpen /> }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className={`about-section ${isVisible ? 'animate-visible' : ''}`}
      aria-labelledby="about-section-heading"
    >
      {/* Decorative Matrix & Atmospheric Elements */}
      <div className="about-bg-grid" aria-hidden="true" />
      <div className="about-glow-orb orb-cyan" aria-hidden="true" />
      <div className="about-glow-orb orb-purple" aria-hidden="true" />
      <div className="about-particle pt-1" aria-hidden="true" />
      <div className="about-particle pt-2" aria-hidden="true" />

      <div className="about-section-container">
        
        {/* Main Split Layout Content Block */}
        <div className="about-split-grid">
          
          {/* Left Column: Interactive Portfolio Image Canvas */}
          <div className="about-visual-column">
            <div className="profile-frame-wrapper">
              <div className="profile-decorative-ring ring-outer" aria-hidden="true" />
              <div className="profile-decorative-ring ring-inner" aria-hidden="true" />
              
              <div className="profile-glass-frame">
                <div className="profile-image-placeholder">
                  <FiUser className="placeholder-avatar-icon" />
                  <span className="placeholder-avatar-text">Profile Photo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Structural Block */}
          <div className="about-text-column">
            <header className="about-text-header">
              <span className="about-small-heading">WHO I AM</span>
              <h2 id="about-section-heading" className="about-main-heading">About Me</h2>
            </header>

            <div className="about-narrative-block">
              <p>
                I am an aspiring Full-Stack Developer with a deep-rooted passion for modern frontend architecture. 
                My primary focus lies in transforming intricate UI mockups into interactive, highly performant, 
                and accessible web applications. I approach programming with a focus on writing clean, maintainable code 
                that scales effectively.
              </p>
              <p>
                Driven by real-world problem solving, I enjoy bridging the gap between design conceptualization 
                and software implementation. I am constantly expanding my technical horizon, integrating modern engineering 
                paradigms to achieve my goal of evolving into a professional full-stack engineer.
              </p>
            </div>

            {/* Personal Details Metadata Layout Stack */}
            <div className="about-details-layout-stack" aria-label="Personal Information Matrix">
              {personalDetails.map((detail) => (
                <div key={detail.label} className="detail-meta-row" tabIndex="0">
                  <span className="detail-meta-icon" aria-hidden="true">{detail.icon}</span>
                  <div className="detail-meta-text-block">
                    <span className="detail-meta-label">{detail.label}</span>
                    <span className="detail-meta-value">{detail.val}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium Button Action Workspace */}
            <div className="about-actions-row">
              <a href="/resume.pdf" download className="btn-action-primary" role="button">
                <span>Download Resume</span>
                <FiDownload className="btn-action-icon" />
                <div className="btn-action-glow-layer" />
              </a>
              
              <a href="#contact" className="btn-action-secondary" role="button">
                <span>Let's Talk</span>
                <FiMessageSquare className="btn-action-icon" />
              </a>
            </div>
          </div>

        </div>

        {/* Coordinated Sub-shelf Component Architecture Grid */}
        <div className="about-pillars-layout-grid">
          {corePillars.map((pillar, pillarIdx) => (
            <div 
              key={pillar.title} 
              className="about-pillar-individual-card"
              style={{ '--pillar-idx': pillarIdx }}
              tabIndex="0"
            >
              <div className="about-pillar-card-hover-glow" />
              <div className="about-pillar-card-icon-frame" aria-hidden="true">
                {pillar.icon}
              </div>
              <div className="about-pillar-card-content">
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;