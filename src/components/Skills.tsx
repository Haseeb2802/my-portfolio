import { useState } from "react";
import { skillGroups } from "../data/profile";
import { useReveal } from "./useReveal";
import CodeWindow, { type Token } from "./CodeWindow";

/** A themed code snippet for each skill tab. */
const SNIPPETS: Record<string, { file: string; lines: Token[][] }> = {
  "NetSuite Development": {
    file: "ue_so_credit_gate.js",
    lines: [
      [{ text: "/** @NScriptType UserEventScript */", cls: "c" }],
      [
        { text: "const", cls: "k" },
        { text: " beforeSubmit ", cls: "v" },
        { text: "= (ctx) => {", cls: "p" },
      ],
      [
        { text: "  const", cls: "k" },
        { text: " rec ", cls: "v" },
        { text: "= ctx.newRecord;", cls: "p" },
      ],
      [
        { text: "  if", cls: "k" },
        { text: " (!isCreditApproved(rec)) {", cls: "p" },
      ],
      [
        { text: "    throw", cls: "k" },
        { text: " ", cls: "p" },
        { text: "'Pending finance approval'", cls: "s" },
        { text: ";", cls: "p" },
      ],
      [{ text: "  }", cls: "p" }],
      [{ text: "};", cls: "p" }],
    ],
  },
  "Programming & Templates": {
    file: "invoice_template.ftl",
    lines: [
      [{ text: "<#-- Advanced PDF/HTML Template -->", cls: "c" }],
      [
        { text: "<#list", cls: "k" },
        { text: " record.item ", cls: "v" },
        { text: "as", cls: "k" },
        { text: " line", cls: "v" },
        { text: ">", cls: "k" },
      ],
      [{ text: "  <tr>", cls: "p" }],
      [
        { text: "    <td>", cls: "p" },
        { text: "${line.item}", cls: "s" },
        { text: "</td>", cls: "p" },
      ],
      [
        { text: "    <td>", cls: "p" },
        { text: "${line.amount?string.currency}", cls: "s" },
        { text: "</td>", cls: "p" },
      ],
      [{ text: "  </tr>", cls: "p" }],
      [
        { text: "</#list>", cls: "k" },
      ],
    ],
  },
  "Integration & APIs": {
    file: "oauth2_restlet_call.js",
    lines: [
      [{ text: "// OAuth 2.0 → NetSuite RESTlet", cls: "c" }],
      [
        { text: "const", cls: "k" },
        { text: " res ", cls: "v" },
        { text: "= ", cls: "p" },
        { text: "await", cls: "k" },
        { text: " fetch(RESTLET_URL, {", cls: "p" },
      ],
      [
        { text: "  method", cls: "v" },
        { text: ": ", cls: "p" },
        { text: "'POST'", cls: "s" },
        { text: ",", cls: "p" },
      ],
      [
        { text: "  headers", cls: "v" },
        { text: ": { Authorization: ", cls: "p" },
        { text: "`Bearer ${token}`", cls: "s" },
        { text: " },", cls: "p" },
      ],
      [
        { text: "  body", cls: "v" },
        { text: ": JSON.stringify(payload)", cls: "p" },
      ],
      [{ text: "});", cls: "p" }],
      [
        { text: "// 200 OK — governance-safe ✔", cls: "c" },
      ],
    ],
  },
  "Data & Analytics": {
    file: "top_customers.suiteql",
    lines: [
      [{ text: "-- SuiteQL", cls: "c" }],
      [
        { text: "SELECT", cls: "k" },
        { text: " c.entityid, ", cls: "v" },
        { text: "SUM", cls: "k" },
        { text: "(t.amount) ", cls: "p" },
        { text: "AS", cls: "k" },
        { text: " total", cls: "v" },
      ],
      [
        { text: "FROM", cls: "k" },
        { text: " transaction t", cls: "v" },
      ],
      [
        { text: "JOIN", cls: "k" },
        { text: " customer c ", cls: "v" },
        { text: "ON", cls: "k" },
        { text: " c.id = t.entity", cls: "v" },
      ],
      [
        { text: "GROUP BY", cls: "k" },
        { text: " c.entityid", cls: "v" },
      ],
      [
        { text: "ORDER BY", cls: "k" },
        { text: " total ", cls: "v" },
        { text: "DESC", cls: "k" },
      ],
      [{ text: "-- → synced to Supabase · Power BI", cls: "c" }],
    ],
  },
  "AI Integration": {
    file: "claude_netsuite_bridge.js",
    lines: [
      [{ text: "// Claude ↔ NetSuite bridge", cls: "c" }],
      [
        { text: "const", cls: "k" },
        { text: " reply ", cls: "v" },
        { text: "= ", cls: "p" },
        { text: "await", cls: "k" },
        { text: " claude.messages.create({", cls: "p" },
      ],
      [
        { text: "  model", cls: "v" },
        { text: ": ", cls: "p" },
        { text: "'claude-sonnet-5'", cls: "s" },
        { text: ",", cls: "p" },
      ],
      [
        { text: "  tools", cls: "v" },
        { text: ": [netsuiteQueryTool],", cls: "p" },
      ],
      [
        { text: "  messages", cls: "v" },
        { text: ": [{ role: ", cls: "p" },
        { text: "'user'", cls: "s" },
        { text: ",", cls: "p" },
      ],
      [
        { text: "    content: ", cls: "p" },
        { text: "'Top customers this month?'", cls: "s" },
        { text: " }]", cls: "p" },
      ],
      [{ text: "});", cls: "p" }],
    ],
  },
  "Quality & Tools": {
    file: "credit_approval.spec.js",
    lines: [
      [{ text: "// Test: credit approval flow", cls: "c" }],
      [
        { text: "it", cls: "v" },
        { text: "(", cls: "p" },
        { text: "'blocks fulfillment until approved'", cls: "s" },
        { text: ", () => {", cls: "p" },
      ],
      [{ text: "  submitLines([1, 2]);", cls: "p" }],
      [{ text: "  approve({ line: 1 });", cls: "p" }],
      [
        { text: "  expect(canFulfill(2)).toBe(", cls: "p" },
        { text: "false", cls: "n" },
        { text: ");", cls: "p" },
      ],
      [{ text: "});", cls: "p" }],
      [{ text: "// ✔ 3 passed · 0 failed", cls: "c" }],
    ],
  },
};

export default function Skills() {
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState(0);
  const group = skillGroups[active];
  const snippet = SNIPPETS[group.category];

  return (
    <section id="skills" className="section section--alt reveal" ref={ref}>
      <div className="floatglyphs" aria-hidden="true">
        <span>{"</>"}</span>
        <span>{"{ }"}</span>
        <span>{"=>"}</span>
        <span>;</span>
      </div>
      <div className="container">
        <p className="section__kicker">My toolbox</p>
        <h2 className="section__title" data-bg="Skills">Technical Skills</h2>

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

        <div className="skills__layout">
          {/* key remounts the panel so the bars re-animate on every tab change */}
          <div className="glow-card skills__panel" key={group.category}>
            <div className="skills__panel-head">
              <span className="skills__panel-icon">{group.icon}</span>
              <div>
                <h3>{group.category}</h3>
                <p>{group.skills.length} core skills</p>
              </div>
            </div>
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

          {snippet && (
            <CodeWindow
              key={snippet.file}
              file={snippet.file}
              lines={snippet.lines}
              speed={16}
              minHeight={230}
              className="codecard--fill"
            />
          )}
        </div>
      </div>
    </section>
  );
}
