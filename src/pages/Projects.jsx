import Footer from "../components/Footer";
import PageShell from "../components/PageShell";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";

const Projects = () => {
  usePageMeta("Projets", "Découvrez les 17 projets de marque, de publicité et de design signés K72.");

  return (
    <PageShell className="bg-[var(--paper)] text-black">
      <header className="min-h-[54svh] px-[var(--gutter)] pt-32 pb-8 md:min-h-[68svh]">
        <p className="m-0 text-[.78rem] uppercase tracking-[.06em]">Travail sélectionné / 2019—2025</p>
        <h1 className="mt-[.65em] mb-0 text-[clamp(4rem,20vw,8rem)] font-medium uppercase leading-[.78] tracking-[-.075em] md:mt-[.35em] md:text-[clamp(6rem,17vw,18rem)]">Projets<sup className="ml-[.15em] align-top text-[.15em] tracking-normal">{projects.length}</sup></h1>
      </header>

      <section className="grid grid-cols-1 gap-16 px-[var(--gutter)] pb-24 md:grid-cols-2 md:gap-x-[var(--gutter)] md:gap-y-[clamp(4rem,9vw,10rem)] md:pb-40" aria-label="Liste des projets">
        {projects.map((project, index) => <ProjectCard key={project.slug} project={project} priority={index < 2} />)}
      </section>

      <Footer tone="light" />
    </PageShell>
  );
};

export default Projects;
