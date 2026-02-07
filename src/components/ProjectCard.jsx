import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ title, description, tech, github, demo }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
      </div>
      
      <p className="project-description">{description}</p>
      
      <div className="project-tech">
        {tech.map((item, index) => (
          <span key={index} className="tech-badge">{item}</span>
        ))}
      </div>
      
      <div className="project-links">
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-link"
        >
          <FaGithub /> Code
        </a>
        {demo !== '#' && (
          <a 
            href={demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link project-link-demo"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
