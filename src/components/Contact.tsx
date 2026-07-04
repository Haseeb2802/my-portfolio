import { useState, type FormEvent } from "react";
import { profile } from "../data/profile";
import { useReveal } from "./useReveal";
import CodeWindow, { type Token } from "./CodeWindow";

const TERMINAL_LINES: Token[][] = [
  [
    { text: "$ ", cls: "g" },
    { text: "whoami", cls: "t" },
  ],
  [{ text: "abdul-haseeb · NetSuite Developer", cls: "c" }],
  [
    { text: "$ ", cls: "g" },
    { text: "contact --email", cls: "t" },
  ],
  [{ text: "haseeb.irfan28@gmail.com", cls: "s" }],
  [
    { text: "$ ", cls: "g" },
    { text: "contact --phone", cls: "t" },
  ],
  [{ text: "0314 6892864", cls: "s" }],
  [
    { text: "$ ", cls: "g" },
    { text: "status", cls: "t" },
  ],
  [{ text: "🟢 open to full-time · freelance · remote", cls: "n" }],
];

export default function Contact() {
  const ref = useReveal<HTMLElement>();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const subject = data.get("subject") || "Portfolio Inquiry";
    const message = data.get("message");

    const body = `Hi Abdul,%0D%0A%0D%0A${encodeURIComponent(
      String(message)
    )}%0D%0A%0D%0A— ${encodeURIComponent(String(name))} (${encodeURIComponent(
      String(email)
    )})`;

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      String(subject)
    )}&body=${body}`;
    setSent(true);
    form.reset();
  };

  return (
    <section id="contact" className="section section--alt reveal" ref={ref}>
      <div className="floatglyphs" aria-hidden="true">
        <span>@</span>
        <span>{"</>"}</span>
        <span>{"{ }"}</span>
        <span>#</span>
      </div>
      <div className="container">
        <p className="section__kicker">Let's work together</p>
        <h2 className="section__title" data-bg="Contact">Get In Touch</h2>
        <p className="section__subtitle">
          Have a NetSuite project, integration, or customization in mind? I'm
          open to full-time roles, freelance work, and collaborations.
        </p>

        <div className="contact__grid">
          <div className="contact__info">
            <CodeWindow
              file="bash — get-in-touch"
              lines={TERMINAL_LINES}
              speed={18}
              minHeight={196}
              className="codecard--fill"
            />
            <a className="glow-card contact__card" href={`mailto:${profile.email}`}>
              <span className="contact__icon">✉️</span>
              <div>
                <strong>Email</strong>
                <span>{profile.email}</span>
              </div>
            </a>
            <a className="glow-card contact__card" href={`tel:+92${profile.phone.replace(/\D/g, "").replace(/^0/, "")}`}>
              <span className="contact__icon">📞</span>
              <div>
                <strong>Phone</strong>
                <span>{profile.phone}</span>
              </div>
            </a>
            <a
              className="glow-card contact__card"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact__icon">💼</span>
              <div>
                <strong>LinkedIn</strong>
                <span>Connect with me</span>
              </div>
            </a>
            <a
              className="glow-card contact__card"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact__icon">🐙</span>
              <div>
                <strong>GitHub</strong>
                <span>See my code</span>
              </div>
            </a>
          </div>

          <form className="glow-card contact__form" onSubmit={handleSubmit}>
            <div className="contact__row">
              <label>
                Your Name
                <input name="name" type="text" placeholder="John Doe" required />
              </label>
              <label>
                Your Email
                <input
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  required
                />
              </label>
            </div>
            <label>
              Subject
              <input
                name="subject"
                type="text"
                placeholder="NetSuite integration project"
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project…"
                required
              />
            </label>
            <button type="submit" className="btn btn--primary btn--full">
              Send Message ✈
            </button>
            {sent && (
              <p className="contact__sent">
                Your email client should open with the message ready to send. 🎉
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
