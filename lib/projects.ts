export type CaseStudySection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  skills: string[];
  sections: CaseStudySection[];
};

export const positioning = {
  title: "Growth Product & Analytics Operator",
  statement:
    "I build and optimize growth systems across data, product, creative, and acquisition channels.",
};

export const careerStages = [
  {
    stage: "Stage 1",
    title: "Building the Data Foundation",
    description: "CRM, ETL, SQL, dashboards.",
  },
  {
    stage: "Stage 2",
    title: "Optimizing an AI Product",
    description:
      "SMS data analysis, bug triage, user journeys, product design.",
  },
  {
    stage: "Stage 3",
    title: "Driving Growth",
    description:
      "Ad creative, channel strategy, website funnel, acquisition, and experiments.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "crm-sales-analytics",
    title: "Building a CRM and Sales Analytics Foundation",
    subtitle: "Case Study 1",
    summary:
      "Configured CRM deal management and sales processes, then built the ETL, SQL analysis, and reporting layer that gave leadership visibility into sales performance.",
    skills: ["Data", "Business Systems", "Analytics"],
    sections: [
      {
        heading: "What I built",
        bullets: [
          "HubSpot deal management and sales process configuration",
          "ETL and data cleaning",
          "SQL analysis of sales performance across teams",
          "Dashboards and leadership reporting",
          "Data quality and validation processes",
        ],
      },
      {
        heading: "What this demonstrates",
        paragraphs: [
          "This project shows data, business systems, and analytics capability — the foundation the rest of my growth work is built on.",
        ],
      },
    ],
  },
  {
    slug: "ai-sms-analytics",
    title: "Improving an AI-Powered SMS Experience Through Product Analytics",
    subtitle: "Case Study 2",
    summary:
      "Used SQL and user-journey mapping to separate data bugs, technical bugs, and experience issues in an AI SMS product, then partnered with engineering to fix them.",
    skills: ["Product", "AI", "User Journey", "Cross-functional"],
    sections: [
      {
        heading: "What I did",
        bullets: [
          "Used SQL to monitor SMS delivery, replies, and anomalies",
          "Analyzed user keywords and conversation behavior",
          "Distinguished between data bugs, technical bugs, and experience issues",
          "Built user flow diagrams, system mapping, and product requirements",
          "Partnered with engineering to improve the product",
          "Mapped the full path from website CTA to the SMS experience",
        ],
      },
      {
        heading: "What this demonstrates",
        paragraphs: [
          "This project shows product, AI, user journey, and cross-functional capability.",
        ],
      },
    ],
  },
  {
    slug: "growth-creative-testing",
    title: "Building a Multi-Channel Growth Engine for Caregiver Acquisition",
    subtitle: "Case Study 3",
    summary:
      "Owned creative production, channel strategy, and measurement for caregiver acquisition — then adapted the same system when the product shifted toward an AI-agent social audience.",
    skills: ["Growth", "Creative", "Channel Strategy", "Experimentation"],
    sections: [
      {
        heading: "1. Growth objective",
        paragraphs: [
          "The goal was to acquire qualified caregivers and move them from paid channels into an AI-powered SMS experience.",
        ],
      },
      {
        heading: "2. Creative production",
        paragraphs: [
          "To increase testing velocity with a small team, I used AI tools to produce short-form videos, visual assets, and ad copy. I wrote ad scripts and messaging myself, and tested different angles — urgent hiring, brand introduction, and product education — adapting format and length to each platform.",
        ],
      },
      {
        heading: "3. Channel strategy",
        paragraphs: [
          "The goal was not to run on as many platforms as possible — it was to match each channel to the product, user, and business stage. Meta and Instagram carried the bulk of caregiver acquisition at scale, and Google captured users actively searching for the job. As the business shifted, I adjusted the channel mix: Meta and Google remained effective for caregiver acquisition, while X became more relevant once the product moved toward an AI-agent and social audience. LinkedIn supported brand content and professional-audience communication throughout.",
        ],
      },
      {
        heading: "4. Measurement and decisions",
        paragraphs: [
          "I tracked CPL, CTR, conversion rate, lead quality, opt-in rate, downstream engagement, and channel-level performance. The urgent-hiring creative generated more leads at a lower cost, while brand-focused creative produced fewer but more informed users. Rather than optimizing for CPL alone, I balanced volume against downstream lead quality when deciding what to scale.",
        ],
      },
      {
        heading: "Adapting the growth strategy to a new product",
        paragraphs: [
          "When the company shifted toward an AI-agent social product, I moved more of our acquisition and content effort to X, where the target audience was more active, and supported LinkedIn content design to strengthen professional positioning and brand awareness.",
          "This section is intentionally framed around channel selection, audience fit, creative iteration, and early learning rather than hard metrics — the initiative is still early, and results here haven't matured enough to report with confidence.",
        ],
      },
    ],
  },
];

export type GrowthExperiment = {
  title: string;
  fields: { label: string; value: string }[];
};

// Frameworks only — fill in the real hypothesis, channel, and result for each.
export const growthExperiments: GrowthExperiment[] = [
  {
    title: "Urgent Hiring vs. Brand Education",
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
    title: "Job Search vs. Direct Acquisition",
    fields: [
      { label: "Acquisition path", value: "Add: how each path reached the user" },
      { label: "Opt-in behavior", value: "Add: how behavior differed between paths" },
      { label: "Lead quality", value: "Add: how quality differed between paths" },
      { label: "Risk or limitation", value: "Add: a caveat worth flagging" },
    ],
  },
];
