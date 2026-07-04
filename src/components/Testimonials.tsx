import { useEffect, useState } from "react";
import { testimonials } from "../data/profile";
import { useReveal } from "./useReveal";

export default function Testimonials() {
  const ref = useReveal<HTMLElement>();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => clearInterval(timer);
  }, [paused, count]);

  const go = (i: number) => setIndex(((i % count) + count) % count);

  return (
    <section id="testimonials" className="section reveal" ref={ref}>
      <div className="container">
        <p className="section__kicker">Social proof</p>
        <h2 className="section__title">What People Say</h2>

        <div
          className="slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            className="slider__arrow slider__arrow--prev"
            onClick={() => go(index - 1)}
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <div className="slider__viewport">
            <div
              className="slider__track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t) => (
                <figure key={t.author + t.role} className="glow-card testimonial testimonial--slide">
                  <span className="testimonial__quote-mark">"</span>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    <span className="testimonial__avatar">
                      {t.author
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </span>
                    <div>
                      <strong>{t.author}</strong>
                      <span>{t.role}</span>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <button
            className="slider__arrow slider__arrow--next"
            onClick={() => go(index + 1)}
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>

        <div className="slider__dots">
          {testimonials.map((t, i) => (
            <button
              key={t.author + t.role}
              className={`slider__dot ${i === index ? "slider__dot--active" : ""}`}
              onClick={() => go(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
