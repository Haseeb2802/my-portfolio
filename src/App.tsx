import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ExperienceSection from "./components/ExperienceSection";
import Projects from "./components/Projects";
import { Certifications, Education } from "./components/Certifications";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { GlobalEffects } from "./components/Effects";
import TechMarquee from "./components/TechMarquee";

type Theme = "dark" | "light";

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme");
    return saved === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <GlobalEffects />
      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <ExperienceSection />
        <Projects />
        <Certifications />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
