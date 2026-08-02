import Footer from "../components/Footer";
import PageShell from "../components/PageShell";
import { usePageMeta } from "../hooks/usePageMeta";

const Contact = () => {
  usePageMeta("Contact", "Parlez-nous de votre prochain projet de marque.");
  return (
    <PageShell className="bg-black">
      <section className="flex min-h-svh flex-col justify-end px-[var(--gutter)] pt-32 pb-8">
        <p className="m-0 mb-4 text-[.8rem] uppercase">Un projet, une idée ou une étincelle?</p>
        <h1 className="m-0 text-[clamp(5rem,24vw,9rem)] font-medium uppercase leading-[.74] tracking-[-.075em] md:text-[clamp(6rem,17vw,18rem)]">On se parle.</h1>
        <a className="mt-12 self-start border-b border-current pb-1 text-[clamp(1.4rem,3vw,3rem)] break-all md:self-end" href="mailto:bonjour@k72.ca">bonjour@k72.ca ↗</a>
      </section>
      <section className="grid grid-cols-1 gap-16 border-t border-[#444] px-[var(--gutter)] py-[clamp(5rem,10vw,10rem)] md:grid-cols-3 md:gap-[var(--gutter)]">
        <div><span className="mb-8 block text-[.75rem] uppercase text-[#888]">Montréal</span><p className="m-0 text-[clamp(1.25rem,2vw,2rem)] leading-[1.2]">3575, boul. Saint-Laurent<br />Montréal, QC</p></div>
        <div><span className="mb-8 block text-[.75rem] uppercase text-[#888]">Téléphone</span><a className="m-0 text-[clamp(1.25rem,2vw,2rem)] leading-[1.2]" href="tel:+15148759141">+1 514 875 9141</a></div>
        <div><span className="mb-8 block text-[.75rem] uppercase text-[#888]">Nouveaux mandats</span><a className="m-0 text-[clamp(1.25rem,2vw,2rem)] leading-[1.2]" href="mailto:bonjour@k72.ca">bonjour@k72.ca</a></div>
      </section>
      <Footer />
    </PageShell>
  );
};

export default Contact;
