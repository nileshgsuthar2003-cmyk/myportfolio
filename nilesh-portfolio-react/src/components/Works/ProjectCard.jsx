function ProjectCard({ project }) {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="work-card">
      <div className="card-hover-bg"></div>
      
      {/* Mockup based on type */}
      <div className="project-mockup-container">
        {project.mockupType === 'terminal' ? (
          <div className="terminal-mockup">
            <div className="terminal-header">
              <span className="term-dot dot-red"></span>
              <span className="term-dot dot-yellow"></span>
              <span className="term-dot dot-green"></span>
            </div>
            <div className="terminal-body">
              <div className="term-line cmd">python extract.py</div>
              <div className="term-line info">Loading Nougat model...</div>
              <div className="term-line success">Formula Extracted:</div>
              <div className="term-line math">{"$$ f(x) = \\int e^{-x^2} dx $$"}</div>
              <div className="term-line cmd">nilesh$ █</div>
            </div>
          </div>
        ) : (
          <div className="bookstore-mockup">
            <div className="mock-book book-one">
              <div className="book-spine"></div>
              <div className="book-cover">
                <div className="book-title">Spring Boot</div>
                <div className="book-author">API Engine</div>
              </div>
            </div>
            <div className="mock-book book-two">
              <div className="book-spine"></div>
              <div className="book-cover">
                <div className="book-title">SQL DB</div>
                <div className="book-author">MySQL</div>
              </div>
            </div>
            <div className="shop-badge">$24.99</div>
          </div>
        )}
      </div>
      
      <div className="work-card-top">
        <span className="work-card-year">{project?.year}</span>
        <div className="work-card-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>
      
      <div className="work-card-middle">
        <h3 className="work-project-title">{project?.title}</h3>
        <p className="work-project-description">{project?.description}</p>
      </div>
      
      <div className="work-card-bottom">
        {project?.tags?.map((tag, idx) => (
          <span key={idx} className="work-tag">{tag}</span>
        ))}
      </div>
    </a>
  );
}

export default ProjectCard;
