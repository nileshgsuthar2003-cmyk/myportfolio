import { useState, useEffect } from 'react';
import scribbleSvg from '../../assets/scribble.svg';
import ResumeModal from '../Navigation/ResumeModal';

function Hero() {
  const [backdropActive, setBackdropActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBackdropActive(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToWorks = (e) => {
    e.preventDefault();
    const element = document.getElementById('works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Interactive Backdrop Layer */}
      <div className={`hero-backdrop ${backdropActive ? 'active' : ''}`} id="heroBackdrop">
        <div className="scribble-wrap">
          <img src={scribbleSvg} alt="scribble graphic" />
        </div>
        <div className="hero-portrait-wrap">
          <div className="hero-avatar-card">
            <span className="hero-avatar-initials">NS</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        {/* Cursive Signature SVG (Spells Nilesh) */}
        <div className="hero-signature-container">
          <svg viewBox="0 0 450 160" fill="none" className="signature-svg">
            <path 
              d="M 25 100 C 20 60, 40 20, 50 20 C 55 20, 60 70, 70 120 C 75 140, 80 10, 90 20 C 100 30, 95 100, 110 80 C 115 70, 120 65, 125 70 C 130 75, 125 90, 135 90 C 140 70, 145 20, 155 20 C 160 20, 155 70, 160 90 C 165 80, 170 70, 175 70 C 180 70, 175 90, 185 90 C 195 90, 205 70, 200 65 C 195 60, 190 90, 205 90 C 215 70, 220 20, 228 20 C 232 20, 228 80, 232 90 C 236 100, 240 70, 248 70 C 255 70, 252 85, 260 90 C 270 95, 290 100, 310 100 C 330 100, 350 95, 370 90 C 390 85, 410 80, 420 85 C 430 90, 400 110, 350 120 C 270 135, 120 145, 50 140 C 30 138, 15 130, 20 120" 
              stroke="#E48F5B" 
              strokeWidth="7" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            <path 
              d="M 123 45 A 2.5 2.5 0 1 1 128 45" 
              stroke="#E48F5B" 
              strokeWidth="6" 
              strokeLinecap="round" 
            />
          </svg>
        </div>

        {/* Title / Header Group */}
        <div className="hero-title-group">
          {/* Top Line (Above NILESH) */}
          <div className="hero-top-line"></div>

          {/* Name Heading */}
          <h1 className="hero-name-heading" id="heroName">Nilesh Suthar</h1>

          {/* Bottom Line (Under SUTHAR) */}
          <div className="hero-bottom-line"></div>
        </div>

        {/* Hero Actions */}
        <div className="hero-actions">
          <button className="hero-btn primary-hero-btn" onClick={() => setIsModalOpen(true)}>
            <span>Download CV</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </button>
          <a href="#works" className="hero-btn secondary-hero-btn" onClick={scrollToWorks}>
            <span>Explore Works ↴</span>
          </a>
        </div>
      </section>

      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default Hero;
