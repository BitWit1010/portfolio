import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        <p className="about-text">
          I'm a Computer Science student passionate about solving real-world problems through software development and machine learning. 
          I specialize in building intelligent web applications with ML-powered backends.
        </p>
        
        <p className="about-text">
          My focus lies in creating scalable solutions using Python, JavaScript, and React, while leveraging machine learning frameworks 
          to develop models that make a tangible impact. I thrive on turning complex problems into elegant, user-friendly applications.
        </p>
        
        <p className="about-text">
          Currently seeking internship opportunities where I can contribute to innovative projects, learn from experienced teams, 
          and apply my skills in software development and ML to deliver meaningful results.
        </p>
      </div>
    </section>
  );
};

export default About;
