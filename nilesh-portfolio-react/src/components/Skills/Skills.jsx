import { useState, useRef } from 'react';
import { skillsData } from './skillsData';
import brushStroke from '../../assets/brush-stroke.webp';

function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const displayBoxRef = useRef(null);

  const handleSkillClick = (index) => {
    if (index === activeIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActiveIndex(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const currentSkill = skillsData[activeIndex];

  return (
    <div className="sticky-skills-container">
      <section className="sticky-skills-section" id="skills">
        <img src={brushStroke} alt="brush stroke separator" className="brush-stroke-banner" />
        
        <div className="skills-wrapper">
          <div className="skills-left">
            <p className="skills-summary-intro">
              Developing backend APIs and AI pipelines that solve real-world problems.
            </p>
            <div className="skills-scrolling-titles">
              {skillsData.map((skill, index) => (
                <div
                  key={skill.id}
                  className={`skill-row-title ${index === activeIndex ? 'active' : 'inactive'}`}
                  data-skill-index={index}
                  onClick={() => handleSkillClick(index)}
                  style={{ cursor: 'pointer' }}
                >
                  {skill.title}
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-right">
            <div 
              className="skill-detail-display-box" 
              ref={displayBoxRef}
              id="skillDisplayBox"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
                transition: 'opacity 0.3s ease, transform 0.3s ease'
              }}
            >
              <div>
                <div className="skill-box-header">
                  <div className="skill-icon-placeholder" id="skillIcon" dangerouslySetInnerHTML={{ __html: currentSkill.icon }} />
                  <h3 className="skill-box-title" id="skillTitle">{currentSkill.title}</h3>
                </div>
                <p className="skill-box-content" id="skillContent">{currentSkill.content}</p>
              </div>
              <div className="skill-pill-tags" id="skillPills">
                {currentSkill.pills.map((pill, idx) => (
                  <span key={idx} className="skill-pill-tag">{pill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
