import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import { usePageMeta } from "../hooks/usePageMeta";

const NotFound = ({ embedded = false }) => {
  usePageMeta("404", "Cette page est introuvable.");
  const content = (
    <section className="flex min-h-svh flex-col justify-end px-[var(--gutter)] pt-32 pb-8">
      <p className="m-0 mb-4 text-[.8rem] uppercase">Erreur 404</p>
      <h1 className="m-0 text-[clamp(5rem,24vw,9rem)] font-medium uppercase leading-[.74] tracking-[-.075em] md:text-[clamp(6rem,17vw,18rem)]">Perdu dans<br />la créativité?</h1>
      <Link className="mt-12 self-start border-b border-current pb-1 text-[clamp(1.4rem,3vw,3rem)] break-all md:self-end" to="/">Retour à l’accueil ↗</Link>
    </section>
  );
  return embedded ? content : <PageShell className="bg-black">{content}</PageShell>;
};

export default NotFound;
