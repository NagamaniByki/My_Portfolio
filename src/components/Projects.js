import React from 'react';
import './Projects.css'; 
import { FaHtml5, FaCss3, FaJsSquare, FaBootstrap, FaDatabase, FaPhp, FaJava,  FaPython } from 'react-icons/fa'; 
import { SiOpencv, SiTensorflow, SiPytorch, SiJavascript } from 'react-icons/si'; 
import { FaReact } from 'react-icons/fa6';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {/* Project 1 */}
        <div className="project-card">
          <h3 className="project-title">Dentist Website</h3>
          <p className="project-description">
            Developed a responsive website ensuring seamless user experience across all devices.
            <p>Integrated an appointment booking system for easy scheduling of dental visits.</p>
          </p>
          <div className="project-icons">
            <FaHtml5 className="project-icon" />
            <FaCss3 className="project-icon" />
            <FaJsSquare className="project-icon" />
            <FaBootstrap className="project-icon" />
            <FaDatabase className="project-icon" />
            <FaPhp className="project-icon" />
          </div>
          {/* GitHub Link as Button */}
          <a 
            href="https://github.com/NagamaniByki/Dentist_Website" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-button"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3 className="project-title">Airline Reservation System</h3>
          <p className="project-description">
            Built a managerial software to control airline operations, including flight scheduling and reservations.
            <p>Implemented features for ticket booking, flight cancellations, customer support.</p>
          </p>
          <div className="project-icons">
            <FaJava className="project-icon" />
            <FaDatabase className="project-icon" />
          </div>
          {/* GitHub Link as Button */}
          <a 
            href="https://github.com/NagamaniByki/Airline_Reservation_System" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-button"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3 className="project-title">Emotion Based Music Recommendation System</h3>
          <p className="project-description">
            Uses a convolutional neural network (CNN) to classify facial expressions into emotions like happy, sad, angry, neutral, etc.
            <p>Based on the detected emotion, the system recommends a specific song tailored to the mood.</p>
            <p>Captures live images from a webcam for emotion analysis.</p>
          </p>
          <div className="project-icons">
            <FaPython className="project-icon" />
            <SiOpencv className="project-icon" />
            <SiTensorflow className="project-icon" />
            <SiPytorch className="project-icon" />
          </div>
          {/* GitHub Link as Button */}
          <a 
            href="https://github.com/NagamaniByki/Music_Recommendation_System" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-button"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <h3 className="project-title">Personal Portfolio Website</h3>
          <p className="project-description">
            A fully responsive and modern personal portfolio website built using React.
            <p>It showcases my projects, skills, and background in a clean and minimal design.</p>
            <p>The site is designed to be fast, accessible, and easy to navigate, featuring smooth scroll, icon-based tech stack displays, and reusable components.</p>
          </p>
          <div className="project-icons">
            <FaReact className="project-icon" />
            <SiJavascript className="project-icon" />
          </div>
          {/* GitHub Link as Button */}
          <a 
            href="https://github.com/NagamaniByki/My_Portfolio" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-button"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

