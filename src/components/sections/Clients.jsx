import React from 'react';

const Clients = () => {
  return (
    <div className="clients-section" data-title="MY CLIENTS">
      <div className="empty-state-container">
        <div className="empty-state-icon">🎯</div>
        <h3 className="empty-state-title">Be My First Hero</h3>
        <p className="empty-state-description">
          This space is reserved for visionaries who believe in fresh talent. 
          Be the pioneer who took a chance on a passionate developer ready to exceed expectations.
        </p>

        <div className="vip-badge-container">
          <div className="vip-badge">
            <div className="badge-icon">⭐</div>
            <div className="badge-content">
              <h4>FOUNDING CLIENT STATUS</h4>
              <p>Your company name could be right here, forever remembered as the one who believed first.</p>
            </div>
          </div>
        </div>

        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-header">
              <span className="benefit-number">01</span>
              <h5>Undivided Attention</h5>
            </div>
            <p>You won't be client #47. You'll be THE client. Full focus, maximum dedication.</p>
          </div>
          
          <div className="benefit-item">
            <div className="benefit-header">
              <span className="benefit-number">02</span>
              <h5>Hungry for Excellence</h5>
            </div>
            <p>Building my reputation starts with YOU. Expect nothing less than my absolute best work.</p>
          </div>
          
          <div className="benefit-item">
            <div className="benefit-header">
              <span className="benefit-number">03</span>
              <h5>Modern Tech Stack</h5>
            </div>
            <p>Fresh knowledge of the latest tools and best practices. No outdated methods here.</p>
          </div>
        </div>

        <p className="empty-state-cta">
          Ready to make history? Let's build something extraordinary together. 
          <span className="cta-highlight"> Your success story starts here.</span>
        </p>
      </div>
    </div>
  );
};

export default Clients;