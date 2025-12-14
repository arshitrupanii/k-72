import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agence from "./pages/Agence";

function App() {
  let currentScroll = window.scrollY;

  window.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      currentScroll += e.deltaY * 0.2; // smaller = slower
      currentScroll = Math.max(
        0,
        Math.min(currentScroll, document.body.scrollHeight - window.innerHeight)
      );

      window.scrollTo({
        top: currentScroll,
        behavior: "smooth",
      });
    },
    { passive: false }
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/agence" element={<Agence />} />
      </Routes>
    </>
  );
}

export default App;
