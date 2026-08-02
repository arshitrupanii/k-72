import { Link } from "react-router-dom";
import Clock from "./Clock";

const Footer = ({ tone = "dark" }) => (
  <footer className={`site-footer site-footer--${tone}`}>
    <div className="site-footer__social social-links">
      <a href="https://www.facebook.com/K72.ca/" target="_blank" rel="noreferrer">FB</a>
      <a href="https://www.instagram.com/k72_creation/" target="_blank" rel="noreferrer">IG</a>
      <a href="https://www.linkedin.com/company/k72" target="_blank" rel="noreferrer">IN</a>
      <a href="https://www.behance.net/agenceK72" target="_blank" rel="noreferrer">BE</a>
    </div>
    <Link className="site-footer__contact" to="/contact">Contact</Link>
    <div className="site-footer__meta">
      <Clock />
      <span>© K72 {new Date().getFullYear()}</span>
    </div>
    <button type="button" className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      Retour en haut ↑
    </button>
  </footer>
);

export default Footer;
