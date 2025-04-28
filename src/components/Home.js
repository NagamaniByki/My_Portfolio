import React, { useEffect } from 'react';
import './Home.css';
import heroImage from '../assets/hero-image.png'; // Add your hero image here
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section id="home" className="home">
      
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#000000", 
            },
          },
          particles: {
            color: { value: "#ffffff" }, 
            links: {
              color: "#ffffff", 
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: { enable: true },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 80,
            },
            opacity: { value: 0.6 },
            shape: { type: "circle" }, 
            size: { value: { min: 1, max: 3 } }, 
          },
          detectRetina: true,
        }}
      />

      
      <div className="home-container">
        <div className="home-text" data-aos="fade-right">
          <h1>Hello, I'm <span className="highlight">Nagamani</span></h1>
          <h2>A Full Stack Developer</h2>
          <p>Building modern,scalable and User-friendly applications</p>
          <a href="#contact" className="btn">Lets connect</a>
        </div>
        <div className="home-image" data-aos="fade-left">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
    </section>
  );
}

export default Home;

