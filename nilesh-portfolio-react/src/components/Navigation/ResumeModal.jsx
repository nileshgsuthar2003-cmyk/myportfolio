function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="modal-badge">📄 Curriculum Vitae</span>
            <h3 className="modal-title">Nilesh Suthar — Resume</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose}>&times;</button>
        </div>

        <div className="modal-body">
          <p className="modal-summary">
            Software Engineer & AI Specialist based in Pune, India. Expert in Python, Django, Node.js, PyTorch, and cloud infrastructure deployment.
          </p>

          <div className="modal-quick-info">
            <div className="info-item">
              <span className="info-label">Degree:</span>
              <span className="info-value">Master of Computer Applications (MCA)</span>
            </div>
            <div className="info-item">
              <span className="info-label">Specialization:</span>
              <span className="info-value">AI Pipelines & Enterprise Backend Architecture</span>
            </div>
            <div className="info-item">
              <span className="info-label">Location:</span>
              <span className="info-value">Pune, Maharashtra, India</span>
            </div>
          </div>

          <div className="modal-actions">
            <a 
              href="mailto:nilesh.g.suthar.2003@gmail.com?subject=Resume%20Request%20-%20Nilesh%20Suthar" 
              className="modal-btn primary-btn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Request Full Resume PDF
            </a>

            <a 
              href="https://linkedin.com/in/nilesh-g-suthar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="modal-btn secondary-btn"
            >
              View LinkedIn Profile ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeModal;
