import { profile } from "../data/profile";
import { useReveal } from "./useReveal";

export default function CtaBanner() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="cta reveal" ref={ref}>
      <div className="container">
        <div className="cta__box">
          <div className="cta__shine" aria-hidden="true" />
          <div className="cta__text">
            <h2>Have a NetSuite project in mind?</h2>
            <p>
              From SuiteScript customizations to AI and data integrations —
              let's turn your requirements into scalable ERP automation.
            </p>
          </div>
          <div className="cta__actions">
            <a href="#contact" className="btn btn--light">
              Start a Conversation
            </a>
            <a href={profile.cvFile} download className="btn btn--light-outline">
              ⬇ Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
