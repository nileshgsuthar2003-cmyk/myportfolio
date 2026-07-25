import { useRef, useState, useEffect } from 'react';

function RolePills() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pills-track-section" ref={sectionRef}>
      <div className="pills-container">
        <span className={`role-pill ${isVisible ? 'visible' : ''}`}>Backend Developer</span>
        <span className={`role-pill ${isVisible ? 'visible' : ''}`}>AI/ML Engineer</span>
        <span className={`role-pill ${isVisible ? 'visible' : ''}`}>Java Specialist</span>
      </div>
    </section>
  );
}

export default RolePills;
