import { useLocation } from "react-router-dom";

const PageShell = ({ children, className = "", ...props }) => {
  const location = useLocation();
  return (
    <main id="main-content" key={location.pathname} className={`min-h-svh ${className}`} {...props}>
      {children}
    </main>
  );
};

export default PageShell;
