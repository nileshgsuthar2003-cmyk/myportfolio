import useLenis from './hooks/useLenis';
import GridLines from './components/layout/GridLines';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import IntroText from './components/IntroText/IntroText';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Works from './components/Works/Works';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import './styles/index.css';

function App() {
  useLenis();

  return (
    <>
      {/* Fixed Vertical Grid Lines */}
      <GridLines />

      {/* Top Navigation Bar */}
      <Navigation />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Sticky Reveal Text Section */}
        <IntroText />

        {/* Sticky Skills Section */}
        <Skills />

        {/* Professional Experience Section */}
        <Experience />

        {/* Works / Projects Section */}
        <Works />

        {/* Education & Certifications Section */}
        <Education />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </>
  );
}

export default App;
