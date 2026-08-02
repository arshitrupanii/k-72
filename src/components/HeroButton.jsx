import { Link } from "react-router-dom";

const HeroButton = ({ text, link }) => {
  return (
    <Link to={link} className="hero-button">
      <span>{text}</span><span aria-hidden="true">↗</span>
    </Link>
  );
};

export default HeroButton;
