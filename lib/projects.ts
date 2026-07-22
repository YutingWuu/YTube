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

/*
 * All stories are anonymized and reconstructed — no company, customer,
 * or internal system details. Told first-person, STAR-shaped.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "crm-sales-analytics",
    title: "Making the Sales Numbers Trustworthy",
    subtitle: "Part 1",
    hook: "My first big project wasn't glamorous: nobody fully trusted the sales numbers, and someone had to fix that.",
    skills: ["Data", "Business Systems", "Analytics"],
    accent: "yellow",
    chapters: [
      {
        label: "Situation",
        headline:
          "Deals were tracked inconsistently, and reporting was mostly manual.",
        body: "Basic questions like “how is each team actually doing?” took real effort to answer, and different people would get different answers. Before anyone could talk about growth, the basics had to work.",
      },
      {
        label: "Task",
        headline: "My job was to fix the foundation.",
        body: "Set up the CRM properly, clean up the data, and give leadership reporting they could actually rely on.",
      },
      {
        label: "Action",
        headline: "So I rebuilt it piece by piece.",
        body: "I configured deal management and the sales process in the CRM so every deal left a clean trail. Then I built the ETL and cleaning steps, added validation checks to catch bad data early, and wrote SQL to compare how different teams were performing.",
        details: {
          title: "The specifics",
          bullets: [
            "CRM deal management and sales process configuration",
            "ETL and data cleaning",
            "Data quality and validation checks",
            "SQL analysis of sales performance across teams",
          ],
        },
      },
      {
        label: "Result",
        headline:
          "Leadership got dashboards they actually used — built on numbers I could stand behind.",
        body: "Reporting went from manual and debatable to something people could open and trust. And I picked up a habit I've kept ever since: never build anything on data you haven't verified yourself.",
        details: {
          title: "What it produced",
          bullets: [
            "Dashboards and recurring leadership reporting",
            "A shared, verified view of team-level sales performance",
          ],
        },
      },
    ],
    takeaway:
      "Everything I've done since — product work, growth work — started here, with learning to make data trustworthy before using it.",
  },
  {
    slug: "ai-sms-analytics",
    title: "Figuring Out What Users Were Really Telling Our AI",
    subtitle: "Part 2",
    hook: "Next, I moved to the product side. Users were texting with our AI every day, and my job was to figure out what they were actually trying to say.",
    skills: ["Product", "AI", "User Journey", "Cross-functional"],
    accent: "blue",
    chapters: [
      {
        label: "Situation",
        headline:
          "We had an AI texting with users daily — and a lot of noise about what was “broken.”",
        body: "Some conversations went wrong. But “it's broken” could mean three very different things: a data problem, a technical bug, or a user experience issue. Fixing the wrong one wastes everyone's time.",
      },
      {
        label: "Task",
        headline:
          "Figure out what was actually wrong, and get the right fix to the right team.",
        body: "I was the person between the raw conversation data and the engineers — the one who had to turn “something feels off” into “here's the problem, here's the evidence, here's what to change.”",
      },
      {
        label: "Action",
        headline: "I basically lived in the conversation data.",
        body: "I monitored delivery, replies, and anomalies in SQL, and read what users were actually writing — the keywords, the drop-off points, the moments where they got confused. Then I sorted every issue into data bug, technical bug, or experience problem, mapped the journey from website click to SMS conversation, and wrote up requirements engineering could act on.",
        details: {
          title: "The specifics",
          bullets: [
            "SQL monitoring of message delivery, replies, and anomalies",
            "Keyword and conversation behavior analysis",
            "Issue triage: data bug vs. technical bug vs. experience problem",
            "User flow diagrams and system mapping",
            "Product requirements, worked through with engineering",
          ],
        },
      },
      {
        label: "Result",
        headline: "Triage stopped being guesswork.",
        body: "Issues went to the right owner with evidence attached instead of bouncing between teams, and improvements shipped with engineering. The full path — from the website's call-to-action into the SMS experience — finally existed as one documented journey instead of tribal knowledge.",
      },
    ],
    takeaway:
      "Users tell you what's wrong every single day. You just have to be the person who actually reads it — and translates it into something a team can act on.",
  },
  {
    slug: "growth-creative-testing",
    title: "Running Growth Across Channels While the Product Kept Changing",
    subtitle: "Part 3",
    hook: "Then I moved to the front of the funnel: ads, creative, and channels — with a small team, a real budget, and a product that changed direction mid-way.",
    skills: ["Growth", "Creative", "Channel Strategy", "Experimentation"],
    accent: "red",
    chapters: [
      {
        label: "Situation",
        headline:
          "We needed more of the right users, and there weren't many of us to get them.",
        body: "The goal was to bring qualified users in from paid channels and get them into our AI-powered SMS experience. Small team, limited budget — so speed and judgment mattered more than headcount.",
      },
      {
        label: "Task",
        headline:
          "I owned the acquisition side: creative, channels, and the funnel.",
        body: "Not just running the ads — deciding what to say, where to say it, and how to tell whether it was actually working.",
      },
      {
        label: "Action",
        headline:
          "I used AI tools to move fast, and treated every ad as a test.",
        body: "I produced short videos, images, and copy with AI tools — writing the scripts and messaging myself — so we could test different angles: urgency, brand introduction, product education. And I matched each channel to what it's good at: Meta and Instagram for scale, Google for people already searching, LinkedIn for the professional side.",
        details: {
          title: "The specifics",
          bullets: [
            "AI-generated short-form videos and images",
            "Ad scripts and copy written by me",
            "Message angles tested: urgency, brand, product education",
            "Format and length adapted per platform",
            "Channel mix: Meta / Instagram / Google / LinkedIn, each with its own job",
          ],
        },
      },
      {
        label: "Result",
        headline: "Cheap leads weren't always good leads.",
        body: "Urgency-led creative won on cost per lead; brand-led creative brought fewer but better-informed users. So instead of chasing the lowest CPL, I learned to weigh volume against downstream quality — opt-in rates, engagement, how leads behaved after they arrived.",
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
        label: "The plot twist",
        headline:
          "Mid-way, the product changed direction — so I changed the playbook.",
        body: "The company shifted toward an AI-agent social product, which meant a different audience in a different place. I moved more of our effort to X, where that audience actually spends time, and supported LinkedIn content for professional positioning. It's still early — I won't dress it up with numbers it doesn't have yet. The honest win was speed: when the ground shifted, the growth system shifted with it.",
      },
    ],
    takeaway:
      "Growth work, to me, is re-asking the same question — “where are our users, and what do they need to hear?” — every time the answer changes.",
  },
];

export type GrowthExperiment = {
  title: string;
  fields: { label: string; value: string }[];
};

// Frameworks only — fill in the real hypothesis, channel, and result for each.
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
