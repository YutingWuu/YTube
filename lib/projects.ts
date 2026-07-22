export type Accent = "yellow" | "red" | "blue";

export type StoryChapter = {
  label: string;
  headline: string;
  body: string;
  details?: { title: string; bullets: string[] };
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  hook: string;
  skills: string[];
  accent: Accent;
  chapters: StoryChapter[];
  takeaway: string;
};

export const positioning = {
  title: "Product, Growth & Data Analytics",
  statement:
    "I use SQL, experimentation, and user behavior data to diagnose problems, improve digital products, and support measurable growth.",
  statement2:
    "My experience spans CRM and reporting, AI-powered user journeys, and multi-channel acquisition in fast-changing startup environments.",
  howIWork:
    "I work best in ambiguous environments where the problem is not yet clearly defined. I use data to identify what is happening, translate it into actionable requirements, and coordinate with teams to move toward a solution.",
};

/*
 * Not a planned three-stage career path — the company kept changing,
 * and the role changed with it.
 */
export const roleEvolution: {
  index: string;
  title: string;
  description: string;
  accent: Accent;
}[] = [
  {
    index: "01",
    title: "Data Systems & Reporting",
    description: "CRM configuration, ETL validation, SQL, dashboards.",
    accent: "yellow",
  },
  {
    index: "02",
    title: "AI Product Analytics",
    description:
      "Conversation data analysis, issue triage, user journeys, product requirements.",
    accent: "blue",
  },
  {
    index: "03",
    title: "Growth & Acquisition",
    description:
      "Creative testing, channel execution, funnel analysis, coordination with the team.",
    accent: "red",
  },
];

/*
 * All stories are anonymized and reconstructed — no company, customer,
 * or internal system details. Told first-person, STAR-shaped. Tone:
 * specific, restrained, evidence-first. Ownership boundaries matter:
 * analysis, validation, and requirements were mine; engineering
 * implementation was engineering's.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "crm-sales-analytics",
    title: "Building a CRM and Sales Analytics Foundation",
    subtitle: "Part 1",
    hook: "When I started, sales data and reporting weren't consistent enough to rely on. The first priority was to make the underlying data more reliable.",
    skills: ["Data", "Business Systems", "Analytics"],
    accent: "yellow",
    chapters: [
      {
        label: "Situation",
        headline:
          "Deals were tracked inconsistently, and reporting was mostly manual.",
        body: "Basic questions like “how is each team performing?” took real effort to answer, and different people could get different answers.",
      },
      {
        label: "Task",
        headline: "My job was to make the data and reporting reliable.",
        body: "Configure the CRM properly, improve data quality, and build reporting that leadership could use consistently.",
      },
      {
        label: "Action",
        headline:
          "I started with the CRM structure, then worked through the data layer.",
        body: "I configured deal management and the sales process in the CRM so every deal left a consistent trail. For the data pipeline, I helped configure and validate the ETL workflows, wrote SQL checks to catch bad data early, and worked with engineering when changes were needed. Then I used SQL to analyze sales performance across teams.",
        details: {
          title: "The specifics",
          bullets: [
            "CRM deal management and sales process configuration",
            "ETL workflow configuration and validation, with engineering support",
            "SQL data quality and validation checks",
            "SQL analysis of sales performance across teams",
          ],
        },
      },
      {
        label: "Result",
        headline: "Reporting became more consistent and easier to verify.",
        body: "The dashboards gave leadership a more consistent view of sales performance and reduced the amount of manual reconciliation required. It also set a habit I've kept since: verify how the data actually works before building anything on it.",
        details: {
          title: "What it produced",
          bullets: [
            "Dashboards and recurring leadership reporting",
            "A more consistent, validated view of team-level sales performance",
          ],
        },
      },
    ],
    takeaway:
      "Most of my later product and growth work built on what I learned here: check how the data actually works before drawing conclusions from it.",
  },
  {
    slug: "ai-sms-analytics",
    title: "Diagnosing Issues in an AI-Powered SMS Experience",
    subtitle: "Part 2",
    hook: "Users interacted with our AI over SMS every day. My job was to find out where the experience was breaking, and why.",
    skills: ["Product", "AI", "User Journey", "Cross-functional"],
    accent: "blue",
    chapters: [
      {
        label: "Situation",
        headline:
          "Reports of problems were frequent, but the causes weren't clear.",
        body: "A broken conversation could come from a data problem, a technical bug, or a user experience issue — and each one needs a different owner and a different fix.",
      },
      {
        label: "Task",
        headline:
          "Diagnose issues accurately and route them to the right team.",
        body: "Turn “something feels off” into a specific problem with evidence attached and a clear owner.",
      },
      {
        label: "Action",
        headline:
          "I analyzed conversation data to identify recurring issues and user friction.",
        body: "I monitored delivery, replies, and anomalies in SQL, analyzed keywords and conversation behavior, and classified each issue as a data problem, technical bug, or experience issue. I documented the user journey from website CTA to SMS conversation, and wrote product requirements that engineering could act on.",
        details: {
          title: "The specifics",
          bullets: [
            "SQL monitoring of message delivery, replies, and anomalies",
            "Keyword and conversation behavior analysis",
            "Issue triage: data problem vs. technical bug vs. experience issue",
            "User flow diagrams and system mapping",
            "Product requirements, worked through with engineering",
          ],
        },
      },
      {
        label: "Result",
        headline:
          "The triage process became more structured, with clearer evidence and ownership.",
        body: "Issues moved forward with supporting data instead of bouncing between teams, and improvements were shipped in collaboration with engineering. The full path from website CTA to SMS conversation was documented end to end, which made later product discussions faster.",
      },
    ],
    takeaway:
      "Conversation data is one of the most direct forms of user feedback — if you take the time to read it and translate it into something a team can act on.",
  },
  {
    slug: "growth-creative-testing",
    title: "Multi-Channel Acquisition and Creative Testing",
    subtitle: "Part 3",
    hook: "Later I moved closer to acquisition: creative testing, channel execution, and the funnel into our SMS product — while the business itself kept evolving.",
    skills: ["Growth", "Creative", "Channel Strategy", "Experimentation"],
    accent: "red",
    chapters: [
      {
        label: "Situation",
        headline:
          "We needed qualified users from paid channels, with a small team.",
        body: "The goal was to bring the right users in from paid channels and into an AI-powered SMS experience. With limited budget and headcount, testing speed and prioritization mattered.",
      },
      {
        label: "Task",
        headline:
          "I was responsible for acquisition analysis, creative testing, and channel execution.",
        body: "And for coordinating funnel improvements with the team — deciding what to test, where to run it, and how to judge the results.",
      },
      {
        label: "Action",
        headline:
          "I used AI tools to shorten the creative production cycle and test more angles.",
        body: "I produced short-form videos, images, and ad copy with AI tools, writing the scripts and messaging myself, and tested different angles — urgency, brand introduction, product education. Each channel had its own role: Meta and Instagram for scale, Google for search intent, LinkedIn for professional content.",
        details: {
          title: "The specifics",
          bullets: [
            "AI-generated short-form videos and images",
            "Ad scripts and copy written by me",
            "Message angles tested: urgency, brand, product education",
            "Format and length adapted per platform",
            "Channel roles: Meta / Instagram for scale, Google for search intent, LinkedIn for professional content",
          ],
        },
      },
      {
        label: "Result",
        headline: "Lower cost per lead didn't always mean better leads.",
        body: "Urgency-led creative produced more leads at a lower cost; brand-led creative produced fewer but more informed users. I weighed volume against downstream quality — opt-in rate and engagement — rather than optimizing for CPL alone.",
        details: {
          title: "What I tracked",
          bullets: [
            "CPL, CTR, conversion rate",
            "Lead quality and opt-in rate",
            "Downstream engagement",
            "Channel-level performance",
          ],
        },
      },
      {
        label: "New direction",
        headline:
          "The product direction changed, so I adjusted the channel strategy to fit the new audience.",
        body: "As the company moved toward an AI-agent social product, I shifted more acquisition and content effort to X, where that audience is more active, and supported LinkedIn content for professional positioning. This work is still early, so I'd rather describe the approach than claim results: channel selection, audience fit, and creative iteration.",
      },
    ],
    takeaway:
      "Channel strategy isn't a fixed plan. When the product or the audience changes, the mix has to be re-decided — based on where the users actually are.",
  },
];

export type GrowthExperiment = {
  title: string;
  fields: { label: string; value: string }[];
};

/*
 * HIDDEN from the site until the real hypothesis/channel/result content
 * is filled in — placeholder text must not appear on a public page.
 * Re-add the section to app/page.tsx once these are real.
 */
export const growthExperiments: GrowthExperiment[] = [
  {
    title: "Urgency vs. Brand Education",
    fields: [
      { label: "Hypothesis", value: "Add: what you expected before running this test" },
      { label: "Channel", value: "Add: where this ran" },
      { label: "Metric", value: "Add: the metric you used to judge it" },
      { label: "Learning", value: "Add: what you'd do differently next time" },
    ],
  },
  {
    title: "AI Video vs. Static Creative",
    fields: [
      { label: "Hypothesis", value: "Add: what you expected before running this test" },
      { label: "Channel", value: "Add: where this ran" },
      { label: "Result", value: "Add: what actually happened" },
      { label: "Decision", value: "Add: what you did as a result" },
    ],
  },
  {
    title: "Meta vs. X Channel Fit",
    fields: [
      { label: "Audience", value: "Add: who you targeted on each channel" },
      { label: "Creative format", value: "Add: what format worked on each" },
      { label: "Performance signal", value: "Add: the signal that told you it was working" },
      { label: "Learning", value: "Add: what you'd do differently next time" },
    ],
  },
  {
    title: "Search Intent vs. Direct Acquisition",
    fields: [
      { label: "Acquisition path", value: "Add: how each path reached the user" },
      { label: "Opt-in behavior", value: "Add: how behavior differed between paths" },
      { label: "Lead quality", value: "Add: how quality differed between paths" },
      { label: "Risk or limitation", value: "Add: a caveat worth flagging" },
    ],
  },
];
