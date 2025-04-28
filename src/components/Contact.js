import React, { useEffect } from 'react';
import './Contact.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>
      <p className="contact-subtitle" data-aos="fade-up" data-aos-delay="100">
        I'd love to collaborate or hear about new opportunities. Let's talk!
      </p>

      <div className="contact-container" data-aos="fade-up" data-aos-delay="200">
        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required className="contact-input" />
          <input type="email" name="email" placeholder="Your Email" required className="contact-input" />
          <textarea name="message" placeholder="Your Message" rows="5" required className="contact-textarea"></textarea>
          <button type="submit" className="contact-button">Send Message</button>
        </form>

        <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:your-email@example.com">bykinagamani22446@gmail.com</a></p>
          <p><strong>Phone:</strong> +91 8019805653</p>
          <p><strong>Location:</strong> Sri Satya Sai, India</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;


