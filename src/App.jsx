import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agence from "./pages/Agence";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <a
        className="fixed left-4 top-4 z-[1000] -translate-y-[160%] bg-[var(--lime)] px-4 py-3 text-black transition-transform duration-200 focus:translate-y-0"
        href="#main-content"
      >
        Aller au contenu
      </a>
      <LoadingScreen />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
