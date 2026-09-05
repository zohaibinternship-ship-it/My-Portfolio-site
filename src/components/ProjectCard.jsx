import useScrollReveal from "../hooks/useScrollReveal.js";
import "./ProjectCard.css";

function ProjectCard({ project, index }) {
  const ref = useScrollReveal();
  const { title, description, image, technologies, liveUrl, githubUrl, featured } = project;

  return (
    <div
      ref={ref}
      className={`reveal project-card glass ${featured ? "project-card--featured" : ""}`}
      style={{ transitionDelay: `${(index % 3) * 0.08}s` }}
    >
      <div className="project-card__image-wrap">
        <img src={image} alt={title} loading="lazy" className="project-card__image" />
        <div className="project-card__image-overlay" />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>

        <div className="project-card__tags">
          {technologies.map((tech) => (
            <span key={tech} className="project-card__tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          <a href={liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary project-card__btn">
            Live Demo
          </a>
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" className="btn btn-ghost project-card__btn">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
