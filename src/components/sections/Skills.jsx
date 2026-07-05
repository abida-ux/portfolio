import React, { useEffect, useState, useRef } from 'react';
import { 
  FiCode, 
  FiServer, 
  FiDatabase, 
  FiLayers, 
  FiBookOpen, 
  FiCpu, 
  FiCheckCircle, 
  FiFolder, 
  FiGitBranch, 
  FiClock 
} from 'react-icons/fi';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaFigma 
} from 'react-icons/fa';
import { 
  SiExpress, 
  SiMongodb, 
  SiFirebase, 
  SiVite 
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to safely trigger performance-optimized CSS entry frames
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

  // Structural mapping configurations containing deterministic imports matching requirements
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FiCode />,
      skills: [
        { name: "HTML5", level: "Advanced", progress: 95, desc: "Semantic structures, accessibility patterns", icon: <FaHtml5 /> },
        { name: "CSS3", level: "Advanced", progress: 92, desc: "Complex layouts, design system variables", icon: <FaCss3Alt /> },
        { name: "JavaScript", level: "Advanced", progress: 88, desc: "ES6+, async architectures, state engines", icon: <FaJsSquare /> },
        { name: "React", level: "Advanced", progress: 85, desc: "Modern hooks, context API, optimization hooks", icon: <FaReact /> },
        { name: "Responsive Design", level: "Advanced", progress: 94, desc: "Fluid layouts, mobile-first strategies", icon: <FiLayers /> }
      ]
    },
    {
      title: "Backend Development",
      icon: <FiServer />,
      skills: [
        { name: "Node.js", level: "Intermediate", progress: 70, desc: "Event-driven architecture, runtime servers", icon: <FaNodeJs /> },
        { name: "Express.js", level: "Intermediate", progress: 75, desc: "Server side request logic routing, middleware", icon: <SiExpress /> },
        { name: "REST APIs", level: "Intermediate", progress: 80, desc: "Secure CRUD mapping payloads engineering", icon: <FiCpu /> }
      ]
    },
    {
      title: "Database Management",
      icon: <FiDatabase />,
      skills: [
        { name: "MongoDB", level: "Intermediate", progress: 68, desc: "NoSQL patterns, schemas, querying logic", icon: <SiMongodb /> },
        { name: "Firebase", level: "Intermediate", progress: 78, desc: "Realtime synchronized document execution", icon: <SiFirebase /> }
      ]
    },
    {
      title: "Tools & Ecosystems",
      icon: <FiLayers />,
      skills: [
        { name: "Git", level: "Advanced", progress: 85, desc: "Branching protocols and localized tracking", icon: <FaGitAlt /> },
        { name: "GitHub", level: "Advanced", progress: 88, desc: "Cloud deployment workflows, CI pipelines", icon: <FaGithub /> },
        { name: "VS Code", level: "Advanced", progress: 92, desc: "Optimized environment configurations", icon: <FiCode /> },
        { name: "Figma", level: "Intermediate", progress: 72, desc: "UI structural asset and mockup translation", icon: <FaFigma /> },
        { name: "Vite", level: "Advanced", progress: 90, desc: "Modern fast structural production builds", icon: <SiVite /> }
      ]
    }
  ];

  const learningPills = ["TypeScript", "Next.js", "Docker", "AWS", "GraphQL"];

  const stats = [
    { label: "Technologies", value: "15+", icon: <FiCheckCircle /> },
    { label: "Projects Completed", value: "24+", icon: <FiFolder /> },
    { label: "GitHub Repositories", value: "40+", icon: <FiGitBranch /> },
    { label: "Learning Hours", value: "2.5k+", icon: <FiClock /> }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="skills" 
      className={`skills-section ${isVisible ? 'animate-visible' : ''}`} 
      aria-labelledby="skills-section-heading"
    >
      {/* Structural Ambient Background Components */}
      <div className="skills-bg-grid" aria-hidden="true" />
      <div className="skills-bg-orb orb-cyan" aria-hidden="true" />
      <div className="skills-bg-orb orb-purple" aria-hidden="true" />
      
      {/* Decorative Floating Background Particles */}
      <div className="bg-particle pt-1" aria-hidden="true" />
      <div className="bg-particle pt-2" aria-hidden="true" />

      <div className="skills-section-container">
        
        {/* Section Header */}
        <header className="skills-section-header">
          <span className="skills-small-heading">MY EXPERTISE</span>
          <h2 id="skills-section-heading" className="skills-main-heading">Skills & Technologies</h2>
          <p className="skills-header-description">
            Building performance-driven, accessible, and responsive user interfaces engineered with robust logic and pixel-perfect layouts.
          </p>
        </header>

        {/* Main Categories Grid Layout Component */}
        <div className="skills-categories-layout-grid">
          {skillCategories.map((category, catIdx) => (
            <div 
              key={category.title} 
              className="skills-category-wrapper-card"
              style={{ '--card-idx': catIdx }}
            >
              <div className="skills-category-card-inner-glow" />
              <div className="skills-category-header-row">
                <span className="skills-category-heading-icon" aria-hidden="true">
                  {category.icon}
                </span>
                <h3>{category.title}</h3>
              </div>

              {/* Skill Stack Container */}
              <div className="skills-stack-inner-container">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="individual-skill-item-row" tabIndex="0">
                    <div className="individual-skill-identity-block">
                      <span className="individual-skill-tech-icon" aria-hidden="true">
                        {skill.icon}
                      </span>
                      <div className="individual-skill-meta-details">
                        <div className="individual-skill-name-badge-line">
                          <h4>{skill.name}</h4>
                          <span className="individual-skill-experience-level-badge">
                            {skill.level}
                          </span>
                        </div>
                        <p className="individual-skill-short-description">{skill.desc}</p>
                      </div>
                    </div>

                    {/* Progress Ring Layout Module */}
                    <div className="individual-skill-progress-ring-box" aria-label={`Proficiency: ${skill.progress}%`}>
                      <svg className="progress-ring-svg-canvas">
                        <circle className="progress-ring-track-circle" cx="22" cy="22" r="18" />
                        <circle 
                          className="progress-ring-bar-circle" 
                          cx="22" 
                          cy="22" 
                          r="18" 
                          style={{ 
                            strokeDashoffset: isVisible ? 113.1 - (113.1 * skill.progress) / 100 : 113.1 
                          }} 
                        />
                      </svg>
                      <span className="progress-ring-percentage-numerical-text">
                        {skill.progress}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section Module */}
        <div className="currently-learning-shelf-box">
          <div className="currently-learning-shelf-header-row">
            <FiBookOpen className="currently-learning-header-icon" aria-hidden="true" />
            <h3>Currently Deep-Diving Into</h3>
          </div>
          <div className="currently-learning-pills-flex-container">
            {learningPills.map((pill) => (
              <div key={pill} className="currently-learning-animated-pill-badge">
                <span className="currently-learning-pill-indicator-dot" aria-hidden="true" />
                <span className="currently-learning-pill-text-label">{pill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Metric Matrix Component */}
        <div className="stats-metric-matrix-dashboard-row">
          {stats.map((stat, statIdx) => (
            <div 
              key={stat.label} 
              className="stats-metric-individual-glass-card"
              style={{ '--stat-idx': statIdx }}
            >
              <div className="stats-metric-card-hover-glow-layer" />
              <div className="stats-metric-card-icon-frame" aria-hidden="true">
                {stat.icon}
              </div>
              <div className="stats-metric-card-text-block">
                <span className="stats-metric-card-numerical-value">{stat.value}</span>
                <span className="stats-metric-card-text-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;