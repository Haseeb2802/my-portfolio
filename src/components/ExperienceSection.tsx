import { experiences } from "../data/profile";
import { useReveal } from "./useReveal";

export default function ExperienceSection() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="experience" className="section reveal" ref={ref}>
      <div className="container">
        <p className="section__kicker">Where I've worked</p>
        <h2 className="section__title">Professional Experience</h2>

        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.company} className="timeline__item">
              <div className="timeline__dot" />
              <div className="glow-card timeline__card">
                <div className="timeline__head">
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="timeline__company">{exp.company}</p>
                  </div>
                  <span className={`badge ${exp.current ? "badge--live" : ""}`}>
                    {exp.period}
                  </span>
                </div>
                <ul className="timeline__points">
                  {exp.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="tags">
                  {exp.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
