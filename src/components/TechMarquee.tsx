const items = [
  "SuiteScript 2.1",
  "Suitelets",
  "User Event Scripts",
  "Map/Reduce",
  "Client Scripts",
  "SuiteQL",
  "Saved Searches",
  "Workflows",
  "Custom Records",
  "FreeMarker Templates",
  "REST APIs",
  "OAuth 2.0",
  "Claude AI",
  "Supabase",
  "PostgreSQL",
  "Power BI",
  "JavaScript ES6+",
  "Postman",
  "JIRA",
  "Git",
];

/** Infinite scrolling strip of technologies. Pauses on hover. */
export default function TechMarquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__fade marquee__fade--left" />
      <div className="marquee__track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee__item">
            {item}
            <span className="marquee__sep">◆</span>
          </span>
        ))}
      </div>
      <div className="marquee__fade marquee__fade--right" />
    </div>
  );
}
