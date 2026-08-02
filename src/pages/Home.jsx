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
    <PageShell className="home-page">
      <div className="home-backdrop" aria-hidden="true"><Video /></div>
      <div className="home-shade" aria-hidden="true" />
      <section className="home-content" aria-label="Présentation">
        <HeroText />

        <div className="home-copy">
          <p>
            K72 est une agence qui pense chaque action pour nourrir la marque.
            Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée
            l’étincelle pour générer de l’émotion. Pour assurer une relation
            honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce
            qui doit être fait.
          </p>
        </div>

        <div className="home-actions">
          <HeroButton text="Projets" link="/projects" />
          <HeroButton text="Agence" link="/agence" />
        </div>

        <Clock className="home-clock" />
      </section>
    </PageShell>
  );
};

export default Home;
