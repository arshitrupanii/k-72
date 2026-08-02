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
    <PageShell className="overflow-hidden bg-black">
      <div ref={pageRef}>
        <section ref={introRef} className="h-[220svh] md:h-[285svh]">
          <div className="sticky top-0 grid h-svh place-items-center overflow-hidden">
            <div className="absolute z-[1] aspect-[3/4] w-[36vw] max-w-40 rotate-3 overflow-hidden rounded-2xl after:absolute after:inset-0 after:shadow-[inset_0_0_0_1px_rgba(255,255,255,.1)] md:w-[clamp(9rem,16vw,18rem)] md:max-w-none" aria-hidden="true">
              <img className="h-full w-full object-cover" ref={imageRef} src={team[0].image} alt={team[0].name} />
            </div>
            <h1 className="relative z-[2] m-0 flex w-full flex-col px-[var(--gutter)] text-center text-[clamp(3.6rem,16vw,6rem)] font-medium uppercase leading-[.72] tracking-[-.06em] md:text-[clamp(6rem,19vw,21rem)] md:tracking-[-.08em]"><span>SOIXAN7E</span><span>DOUZE</span></h1>
          </div>
        </section>

        <section className="flex justify-start px-[var(--gutter)] py-[clamp(5rem,10vw,10rem)] pt-8 md:justify-end" data-reveal>
          <p className="m-0 w-full text-[clamp(2rem,8vw,4rem)] font-medium leading-[.98] tracking-[-.035em] indent-[12%] md:w-[min(68rem,72vw)] md:text-[clamp(2.2rem,5.2vw,6rem)] md:leading-[.96] md:tracking-[-.045em] md:indent-[19%]">
            Notre curiosité nourrit notre créativité. On reste humbles et on dit
            non aux gros egos, même le vôtre. Une marque est vivante. Elle a des
            valeurs, une personnalité, une histoire. Si on oublie ça, on peut
            faire de bons chiffres à court terme, mais on la tue à long terme.
            C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir
            des marques influentes.
          </p>
        </section>

        <section className="px-[var(--gutter)] py-[clamp(5rem,10vw,10rem)]" data-reveal>
          <div className="mb-[clamp(3rem,8vw,8rem)] text-[.78rem] uppercase tracking-[.08em]">01 / Expertise</div>
          <h2 className="m-0 mb-[.4em] text-[clamp(4.5rem,22vw,8rem)] leading-[.8] md:text-[clamp(5rem,15vw,16rem)]">Expertise</h2>
          <ul className="m-0 list-none border-t border-white/40 p-0">
            {expertise.map((item) => (
              <li className="flex justify-between border-b border-white/40 py-[.16em] text-[clamp(2.6rem,13vw,5rem)] leading-none tracking-[-.05em] md:text-[clamp(3rem,7vw,8rem)]" key={item}>
                {item}<span className="text-[.45em] opacity-50">↗</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid grid-cols-1 gap-px bg-white/25 py-[clamp(5rem,10vw,10rem)] pt-0 pb-0 md:grid-cols-3" aria-label="Notre philosophie">
          {principles.map(([title, copy], index) => (
            <article className="flex min-h-[23rem] flex-col justify-between bg-black p-4 md:min-h-[34rem]" key={title} data-reveal>
              <span className="text-[.75rem]">0{index + 1}</span>
              <p className="m-0 text-[clamp(1.8rem,2.7vw,3.5rem)] leading-[1.02] tracking-[-.03em]"><strong className="font-medium text-[var(--lime)]">{title}</strong> {copy}</p>
            </article>
          ))}
        </section>

        <section className="px-[var(--gutter)] py-[clamp(5rem,10vw,10rem)]">
          <div className="mb-[clamp(3rem,8vw,8rem)] text-[.78rem] uppercase tracking-[.08em]">02 / L’équipage</div>
          <h2 className="mt-[.35em] mb-[1em] text-[clamp(3.6rem,17vw,7rem)] font-medium uppercase leading-[.78] tracking-[-.075em] md:text-[clamp(5rem,14vw,15rem)]" data-reveal>Notre équipe<sup className="ml-[.15em] align-top text-[.15em] tracking-normal">{team.length}</sup></h2>
          <div className="grid grid-cols-2 gap-x-2 gap-y-12 md:grid-cols-4 md:gap-x-3 md:gap-y-16">
            {team.map((member, index) => (
              <article className={`group ${index % 4 === 1 || index % 4 === 3 ? "md:translate-y-12" : ""}`} key={member.name} data-reveal>
                <img className="aspect-[3/4] w-full object-cover grayscale transition duration-300 group-hover:rounded-t-full group-hover:rounded-b-2xl group-hover:grayscale-0" src={member.image} alt={member.name} loading="lazy" />
                <h3 className="mt-3 mb-1 text-[.95rem] font-medium md:text-[1.1rem]">{member.name}</h3>
                <p className="m-0 text-[.75rem] text-[#aaa]">{member.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-[var(--gutter)] py-[clamp(5rem,10vw,10rem)]">
          <div className="mb-[clamp(3rem,8vw,8rem)] text-[.78rem] uppercase tracking-[.08em]">03 / Encore plus</div>
          <h2 className="m-0 mb-[.4em] text-[clamp(4.5rem,22vw,8rem)] leading-[.8] md:text-[clamp(5rem,15vw,16rem)]" data-reveal>Projets choisis</h2>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-[var(--gutter)]">
            {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} featured />)}
          </div>
        </section>

        <Footer />
      </div>
    </PageShell>
  );
};

export default Agence;
