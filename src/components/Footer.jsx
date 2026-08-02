import { Link } from "react-router-dom";
import Clock from "./Clock";

const Footer = ({ tone = "dark" }) => (
  <footer className={`relative flex min-h-[60svh] flex-wrap content-between items-end justify-between gap-8 border-t px-[var(--gutter)] pt-16 pb-6 ${tone === "light" ? "border-[#aaa] bg-[var(--paper)] text-black" : "border-[#333] bg-black text-white"} md:min-h-[55svh]`}>
    <div className="flex items-end gap-2 self-start">
      <a className="grid aspect-square w-11 place-items-center rounded-full border border-current text-[.72rem] transition-colors hover:bg-current hover:text-[var(--lime)]" href="https://www.facebook.com/K72.ca/" target="_blank" rel="noreferrer">FB</a>
      <a className="grid aspect-square w-11 place-items-center rounded-full border border-current text-[.72rem] transition-colors hover:bg-current hover:text-[var(--lime)]" href="https://www.instagram.com/k72_creation/" target="_blank" rel="noreferrer">IG</a>
      <a className="grid aspect-square w-11 place-items-center rounded-full border border-current text-[.72rem] transition-colors hover:bg-current hover:text-[var(--lime)]" href="https://www.linkedin.com/company/k72" target="_blank" rel="noreferrer">IN</a>
      <a className="grid aspect-square w-11 place-items-center rounded-full border border-current text-[.72rem] transition-colors hover:bg-current hover:text-[var(--lime)]" href="https://www.behance.net/agenceK72" target="_blank" rel="noreferrer">BE</a>
    </div>
    <Link className="order-first w-full text-[clamp(5rem,23vw,9rem)] font-medium uppercase leading-[.8] tracking-[-.07em] md:order-none md:w-auto md:self-center md:text-[clamp(5rem,15vw,16rem)]" to="/contact">Contact</Link>
    <div className="flex flex-col gap-2 text-[.72rem]">
      <Clock />
      <span>© K72 {new Date().getFullYear()}</span>
    </div>
    <button type="button" className="cursor-pointer border-0 bg-transparent uppercase text-inherit" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      Retour en haut ↑
    </button>
  </footer>
);

export default Footer;
