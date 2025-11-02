import React, { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  // Add safety check to prevent undefined project
  if (!project) {
    console.warn('ProjectCard received undefined project');
    return (
      <div className="project-card project-card-error">
        <div className="project-image">
          <div className="project-fallback">
            <div className="fallback-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <div className="fallback-title">
              <span>Project Not Available</span>
            </div>
          </div>
        </div>
        <div className="project-content">
          <h3 className="project-title">Project Not Found</h3>
          <p className="project-description">This project information is currently unavailable.</p>
        </div>
      </div>
    );
  }

  // Safe destructuring with default values
  const {
    title = "Untitled Project",
    description = "No description available.",
    technologies = [],
    githubLink,
    liveDemoLink,
    image,
    featured = false
  } = project;

  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={`project-card ${featured ? 'featured' : ''}`}>
      <div className="project-image">
        {!imageError && image ? (
          <img 
            src={image} 
            alt={title} 
            onError={handleImageError}
          />
        ) : (
          <div className="project-fallback">
            <div className="fallback-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <div className="fallback-title">
              <span>{title}</span>
            </div>
          </div>
        )}
        <div className="project-overlay">
          <div className="project-links">
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <i className="fab fa-github"></i>
                Code
              </a>
            )}
            {liveDemoLink && (
              <a 
                href={liveDemoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <i className="fas fa-external-link-alt"></i>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;