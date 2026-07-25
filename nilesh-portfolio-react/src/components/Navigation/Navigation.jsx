function Navigation() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="top-nav">
      <div className="logo-text">N.S.</div>
      <div className="nav-links">
        <a href="#works" className="nav-link" onClick={(e) => scrollToSection(e, 'works')}>Works</a>
        <a href="#skills" className="nav-link" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a>
        <a href="#education" className="nav-link" onClick={(e) => scrollToSection(e, 'education')}>Education</a>
        <a href="#footer" className="nav-link" onClick={(e) => scrollToSection(e, 'footer')}>Contact</a>
      </div>
    </nav>
  );
}

export default Navigation;
