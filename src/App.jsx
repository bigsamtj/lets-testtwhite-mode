import { useState } from 'react';

import NetflixPreloader from './components/NetflixPreloader';
import CustomCursor from './components/CustomCursor';
import { ThemeProvider } from './components/ThemeContext';

import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Building from './components/Building';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <main
        className="
          portfolio-root
          min-h-screen
          relative
          cursor-none
          selection:bg-red-600
          selection:text-white
        "
      >
        {/* Cinematic Preloader */}
        {loading && (
          <NetflixPreloader
            onComplete={() => setLoading(false)}
          />
        )}

        {/* Global Mouse Hover Effects */}
        <CustomCursor />

        {/* Portfolio Sections */}
        <Hero />
        <About />
        <Expertise />
        <Skills />
        <Projects />
        <Building />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
