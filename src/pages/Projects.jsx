import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';
import ecom from '../assets/ecom.png'
import portfolio from '../assets/portfolio.png'
import portfolio1 from '../assets/portfolio1.png'
import paste3 from '../assets/paste3.png'
import Razerpay from '../assets/razerpay.png'

const Projects = () => {
  // Your actual projects data - UPDATE THESE WITH YOUR REAL PROJECTS
  const [projects] = useState([
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      image: ecom,
      technologies: ["JavaScript", "React", "SpringBoot", "SQL"],
      githubLink: "https://github.com/yourusername/ecommerce-platform",
      liveDemoLink: "https://your-ecommerce-demo.com",
      featured: false
    },
    {
      id: 2,
      title: " PASTE - Code/Notes React Applicaation",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: paste3,
      technologies: ["JavaScript","React", "SpringBoot", "MongoDB"],
      githubLink: "https://github.com/yourusername/task-manager",
      liveDemoLink: "https://your-taskmanager-demo.com",
      featured: false
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations.",
      image: portfolio1,
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      githubLink: "https://github.com/yourusername/portfolio",
      liveDemoLink: "https://your-portfolio.com",
      featured: false
    },
   
    {
      id: 4,
      title: "Razerpay UI clone",
      description: "A comprehensive UI clone application All features and dashboard analytics.",
      image: Razerpay,
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      githubLink: "https://github.com/yourusername/fitness-tracker",
      liveDemoLink: "https://your-fitness-demo.com",
      featured: false
    }
  ]);

  const [filter, setFilter] = useState('all');

  // Safe extraction of technologies
  const allTechnologies = projects && projects.length > 0 
    ? [...new Set(projects.flatMap(project => project?.technologies || []))]
    : [];

  const filteredProjects = filter === 'all' 
    ? (projects || [])
    : (projects || []).filter(project => 
        project?.technologies?.includes(filter)
      );

  return (
    <div className="projects-page">
      <div className="projects-container">
        <div className="projects-header">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">
            Here are some of my recent works that showcase my skills and experience in web development
          </p>
        </div>

        {/* Filter Buttons - Only show if there are technologies */}
        {allTechnologies.length > 0 && (
          <div className="projects-filter">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            {allTechnologies.map(tech => (
              <button
                key={tech}
                className={`filter-btn ${filter === tech ? 'active' : ''}`}
                onClick={() => setFilter(tech)}
              >
                {tech}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="no-projects">
              <p>No projects found with the selected technology.</p>
              <button 
                className="reset-filter-btn"
                onClick={() => setFilter('all')}
              >
                Show All Projects
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;