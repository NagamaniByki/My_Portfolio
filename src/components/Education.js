import React, { useEffect } from 'react';
import './Education.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="Education" className="education-section">
      <h2 className="section-title" data-aos="fade-up">Education</h2>
      <div className="education-cards">
        <div className="education-card" data-aos="fade-left">
          <h3>B.Tech,Computer Science</h3>
          <p className="institution">Rajiv Gandhi University Of Knowledge Technologies (2022-2026)</p>
          <p><strong>Avg CGPA:8.774</strong></p>
        </div>
        <div className="education-card" data-aos="fade-left" data-aos-delay="200">
          <h3>PUC (Pre-University Course)</h3>
          <p className="institution">Rajiv Gandhi University Of Knowledge Technologies (2020-2022)</p>
          <p><strong>Avg CGPA:9.55</strong></p>
        </div>
        <div className="education-card" data-aos="fade-left">
          <h3>SSC</h3>
          <p className="institution">Blue Moon School(2019-2020)</p>
          <p><strong>CGPA:10</strong></p>
        </div>
      </div>
    </section>
  );
};

export default Education;
