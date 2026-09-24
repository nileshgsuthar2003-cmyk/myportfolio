import { useRef, useEffect } from 'react';

const originalText = "MCA Student & AI Specialist crafting intelligent systems and robust backend architectures.";
const words = originalText.split(' ');

function IntroText() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

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
    window.addEventListener('resize', cacheDimensions, { passive: true });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const startTrigger = containerTop - windowHeight;
      let progress = (scrollY - startTrigger) / (containerHeight || 1);
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', cacheDimensions);
    };
  }, []);

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
