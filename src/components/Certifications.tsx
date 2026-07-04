import { useEffect, useState } from "react";
import { certifications, education, type Certification } from "../data/profile";
import { useReveal } from "./useReveal";

export function Certifications() {
  const ref = useReveal<HTMLElement>();
  const [selected, setSelected] = useState<Certification | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <section id="certifications" className="section reveal" ref={ref}>
      <div className="container">
        <p className="section__kicker">Credentials</p>
        <h2 className="section__title">Certifications</h2>
        <p className="section__subtitle">
          {certifications.length} Oracle NetSuite certifications — click any
          certificate to view it.
        </p>

        <div className="certs__grid">
          {certifications.map((cert) => (
            <button
              key={cert.name}
              className="glow-card tilt certs__card"
              onClick={() => setSelected(cert)}
              type="button"
            >
              <div className="certs__preview">
                <img src={cert.image} alt={cert.name} />
                <span className="certs__zoom">🔍 View</span>
              </div>
              <span className={`certs__level certs__level--${cert.level.toLowerCase()}`}>
                {cert.level}
              </span>
              <h3>{cert.name}</h3>
              <p>
                {cert.issuer} · {cert.date}
              </p>
              <span className="certs__verified">✔ Verified Credential</span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <div className="lightbox__body" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox__close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <img src={selected.image} alt={selected.name} />
            <div className="lightbox__footer">
              <div>
                <strong>{selected.name}</strong>
                <span>
                  {selected.issuer} · Earned {selected.date}
                </span>
              </div>
              <a
                href={selected.pdf}
                target="_blank"
                rel="noreferrer"
                className="btn btn--sm btn--primary"
              >
                Open PDF ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export function Education() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="education" className="section section--alt reveal" ref={ref}>
      <div className="container">
        <p className="section__kicker">Academic background</p>
        <h2 className="section__title">Education</h2>

        <div className="edu__list">
          {education.map((edu) => (
            <div key={edu.degree} className="glow-card edu__card">
              <div className="edu__icon">🎓</div>
              <div className="edu__info">
                <h3>{edu.degree}</h3>
                <p>{edu.school}</p>
              </div>
              <div className="edu__meta">
                <span className="badge">{edu.period}</span>
                <span
                  className={`edu__status ${
                    edu.status === "In Progress" ? "edu__status--active" : ""
                  }`}
                >
                  {edu.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
