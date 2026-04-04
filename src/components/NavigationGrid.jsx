import React from 'react';
import { useNavigation } from '../hooks/useNavigation';
import { SECTIONS } from '../constants/sectionData';

const NavigationGrid = () => {
  const { navigateToSection } = useNavigation();

  return (
    <div className="navigation-grid">
      {SECTIONS.map((section) => (
        <div
          key={section.id}
          className="grid-tile"
          style={{
            gridRow: section.position.row,
            gridColumn: section.position.col
          }}
          onClick={() => navigateToSection(section)}
        >
          <span className="grid-tile-title">{section.title}</span>
          <div className="grid-tile-border"></div>
        </div>
      ))}
    </div>
  );
};

export default NavigationGrid;