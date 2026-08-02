import HeroButton from "../components/HeroButton";
import HeroText from "../components/HeroText";
import Clock from "../components/Clock";
import PageShell from "../components/PageShell";
import Video from "../components/Video";
import { usePageMeta } from "../hooks/usePageMeta";

const Home = () => {
  usePageMeta(
    "Agence créative Montréal",
    "K72 pense chaque action pour nourrir la marque et créer l’étincelle qui génère la créativité.",
  );

  return (
    <PageShell className="relative min-h-svh overflow-hidden bg-[#492c23]">
      <div className="absolute inset-0" aria-hidden="true"><Video /></div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.18),transparent_45%,rgba(0,0,0,.22))]" aria-hidden="true" />
      <section className="relative z-[1] grid min-h-svh grid-rows-[auto_1fr_auto] px-[var(--gutter)] pt-20 pb-4 md:pt-[clamp(4.25rem,5vw,5.75rem)] md:pb-3" aria-label="Présentation">
        <HeroText />

        <div className="flex items-end justify-end md:items-center">
          <p className="m-0 w-[72vw] text-[.78rem] leading-[1.2] indent-[25%] md:w-[min(23rem,28vw)] md:text-[clamp(.78rem,1vw,1rem)]">
            K72 est une agence qui pense chaque action pour nourrir la marque.
            Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée
            l’étincelle pour générer de l’émotion. Pour assurer une relation
            honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce
            qui doit être fait.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-2 md:flex-row md:gap-[clamp(.65rem,2vw,2rem)] md:px-[10vw]">
          <HeroButton text="Projets" link="/projects" />
          <HeroButton text="Agence" link="/agence" />
        </div>

        <Clock className="absolute right-[var(--gutter)] bottom-4 hidden origin-bottom-right rotate-[-90deg] translate-x-full md:block" />
      </section>
    </PageShell>
  );
};

export default Home;
