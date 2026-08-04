import Link from "next/link";
import ResumeDownloadLink from "@/components/resume-download-link";

const experience = [
  {
    company: "HiRey AI",
    location: "Remote, USA",
    role: "Product Lead",
    dates: "Jul 2025 - Jun 2026",
    bullets: [
      "Scaled multi-channel paid acquisition to roughly 15,000 users at about $3 CPL and sub-$1 CPM across Meta, Google, Reddit, and X.",
      "Built attribution logic connecting ad spend, source and campaign data, lead events, activation, and retention, using last-click, cohort, CAC, LTV, ROAS, and SKAN-aware measurement concepts.",
      "Combined SQL and BigQuery analysis with user research to identify acquisition, activation, and retention drop-offs, then translate them into product and growth decisions.",
      "Built end-to-end data pipelines across GA4, GTM, ad platforms, CRM, landing pages, and internal data sources, plus Looker Studio dashboards and A/B testing plans for funnel improvement.",
    ],
  },
  {
    company: "HiRey AI",
    location: "Remote, USA",
    role: "Data Analyst",
    dates: "Jan 2025 - Jul 2025",
    bullets: [
      "Owned HubSpot CRM as the founding data hire and built SQL-based ETL workflows, funnel models, cohort tables, and lead-conversion dashboards.",
      "Standardized tracking taxonomy, validation queries, and reporting processes that created the data foundation for later promotion into product leadership.",
    ],
  },
  {
    company: "Capital Group",
    location: "Los Angeles, CA",
    role: "Quantitative Researcher",
    dates: "Sep 2024 - Dec 2024",
    bullets: [
      "Built an econometric and machine learning framework to test lead-lag relationships between CDS spreads and equity prices.",
      "Applied Granger causality, VAR, stationarity testing, lag selection, and feature-importance analysis on five years of CDS, equity, and macroeconomic time-series data in Python.",
    ],
  },
  {
    company: "UC San Diego",
    location: "La Jolla, CA",
    role: "Teaching Assistant",
    dates: "Oct 2024 - Dec 2024",
    bullets: [
      "Supported graduate-level M&A and Corporate Finance coursework for more than 40 students through office hours, grading, exam development, and case-based instruction.",
    ],
  },
  {
    company: "ByteDance",
    location: "Beijing, China",
    role: "Sales Operations & CRM Automation Intern",
    dates: "Mar 2022 - Jul 2022",
    bullets: [
      "Built contract-generation automation for the Lark and Feishu sales organization with HTML templates and Word VBA macros, reducing manual turnaround time.",
      "Managed Salesforce data and developed back-end CRM modules for data integrity workflows and low-code process automation.",
      "Led UAT across Feishu's 100-plus product database and partnered across sales, legal, finance, and engineering to streamline CRM workflows.",
    ],
  },
];

const education = [
  {
    school: "University of California, San Diego",
    location: "La Jolla, CA",
    degree: "Master of Science, Quantitative Finance (MQF)",
    dates: "2024",
    details: [
      "GPA: 4.00",
      "Beta Gamma Sigma International Business Honor Society",
    ],
  },
  {
    school: "Tsinghua University",
    location: "Beijing, China",
    degree: "Bachelor of Science, Economics",
    dates: "2023",
    details: ["GPA: 3.69"],
  },
];

const skillGroups = [
  {
    title: "Game, UA & Attribution Analytics",
    items: [
      "User acquisition diagnostics",
      "Meta, Google, Reddit, X",
      "AppsFlyer, Adjust, Branch, Singular concepts",
      "Attribution windows, last-click, click-through, view-through",
      "SKAN-aware measurement",
      "CAC, LTV, ROAS, retention",
    ],
  },
  {
    title: "Analytics, BI & Data Pipelines",
    items: [
      "SQL, BigQuery, Python, R",
      "GA4, GTM, platform pixels",
      "Looker Studio, Tableau",
      "Funnel, cohort, and retention modeling",
      "Data quality checks and validation queries",
      "End-to-end collection pipelines",
    ],
  },
  {
    title: "Languages",
    items: ["English (fluent)", "Mandarin (native)", "Japanese (intermediate, N2)"],
  },
];

export default function Resume() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
      <div className="flex flex-col gap-12">
        <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/48">
              Resume
            </p>
            <h1 className="mt-4 [font-family:var(--font-display)] text-4xl tracking-tight text-white sm:text-5xl">
              Growth product, UA, and analytics work across data, systems, and scale.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/74">
              My work sits at the intersection of acquisition, attribution,
              product thinking, and data systems. This page reflects the latest
              version of my resume and the operating experience behind the case
              studies on this site.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/48">
              Contact
            </p>
            <div className="mt-5 space-y-3 text-sm leading-7 text-white/74">
              <p>Yuting Wu</p>
              <p>Irvine, CA</p>
              <a
                href="mailto:t112255zl@gmail.com"
                className="block transition hover:text-white"
              >
                t112255zl@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/yuting-wu"
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-white"
              >
                linkedin.com/in/yuting-wu
              </a>
            </div>
            <ResumeDownloadLink className="mt-6 inline-flex items-center gap-2 border-b border-white/40 pb-1 text-[11px] uppercase tracking-[0.28em] text-white/78 transition hover:border-white hover:text-white" />
            <p className="mt-3 text-xs leading-6 text-white/46">
            Anonymous click tracking ready for analytics and download interest.
            </p>
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/48">
                Experience
              </p>
            </div>
            <div className="space-y-8">
              {experience.map((item) => (
                <article
                  key={`${item.company}-${item.role}-${item.dates}`}
                  className="grid gap-4 border-t border-white/10 pt-8 first:border-t-0 first:pt-0 lg:grid-cols-[14rem_minmax(0,1fr)]"
                >
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-white/42">
                      {item.dates}
                    </p>
                    <p className="mt-2 text-sm text-white/56">{item.location}</p>
                  </div>
                  <div>
                    <h2 className="[font-family:var(--font-display)] text-2xl tracking-tight text-white">
                      {item.role}
                    </h2>
                    <p className="mt-2 text-base text-white/68">{item.company}</p>
                    <ul className="mt-4 space-y-3 text-[0.98rem] leading-7 text-white/74">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span aria-hidden className="mt-[0.85rem] h-1.5 w-1.5 shrink-0 rounded-full bg-white/55" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/48">
              Education
            </p>
            <div className="mt-6 space-y-6">
              {education.map((item) => (
                <article key={`${item.school}-${item.degree}`} className="border-t border-white/10 pt-6 first:border-t-0 first:pt-0">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h2 className="[font-family:var(--font-display)] text-2xl tracking-tight text-white">
                      {item.school}
                    </h2>
                    <p className="text-sm uppercase tracking-[0.22em] text-white/42">
                      {item.dates}
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-white/56">{item.location}</p>
                  <p className="mt-4 text-base text-white/74">{item.degree}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.details.map((detail) => (
                      <span
                        key={detail}
                        className="rounded-full border border-white/12 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/58"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/48">
              Skills
            </p>
            <div className="mt-6 space-y-6">
              {skillGroups.map((group) => (
                <div key={group.title} className="border-t border-white/10 pt-6 first:border-t-0 first:pt-0">
                  <h2 className="[font-family:var(--font-display)] text-xl tracking-tight text-white">
                    {group.title}
                  </h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/12 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/58"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="flex gap-5 text-sm text-white/64">
          <Link
            href="/"
            className="border-b border-white/36 pb-1 transition hover:border-transparent hover:text-white"
          >
            About
          </Link>
          <Link
            href="/case-studies/"
            className="border-b border-white/36 pb-1 transition hover:border-transparent hover:text-white"
          >
            Work
          </Link>
        </div>
      </div>
    </div>
  );
}
