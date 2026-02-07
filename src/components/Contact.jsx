import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-content">
        <p className="contact-text">
          I'm currently looking for internship opportunities. Whether you have a question 
          or just want to say hi, feel free to reach out!
        </p>
        
        <div className="contact-links">
          <a 
            href="mailto:himanshu.singh.jmd@gmail.com" 
            className="contact-link"
          >
            <FaEnvelope />
            <span>himanshu.singh.jmd@gmail.com</span>
          </a>
          
          <a 
            href="https://github.com/himanshusingh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGithub />
            <span>github.com/BitWit1010</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/himanshu-singh-2911882a8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin />
            <span>linkedin.com/in/Himanshu Singh</span>
          </a>
        </div>
      </div>
      
      <footer className="footer">
        <p>© 2025 Himanshu Singh.</p>
      </footer>
    </section>
  );
};

export default Contact;
