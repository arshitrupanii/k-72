import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Clock from "./Clock";

const navItems = [
  ["Projets", "/projects"],
  ["Agence", "/agence"],
  ["Contact", "/contact"],
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef(null);
  const firstLinkRef = useRef(null);
  const usesDarkLogo = location.pathname.startsWith("/projects");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) firstLinkRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[100] flex h-20 items-start justify-between text-white">
      <Link
        className="pointer-events-auto relative z-[102] w-32 pt-[.45rem] pl-[var(--gutter)] md:w-[clamp(8rem,9.5vw,9rem)]"
        to="/"
        aria-label="K72 — Accueil"
        onClick={() => setIsOpen(false)}
      >
        <img className={`h-auto w-full transition duration-300 ${usesDarkLogo && !isOpen ? "invert" : ""}`} src="/logo.svg" alt="K72" />
      </Link>

      <button
        ref={menuButtonRef}
        type="button"
        className="pointer-events-auto relative z-[102] h-[3.25rem] w-28 cursor-pointer border-0 bg-black md:w-[clamp(8rem,15vw,14rem)]"
        aria-expanded={isOpen}
        aria-controls="main-menu"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className={`absolute right-[var(--gutter)] h-px bg-white transition-all duration-300 ${isOpen ? "top-1/2 w-10 rotate-45" : "top-[44%] w-12"}`} />
        <span className={`absolute right-[var(--gutter)] h-px bg-white transition-all duration-300 ${isOpen ? "top-1/2 w-10 -rotate-45" : "top-[59%] w-7"}`} />
      </button>

      <nav
        id="main-menu"
        className={`fixed inset-0 z-[101] grid grid-rows-[auto_1fr_auto] bg-[var(--lime)] px-[var(--gutter)] pt-5 pb-6 text-black transition-[clip-path,visibility] duration-700 ease-[cubic-bezier(.76,0,.24,1)] ${
          isOpen ? "pointer-events-auto visible [clip-path:inset(0_0_0_0)]" : "invisible [clip-path:inset(0_0_100%_0)]"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="pt-16 text-[.85rem] uppercase md:ml-[23vw] md:pt-0">fr / <span className="opacity-45">en</span></div>
        <div className="group/menu flex flex-col self-center md:pl-[22vw]">
          {navItems.map(([label, path], index) => (
            <NavLink
              className="block w-fit text-[clamp(3.6rem,17vw,7rem)] font-medium uppercase leading-[.83] tracking-[-.055em] transition duration-300 hover:translate-x-4 hover:!opacity-100 group-hover/menu:opacity-25 md:text-[clamp(4rem,10vw,10rem)]"
              ref={index === 0 ? firstLinkRef : undefined}
              key={path}
              to={path}
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-end justify-between">
          <Clock />
          <div className="flex items-end gap-2">
            <a className="grid aspect-square w-11 place-items-center rounded-full border border-current text-[.72rem] transition-colors hover:bg-current hover:text-[var(--lime)]" tabIndex={isOpen ? 0 : -1} href="https://www.instagram.com/k72_creation/" target="_blank" rel="noreferrer">IG</a>
            <a className="grid aspect-square w-11 place-items-center rounded-full border border-current text-[.72rem] transition-colors hover:bg-current hover:text-[var(--lime)]" tabIndex={isOpen ? 0 : -1} href="https://www.linkedin.com/company/k72" target="_blank" rel="noreferrer">IN</a>
            <a className="grid aspect-square w-11 place-items-center rounded-full border border-current text-[.72rem] transition-colors hover:bg-current hover:text-[var(--lime)]" tabIndex={isOpen ? 0 : -1} href="https://www.behance.net/agenceK72" target="_blank" rel="noreferrer">BE</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
