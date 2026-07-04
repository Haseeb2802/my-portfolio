import { useEffect, useState } from "react";
import { profile } from "../data/profile";

const quickLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="footer__logo-row">
            <span className="navbar__logo">{initials}</span>
            <span className="footer__name">{profile.name}</span>
          </a>
          <p className="footer__bio">
            NetSuite Developer crafting scalable ERP customizations, secure
            integrations, and automation that eliminates manual work.
          </p>
          <div className="footer__socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76zm13.5 12.27h-3v-5.6c0-3.37-4-3.11-4 0v5.6h-3v-11h3v1.77c1.4-2.59 7-2.78 7 2.47v6.76z"/></svg>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.02-.02-2-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.21.7.82.58 4.77-1.59 8.2-6.09 8.2-11.39 0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20 4h-16c-1.1 0-1.99.9-1.99 2l-.01 12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 4l-8 5-8-5v-2l8 5 8-5v2z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Get In Touch</h4>
          <ul className="footer__contact">
            <li>
              <span>✉️</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span>📞</span>
              <a href={`tel:+92${profile.phone.replace(/\D/g, "").replace(/^0/, "")}`}>
                {profile.phone}
              </a>
            </li>
            <li>
              <span>📍</span>
              {profile.location}
            </li>
          </ul>
          <a href={profile.cvFile} download className="btn btn--sm btn--primary">
            ⬇ Download CV
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>Built with React & TypeScript</p>
        </div>
      </div>

      <a
        href="#home"
        className={`to-top ${showTop ? "to-top--visible" : ""}`}
        aria-label="Back to top"
      >
        ↑
      </a>
    </footer>
  );
}
