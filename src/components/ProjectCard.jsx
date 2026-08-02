import { Link } from "react-router-dom";

const ProjectCard = ({ project, featured = false }) => (
  <article className={`project-card ${featured ? "project-card--featured" : ""}`}>
    <Link to={`/projects/${project.slug}`} aria-label={`Voir ${project.title}`}>
      <div className="project-card__media" style={{ backgroundColor: project.color }}>
        <img src={project.image} alt={`${project.client} — ${project.title}`} loading="lazy" />
        <span className="project-card__cta">Voir le projet ↗</span>
      </div>
      <div className="project-card__details">
        <h2>{project.title}</h2>
        <div><span>{project.client}</span><span>{project.year}</span></div>
      </div>
    </Link>
  </article>
);

export default ProjectCard;
