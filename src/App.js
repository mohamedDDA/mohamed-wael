import React from 'react';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Career from './components/sections/Career';
import Portfolio from './components/sections/Portfolio';
import Clients from './components/sections/Clients';
import Contact from './components/sections/Contact';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import NavigationGrid from './components/NavigationGrid';
import SectionView from './components/SectionView';
import BackgroundGrid from './components/BackgroundGrid';
import { NavigationProvider, useNavigation } from './hooks/useNavigation';
import CustomCursor from "./components/CustomCursor";

function AppContent() {
  const { activeSection } = useNavigation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="app">
      <CustomCursor />
      <div className="app-container">
        <Sidebar className={activeSection ? 'section-active' : ''} />
        <main className="main-content">
          {isMobile ? (
            <div className="mobile-sections-flow">
              <About />
              <Services />
              <Portfolio />
              <Contact />
            </div>
          ) : (
            !activeSection ? <NavigationGrid /> : <SectionView />
          )}
        </main>
      </div>
    </div>
  );
}


function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}

export default App;