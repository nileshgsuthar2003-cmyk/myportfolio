import { useState, useEffect } from 'react';
import scribbleSvg from '../../assets/scribble.svg';

function Hero() {
  const [backdropActive, setBackdropActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBackdropActive(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

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
            {/* Continuous cursive path spelling 'Nilesh' with swash */}
            <path 
              d="M 25 100 C 20 60, 40 20, 50 20 C 55 20, 60 70, 70 120 C 75 140, 80 10, 90 20 C 100 30, 95 100, 110 80 C 115 70, 120 65, 125 70 C 130 75, 125 90, 135 90 C 140 70, 145 20, 155 20 C 160 20, 155 70, 160 90 C 165 80, 170 70, 175 70 C 180 70, 175 90, 185 90 C 195 90, 205 70, 200 65 C 195 60, 190 90, 205 90 C 215 70, 220 20, 228 20 C 232 20, 228 80, 232 90 C 236 100, 240 70, 248 70 C 255 70, 252 85, 260 90 C 270 95, 290 100, 310 100 C 330 100, 350 95, 370 90 C 390 85, 410 80, 420 85 C 430 90, 400 110, 350 120 C 270 135, 120 145, 50 140 C 30 138, 15 130, 20 120" 
              stroke="#E48F5B" 
              strokeWidth="7" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            {/* Dot for the 'i' in Nilesh */}
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
          {/* Left Subtitle Connection Line */}
          <div className="hero-lines-wrap hero-lines-left">
            <div className="hero-line-seg"></div>
          </div>

          {/* Name Heading */}
          <h1 className="hero-name-heading" id="heroName">Nilesh Suthar</h1>

          {/* Right Subtitle Connection Line */}
          <div className="hero-lines-wrap hero-lines-right">
            <div className="hero-line-seg"></div>
          </div>

          {/* Mobile Subtitles (centered) */}
          <div className="hero-mobile-subtitle">
          </div>
        </div>

        {/* Transition blocks at the bottom of hero */}
        <div className="transition-blocks">
          <div className="trans-block-item"></div>
          <div className="trans-block-item"></div>
          <div className="trans-block-item"></div>
          <div className="trans-block-item"></div>
          <div className="trans-block-item"></div>
        </div>
      </section>
    </>
  );
}

export default Hero;
