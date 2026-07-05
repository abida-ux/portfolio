import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiArrowRight,
  FiMessageCircle,
  FiCheckCircle
} from "react-icons/fi";
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Form Field Domain State Model
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Intersection Observer orchestrating viewport entry frames
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

  // Map Array Structures for Contact Info Matrices
  const infoCards = [
    {
      id: "email",
      title: "Email",
      value: "abedanyakundi1@gmail.com",
      link: "mailto:abedanyakundi1@gmail.com",
      icon: <FiMail />
    },
    {
      id: "phone",
      title: "Phone",
      value: "0114656849",
      link: "tel:0114656849",
      icon: <FiPhone />
    },
    {
      id: "location",
      title: "Location",
      value: "Maseno,Kenya",
      link: null,
      icon: <FiMapPin />
    },
    {
      id: "availability",
      title: "Availability",
      value: "Freelance & Remote Opportunities",
      link: null,
      icon: <FiMessageCircle />
    }
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/Abida-ux", icon: <FiGithub />, aria: "Visit my GitHub Profile" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: <FiLinkedin />, aria: "Connect with me on LinkedIn" },
    { name: "Email", url: "mailto:abedanyakundi1@gmail.com", icon: <FiMail />, aria: "Send me a direct email" }
  ];

  // Logic Handlers & Validation Systems
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please provide a valid email address";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message structure cannot be empty";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: import.meta.env.VITE_EMAIL_TO || 'abedanyakundi1@gmail.com'
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitSuccess(false), 6000);
    } catch (err) {
      console.error('EmailJS send error:', err);
      setIsSubmitting(false);
      setErrors(prev => ({ ...prev, submit: 'Failed to send message. Please try again later.' }));
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="contact" 
      className={`contact-section ${isVisible ? 'animate-visible' : ''}`}
      aria-labelledby="contact-section-title"
    >
      {/* Decorative Canvas Components */}
      <div className="contact-matrix-grid" aria-hidden="true" />
      <div className="contact-glow-accent glow-cyan" aria-hidden="true" />
      <div className="contact-glow-accent glow-purple" aria-hidden="true" />
      <div className="contact-particle micro-p1" aria-hidden="true" />
      <div className="contact-particle micro-p2" aria-hidden="true" />

      <div className="contact-section-container">
        
        {/* Section Header */}
        <header className="contact-section-header">
          <span className="contact-sub-title">GET IN TOUCH</span>
          <h2 id="contact-section-title" className="contact-main-title">Let's Build Something Amazing</h2>
          <p className="contact-header-paragraph">
            Whether you are looking to kickstart a brand-new project, scale an enterprise application ecosystem, or discuss collaborative technical roles, my inbox is open.
          </p>
        </header>

        {/* Binary Column Split Matrix */}
        <div className="contact-split-grid-layout">
          
          {/* Left Column Architecture: Informational Context & Social Anchors */}
          <div className="contact-info-column">
            <div className="contact-cards-stack" role="region" aria-label="Contact Information Options">
              {infoCards.map((card, idx) => {
                const CardWrapper = card.link ? 'a' : 'div';
                const wrapperProps = card.link ? { href: card.link, className: "contact-glass-info-card is-interactive-anchor" } : { className: "contact-glass-info-card" };
                
                return (
                  <CardWrapper 
                    key={card.id} 
                    {...wrapperProps}
                    style={{ '--contact-card-idx': idx }}
                    tabIndex="0"
                  >
                    <div className="info-card-hover-border-glow" aria-hidden="true" />
                    <div className="info-card-icon-frame" aria-hidden="true">
                      {card.icon}
                    </div>
                    <div className="info-card-content-block">
                      <h3 className="info-card-title-label">{card.title}</h3>
                      <span className="info-card-value-display">{card.value}</span>
                    </div>
                    {card.link && <FiArrowRight className="info-card-arrow-indicator" aria-hidden="true" />}
                  </CardWrapper>
                );
              })}
            </div>

            {/* Social Connect Networking Core Module */}
            <div className="contact-social-networks-shelf">
              <h4 className="social-shelf-title-label">Connect across digital layers</h4>
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

          {/* Right Column Architecture: Call-To-Action & Validation Contact Form Container */}
          <div className="contact-form-column">
            <div className="contact-cta-abstract-box">
              <h3 className="cta-abstract-heading">Have a project in mind?</h3>
              <p className="cta-abstract-narrative">
                I am always interested in creating modern web applications, optimizing interface design tokens, and solving real-world functional problems.
              </p>
            </div>

            <div className="contact-form-glass-frame">
              {submitSuccess ? (
                <div className="contact-form-success-state-container" role="alert">
                  <div className="success-state-icon-wrapper" aria-hidden="true">
                    <FiCheckCircle />
                  </div>
                  <h3 className="success-state-heading">Message Dispatched</h3>
                  <p className="success-state-paragraph">
                    Thank you! Your message has been sent successfully. I will review the metrics and connect shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="contact-form-element-structure" noValidate>
                  
                  {/* Name Input Component Field Block */}
                  <div className={`form-input-field-wrapper ${errors.name ? 'has-input-error' : ''}`}>
                    <input 
                      type="text" 
                      id="form-input-name"
                      name="name"
                      placeholder=" "
                      value={formData.name}
                      onChange={handleInputChange}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "err-msg-name" : undefined}
                      disabled={isSubmitting}
                    />
                    <label htmlFor="form-input-name">Your Name</label>
                    <div className="input-focus-accent-bar" aria-hidden="true" />
                    {errors.name && <span id="err-msg-name" className="form-input-inline-error">{errors.name}</span>}
                  </div>

                  {/* Email Input Component Field Block */}
                  <div className={`form-input-field-wrapper ${errors.email ? 'has-input-error' : ''}`}>
                    <input 
                      type="email" 
                      id="form-input-email"
                      name="email"
                      placeholder=" "
                      value={formData.email}
                      onChange={handleInputChange}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "err-msg-email" : undefined}
                      disabled={isSubmitting}
                    />
                    <label htmlFor="form-input-email">Email Address</label>
                    <div className="input-focus-accent-bar" aria-hidden="true" />
                    {errors.email && <span id="err-msg-email" className="form-input-inline-error">{errors.email}</span>}
                  </div>

                  {/* Subject Input Component Field Block */}
                  <div className={`form-input-field-wrapper ${errors.subject ? 'has-input-error' : ''}`}>
                    <input 
                      type="text" 
                      id="form-input-subject"
                      name="subject"
                      placeholder=" "
                      value={formData.subject}
                      onChange={handleInputChange}
                      aria-required="true"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "err-msg-subject" : undefined}
                      disabled={isSubmitting}
                    />
                    <label htmlFor="form-input-subject">Subject</label>
                    <div className="input-focus-accent-bar" aria-hidden="true" />
                    {errors.subject && <span id="err-msg-subject" className="form-input-inline-error">{errors.subject}</span>}
                  </div>

                  {/* Message Textarea Component Field Block */}
                  <div className={`form-input-field-wrapper textarea-variant-wrapper ${errors.message ? 'has-input-error' : ''}`}>
                    <textarea 
                      id="form-textarea-message"
                      name="message"
                      placeholder=" "
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "err-msg-message" : undefined}
                      disabled={isSubmitting}
                    />
                    <label htmlFor="form-textarea-message">Message Details</label>
                    <div className="input-focus-accent-bar" aria-hidden="true" />
                    {errors.message && <span id="err-msg-message" className="form-input-inline-error">{errors.message}</span>}
                  </div>

                  {/* Submission Interaction Button Block */}
                  <button 
                    type="submit" 
                    className={`contact-form-submit-trigger-btn ${isSubmitting ? 'is-processing-state' : ''}`}
                    disabled={isSubmitting}
                    aria-label="Send Message Form Button"
                  >
                    <div className="submit-btn-glow-layer" aria-hidden="true" />
                    {isSubmitting ? (
                      <span className="submit-btn-spinner-text">Encrypting Streams...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FiSend className="submit-btn-send-icon" aria-hidden="true" />
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;