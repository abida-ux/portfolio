import React, { useEffect, useState, useRef } from 'react';
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiCheckCircle,
  FiAward,
  FiCode,
  FiArrowRight
} from "react-icons/fi";
import './Experience.css';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const timelineEntries = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "Personal Portfolio Website",
      period: "2026 – Present",
      location: "Remote",
      description: "Designed and developed a modern personal portfolio using React, Vite, JavaScript, and CSS with responsive layouts, reusable components, and glassmorphism styling.",
      achievements: [
        "Built reusable React components",
        "Responsive design",
        "Modern UI/UX",
        "Component-based architecture"
      ],
      tags: ["React", "JavaScript", "CSS", "Vite", "GitHub"],
      icon: <FiCode />
    },
    {
      id: 2,
      role: "Full-Stack Developer",
      company: "Multi-Tenant POS System (Personal Project)",
      period: "In Progress",
      location: "Remote",
      description: "Developing a scalable cloud-based POS system supporting multiple businesses, inventory management, barcode scanning, analytics, and Daraja M-Pesa integration.",
      achievements: [
        "Multi-tenant architecture",
        "REST API planning",
        "Database design",
        "Payment integration research"
      ],
      tags: ["React", "Node.js", "Express", "MongoDB"],
      icon: <FiBriefcase />
    },
    {
      id: 3,
      role: "Frontend Developer",
      company: "Frontend Development Learning",
      period: "2025 – Present",
      location: "Remote",
      description: "Building a strong foundation in modern web development through hands-on projects and continuous learning.",
      achievements: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Git",
        "Responsive Design"
      ],
      tags: ["HTML", "CSS", "JavaScript", "React", "Git"],
      icon: <FiAward />
    }
  ];

  const continuousLearningBadges = [
    "React", 
    "JavaScript", 
    "Node.js", 
    "MongoDB", 
    "Git", 
    "UI Design"
  ];

  return (
    <section 
      ref={sectionRef} 
      id="experience" 
      className={`experience-section ${isVisible ? 'animate-visible' : ''}`}
      aria-labelledby="experience-section-title"
    >
      {/* Decorative Canvas Components */}
      <div className="experience-matrix-grid" aria-hidden="true" />
      <div className="experience-glow-accent glow-cyan" aria-hidden="true" />
      <div className="experience-glow-accent glow-purple" aria-hidden="true" />
      <div className="experience-particle micro-p1" aria-hidden="true" />
      <div className="experience-particle micro-p2" aria-hidden="true" />

      <div className="experience-section-container">
        
        {/* Section Header */}
        <header className="experience-section-header">
          <span className="experience-sub-title">MY JOURNEY</span>
          <h2 id="experience-section-title" className="experience-main-heading">Professional Experience</h2>
          <p className="experience-header-paragraph">
            Building a robust technical foundation through structured personal architectures, hands-on production engineering, and continuous technological expansion.
          </p>
        </header>

        {/* Master Timeline Structure Container */}
        <div className="experience-timeline-canvas">
          <div className="experience-timeline-spine-line" aria-hidden="true" />

          {timelineEntries.map((entry, idx) => (
            <div 
              key={entry.id} 
              className={`timeline-entry-row-node ${idx % 2 === 0 ? 'node-align-left' : 'node-align-right'}`}
              style={{ '--timeline-node-idx': idx }}
            >
              {/* Timeline Center Bullet Hub Indicator */}
              <div className="timeline-center-bullet-hub" aria-hidden="true">
                <div className="bullet-hub-inner-core">
                  {entry.icon}
                </div>
              </div>

              {/* Glassmorphism Timeline Content Card */}
              <article className="experience-timeline-glass-card">
                <div className="experience-card-hover-border-glow" aria-hidden="true" />
                <div className="experience-card-shimmer-sweep" aria-hidden="true" />
                
                <header className="experience-card-header-meta">
                  <div className="card-header-role-line">
                    <h3 className="experience-card-role-title">{entry.role}</h3>
                    <span className="experience-card-company-name">{entry.company}</span>
                  </div>
                  
                  <div className="experience-card-meta-metrics-row">
                    <span className="meta-metric-pill">
                      <FiCalendar className="meta-metric-icon" />
                      {entry.period}
                    </span>
                    <span className="meta-metric-pill">
                      <FiMapPin className="meta-metric-icon" />
                      {entry.location}
                    </span>
                  </div>
                </header>

                <p className="experience-card-body-narrative">{entry.description}</p>

                {/* Achievements Stack Wrapper Block */}
                <div className="experience-card-achievements-block">
                  <h4 className="achievements-section-label">Key Milestones</h4>
                  <ul className="achievements-ul-list-structure">
                    {entry.achievements.map((achievement, actIdx) => (
                      <li key={actIdx} className="achievement-li-item">
                        <FiCheckCircle className="achievement-item-check-icon" aria-hidden="true" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Internal Technology Badge Layout Segment Row */}
                <div className="experience-card-technology-pill-row" aria-label="Technologies integrated">
                  {entry.tags.map((tag) => (
                    <span key={tag} className="tech-badge-glass-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Continuous Learning Shelf Architecture Block */}
        <div className="continuous-learning-shelf-card" tabIndex="0">
          <div className="learning-shelf-card-glow-layer" aria-hidden="true" />
          <div className="learning-shelf-split-content">
            <div className="learning-shelf-text-block">
              <div className="learning-shelf-title-row">
                <FiAward className="learning-shelf-header-icon" aria-hidden="true" />
                <h3>Continuous Learning & Technical Expansion</h3>
              </div>
              <p>
                Actively scaling code quality frameworks, deep-diving into clean structural paradigms, and acquiring domain proficiency across complete ecosystems.
              </p>
            </div>
            
            <div className="learning-shelf-badges-flex-grid" aria-label="Monitored core disciplines">
              {continuousLearningBadges.map((badge) => (
                <div key={badge} className="learning-shelf-animated-badge-pill">
                  <FiArrowRight className="learning-pill-arrow-indicator" aria-hidden="true" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;