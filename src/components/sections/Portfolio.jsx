import React from 'react';
import { PROJECTS } from '../../constants/projectsData';

const Portfolio = () => {
  const renderMockVisual = (mockType) => {
    switch(mockType) {
      case 'landing':
        return (
          <div className="landing-mock">
            <div className="mock-header"></div>
            <div className="mock-hero"></div>
            <div className="mock-sections">
              <div className="mock-section"></div>
              <div className="mock-section"></div>
            </div>
          </div>
        );
      case 'product':
        return (
          <div className="product-mock">
            <div className="product-hero">
              <div className="product-image-placeholder"></div>
            </div>
            <div className="product-features">
              <div className="feature-box"></div>
              <div className="feature-box"></div>
              <div className="feature-box"></div>
            </div>
          </div>
        );
      case 'agency':
        return (
          <div className="agency-mock">
            <div className="agency-grid">
              <div className="agency-card"></div>
              <div className="agency-card"></div>
              <div className="agency-card"></div>
              <div className="agency-card"></div>
            </div>
          </div>
        );
      case 'restaurant':
        return (
          <div className="restaurant-mock">
            <div className="restaurant-banner"></div>
            <div className="menu-items">
              <div className="menu-item"></div>
              <div className="menu-item"></div>
              <div className="menu-item"></div>
            </div>
          </div>
        );
      default:
        return (
          <div className="code-lines">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        );
    }
  };

  return (
    <div className="portfolio-section" data-title="MY PORTFOLIO">
      <p className="section-description">
        A collection of landing pages and intro websites I've crafted. 
        Each project showcases clean design, smooth interactions, and pixel-perfect execution.
      </p>

      {/* Projects Grid */}
      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Project Image/Visual */}
            <div className="project-image">
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className="project-mock">
                  {renderMockVisual(project.mockType)}
                </div>
              )}
              
              {project.featured && (
                <div className="featured-badge">
                  <span>⭐</span> Featured
                </div>
              )}
            </div>

            {/* Project Content */}
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {/* Tech Stack */}
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="project-actions">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-btn primary"
                  >
                    View Live
                  </a>
                )}
                {/* {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-btn secondary"
                  >
                    <span className="btn-icon">{'<>'}</span>
                    Source Code
                  </a>
                )} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;