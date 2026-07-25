import { useRef, useEffect, useState } from 'react';

function IntroText() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [chars, setChars] = useState([]);
  const originalText = "MCA Student & AI Specialist crafting intelligent systems and robust backend architectures.";

  useEffect(() => {
    // Split text into characters
    const words = originalText.split(' ');
    const charArray = [];
    
    words.forEach((word, wordIdx) => {
      word.split('').forEach((char) => {
        charArray.push(char);
      });
      if (wordIdx < words.length - 1) {
        charArray.push(' ');
      }
    });
    
    setChars(charArray);
  }, []);

  useEffect(() => {
    if (!containerRef.current || chars.length === 0) return;

    let containerTop = 0;
    let containerHeight = 0;
    let windowHeight = window.innerHeight;

    function cacheDimensions() {
      windowHeight = window.innerHeight;
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        containerTop = rect.top + window.scrollY;
        containerHeight = rect.height;
      }
    }

    cacheDimensions();
    window.addEventListener('resize', cacheDimensions);
    setTimeout(cacheDimensions, 100);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const startTrigger = containerTop - windowHeight;
      let progress = (scrollY - startTrigger) / containerHeight;
      progress = Math.max(0, Math.min(1, progress));

      const charElements = textRef.current?.querySelectorAll('.intro-char');
      if (charElements) {
        const totalChars = charElements.length;
        const activeLimit = Math.floor(progress * totalChars * 1.5);

        charElements.forEach((char, idx) => {
          if (idx < activeLimit) {
            char.classList.add('active');
          } else {
            char.classList.remove('active');
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', cacheDimensions);
    };
  }, [chars]);

  const words = originalText.split(' ');

  return (
    <div className="sticky-intro-container" ref={containerRef} id="introContainer">
      <section className="sticky-intro-section">
        <p className="intro-text-paragraph" ref={textRef} id="introText">
          {words.map((word, wordIdx) => (
            <span key={wordIdx} className="intro-word">
              {word.split('').map((char, charIdx) => (
                <span key={charIdx} className="intro-char">
                  {char}
                </span>
              ))}
              {wordIdx < words.length - 1 && <span className="intro-space">&nbsp;</span>}
            </span>
          ))}
        </p>
      </section>
    </div>
  );
}

export default IntroText;
