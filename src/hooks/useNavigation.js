import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState(null);

  const navigateToSection = (section) => {
    setActiveSection(section);
  };

  const navigateBack = () => {
    setActiveSection(null);
  };

  return (
    <NavigationContext.Provider 
      value={{ activeSection, navigateToSection, navigateBack }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};