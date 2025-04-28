import React from 'react';
import './Projects.css'; 
import { FaHtml5, FaCss3, FaJsSquare,FaBootstrap,FaDatabase,FaPhp, FaJava, FaGithub  } from 'react-icons/fa'; // Import Icons

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {/* Project 1 */}
        <div className="project-card">
          <h3 className="project-title">Dentist Website</h3>
          <p className="project-description">
          Developed a responsive website ensuring seamless user experience across all de-
vices.
<p>Integrated an appointment booking system for easy scheduling of dental visits.</p>


          </p>
          <div className="project-icons">
            <FaHtml5 className="project-icon" />
            <FaCss3 className="project-icon" />
            <FaJsSquare className="project-icon" />
            <FaBootstrap className="project-icon" />
            <FaDatabase className="project-icon" />
            <FaPhp className="project-icon" />
            <FaGithub className='project-icon'/>
          </div>
        </div>
        {/* Project 2 */}
        <div className="project-card">
          <h3 className="project-title">Airline Reservation System</h3>
          <p className="project-description">
          Built a managerial software to control airline operations, including flight schedul-
ing and reservations.
<p>Implemented features for ticket booking, flight cancellations, customer support.</p>
          </p>
          <div className="project-icons">
            <FaJava className="project-icon" />
            <FaDatabase className="project-icon" />
            <FaGithub className='project-icon'/>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Projects;

