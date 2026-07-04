import { useState } from "react";
import { projects, projectCategories } from "../data/profile";
import { useReveal } from "./useReveal";

export default function Projects() {
  const ref = useReveal<HTMLElement>();
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section section--alt reveal" ref={ref}>
      <div className="container">
        <p className="section__kicker">Case studies</p>
        <h2 className="section__title" data-bg="Portfolio">Featured Projects</h2>
        <p className="section__subtitle">
          Each project is presented as a mini case study — the challenge, my
          process, and the impact delivered.
        </p>

        <div className="tabs">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              className={`tabs__btn ${filter === cat ? "tabs__btn--active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
              <span className="tabs__count">
                {cat === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {visible.map((project, i) => (
            <article
              key={`${filter}-${project.name}`}
              className="glow-card tilt project project--animated"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {project.featured && (
                <span className="project__ribbon">★ Featured</span>
              )}
              <div className="project__head">
                <span className="project__icon">{project.icon}</span>
                <div>
                  <h3>{project.name}</h3>
                  <p className="project__subtitle">{project.subtitle}</p>
                </div>
              </div>

              <div className="project__body">
                <div className="project__step">
                  <span className="project__label project__label--challenge">
                    Challenge
                  </span>
                  <p>{project.challenge}</p>
                </div>
                <div className="project__step">
                  <span className="project__label project__label--process">
                    Process
                  </span>
                  <p>{project.process}</p>
                </div>
                <div className="project__step">
                  <span className="project__label project__label--impact">
                    Impact
                  </span>
                  <p>{project.impact}</p>
                </div>
              </div>

              <div className="tags">
                {project.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project__link"
                >
                  View project →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
