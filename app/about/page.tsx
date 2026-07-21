import { careerStages, positioning } from "@/lib/projects";

export default function About() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold">About</h1>
        <p className="mt-4 text-black/70 dark:text-white/70">
          {positioning.statement} My work spans three stages, each building
          on the last — from the data foundation of a business, through
          product optimization, to driving growth.
        </p>
      </div>

      <ol className="flex flex-col gap-4">
        {careerStages.map((stage, index) => (
          <li
            key={stage.stage}
            className="rounded-lg border border-black/10 p-4 dark:border-white/10"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-black/50 dark:text-white/50">
              {stage.stage}
              {index < careerStages.length - 1 ? " →" : ""}
            </p>
            <h2 className="mt-1 font-medium">{stage.title}</h2>
            <p className="mt-1 text-sm text-black/70 dark:text-white/70">
              {stage.description}
            </p>
          </li>
        ))}
      </ol>

      <p className="text-sm text-black/60 dark:text-white/60">
        Data Analyst → Product Operator → Growth Product Lead — not three
        unrelated jobs, but one path from the back-end data systems of a
        business to front-end user growth.
      </p>
    </div>
  );
}
