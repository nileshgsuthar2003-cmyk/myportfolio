import ProjectCard from './ProjectCard';

function Works() {
  const projects = [
    {
      id: 1,
      title: "Math PDF Extractor",
      description: "Developed an advanced OCR utility utilizing Meta's Nougat model and Hugging Face Transformers to transcribe scientific papers and extract complex formulas into structured Markdown format.",
      year: "2025",
      tags: ["Python", "PyTorch", "Nougat", "Hugging Face"],
      link: "https://github.com/nilesh-suthar",
      mockupType: "terminal"
    },
    {
      id: 2,
      title: "Online Book Store",
      description: "Built a dynamic full-stack e-commerce web application with REST APIs for product search, filtering, and cart management, coupled with a relational MySQL database to manage inventories.",
      year: "2024",
      tags: ["Java", "Spring Boot", "MySQL", "HTML5 / CSS3"],
      link: "https://github.com/nilesh-suthar",
      mockupType: "bookstore"
    }
  ];

  return (
    <section className="works-section" id="works">
      <div className="works-header">
        <h2 className="works-section-title" id="worksTitle">Curated Projects</h2>
        <p className="works-section-desc">
          A selection of full-stack applications and machine learning engines built with intention.
        </p>
      </div>

      <div className="works-grid-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Works;
