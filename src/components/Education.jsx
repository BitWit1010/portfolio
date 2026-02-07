import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>
      
      <div className="education-card">
        <div className="education-icon">
          <FaGraduationCap />
        </div>
        
        <div className="education-content">
          <h3 className="education-degree">Bachelor of Technology in Computer Science</h3>
          <p className="education-institution">KIET Group of Institutions</p>
          <p className="education-year">2023 - 2027</p>
          <p className="education-details">
            Relevant Coursework: Data Structures, Algorithms, Machine Learning, Database Management Systems, Operating Systems
          </p>
        </div>
      </div>
    </section>
    // <section id="education" className="education">
    //   <h2 className="section-title">Education</h2>
      
    //   <div className="education-card">
    //     <div className="education-icon">
    //       <FaGraduationCap />
    //     </div>
        
    //     <div className="education-content">
    //       <h3 className="education-degree">Bachelor of Technology in Computer Science</h3>
    //       <p className="education-institution">Your University Name</p>
    //       <p className="education-year">2021 - 2025</p>
    //       <p className="education-details">
    //         Relevant Coursework: Data Structures, Algorithms, Machine Learning, 
    //         Web Development, Database Management Systems, Operating Systems
    //       </p>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Education;
