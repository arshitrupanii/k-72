import { useEffect, useState } from "react";

const columns = [20, 30, 15, 16, 19];

const LoadingScreen = () => {
  const [isLeaving, setIsLeaving] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const leaveTimer = window.setTimeout(() => setIsLeaving(true), 900);
    const removeTimer = window.setTimeout(() => {
      setIsMounted(false);
      document.body.style.overflow = "";
    }, 1900);
    const stepTimer = window.setInterval(() => {
      setActiveStep((step) => (step + 1) % 3);
    }, 180);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
      window.clearInterval(stepTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[950] text-white ${isLeaving ? "pointer-events-none" : "pointer-events-auto"}`}
      aria-label="Chargement"
      aria-live="polite"
    >
      <img
        className={`fixed left-0 top-0 z-[3] w-32 pt-[.45rem] pl-[var(--gutter)] transition-opacity duration-[280ms] ease-out md:w-[clamp(8rem,9.5vw,9rem)] ${
          isLeaving ? "opacity-0" : "opacity-100"
        }`}
        src="/logo.svg"
        alt="K72"
      />
      <div className="absolute inset-0 z-[1] flex overflow-hidden" aria-hidden="true">
        {columns.map((width, index) => (
          <span
            className={`min-h-full origin-top bg-black transition-transform duration-[900ms] ease-[cubic-bezier(.76,0,.24,1)] ${
              isLeaving ? "-translate-y-full" : "translate-y-0"
            }`}
            key={`${width}-${index}`}
            style={{ width: `${width}%`, transitionDelay: `${index * 55}ms` }}
          />
        ))}
      </div>
      <div
        className={`fixed right-[var(--gutter)] bottom-[.95rem] z-[3] grid h-[1.35rem] w-9 grid-cols-3 items-end transition-opacity duration-[280ms] ease-out ${
          isLeaving ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      >
        {[0.45, 0.75, 1.05].map((height, index) => (
          <span
            className={`block w-3 bg-white transition-transform duration-150 ${
              activeStep === index ? "-translate-y-2" : "translate-y-0"
            }`}
            key={height}
            style={{ height: `${height}rem` }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
