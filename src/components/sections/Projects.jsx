import React, { useEffect, useState, useRef } from 'react';
import {
  FiFolder,
  FiGithub,
  FiExternalLink,
  FiCode,
  FiArrowRight,
  FiStar
} from "react-icons/fi";
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
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

  const categories = ['All', 'Frontend', 'Full Stack', 'Backend'];

  const projectsData = [
    {
      id: 1,
      title: "Multi-Tenant POS System",
      description: "Cloud-based POS supporting multiple businesses with custom domains, barcode scanning, inventory management, Daraja M-Pesa integration, analytics, and multi-tenant architecture.",
      category: "Full Stack",
      technologies: ["React", "Node.js", "Express", "MongoDB", "M-Pesa API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      isFeatured: true
    },
    {
      id: 2,
      title: "AI Portfolio Website",
      description: "Modern glassmorphism portfolio featuring responsive design, animations, reusable React components, and interactive UI.",
      category: "Frontend",
      technologies: ["React", "CSS", "Vite"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      isFeatured: false
    },
    {
      id: 3,
      title: "E-Commerce Store",
      description: "Responsive online shopping platform with authentication, cart management, product filtering, and secure checkout.",
      category: "Frontend",
      technologies: ["React", "Firebase", "CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      isFeatured: false
    },
    {
      id: 4,
      title: "Task Management App",
      description: "Productivity application featuring drag-and-drop task organization, reminders, and project tracking.",
      category: "Full Stack",
      technologies: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      isFeatured: false
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "Weather application using live APIs with forecasts, responsive charts, and location search.",
      category: "Frontend",
      technologies: ["React", "REST API", "CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      isFeatured: false
    },
    {
      id: 6,
      title: "Expense Tracker",
      description: "Personal finance application with charts, budgeting tools, recurring expenses, and transaction history.",
      category: "Backend",
      technologies: ["React", "Firebase"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      isFeatured: false
    }
  ];

  const filteredProjects = projectsData.filter(project => 
    activeFilter === 'All' || project.category === activeFilter
  );

  return (
    <section 
      ref={sectionRef} 
      id="projects" 
      className={`projects-section ${isVisible ? 'animate-visible' : ''}`}
      aria-labelledby="projects-section-title"
    >
      {/* Decorative Canvas Components */}
      <div className="projects-matrix-grid" aria-hidden="true" />
      <div className="projects-glow-accent glow-cyan" aria-hidden="true" />
      <div className="projects-glow-accent glow-purple" aria-hidden="true" />
      <div className="projects-particle micro-p1" aria-hidden="true" />
      <div className="projects-particle micro-p2" aria-hidden="true" />

      <div className="projects-section-container">
        
        {/* Section Header */}
        <header className="projects-section-header">
          <span className="projects-sub-title">MY WORK</span>
          <h2 id="projects-section-title" className="projects-main-title">Featured Projects</h2>
          <p className="projects-header-paragraph">
            A curated selection of robust applications engineered with precise user interface architectures, clean state logic, and comprehensive system designs.
          </p>
        </header>

        {/* Dynamic Navigational Filter Architecture */}
        <nav className="projects-filter-nav" aria-label="Project filter menu">
          <div className="projects-filter-bar-backdrop">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-nav-pill-btn ${activeFilter === cat ? 'pill-active' : ''}`}
                onClick={() => setActiveFilter(cat)}
                aria-pressed={activeFilter === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </nav>

        {/* Dynamic Structural Grid Framework */}
        <div className="projects-responsive-grid-layout" role="region" aria-live="polite">
          {filteredProjects.map((project, idx) => (
            <article 
              key={project.id} 
              className="project-glassmorphism-card"
              style={{ '--project-card-idx': idx }}
            >
              <div className="project-card-shimmer-layer" aria-hidden="true" />
              <div className="project-card-hover-border-glow" aria-hidden="true" />
              
              {/* Optional Featured Component Badge */}
              {project.isFeatured && (
                <div className="project-featured-top-badge">
                  <FiStar className="featured-badge-star-icon" />
                  <span>FEATURED ARCHITECTURE</span>
                </div>
              )}

              {/* Graphic Media Visual Block Box Container Layout */}
              <div className="project-media-visual-container">
                <div className="project-media-gradient-overlay" />
                <div className="project-media-avatar-fallback">
                  <FiFolder className="fallback-folder-icon" />
                </div>
                <div className="project-media-shimmer-glare" />
              </div>

              {/* Internal Typography Metadata Core Container Wrapper Content */}
              <div className="project-metadata-content-box">
                <div className="project-title-row-line">
                  <h3 className="project-card-heading-title">{project.title}</h3>
                  <span className="project-card-category-indicator-tag">{project.category}</span>
                </div>

                <p className="project-card-narrative-description">{project.description}</p>

                {/* Micro Pill Components Mapping Pipeline Layer */}
                <div className="project-card-technology-pill-row" aria-label="Technologies employed">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="technology-badge-glass-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Interaction Hyperlinks Footer Matrix Call Workspace */}
                <footer className="project-card-actions-footer-row">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-action-anchor-btn btn-style-outline"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <FiGithub />
                    <span>Source Code</span>
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-action-anchor-btn btn-style-solid"
                    aria-label={`Launch deployment demo for ${project.title}`}
                  >
                    <span>Live Demo</span>
                    <FiExternalLink />
                  </a>
                </footer>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;