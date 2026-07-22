import Link from "next/link";
import { caseStudies, positioning } from "@/lib/projects";
import { Boogie, Squares, accentBg } from "@/components/mondrian";

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
          <p className="mt-3 max-w-xl leading-relaxed opacity-70">
            {positioning.statement2}
          </p>
        </div>
        <Boogie className="mx-auto md:mx-0 md:justify-self-end" />
      </section>

      <section className="border-2 border-ink">
        <div aria-hidden className="flex h-2 w-full">
          <span className="w-1/3 bg-m-yellow" />
          <span className="w-1/3 bg-m-blue" />
          <span className="w-1/3 bg-m-red" />
        </div>
        <div className="p-6">
          <p className="font-mono text-xs uppercase tracking-[0.22em] opacity-60">
            How I work
          </p>
          <p className="mt-3 max-w-2xl leading-relaxed opacity-85">
            {positioning.howIWork}
          </p>
        </div>
      </section>

      <section>
        <div className="flex items-baseline justify-between border-b-[3px] border-ink pb-3">
          <h2 className="font-serif text-2xl tracking-tight">
            My story, in three parts
          </h2>
          <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-60">
            Part 01 — 03
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
                  <p className="mt-2 max-w-2xl font-serif italic leading-snug opacity-80">
                    {project.hook}
                  </p>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] opacity-50">
                    A story in {project.chapters.length} chapters →
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
    </div>
  );
}
