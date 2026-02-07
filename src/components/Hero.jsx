import React from 'react';
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-greeting">Hi, I'm</div>
        <h1 className="hero-name">Himanshu Singh</h1>
        <p className="hero-tagline">
          Software Developer & Machine Learning Enthusiast
        </p>
        <p className="hero-description">
          B.Tech CS student building intelligent solutions through code and ML models
        </p>
        
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects <FaArrowRight />
          </a>
          <a href="src\components\resume.pdf" download className="btn btn-secondary">
            <FaDownload /> Resume
          </a>
        </div>
        
        <div className="hero-social">
          <a href="https://github.com/BitWit1010" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/himanshu-singh-2911882a8" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
      
      <div className="hero-decoration">
        <div className="decoration-circle decoration-circle-1"></div>
        <div className="decoration-circle decoration-circle-2"></div>
      </div>
    </section>
  );
};

export default Hero;
