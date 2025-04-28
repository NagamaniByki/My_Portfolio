import React, { useEffect } from 'react';
import './Experience.css'; // Import CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title" data-aos="fade-up">Experience & Internships</h2>
      <div className="experience-cards" id="Experience">
        
        <div className="experience-card" data-aos="fade-right">
          <h3>Software Engineer Intern</h3>
          <p className="organization">Learn Sqaure Technologies</p>
         <p> Developing scalable web applications.</p>
        <p>Collaborating with teams to deliver quality software.</p>
         <p>Hands-on experience in backend, frontend, and API integration.</p>
        </div>
        <div className="experience-card" data-aos="fade-right">
          <h3>Web Developer Intern</h3>
          <p className="organization">Cognifyz Technologies</p>
          <p>Developed responsive websites and applications using frontend and backend Technologies</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
