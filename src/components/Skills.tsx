import { useState } from "react";
import { skillGroups } from "../data/profile";
import { useReveal } from "./useReveal";

export default function Skills() {
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState(0);
  const group = skillGroups[active];

  return (
    <section id="skills" className="section section--alt reveal" ref={ref}>
      <div className="container">
        <p className="section__kicker">My toolbox</p>
        <h2 className="section__title">Technical Skills</h2>

        <div className="tabs" role="tablist">
          {skillGroups.map((g, i) => (
            <button
              key={g.category}
              role="tab"
              aria-selected={i === active}
              className={`tabs__btn ${i === active ? "tabs__btn--active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="tabs__icon">{g.icon}</span>
              {g.category}
            </button>
          ))}
        </div>

        {/* key remounts the panel so the bars re-animate on every tab change */}
        <div className="glow-card skills__panel" key={group.category}>
          {group.skills.map((skill, i) => (
            <div
              key={skill.name}
              className="skills__row skills__row--animated"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="skills__meta">
                <span>{skill.name}</span>
                <span className="skills__pct">{skill.level}%</span>
              </div>
              <div className="skills__bar">
                <div
                  className="skills__fill"
                  style={{
                    width: `${skill.level}%`,
                    animationDelay: `${i * 70 + 150}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
