import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import PageShell from "../components/PageShell";
import { projects } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";
import NotFound from "./NotFound";

const ProjectDetail = () => {
  const { slug } = useParams();
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  usePageMeta(
    project?.title || "Projet introuvable",
    project ? `${project.client} — ${project.title}, un projet K72.` : "Ce projet n’existe pas.",
  );

  if (!project) return <NotFound embedded />;

  return (
    <PageShell className="project-detail" style={{ "--project-color": project.color }}>
      <header className="project-detail__header">
        <div><span>{project.client}</span><span>{project.year}</span></div>
        <h1>{project.title}</h1>
      </header>
      <figure className="project-detail__hero">
        <img src={project.image} alt={`${project.client} — ${project.title}`} />
      </figure>
      <section className="project-detail__copy section-pad">
        <div className="section-label">Le mandat</div>
        <p>
          Une plateforme de marque vivante, pensée pour traverser les formats et
          créer une relation durable. La stratégie, l’identité et la campagne
          avancent ici dans la même direction.
        </p>
      </section>
      <Link className="next-project" to={`/projects/${nextProject.slug}`}>
        <span>Projet suivant</span>
        <strong>{nextProject.title}</strong>
        <img src={nextProject.image} alt="" loading="lazy" />
      </Link>
      <Footer />
    </PageShell>
  );
};

export default ProjectDetail;
