import { useMontrealTime } from "../hooks/useMontrealTime";

const Clock = ({ className = "" }) => {
  const time = useMontrealTime();
  return <span className={`clock ${className}`}>MONTRÉAL_{time}</span>;
};

export default Clock;
