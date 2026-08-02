import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import { usePageMeta } from "../hooks/usePageMeta";

const NotFound = ({ embedded = false }) => {
  usePageMeta("404", "Cette page est introuvable.");
  const content = (
    <section className="not-found">
      <p>Erreur 404</p>
      <h1>Perdu dans<br />la créativité?</h1>
      <Link to="/">Retour à l’accueil ↗</Link>
    </section>
  );
  return embedded ? content : <PageShell className="not-found-page">{content}</PageShell>;
};

export default NotFound;
