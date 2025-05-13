import React, { useEffect } from 'react';
import './About.css';
import aboutImage from '../assets/about-image.png'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left side - Text */}
        <div className="about-content" data-aos="fade-right">
          <h2>About Me</h2>
          <p>
            I'm Byki Nagamani,<strong>a Full Stack MERN , JAVA Developer</strong> with 
            a passion for building scalable and interactive web applications using modern technologies like <strong>React</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>,<strong>Core Java</strong>,<strong>Spring Boot</strong>,<strong>Javascript</strong> and more.
            <br /><br />
             I am pursuing my B.Tech in Computer Science at RGUKT and enjoy research driven learning,problem-solving and software development.
             <br /><br />
             I love solving real-world problems, learning new technologies, and creating seamless user experiences.
             With a strong foundation in both front-end and back-end development, I bring ideas to life from scratch.
          </p>
          <a href="#contact" className="btn">Let's connect</a>
        </div>

        {/* Right side - Image */}
        <div className="about-image" data-aos="fade-left">
          <img src={aboutImage} alt="About Me" />
        </div>
      </div>
    </section>
  );
};

export default About;



