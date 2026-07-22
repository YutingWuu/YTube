import Link from "next/link";
import { Accent, caseStudies, growthExperiments } from "@/lib/projects";

const accentStyles: Record<Accent, string> = {
  yellow: "border-m-yellow/45 shadow-[0_0_0_1px_rgba(232,191,42,0.16)]",
  red: "border-m-red/45 shadow-[0_0_0_1px_rgba(224,75,54,0.16)]",
  blue: "border-m-blue/45 shadow-[0_0_0_1px_rgba(74,111,224,0.16)]",
};

const accentDots: Record<Accent, string> = {
  yellow: "bg-m-yellow",
  red: "bg-m-red",
  blue: "bg-m-blue",
};

export default function CaseStudiesIndex() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.38em] text-white/45">
          Field Notes
        </p>
        <h1 className="mt-4 [font-family:var(--font-display)] text-4xl tracking-tight text-white sm:text-5xl">
          Case studies and growth experiments.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
          The welcome page is now the front door. This page keeps the work
          itself easy to browse: three deeper case studies plus a few smaller
          experiment snapshots.
        </p>
      </div>

      <div className="mt-12 grid gap-6">
        {caseStudies.map((study, index) => (
          <Link
            key={study.slug}
            href={`/case-studies/${study.slug}/`}
            className={`group rounded-[2rem] border bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05] sm:p-8 ${accentStyles[study.accent]}`}
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                  0{index + 1} / {study.subtitle}
                </p>
                <h2 className="mt-4 [font-family:var(--font-display)] text-2xl tracking-tight text-white sm:text-3xl">
                  {study.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/68 sm:text-base">
                  {study.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.26em] text-white/58">
                  {study.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/14 px-3 py-1.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-white/56 md:pt-1">
                <span
                  aria-hidden
                  className={`h-2.5 w-2.5 rounded-full ${accentDots[study.accent]}`}
                />
                Open
              </div>
            </div>
          </Link>
        ))}
      </div>

      <section className="mt-16">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="[font-family:var(--font-display)] text-2xl tracking-tight text-white sm:text-3xl">
            Smaller growth experiments
          </h2>
          <span className="hidden text-xs uppercase tracking-[0.34em] text-white/40 sm:block">
            Working archive
          </span>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {growthExperiments.map((experiment, index) => (
            <div
              key={experiment.title}
              className="rounded-[1.75rem] border border-white/10 bg-black/20 p-5 backdrop-blur-xl sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="[font-family:var(--font-display)] text-xl tracking-tight text-white">
                  {experiment.title}
                </h3>
                <span
                  aria-hidden
                  className={`mt-2 h-2.5 w-2.5 rounded-full ${
                    index % 3 === 0
                      ? "bg-m-yellow"
                      : index % 3 === 1
                        ? "bg-m-blue"
                        : "bg-m-red"
                  }`}
                />
              </div>

              <dl className="mt-5 space-y-3">
                {experiment.fields.map((field) => (
                  <div key={field.label}>
                    <dt className="text-[11px] uppercase tracking-[0.28em] text-white/42">
                      {field.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-7 text-white/66">
                      {field.value}
                    </dd>
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
