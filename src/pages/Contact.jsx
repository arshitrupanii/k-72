import Footer from "../components/Footer";
import PageShell from "../components/PageShell";
import { usePageMeta } from "../hooks/usePageMeta";

const Contact = () => {
  usePageMeta("Contact", "Parlez-nous de votre prochain projet de marque.");
  return (
    <PageShell className="contact-page">
      <section className="contact-hero">
        <p>Un projet, une idée ou une étincelle?</p>
        <h1>On se parle.</h1>
        <a href="mailto:bonjour@k72.ca">bonjour@k72.ca ↗</a>
      </section>
      <section className="contact-details section-pad">
        <div><span>Montréal</span><p>3575, boul. Saint-Laurent<br />Montréal, QC</p></div>
        <div><span>Téléphone</span><a href="tel:+15148759141">+1 514 875 9141</a></div>
        <div><span>Nouveaux mandats</span><a href="mailto:bonjour@k72.ca">bonjour@k72.ca</a></div>
      </section>
      <Footer />
    </PageShell>
  );
};

export default Contact;
