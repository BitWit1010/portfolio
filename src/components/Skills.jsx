import React from 'react';
import { FaCode, FaLaptopCode, FaBrain, FaTools } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: <FaCode />,
      title: 'Languages',
      skills: ['Java', 'Python', 'JavaScript', 'SQL']
    },
    {
      icon: <FaBrain />,
      title: 'Machine Learning',
      skills: ['NumPy', 'Pandas', 'TensorFlow', 'CNNs', 'scikit-learn', 'Seaborn']
    },
    {
      icon: <FaTools />,
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VS Code', 'MySQL']
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{category.icon}</div>
            <h3 className="skill-title">{category.title}</h3>
            <div className="skill-list">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
