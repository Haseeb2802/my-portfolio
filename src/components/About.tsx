import { profile } from "../data/profile";
import { useReveal } from "./useReveal";

export default function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="about" className="section reveal" ref={ref}>
      <div className="container">
        <p className="section__kicker">Get to know me</p>
        <h2 className="section__title">About Me</h2>

        <div className="about__grid">
          <div className="glow-card about__card about__intro">
            <h3>Professional Summary</h3>
            <p>{profile.summary}</p>
            <div className="about__facts">
              <div className="about__fact">
                <span className="about__fact-icon">📍</span>
                <div>
                  <strong>Location</strong>
                  <span>{profile.location}</span>
                </div>
              </div>
              <div className="about__fact">
                <span className="about__fact-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <span>{profile.email}</span>
                </div>
              </div>
              <div className="about__fact">
                <span className="about__fact-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <span>{profile.phone}</span>
                </div>
              </div>
              <div className="about__fact">
                <span className="about__fact-icon">💼</span>
                <div>
                  <strong>Current Role</strong>
                  <span>NetSuite Developer @ MaxDot AI Solutions</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glow-card about__card about__focus">
            <h3>What I Do</h3>
            <ul className="about__services">
              <li>
                <span>⚙️</span>
                <div>
                  <strong>NetSuite Customization</strong>
                  <p>Client, User Event, Suitelet, Scheduled &amp; Map/Reduce scripts tailored to your business.</p>
                </div>
              </li>
              <li>
                <span>🔗</span>
                <div>
                  <strong>System Integrations</strong>
                  <p>Secure machine-to-machine REST API integrations with OAuth 1.0 / 2.0.</p>
                </div>
              </li>
              <li>
                <span>📄</span>
                <div>
                  <strong>Advanced PDF/HTML Templates</strong>
                  <p>Branded, dynamic transactional documents built with FreeMarker.</p>
                </div>
              </li>
              <li>
                <span>🚀</span>
                <div>
                  <strong>Process Automation</strong>
                  <p>Saved Searches, Workflows &amp; Custom Records that eliminate manual work.</p>
                </div>
              </li>
              <li>
                <span>🤖</span>
                <div>
                  <strong>AI &amp; Data Platforms</strong>
                  <p>Claude AI integrations and real-time NetSuite → Supabase pipelines feeding Power BI.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
