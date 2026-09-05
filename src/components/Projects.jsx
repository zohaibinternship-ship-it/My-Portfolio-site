import useScrollReveal from "../hooks/useScrollReveal.js";
import projects from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import "./Projects.css";

function Projects() {
  const headerRef = useScrollReveal();

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div ref={headerRef} className="reveal projects__header">
          <span className="section-tag">Projects</span>
          <h2 className="section-heading">
            Things I've <span className="gradient-text">Built &amp; Shipped</span>
          </h2>
          <p className="section-subtext">
            A selection of websites and applications I've designed, developed, and deployed.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
