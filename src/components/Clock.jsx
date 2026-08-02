import { useMontrealTime } from "../hooks/useMontrealTime";

const Clock = ({ className = "" }) => {
  const time = useMontrealTime();
  return <span className={`text-[.72rem] tracking-[.04em] ${className}`}>MONTRÉAL_{time}</span>;
};

export default Clock;
