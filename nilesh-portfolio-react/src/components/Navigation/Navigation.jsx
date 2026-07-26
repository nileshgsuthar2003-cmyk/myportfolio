import { useState } from 'react';
import logoSvg from '../../assets/logo.svg';
import ResumeModal from './ResumeModal';

function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="top-nav">
        <div className="brand-logo-wrap" onClick={(e) => scrollToSection(e, 'heroName')}>
          <img src={logoSvg} alt="Nilesh Suthar Logo" className="brand-logo-img" />
          <span className="brand-logo-text">NILESH SUTHAR</span>
        </div>
        <div className="nav-links">
          <a href="#works" className="nav-link" onClick={(e) => scrollToSection(e, 'works')}>Works</a>
          <a href="#skills" className="nav-link" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a>
          <a href="#education" className="nav-link" onClick={(e) => scrollToSection(e, 'education')}>Education</a>
          <a href="#footer" className="nav-link" onClick={(e) => scrollToSection(e, 'footer')}>Contact</a>
          <button className="nav-resume-btn" onClick={() => setIsModalOpen(true)}>
            <span>Resume</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </button>
        </div>
      </nav>

      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default Navigation;
