import React from 'react';

const Services = () => {
  return (
    <div className="services-section" data-title="MY SERVICES">
      <p className="section-description">
        Offering professional web development services with expertise in modern technologies.
      </p>
      
      <div className="services-grid">
        <div className="service-card">
          <h3>Frontend Development</h3>
          <p>Building responsive and interactive user interfaces with React</p>
        </div>
        <div className="service-card">
          <h3>Backend Development</h3>
          <p>Creating robust server-side applications with Node.js and Express</p>
        </div>
        <div className="service-card">
          <h3>Full Stack Solutions</h3>
          <p>End-to-end development using the MERN stack</p>
        </div>
      </div>
    </div>
  );
};

export default Services;