import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";
import PageShell from "../components/PageShell";
import ProjectCard from "../components/ProjectCard";
import { featuredProjects } from "../data/projects";
import { team } from "../data/team";
import { usePageMeta } from "../hooks/usePageMeta";

gsap.registerPlugin(ScrollTrigger);

const expertise = ["Stratégie", "Publicité", "Branding", "Design", "Contenu"];
const principles = [
  ["Nos projets_", "naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes."],
  ["Notre création_", "bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même."],
  ["Notre culture_", "c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers."],
];

const Agence = () => {
  const pageRef = useRef(null);
  const introRef = useRef(null);
  const imageRef = useRef(null);
  usePageMeta("Agence", "K72 est une équipe curieuse, humble et créative basée à Montréal.");

  useEffect(() => {
    team.forEach(({ image }) => {
      const preload = new Image();
      preload.src = image;
    });
  }, []);

  useGSAP(() => {
    const motion = gsap.matchMedia();
    motion.add("(prefers-reduced-motion: no-preference)", () => {
      const reveals = gsap.utils.toArray("[data-reveal]", pageRef.current);
      reveals.forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 80,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%" },
        });
      });

      ScrollTrigger.create({
        trigger: introRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: ({ progress }) => {
          const index = Math.min(team.length - 1, Math.floor(progress * team.length));
          if (imageRef.current && imageRef.current.src !== team[index].image) {
            imageRef.current.src = team[index].image;
            imageRef.current.alt = team[index].name;
          }
        },
      });
    });

    return () => motion.revert();
  }, { scope: pageRef });

  return (
    <PageShell className="agency-page">
      <div ref={pageRef}>
        <section ref={introRef} className="agency-intro">
          <div className="agency-intro__sticky">
            <div className="agency-portrait" aria-hidden="true">
              <img ref={imageRef} src={team[0].image} alt={team[0].name} />
            </div>
            <h1><span>SOIXAN7E</span><span>DOUZE</span></h1>
          </div>
        </section>

        <section className="agency-statement section-pad" data-reveal>
          <p>
            Notre curiosité nourrit notre créativité. On reste humbles et on dit
            non aux gros egos, même le vôtre. Une marque est vivante. Elle a des
            valeurs, une personnalité, une histoire. Si on oublie ça, on peut
            faire de bons chiffres à court terme, mais on la tue à long terme.
            C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir
            des marques influentes.
          </p>
        </section>

        <section className="expertise section-pad" data-reveal>
          <div className="section-label">01 / Expertise</div>
          <h2>Expertise</h2>
          <ul>{expertise.map((item) => <li key={item}>{item}<span>↗</span></li>)}</ul>
        </section>

        <section className="principles section-pad" aria-label="Notre philosophie">
          {principles.map(([title, copy], index) => (
            <article key={title} data-reveal>
              <span>0{index + 1}</span>
              <p><strong>{title}</strong> {copy}</p>
            </article>
          ))}
        </section>

        <section className="team-section section-pad">
          <div className="section-label">02 / L’équipage</div>
          <h2 data-reveal>Notre équipe<sup>{team.length}</sup></h2>
          <div className="team-grid">
            {team.map((member) => (
              <article className="team-card" key={member.name} data-reveal>
                <img src={member.image} alt={member.name} loading="lazy" />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="featured-work section-pad">
          <div className="section-label">03 / Encore plus</div>
          <h2 data-reveal>Projets choisis</h2>
          <div className="featured-grid">
            {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} featured />)}
          </div>
        </section>

        <Footer />
      </div>
    </PageShell>
  );
};

export default Agence;
