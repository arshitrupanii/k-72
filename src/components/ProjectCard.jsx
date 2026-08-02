import { Link } from "react-router-dom";
import { useState } from "react";

const ProjectCard = ({ project, featured = false, priority = false }) => {
  const [imageReady, setImageReady] = useState(false);

  return (
    <article className={featured ? "" : "even:md:translate-y-[8vw]"}>
      <Link className="group block" to={`/projects/${project.slug}`} aria-label={`Voir ${project.title}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-black/10" style={{ backgroundColor: project.color }}>
          <div className={`absolute inset-0 transition-opacity duration-500 ${imageReady ? "opacity-0" : "opacity-100"}`}>
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.22),rgba(255,255,255,0)_45%,rgba(0,0,0,.12))]" />
            <div className="absolute right-4 bottom-4 h-8 w-16 bg-black/15" />
          </div>
          <img
            className={`h-full w-full object-cover transition duration-[850ms] ease-[cubic-bezier(.2,.75,.2,1)] group-hover:scale-[1.045] group-hover:saturate-[1.08] ${imageReady ? "opacity-100" : "opacity-0"}`}
            src={project.image}
            alt={`${project.client} — ${project.title}`}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
            onLoad={() => setImageReady(true)}
            onError={() => setImageReady(false)}
          />
          <span className="absolute right-4 bottom-4 translate-y-4 rounded-full bg-[var(--lime)] px-4 py-3 text-[.75rem] uppercase text-black opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">Voir le projet ↗</span>
        </div>
        <div className="pt-3">
          <h2 className={`m-0 mb-2 font-light leading-[.95] tracking-[-.04em] ${featured ? "text-[clamp(1.7rem,2.8vw,3.5rem)]" : "text-[2.5rem] md:text-[clamp(1.8rem,3.6vw,4.2rem)]"}`}>{project.title}</h2>
          <div className="flex justify-between gap-4 text-[.78rem] uppercase"><span>{project.client}</span><span>{project.year}</span></div>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;
