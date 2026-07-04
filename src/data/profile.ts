// ─────────────────────────────────────────────────────────────
// ALL portfolio content lives in this file.
// Edit the values below and the whole site updates automatically.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Abdul Haseeb",
  title: "NetSuite Developer",
  roles: [
    "NetSuite Developer",
    "SuiteScript 2.0 / 2.1 Expert",
    "Software Engineer",
    "Integration Specialist",
  ],
  location: "Johar Town, Lahore, Pakistan",
  phone: "0314 6892864",
  email: "haseeb.irfan28@gmail.com",
  // TODO: replace with your real profile URLs
  linkedin: "https://www.linkedin.com/in/abdul-haseeb",
  github: "https://github.com/abdul-haseeb",
  cvFile: "/Abdul_Haseeb_NetSuite_Developer.pdf",
  summary:
    "Oracle-certified NetSuite Developer with 2+ years of hands-on ERP development experience and 7 Oracle NetSuite certifications spanning AI, BI, Financials, and Accounting. I specialize in SuiteScript 2.x — designing end-to-end solutions from line-level approval workflows built with Suitelets and User Event scripts, to secure OAuth 1.0/2.0 REST integrations and branded FreeMarker document templates. My background in software quality assurance shapes how I build: governance-aware, performance-tuned, thoroughly tested code that ships reliably to production. I partner closely with international clients to translate real business requirements into scalable NetSuite automation that eliminates manual work and enforces financial control.",
  highlights: [
    { value: "2+", label: "Years Experience" },
    { value: "7", label: "Oracle NetSuite Certifications" },
    { value: "10+", label: "NetSuite Solutions Delivered" },
    { value: "5+", label: "Integrations Built" },
  ],
};

export interface SkillGroup {
  category: string;
  icon: string;
  skills: { name: string; level: number }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "NetSuite Development",
    icon: "⚙️",
    skills: [
      { name: "SuiteScript 2.0 / 2.1", level: 95 },
      { name: "Client & User Event Scripts", level: 92 },
      { name: "Suitelets", level: 90 },
      { name: "Map/Reduce & Scheduled Scripts", level: 90 },
      { name: "Saved Searches & Workflows", level: 93 },
      { name: "SuiteQL & N/query", level: 88 },
      { name: "Custom Records", level: 90 },
    ],
  },
  {
    category: "Programming & Templates",
    icon: "💻",
    skills: [
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "Advanced PDF/HTML Templates", level: 90 },
      { name: "FreeMarker", level: 88 },
      { name: "HTML / CSS", level: 85 },
    ],
  },
  {
    category: "Integration & APIs",
    icon: "🔗",
    skills: [
      { name: "REST APIs & RESTlets", level: 90 },
      { name: "Machine-to-Machine Integration", level: 88 },
      { name: "OAuth 1.0 / OAuth 2.0", level: 88 },
      { name: "Event-Driven Data Sync (Webhooks)", level: 85 },
      { name: "Postman", level: 90 },
    ],
  },
  {
    category: "Data & Analytics",
    icon: "📊",
    skills: [
      { name: "SuiteQL / N-query", level: 88 },
      { name: "Supabase (PostgreSQL)", level: 82 },
      { name: "SQL & Data Modeling", level: 82 },
      { name: "Power BI", level: 76 },
      { name: "Saved Search Analytics", level: 92 },
    ],
  },
  {
    category: "AI Integration",
    icon: "🤖",
    skills: [
      { name: "Claude API Integration", level: 85 },
      { name: "LibreChat ↔ NetSuite", level: 86 },
      { name: "AI-Assisted Development", level: 90 },
      { name: "Prompt Engineering", level: 84 },
    ],
  },
  {
    category: "Quality & Tools",
    icon: "🛠️",
    skills: [
      { name: "Functional & Regression Testing", level: 88 },
      { name: "Defect Lifecycle Management", level: 85 },
      { name: "JIRA", level: 88 },
      { name: "Git", level: 85 },
    ],
  },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  points: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    company: "MaxDot AI Solutions",
    role: "NetSuite Developer",
    period: "February 2024 — Present",
    current: true,
    points: [
      "Develop custom NetSuite solutions using SuiteScript 2.0/2.1 including Client, User Event, Suitelet, Scheduled, and Map/Reduce scripts",
      "Design and optimize Saved Searches, Custom Records, and Workflows to automate business processes",
      "Develop Advanced PDF/HTML Templates using FreeMarker for transactional documents",
      "Implement machine-to-machine integrations using REST APIs with OAuth 1.0 and OAuth 2.0 authentication",
      "Perform API testing and debugging using Postman",
      "Integrate third-party platforms including LibreChat with NetSuite",
      "Optimize script performance and ensure governance limits compliance",
    ],
    tags: ["SuiteScript", "REST APIs", "OAuth", "FreeMarker", "Postman"],
  },
  {
    company: "Software Alliance",
    role: "Software Quality Assurance Engineer",
    period: "January 2023 — January 2024",
    points: [
      "Executed functional and regression testing for web and mobile applications",
      "Created detailed test plans and test cases based on business requirements",
      "Tracked and managed defects using JIRA",
      "Validated bug fixes and performed retesting to maintain product reliability",
    ],
    tags: ["QA", "JIRA", "Test Planning", "Regression Testing"],
  },
  {
    company: "Devsinc",
    role: "Software Engineer Intern",
    period: "July 2022 — September 2022",
    points: [
      "Worked with Ruby on Rails to develop web-based applications",
      "Collaborated with senior developers to implement backend features",
      "Improved problem-solving and software development practices in a professional environment",
    ],
    tags: ["Ruby on Rails", "Backend", "Teamwork"],
  },
];

export interface Project {
  name: string;
  subtitle: string;
  icon: string;
  category: "NetSuite" | "Integration" | "Web & QA";
  challenge: string;
  process: string;
  impact: string;
  tags: string[];
  link?: string;
}

export const projectCategories = ["All", "NetSuite", "Integration", "Web & QA"] as const;

export const projects: Project[] = [
  {
    name: "Sales Order Credit Limit Approval Suite",
    subtitle: "Line-Level Approval Workflow · Integra Real Estate",
    icon: "✅",
    category: "NetSuite",
    challenge:
      "Sales orders were being fulfilled without finance sign-off against customer credit limits — and approvals had to happen per order line, not per order, with support for partial quantities.",
    process:
      "Engineered a five-script SuiteScript 2.1 suite: a User Event script that adds status-aware action buttons on the Sales Order, Suitelet 1 for Sales to submit lines for approval with per-line quantities (auto-splitting lines on partial submission), Suitelet 2 for Finance to approve or reject credit per line, a shared Client Script for bulk mark/unmark and validation, and a User Event gate that blocks Item Fulfillment until lines are credit-approved — with automatic email notifications between Sales and Finance at every step.",
    impact:
      "Enforced line-level credit control across the order-to-fulfillment cycle: nothing ships without finance approval, partial approvals are handled cleanly, and every decision leaves an auditable status trail.",
    tags: ["SuiteScript 2.1", "Suitelets", "User Event", "Client Script", "N/email", "Approval Workflow"],
  },
  {
    name: "Vendor Bill Update Request Automation",
    subtitle: "Controlled AP Change Management · Tactile Systems",
    icon: "🧾",
    category: "NetSuite",
    challenge:
      "The AP team needed to modify posted Vendor Bills, but direct edits bypassed approval and left no audit trail — changes had to flow through a controlled, role-based review process.",
    process:
      "Built a custom 'Bill Update Request' record that works alongside a NetSuite approval workflow: a User Event script auto-sources 16+ fields from the linked Vendor Bill onto the request at creation, soft-locks the record by approval status, restricts Approve / Reject / Request-Modification actions to authorized roles, and on approval writes the edited fields back to the Vendor Bill automatically — a field-map design that separates reference-only fields from write-back fields.",
    impact:
      "Vendor Bill changes now go through an enforced, fully auditable approval pipeline — AP proposes, approvers decide, and the system applies the update, eliminating uncontrolled edits to posted transactions.",
    tags: ["SuiteScript 2.1", "User Event", "Custom Records", "Workflows", "Field Mapping"],
  },
  {
    name: "NetSuite ↔ Claude AI (LibreChat) Integration",
    subtitle: "Conversational AI over ERP Data · MaxDot AI Solutions",
    icon: "🤖",
    category: "Integration",
    challenge:
      "The business wanted to ask questions of live NetSuite ERP data in natural language through Claude — without exposing credentials, bypassing permissions, or breaking script governance limits.",
    process:
      "Built a machine-to-machine bridge between LibreChat (Claude-powered chat platform) and NetSuite: RESTlets secured with OAuth 2.0 expose curated ERP operations, SuiteQL powers efficient data retrieval behind each AI request, and every endpoint was validated with request-level checks and thorough Postman test suites.",
    impact:
      "Teams query live ERP data conversationally through Claude while every request stays authenticated, permission-scoped, and inside NetSuite governance limits.",
    tags: ["Claude AI", "LibreChat", "RESTlets", "SuiteQL", "OAuth 2.0", "Postman"],
  },
  {
    name: "NetSuite → Supabase Real-Time Data Sync",
    subtitle: "ERP-to-PostgreSQL Pipeline · MaxDot AI Solutions",
    icon: "🔄",
    category: "Integration",
    challenge:
      "Downstream apps and analytics needed NetSuite master data — customers, addresses, and custom records — in an external PostgreSQL database (Supabase), kept current on every create, update, and delete without manual exports.",
    process:
      "Developed an event-driven sync layer: User Event scripts capture create/edit/delete on customers, addresses, and custom records and push upserts to Supabase's REST API keyed on NetSuite internal IDs, deletions are propagated to keep both sides consistent, and a Map/Reduce backfill job (driven by SuiteQL bulk extraction) seeds historical data and reconciles any drift — all authenticated with secure API keys.",
    impact:
      "Supabase now mirrors NetSuite in near real-time, giving external applications and BI tools like Power BI a reliable, always-current source of ERP data with zero manual intervention.",
    tags: ["Supabase", "PostgreSQL", "User Event", "Map/Reduce", "SuiteQL", "REST API"],
  },
  {
    name: "Advanced PDF/HTML Template Suite",
    subtitle: "Transactional Documents · MaxDot AI Solutions",
    icon: "📄",
    category: "NetSuite",
    challenge:
      "Standard NetSuite transaction printouts didn't match branding or handle complex line-level logic required by the business.",
    process:
      "Designed Advanced PDF/HTML Templates with FreeMarker — conditional sections, computed fields, and dynamic tables driven by record data and Saved Searches.",
    impact:
      "Delivered polished, brand-consistent invoices, sales orders, and statements generated automatically for every transaction.",
    tags: ["FreeMarker", "Advanced PDF/HTML", "Saved Searches"],
  },
  {
    name: "Business Process Automation Scripts",
    subtitle: "Workflow Automation · MaxDot AI Solutions",
    icon: "⚡",
    category: "NetSuite",
    challenge:
      "Manual, repetitive back-office processes were slow and error-prone across large record volumes.",
    process:
      "Developed Map/Reduce and Scheduled scripts for bulk processing, plus User Event and Client scripts for real-time validation, combined with Workflows and Custom Records.",
    impact:
      "Automated key business processes end-to-end, cutting manual effort and improving data accuracy.",
    tags: ["Map/Reduce", "Scheduled Scripts", "Workflows", "Custom Records"],
  },
  {
    name: "Open Advisor",
    subtitle: "Business Ideas Platform · Final Year Project",
    icon: "💡",
    category: "Web & QA",
    challenge:
      "Entrepreneurs lacked a dedicated space to share business ideas and find mentors for honest, structured feedback.",
    process:
      "Developed a MERN-stack web platform connecting entrepreneurs for networking and mentorship, with a responsive Bootstrap front-end and detailed use-case and test-case documentation.",
    impact:
      "Delivered a complete, documented platform enabling idea sharing, networking, and mentorship between entrepreneurs.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Bootstrap"],
  },
  {
    name: "RMINDER",
    subtitle: "Payroll & Tax Reminder App · QA Lead Role",
    icon: "🗓️",
    category: "Web & QA",
    challenge:
      "A payroll and tax deadline app had to work flawlessly across iOS, Android, and an Admin Panel before launch.",
    process:
      "Performed structured cross-platform testing, validating payroll module integration and deadline tracking against detailed test cases.",
    impact:
      "Shipped with reliable payroll integration and accurate deadline tracking across all three platforms.",
    tags: ["Cross-Platform QA", "iOS", "Android", "Admin Panel"],
  },
  {
    name: "Neoman",
    subtitle: "Media Publication Platform · QA",
    icon: "🎬",
    category: "Web & QA",
    challenge:
      "A media publication platform needed dependable publishing, playback, and content management across mobile apps and admin panel.",
    process:
      "Tested content publishing workflows end-to-end and validated media playback, filtering, and category management features.",
    impact:
      "Ensured a stable publishing pipeline and smooth media experience across every surface of the product.",
    tags: ["QA", "Media Playback", "Publishing Workflows"],
  },
];

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  level: "Professional" | "Specialist" | "Associate";
  image: string;
  pdf: string;
}

export const certifications: Certification[] = [
  {
    name: "Oracle NetSuite Certified Accounting Professional",
    issuer: "Oracle NetSuite",
    date: "December 26, 2025",
    level: "Professional",
    image: "/certifications/accounting-professional.png",
    pdf: "/certifications/accounting-professional.pdf",
  },
  {
    name: "Oracle NetSuite Certified Financial Planning and Analysis Professional",
    issuer: "Oracle NetSuite",
    date: "December 17, 2025",
    level: "Professional",
    image: "/certifications/fpa-professional.png",
    pdf: "/certifications/fpa-professional.pdf",
  },
  {
    name: "Oracle NetSuite Certified BI and Reporting Specialist",
    issuer: "Oracle NetSuite",
    date: "November 28, 2025",
    level: "Specialist",
    image: "/certifications/bi-reporting-specialist.png",
    pdf: "/certifications/bi-reporting-specialist.pdf",
  },
  {
    name: "Oracle NetSuite Certified BI and Saved Searches Professional",
    issuer: "Oracle NetSuite",
    date: "November 26, 2025",
    level: "Professional",
    image: "/certifications/saved-searches-professional.png",
    pdf: "/certifications/saved-searches-professional.pdf",
  },
  {
    name: "Oracle NetSuite Certified Financial Associate",
    issuer: "Oracle NetSuite",
    date: "November 10, 2025",
    level: "Associate",
    image: "/certifications/financial-certificate.png",
    pdf: "/certifications/financial-certificate.pdf",
  },
  {
    name: "Oracle NetSuite Certified BI and Reporting Associate",
    issuer: "Oracle NetSuite",
    date: "October 20, 2025",
    level: "Associate",
    image: "/certifications/bi-reporting-associate.png",
    pdf: "/certifications/bi-reporting-associate.pdf",
  },
  {
    name: "Oracle NetSuite Certified AI Foundations Associate",
    issuer: "Oracle NetSuite",
    date: "October 15, 2025",
    level: "Associate",
    image: "/certifications/ai-certificate.png",
    pdf: "/certifications/ai-certificate.pdf",
  },
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "COMSATS University Islamabad (Lahore Campus)",
    period: "2025 — Present",
    status: "In Progress",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Management and Technology",
    period: "2020 — 2024",
    status: "Completed",
  },
  {
    degree: "Intermediate (ICS)",
    school: "KIPS College",
    period: "2018 — 2020",
    status: "Completed",
  },
];

// TODO: Replace these sample testimonials with real quotes from
// managers, clients, or colleagues (LinkedIn recommendations work great).
export const testimonials = [
  {
    quote:
      "Abdul consistently delivers clean, well-structured SuiteScript solutions and always keeps governance limits in mind. A dependable developer you can hand any customization to.",
    author: "Team Lead",
    role: "MaxDot AI Solutions",
  },
  {
    quote:
      "His test plans were thorough and his defect reports were always clear and reproducible. Product quality improved noticeably while he was on the team.",
    author: "QA Manager",
    role: "Software Alliance",
  },
  {
    quote:
      "A fast learner with a genuine problem-solving mindset — he picked up our Rails codebase quickly and contributed real backend features during his internship.",
    author: "Senior Engineer",
    role: "Devsinc",
  },
];
