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
    <PageShell className="bg-black" style={{ "--project-color": project.color }}>
      <header className="min-h-[65svh] bg-[var(--project-color)] px-[var(--gutter)] pt-36 pb-8 text-black md:min-h-[80svh]">
        <div className="flex justify-between text-[.8rem] uppercase"><span>{project.client}</span><span>{project.year}</span></div>
        <h1 className="mt-[1em] mb-0 max-w-[90vw] text-[clamp(4rem,19vw,7rem)] font-medium uppercase leading-[.78] tracking-[-.075em] md:mt-[.45em] md:text-[clamp(5rem,14vw,15rem)]">{project.title}</h1>
      </header>
      <figure className="m-0 h-[62svh] md:h-svh">
        <img className="h-full w-full object-cover" src={project.image} alt={`${project.client} — ${project.title}`} />
      </figure>
      <section className="grid grid-cols-1 gap-8 px-[var(--gutter)] py-[clamp(5rem,10vw,10rem)] md:grid-cols-[1fr_2fr]">
        <div className="mb-[clamp(3rem,8vw,8rem)] text-[.78rem] uppercase tracking-[.08em]">Le mandat</div>
        <p className="m-0 text-[clamp(2rem,5vw,5.5rem)] leading-[.98] tracking-[-.04em]">
          Une plateforme de marque vivante, pensée pour traverser les formats et
          créer une relation durable. La stratégie, l’identité et la campagne
          avancent ici dans la même direction.
        </p>
      </section>
      <Link className="group relative flex min-h-[65svh] flex-col justify-end overflow-hidden p-[var(--gutter)] md:min-h-[90svh]" to={`/projects/${nextProject.slug}`}>
        <span className="relative z-[1] text-[.8rem] uppercase">Projet suivant</span>
        <strong className="relative z-[1] text-[clamp(4rem,12vw,13rem)] font-medium uppercase leading-[.8] tracking-[-.06em]">{nextProject.title}</strong>
        <img className="absolute inset-0 z-0 h-full w-full object-cover brightness-[.55] transition duration-[800ms] group-hover:scale-[1.035]" src={nextProject.image} alt="" loading="lazy" />
      </Link>
      <Footer />
    </PageShell>
  );
};

export default ProjectDetail;
