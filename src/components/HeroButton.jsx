import { Link } from "react-router-dom";

const HeroButton = ({ text, link }) => {
  return (
    <Link
      to={link}
      className="group flex w-full items-center justify-between rounded-full border-[clamp(2px,.25vw,4px)] border-current px-[.4em] py-[.12em] text-[clamp(2.6rem,12vw,4rem)] font-medium uppercase leading-none transition-colors duration-300 hover:border-[var(--lime)] hover:bg-[var(--lime)] hover:text-black md:w-[min(40vw,40rem)] md:px-[.45em] md:pt-[.05em] md:pb-[.1em] md:text-[clamp(2.5rem,5vw,6rem)]"
    >
      <span>{text}</span>
      <span className="translate-x-[-.4em] translate-y-[.4em] text-[.45em] opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" aria-hidden="true">↗</span>
    </Link>
  );
};

export default HeroButton;
