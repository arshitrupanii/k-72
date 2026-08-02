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
    document.body.classList.toggle("menu-open", isOpen);
    if (isOpen) firstLinkRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className={`site-header ${usesDarkLogo && !isOpen ? "site-header--dark" : ""}`}>
      <Link className="site-logo" to="/" aria-label="K72 — Accueil" onClick={() => setIsOpen(false)}>
        <img src="/logo.svg" alt="K72" />
      </Link>

      <button
        ref={menuButtonRef}
        type="button"
        className={`menu-toggle ${isOpen ? "is-open" : ""}`}
        aria-expanded={isOpen}
        aria-controls="main-menu"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <nav id="main-menu" className={`menu-overlay ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen}>
        <div className="menu-overlay__top">fr / <span>en</span></div>
        <div className="menu-overlay__links">
          {navItems.map(([label, path], index) => (
            <NavLink
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
        <div className="menu-overlay__bottom">
          <Clock />
          <div className="social-links">
            <a tabIndex={isOpen ? 0 : -1} href="https://www.instagram.com/k72_creation/" target="_blank" rel="noreferrer">IG</a>
            <a tabIndex={isOpen ? 0 : -1} href="https://www.linkedin.com/company/k72" target="_blank" rel="noreferrer">IN</a>
            <a tabIndex={isOpen ? 0 : -1} href="https://www.behance.net/agenceK72" target="_blank" rel="noreferrer">BE</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
