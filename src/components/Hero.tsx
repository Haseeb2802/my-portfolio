import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";
import { ParticleCanvas } from "./Effects";
import CodeWindow, { type Token } from "./CodeWindow";

/** Typewriter cycling through the roles list. */
function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let delay = deleting ? 40 : 90;
    if (!deleting && text === current) delay = 1800;
    else if (deleting && text === "") delay = 350;

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setText(current.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words]);

  return text;
}

/** Counts 0 → target when the element scrolls into view. */
function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const duration = 1200;
        const t0 = performance.now();
        const step = (t: number) => {
          const p = Math.min((t - t0) / duration, 1);
          setCount(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="hero__stat-value">
      {count}
      {suffix}
    </span>
  );
}

/* ── Animated code card ─────────────────────────────────────── */
const CODE_LINES: Token[][] = [
  [{ text: "/**", cls: "c" }],
  [{ text: " * @NApiVersion 2.1", cls: "c" }],
  [{ text: " * @NScriptType UserEventScript", cls: "c" }],
  [{ text: " */", cls: "c" }],
  [
    { text: "const", cls: "k" },
    { text: " developer ", cls: "v" },
    { text: "= {", cls: "p" },
  ],
  [
    { text: "  name", cls: "v" },
    { text: ": ", cls: "p" },
    { text: "'Abdul Haseeb'", cls: "s" },
    { text: ",", cls: "p" },
  ],
  [
    { text: "  role", cls: "v" },
    { text: ": ", cls: "p" },
    { text: "'NetSuite Developer'", cls: "s" },
    { text: ",", cls: "p" },
  ],
  [
    { text: "  certifications", cls: "v" },
    { text: ": ", cls: "p" },
    { text: "7", cls: "n" },
    { text: ",", cls: "p" },
  ],
  [
    { text: "  stack", cls: "v" },
    { text: ": [", cls: "p" },
    { text: "'SuiteScript'", cls: "s" },
    { text: ", ", cls: "p" },
    { text: "'Claude AI'", cls: "s" },
    { text: ", ", cls: "p" },
    { text: "'Supabase'", cls: "s" },
    { text: "],", cls: "p" },
  ],
  [
    { text: "  openToWork", cls: "v" },
    { text: ": ", cls: "p" },
    { text: "true", cls: "n" },
  ],
  [{ text: "};", cls: "p" }],
];

function CodeCard() {
  return (
    <CodeWindow file="ue_developer_profile.js" lines={CODE_LINES} speed={26}>
      <span className="hero__float hero__float--1">🏅 7× Oracle Certified</span>
      <span className="hero__float hero__float--2">⚡ SuiteScript 2.1</span>
      <span className="hero__float hero__float--3">🔗 API Integrations</span>
    </CodeWindow>
  );
}

/* ── Hero ───────────────────────────────────────────────────── */
export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="home" className="hero">
      <div className="hero__grid" />
      <ParticleCanvas />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">
            <span className="hero__badge-pulse" />
            Available for new projects
          </span>

          <p className="hero__hello">👋 Hello, I'm</p>
          <h1 className="hero__name">{profile.name}</h1>
          <h2 className="hero__role">
            <span className="hero__typed">{typed}</span>
            <span className="hero__cursor">|</span>
          </h2>
          <p className="hero__tagline">
            Building scalable, high-performance NetSuite solutions — from
            SuiteScript customizations and approval workflows to Claude AI and
            Supabase integrations.
          </p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn--ghost">
              Hire Me
            </a>
            <a href={profile.cvFile} download className="btn btn--outline">
              ⬇ Download CV
            </a>
          </div>

          <div className="hero__socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76zm13.5 12.27h-3v-5.6c0-3.37-4-3.11-4 0v5.6h-3v-11h3v1.77c1.4-2.59 7-2.78 7 2.47v6.76z"/></svg>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.02-.02-2-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.21.7.82.58 4.77-1.59 8.2-6.09 8.2-11.39 0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M20 4h-16c-1.1 0-1.99.9-1.99 2l-.01 12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 4l-8 5-8-5v-2l8 5 8-5v2z"/></svg>
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <CodeCard />
        </div>

        <div className="hero__stats">
          {profile.highlights.map((h) => (
            <div key={h.label} className="hero__stat">
              <CountUp value={h.value} />
              <span className="hero__stat-label">{h.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <span className="hero__mouse" />
      </a>
    </section>
  );
}
