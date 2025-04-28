import React, { useEffect } from 'react';
import './Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaGithub, FaJava ,FaPython } from 'react-icons/fa';
import { SiTailwindcss} from 'react-icons/si';

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skills = [
    { icon: <FaJava />, name: 'Java', level: '100%' },
    { icon: <FaJsSquare />, name: 'Javascript', level: '90%' },
    { icon: <FaPython/>, name: 'Python', level: '100%' },
    { icon: <FaReact />, name: 'React.js', level: '90%' },
    { icon: <FaNodeJs />, name: 'Expressjs & Node.js', level: '80%' },
    { icon: <FaDatabase />, name: 'MongoDB & MySQL', level: '80%' },
    { icon: <FaHtml5  />, name: 'HTML', level: '100%' },
    { icon: <FaCss3Alt  />, name: 'CSS', level: '100%' },
    { icon: <SiTailwindcss  />, name: 'TailwindCSS', level: '100%' },
    { icon: <FaGithub />, name: 'Git & GitHub', level: '100%' },
    
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title" data-aos="fade-up">Skills & Technologies</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: skill.level }}>{skill.level}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;


