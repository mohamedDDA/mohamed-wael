import React from 'react';
import { useNavigation } from '../hooks/useNavigation';
import About from './sections/About';
import Services from './sections/Services';
import Career from './sections/Career';
import Portfolio from './sections/Portfolio';
import Clients from './sections/Clients';
import Contact from './sections/Contact';
import Button from './Button';

const SectionView = () => {
  const { activeSection, navigateBack } = useNavigation();

  const renderSection = () => {
    switch (activeSection?.id) {
      case 'about': return <About />;
      case 'services': return <Services />;
      case 'career': return <Career />;
      case 'portfolio': return <Portfolio />;
      case 'clients': return <Clients />;
      case 'contact': return <Contact />;
      default: return null;
    }
  };

  return (
    <div className="section-view">
      <Button onClick={navigateBack} variant="back">
        <span className="back-arrow">←</span> Back
      </Button>

      <div className="section-content">
        <h1 className="section-heading">{activeSection?.title}</h1>
        {renderSection()}
      </div>
    </div>
  );
};

export default SectionView;