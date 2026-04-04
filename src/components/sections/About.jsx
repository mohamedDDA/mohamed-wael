import React from 'react';
import Button from '../Button';
import InfoCard from '../InfoCard';
import { TECH_STACK } from '../../constants/sectionData';

const About = () => {
  return (
    <div className="about-section" data-title="ABOUT ME">
      <p className="intro-text">
        Full-stack web developer specializing in React and MERN stack development.
        Passionate about creating clean, efficient, and scalable web applications
        with modern technologies and best practices.
      </p>

      <div className="info-grid">
        <InfoCard label="Name" value="Mohamed Wael" />
        <InfoCard label="Profession" value="MERN Stack Developer" />
        <InfoCard label="Email" value="mohammed.wael.eng@gmail.com" />
        <InfoCard label="Phone" value="+20 1099 45 2977" />
      </div>

      <div className="button-group">
        <Button variant="primary">Download Resume</Button>
          </div>

      <div className="tech-stack-section">
        <h3 className="subsection-title">Tech Stack</h3>
        <div className="tech-stack">
          {TECH_STACK.map((tech, index) => (
            <div key={index} className="tech-item">{tech}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;