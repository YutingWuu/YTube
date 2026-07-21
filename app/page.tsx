import Link from "next/link";
import { caseStudies, growthExperiments, positioning } from "@/lib/projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-14">
      <section>
        <p className="text-sm font-medium uppercase tracking-wide text-black/50 dark:text-white/50">
          {positioning.title}
        </p>
        <h1 className="mt-2 text-3xl font-bold">Yuting Wu</h1>
        <p className="mt-3 max-w-xl text-lg text-black/70 dark:text-white/70">
          {positioning.statement}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Selected case studies</h2>
        <ul className="mt-4 flex flex-col gap-4">
          {caseStudies.map((project) => (
            <li
              key={project.slug}
              className="rounded-lg border border-black/10 p-4 dark:border-white/10"
            >
              <Link href={`/case-studies/${project.slug}/`} className="block">
                <p className="text-xs font-medium uppercase tracking-wide text-black/50 dark:text-white/50">
                  {project.subtitle}
                </p>
                <h3 className="mt-1 font-medium">{project.title}</h3>
                <p className="mt-1 text-sm text-black/70 dark:text-white/70">
                  {project.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-black/10 px-2 py-0.5 text-xs text-black/60 dark:border-white/10 dark:text-white/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Selected growth experiments</h2>
        <p className="mt-1 text-sm text-black/60 dark:text-white/60">
          Smaller tests that didn&apos;t warrant a full case study, shown as a
          hypothesis → learning framework.
        </p>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {growthExperiments.map((experiment) => (
            <li
              key={experiment.title}
              className="rounded-lg border border-black/10 p-4 dark:border-white/10"
            >
              <h3 className="font-medium">{experiment.title}</h3>
              <dl className="mt-2 flex flex-col gap-1 text-sm">
                {experiment.fields.map((field) => (
                  <div key={field.label}>
                    <dt className="inline font-medium text-black/70 dark:text-white/70">
                      {field.label}:{" "}
                    </dt>
                    <dd className="inline text-black/60 dark:text-white/60">
                      {field.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
