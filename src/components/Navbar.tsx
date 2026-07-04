import { useEffect, useState } from "react";
import { profile } from "../data/profile";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

interface Props {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__progress" style={{ width: `${progress}%` }} />
      <nav className="navbar__inner container">
        <a href="#home" className="navbar__brand" onClick={() => setOpen(false)}>
          <span className="navbar__logo">{initials}</span>
          <span className="navbar__name">{profile.name}</span>
        </a>

        <ul className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={active === l.id ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            title="Toggle dark / light mode"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <a href={profile.cvFile} download className="btn btn--sm btn--primary navbar__cv">
            Download CV
          </a>
          <button
            className={`hamburger ${open ? "hamburger--open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
