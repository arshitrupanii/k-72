import Footer from "../components/Footer";
import PageShell from "../components/PageShell";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";

const Projects = () => {
  usePageMeta("Projets", "Découvrez les 17 projets de marque, de publicité et de design signés K72.");

  return (
    <PageShell className="projects-page">
      <header className="projects-header">
        <p>Travail sélectionné / 2019—2025</p>
        <h1>Projets<sup>{projects.length}</sup></h1>
      </header>

      <section className="projects-grid" aria-label="Liste des projets">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </section>

      <Footer tone="light" />
    </PageShell>
  );
};

export default Projects;
