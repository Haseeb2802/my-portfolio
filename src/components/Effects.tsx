import { useEffect, useRef } from "react";

/* ────────────────────────────────────────────────────────────
   Interactive particle-network canvas (hero background).
   Particles drift, connect with lines, and react to the mouse.
   ──────────────────────────────────────────────────────────── */
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let raf = 0;
    let running = false;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = canvas.width = parent.clientWidth;
      height = canvas.height = parent.clientHeight;
      const count = Math.min(90, Math.floor((width * height) / 16000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 1.8 + 0.8,
      }));
    };

    const colors = () => {
      const light = document.documentElement.dataset.theme === "light";
      return light
        ? { dot: "2, 132, 199", line: "99, 102, 241" }
        : { dot: "56, 189, 248", line: "129, 140, 248" };
    };

    const LINK_DIST = 130;
    const MOUSE_DIST = 170;

    const tick = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      const { dot, line } = colors();

      for (const p of particles) {
        // gentle repulsion from the cursor
        const dxm = p.x - mouse.x;
        const dym = p.y - mouse.y;
        const dm = Math.hypot(dxm, dym);
        if (dm < MOUSE_DIST && dm > 0.01) {
          const force = ((MOUSE_DIST - dm) / MOUSE_DIST) * 0.6;
          p.vx += (dxm / dm) * force * 0.12;
          p.vy += (dym / dm) * force * 0.12;
        }

        // speed cap so repelled particles settle back down
        const speed = Math.hypot(p.vx, p.vy);
        if (speed > 1.1) {
          p.vx = (p.vx / speed) * 1.1;
          p.vy = (p.vy / speed) * 1.1;
        }

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dot}, 0.55)`;
        ctx.fill();
      }

      // connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${line}, ${(1 - d / LINK_DIST) * 0.22})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
        // lines from particles to the cursor
        const a = particles[i];
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (dm < MOUSE_DIST) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${dot}, ${(1 - dm / MOUSE_DIST) * 0.35})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();

    // only animate while the hero is on screen
    const visibility = new IntersectionObserver(([entry]) => {
      const shouldRun = entry.isIntersecting;
      if (shouldRun && !running) {
        running = true;
        raf = requestAnimationFrame(tick);
      } else if (!shouldRun) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    visibility.observe(canvas);

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      visibility.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
}

/* ────────────────────────────────────────────────────────────
   Global mouse effects:
   • cursor glow that trails the pointer
   • spotlight on .glow-card (CSS vars --mx / --my)
   • 3D tilt on .tilt cards
   ──────────────────────────────────────────────────────────── */
export function GlobalEffects() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // skip everything on touch-only devices
    if (window.matchMedia("(hover: none)").matches) return;

    let tiltTarget: HTMLElement | null = null;

    const onMove = (e: MouseEvent) => {
      // cursor glow
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        glowRef.current.style.opacity = "1";
      }

      const target = e.target as HTMLElement;

      // card spotlight
      const glowCard = target.closest<HTMLElement>(".glow-card");
      if (glowCard) {
        const r = glowCard.getBoundingClientRect();
        glowCard.style.setProperty("--mx", `${e.clientX - r.left}px`);
        glowCard.style.setProperty("--my", `${e.clientY - r.top}px`);
      }

      // 3D tilt
      const tilt = target.closest<HTMLElement>(".tilt");
      if (tilt !== tiltTarget && tiltTarget) {
        tiltTarget.style.transform = "";
      }
      tiltTarget = tilt;
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        tilt.style.transform = `perspective(900px) rotateX(${(-py * 6).toFixed(
          2
        )}deg) rotateY(${(px * 6).toFixed(2)}deg) translateY(-4px)`;
      }
    };

    const onLeave = () => {
      if (glowRef.current) glowRef.current.style.opacity = "0";
      if (tiltTarget) {
        tiltTarget.style.transform = "";
        tiltTarget = null;
      }
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}
