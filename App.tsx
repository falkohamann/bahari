import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ServiceMenu from './components/ServiceMenu';
import TreasureChamber from './components/TreasureChamber';
import Gallery from './components/Gallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';

const App: React.FC = () => {
  const [legalPage, setLegalPage] = useState<'impressum' | 'datenschutz' | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans text-bahari-dark selection:bg-bahari-orange selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <ServiceMenu />
        <TreasureChamber />
        <AboutUs />
        <Gallery />
        <ContactSection />
      </main>
      <Footer 
        onOpenImpressum={() => setLegalPage('impressum')}
        onOpenDatenschutz={() => setLegalPage('datenschutz')}
      />
      <LegalModal 
        isOpen={!!legalPage} 
        type={legalPage} 
        onClose={() => setLegalPage(null)} 
      />
    </div>
  );
};

export default App;