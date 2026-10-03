import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Stats } from './components/Stats';
import { Experiences } from './components/Experiences';
import { Competitions } from './components/Competitions';
import { Workshops } from './components/Workshops';
import { Edition30 } from './components/Edition30';
import { IITBombay } from './components/IITBombay';
import { Countdown } from './components/Countdown';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { RegisterModal } from './components/RegisterModal';
import { NoiseOverlay } from './components/ui/AnimatedGrid';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { CustomCursor } from './components/ui/CustomCursor';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleExplore = () => {
    const introEl = document.getElementById('intro');
    if (introEl) {
      introEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenRegister = () => {
    setIsRegisterOpen(true);
  };

  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#f5f5f7] selection:bg-[#e50914] selection:text-white">
      {/* Cinematic Film Grain Overlay */}
      <NoiseOverlay />

      {/* Initial Minimal Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Website Structure */}
      {!isLoading && (
        <div className="relative z-10 flex flex-col w-full">
          {/* Scroll progress indicator */}
          <ScrollProgress />
          {/* Subtle cursor follower for desktop */}
          <CustomCursor />

          {/* 1. Navbar */}
          <Navbar onOpenRegister={handleOpenRegister} />

          <main>
            {/* 2. Hero Section */}
            <Hero
              onExploreClick={handleExplore}
              onRegisterClick={handleOpenRegister}
            />

            {/* 3. Intro / Manifesto */}
            <Intro />

            {/* 4. Stats Section */}
            <Stats />

            {/* 5. Experiences Section */}
            <Experiences />

            {/* 6. Competitions Section */}
            <Competitions onRegisterClick={handleOpenRegister} />

            {/* 7. Workshops Section */}
            <Workshops onRegisterClick={handleOpenRegister} />

            {/* 8. 30th Edition Feature Section */}
            <Edition30 />

            {/* 9. IIT Bombay Campus Section */}
            <IITBombay />

            {/* 10. Live Countdown Section */}
            <Countdown />

            {/* 11. Final CTA Section */}
            <FinalCTA onRegisterClick={handleOpenRegister} />
          </main>

          {/* 12. Minimal Footer */}
          <Footer />

          {/* Registration / Accreditation Modal */}
          <RegisterModal
            isOpen={isRegisterOpen}
            onClose={handleCloseRegister}
          />
        </div>
      )}
    </div>
  );
}
