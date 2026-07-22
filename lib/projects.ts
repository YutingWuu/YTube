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
  summary: string;
  skills: string[];
  accent: Accent;
  chapters: StoryChapter[];
  takeaway: string;
};

export const positioning = {
  title: "Growth Product & Analytics Operator",
  statement:
    "I build and optimize growth systems across data, product, creative, and acquisition channels.",
};

export const careerStages: {
  stage: string;
  title: string;
  description: string;
  accent: Accent;
}[] = [
  {
    stage: "Stage 1",
    title: "Building the Data Foundation",
    description: "CRM, ETL, SQL, dashboards.",
    accent: "yellow",
  },
  {
    stage: "Stage 2",
    title: "Optimizing an AI Product",
    description:
      "SMS data analysis, bug triage, user journeys, product design.",
    accent: "blue",
  },
  {
    stage: "Stage 3",
    title: "Driving Growth",
    description:
      "Ad creative, channel strategy, website funnel, acquisition, and experiments.",
    accent: "red",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "crm-sales-analytics",
    title: "Building a CRM and Sales Analytics Foundation",
    subtitle: "Case Study 1",
    hook: "Before the growth story could start, someone had to make the numbers trustworthy.",
    summary:
      "Configured CRM deal management and sales processes, then built the ETL, SQL analysis, and reporting layer that gave leadership visibility into sales performance.",
    skills: ["Data", "Business Systems", "Analytics"],
    accent: "yellow",
    chapters: [
      {
        label: "The starting point",
        headline: "Growth questions can't be answered from a messy CRM.",
        body: "I began where every growth system begins — configuring HubSpot deal management and a sales process the team would actually follow, so every deal left a clean data trail.",
        details: {
          title: "What I set up",
          bullets: [
            "HubSpot deal management configuration",
            "Sales process and pipeline design",
          ],
        },
      },
      {
        label: "The plumbing",
        headline: "Data is only useful after someone cleans it.",
        body: "Behind every dashboard was the unglamorous work: ETL pipelines, data cleaning, and validation checks that caught problems before leadership ever saw a wrong number.",
        details: {
          title: "The unglamorous work",
          bullets: [
            "ETL and data cleaning",
            "Data quality and validation processes",
          ],
        },
      },
      {
        label: "The payoff",
        headline: "From raw deals to decisions leadership could read.",
        body: "With a trustworthy base in place, I used SQL to compare sales performance across teams and turned the answers into dashboards and reporting that leadership actually used.",
        details: {
          title: "What it produced",
          bullets: [
            "SQL analysis of sales performance across teams",
            "Dashboards and leadership reporting",
          ],
        },
      },
    ],
    takeaway:
      "Data, business systems, and analytics — the foundation everything that follows was built on.",
  },
  {
    slug: "ai-sms-analytics",
    title: "Improving an AI-Powered SMS Experience Through Product Analytics",
    subtitle: "Case Study 2",
    hook: "The users were already telling us what was broken — in thousands of text messages.",
    summary:
      "Used SQL and user-journey mapping to separate data bugs, technical bugs, and experience issues in an AI SMS product, then partnered with engineering to fix them.",
    skills: ["Product", "AI", "User Journey", "Cross-functional"],
    accent: "blue",
    chapters: [
      {
        label: "Listening to the signal",
        headline: "Every reply is a user telling you something.",
        body: "I used SQL to monitor SMS delivery, replies, and anomalies, then dug into the keywords and conversation behavior inside them — the closest thing an SMS product has to a continuous user interview.",
        details: {
          title: "What I watched",
          bullets: [
            "SQL monitoring of SMS delivery, replies, and anomalies",
            "User keyword and conversation behavior analysis",
          ],
        },
      },
      {
        label: "The detective work",
        headline: "Data bug, technical bug, or experience problem?",
        body: "The same broken conversation can have three different causes — and each one needs a different owner and a different fix. I learned to tell them apart before anything got “fixed.”",
        details: {
          title: "How I triaged",
          bullets: [
            "Distinguishing data bugs from technical bugs from experience issues",
          ],
        },
      },
      {
        label: "From diagnosis to design",
        headline: "Then I mapped the whole journey and wrote the fix.",
        body: "I built user flow diagrams and system maps, wrote product requirements, and worked with engineering to ship improvements — covering the full path from website CTA into the SMS conversation.",
        details: {
          title: "What shipped from it",
          bullets: [
            "User flow diagrams and system mapping",
            "Product requirements for engineering",
            "Cross-functional work with the engineering team",
            "Full-path mapping: website CTA → SMS experience",
          ],
        },
      },
    ],
    takeaway:
      "Product, AI, user journey, cross-functional — analytics that ends in shipped changes, not slides.",
  },
  {
    slug: "growth-creative-testing",
    title: "Building a Multi-Channel Growth Engine for Caregiver Acquisition",
    subtitle: "Case Study 3",
    hook: "One goal, four channels, and a product that changed under our feet.",
    summary:
      "Owned creative production, channel strategy, and measurement for caregiver acquisition — then adapted the same system when the product shifted toward an AI-agent social audience.",
    skills: ["Growth", "Creative", "Channel Strategy", "Experimentation"],
    accent: "red",
    chapters: [
      {
        label: "The mission",
        headline: "Acquire qualified caregivers — and get them talking to the AI.",
        body: "The goal was to acquire qualified caregivers and move them from paid channels into an AI-powered SMS experience. Everything below served that one sentence.",
      },
      {
        label: "The creative engine",
        headline: "AI tools turned a small team into a fast one.",
        body: "I used AI tools to produce short-form video, visual assets, and ad copy — writing the scripts and messaging myself — so we could test urgent-hiring, brand, and product-education angles at a pace a small team couldn't otherwise afford.",
        details: {
          title: "Inside the engine",
          bullets: [
            "AI-generated short-form videos and images",
            "Ad scripts and copy written by me",
            "Angles tested: urgent hiring, brand introduction, product education",
            "Format and length adapted per platform",
          ],
        },
      },
      {
        label: "The map",
        headline: "Channels aren't a list — they're a fit problem.",
        body: "Meta and Instagram carried caregiver acquisition at scale, Google caught people actively searching for the job, LinkedIn held the professional brand line. The mix was a choice, re-made whenever the product or the audience moved.",
        details: {
          title: "Who did what",
          bullets: [
            "Meta & Instagram — caregiver acquisition at scale",
            "Google — active job-search intent",
            "X — the AI-agent social audience, later in the story",
            "LinkedIn — brand content and professional communication",
          ],
        },
      },
      {
        label: "The scoreboard",
        headline: "CPL tells you the cost. It doesn't tell you the truth.",
        body: "Urgent-hiring creative brought more leads at a lower cost; brand creative brought fewer but better-informed users. I optimized for the balance of volume and downstream lead quality — not CPL alone.",
        details: {
          title: "What I measured",
          bullets: [
            "CPL, CTR, and conversion rate",
            "Lead quality and opt-in rate",
            "Downstream engagement",
            "Channel-level performance",
          ],
        },
      },
      {
        label: "The pivot",
        headline: "Then the product changed — so the growth system changed with it.",
        body: "When the company moved toward an AI-agent social product, I shifted acquisition and content effort to X, where that audience actually lives, and supported LinkedIn content for professional positioning. It's early — the honest wins so far are channel selection, audience fit, and creative iteration speed, not hard numbers.",
      },
    ],
    takeaway:
      "Growth isn't a channel list. It's a system that keeps answering the same question — “where are our users?” — as the answer changes.",
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
