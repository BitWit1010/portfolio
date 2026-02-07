import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Al-Powered Crop Yield Prediction and Optimization',
      description: 'Designed and implemented an AI-based system to predict crop yields by analyzing real-time weather, soil, and rainfall data to help farmers make smarter cultivation decisions.',
      tech: ['Python', 'TensorFlow', 'React', 'SQL', 'Docker'],
      github: 'https://github.com/himanshusingh/plant-disease-detection'
    },
    {
      title: 'Lung cancer detection using machine learning',
      description: 'Developed a machine learning model to detect lung cancer from medical imaging data with high accuracy.',
      tech: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy'],
      github: 'https://github.com/himanshusingh/lung-cancer-detection'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
