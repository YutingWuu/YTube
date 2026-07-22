import Link from "next/link";
import { caseStudies, growthExperiments, positioning } from "@/lib/projects";
import { Boogie, Squares, accentBg } from "@/components/mondrian";

const experimentDots = ["bg-m-yellow", "bg-m-red", "bg-m-blue", "bg-ink"];

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <section className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] opacity-70">
            <Squares size="h-2 w-2" />
            {positioning.title}
          </p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            Yuting Wu
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed opacity-80">
            {positioning.statement}
          </p>
          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.18em]">
            <span>Data</span>
            <span aria-hidden className="h-2 w-2 bg-m-yellow" />
            <span>Product</span>
            <span aria-hidden className="h-2 w-2 bg-m-blue" />
            <span>Creative</span>
            <span aria-hidden className="h-2 w-2 bg-m-red" />
            <span>Acquisition</span>
          </p>
        </div>
        <Boogie className="mx-auto md:mx-0 md:justify-self-end" />
      </section>

      <section>
        <div className="flex items-baseline justify-between border-b-[3px] border-ink pb-3">
          <h2 className="font-serif text-2xl tracking-tight">
            Selected case studies
          </h2>
          <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-60">
            01 — 03
          </span>
        </div>
        <ul className="mt-6 divide-y-2 divide-ink border-2 border-ink">
          {caseStudies.map((project, index) => (
            <li key={project.slug}>
              <Link
                href={`/case-studies/${project.slug}/`}
                className="group grid grid-cols-[auto_1fr] transition-colors hover:bg-ink/[.04]"
              >
                <div className="flex w-16 flex-col items-center justify-between border-r-2 border-ink py-5 sm:w-20">
                  <span className="font-mono text-xs opacity-70">
                    0{index + 1}
                  </span>
                  <span
                    aria-hidden
                    className={`h-4 w-4 ${accentBg[project.accent]}`}
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-serif text-xl leading-snug tracking-tight decoration-2 underline-offset-4 group-hover:underline">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed opacity-75">
                    {project.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-wide">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-ink/30 px-2 py-0.5 opacity-80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="flex items-baseline justify-between border-b-[3px] border-ink pb-3">
          <h2 className="font-serif text-2xl tracking-tight">
            Selected growth experiments
          </h2>
          <span className="hidden font-mono text-xs uppercase tracking-[0.2em] opacity-60 sm:block">
            Studies
          </span>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed opacity-70">
          Smaller tests that didn&apos;t warrant a full case study — kept as
          hypothesis → learning sketches.
        </p>
        <div className="mt-6 grid gap-[2px] border-2 border-ink bg-ink sm:grid-cols-2">
          {growthExperiments.map((experiment, index) => (
            <div key={experiment.title} className="bg-paper p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif text-lg leading-snug tracking-tight">
                  {experiment.title}
                </h3>
                <span
                  aria-hidden
                  className={`mt-1.5 h-3 w-3 shrink-0 ${experimentDots[index % experimentDots.length]}`}
                />
              </div>
              <dl className="mt-4 space-y-2 text-sm leading-relaxed">
                {experiment.fields.map((field) => (
                  <div key={field.label}>
                    <dt className="inline font-mono text-[11px] uppercase tracking-wide opacity-60">
                      {field.label} —{" "}
                    </dt>
                    <dd className="inline opacity-80">{field.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
