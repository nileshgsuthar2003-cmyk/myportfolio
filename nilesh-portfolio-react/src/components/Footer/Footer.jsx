import { useEffect, useRef } from 'react';

function Footer() {
  const watermarkRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    let footerTop = 0;
    let windowHeight = window.innerHeight;

    function cacheDimensions() {
      windowHeight = window.innerHeight;
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        footerTop = rect.top + window.scrollY;
      }
    }

    cacheDimensions();
    window.addEventListener('resize', cacheDimensions);
    setTimeout(cacheDimensions, 100);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (footerRef.current && watermarkRef.current) {
        if (scrollY > footerTop - windowHeight) {
          const offset = (scrollY - (footerTop - windowHeight)) * 0.15;
          watermarkRef.current.style.transform = `translateX(${offset - 100}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', cacheDimensions);
    };
  }, []);

  return (
    <footer className="footer-section" id="footer" ref={footerRef}>
      {/* Watermark Background */}
      <div className="footer-watermark">
        <div className="watermark-text" ref={watermarkRef} id="watermark">Nilesh Suthar</div>
      </div>

      {/* Main Content */}
      <div className="footer-content">
        <h2 className="footer-title" id="footerTitle">Let's build something</h2>
        <p className="footer-subtitle" id="footerSubtitle">meaningful and memorable</p>
        
        <div className="footer-contacts-wrap">
          {/* Expanding Email circle */}
          <a href="mailto:nilesh.g.suthar.2003@gmail.com" className="email-expanding-circle">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></path>
            </svg>
            <span className="email-text-label">nilesh.g.suthar.2003@gmail.com</span>
          </a>

          {/* LinkedIn (Social Icon) */}
          <a href="https://linkedin.com/in/nilesh-g-suthar" target="_blank" rel="noopener noreferrer" className="footer-social-link stroke-svg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="2" y="2" width="20" height="20" rx="4" strokeWidth="2"></rect>
              <path d="M8 11v5" strokeWidth="2" strokeLinecap="round"></path>
              <path d="M8 8v.01" strokeWidth="2" strokeLinecap="round"></path>
              <path d="M12 16v-5" strokeWidth="2" strokeLinecap="round"></path>
              <path d="M16 16v-3a2 2 0 1 0-4 0" strokeWidth="2" strokeLinecap="round"></path>
            </svg>
          </a>

          {/* GitHub (Social Icon) */}
          <a href="https://github.com/nilesh-suthar" target="_blank" rel="noopener noreferrer" className="footer-social-link stroke-svg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </a>

          {/* LeetCode (Social Icon) */}
          <a href="https://leetcode.com/nilesh-suthar" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.411L7.11 5.826a1.374 1.374 0 0 0-.014 1.945L12.2 12.875a2.75 2.75 0 0 0 3.882.01l5.51-5.508a1.375 1.375 0 0 0-1.944-1.944l-5.51 5.507a.687.687 0 0 1-.972-.003L8.56 6.302l4.896-4.898A1.376 1.376 0 0 0 13.483 0z" />
              <path d="M16.086 16.086a.687.687 0 0 1-.972-.003L10.51 11.48l-5.32 5.32a2.75 2.75 0 0 0-.009 3.885l4.897 4.897a1.376 1.376 0 0 0 1.944 0l8.077-8.077a1.375 1.375 0 0 0-1.944-1.944l-8.077 8.077a.687.687 0 0 1-.972-.003l-4.897-4.897a.688.688 0 0 1 .002-.972l5.32-5.32 4.604 4.604a2.75 2.75 0 0 0 3.882.01l2.062-2.062a1.375 1.375 0 0 0-1.944-1.944l-2.062 2.062z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="footer-bottom-bar">
      </div>
    </footer>
  );
}

export default Footer;
