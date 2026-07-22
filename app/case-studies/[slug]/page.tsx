import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/projects";
import { accentBg } from "@/components/mondrian";
import { Reveal } from "@/components/reveal";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = caseStudies.findIndex((item) => item.slug === slug);

  if (index === -1) {
    notFound();
  }

  const study = caseStudies[index];
  const next = caseStudies[index + 1];
  const accent = accentBg[study.accent];

  return (
    <article className="flex flex-col gap-12">
      <div>
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-[0.18em] opacity-70 hover:opacity-100"
        >
          ← Index
        </Link>

        <div className="mt-6 border-2 border-ink">
          <div aria-hidden className={`h-2.5 w-full ${accent}`} />
          <div className="p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.22em] opacity-60">
              {study.subtitle} — in {study.chapters.length} chapters
            </p>
            <h1 className="mt-3 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
              {study.title}
            </h1>
            <p className="mt-4 max-w-2xl font-serif text-xl italic leading-snug opacity-90">
              {study.hook}
            </p>
            <div className="mt-5 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-wide">
              {study.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-ink/30 px-2 py-0.5 opacity-80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="ml-1.5 max-w-2xl">
        {study.chapters.map((chapter, chapterIndex) => (
          <Reveal key={chapter.label}>
            <section className="relative border-l-2 border-ink/25 pb-12 pl-7 last:pb-2 sm:pl-10">
              <span
                aria-hidden
                className={`absolute -left-[7px] top-1.5 h-3 w-3 ${accent}`}
              />
              <p className="font-mono text-xs uppercase tracking-[0.22em] opacity-60">
                0{chapterIndex + 1} — {chapter.label}
              </p>
              <h2 className="mt-3 font-serif text-2xl leading-snug tracking-tight sm:text-3xl">
                {chapter.headline}
              </h2>
              <p className="mt-3 max-w-xl leading-relaxed opacity-80">
                {chapter.body}
              </p>
              {chapter.details && (
                <details className="group mt-5 max-w-xl border-2 border-ink/50">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] transition-colors hover:bg-ink/[.06]">
                    {chapter.details.title}
                    <span
                      aria-hidden
                      className="text-base leading-none transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <ul className="space-y-2 border-t-2 border-ink/50 px-4 py-4 text-sm leading-relaxed">
                    {chapter.details.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span
                          aria-hidden
                          className={`mt-[0.45em] h-2 w-2 shrink-0 ${accent}`}
                        />
                        <span className="opacity-80">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </section>
          </Reveal>
        ))}
      </div>

      <Reveal className="max-w-2xl">
        <aside className="border-2 border-ink">
          <div aria-hidden className={`h-2 w-full ${accent}`} />
          <div className="p-6">
            <p className="font-mono text-xs uppercase tracking-[0.22em] opacity-60">
              What I learned
            </p>
            <p className="mt-3 font-serif text-xl italic leading-snug">
              {study.takeaway}
            </p>
          </div>
        </aside>
      </Reveal>

      <Reveal className="max-w-2xl">
        {next ? (
          <Link
            href={`/case-studies/${next.slug}/`}
            className="group block border-2 border-ink transition-colors hover:bg-ink/[.05]"
          >
            <div aria-hidden className={`h-2 w-full ${accentBg[next.accent]}`} />
            <div className="flex items-center justify-between gap-4 p-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-60">
                  Next part
                </p>
                <p className="mt-1 font-serif text-lg leading-snug decoration-2 underline-offset-4 group-hover:underline">
                  {next.title}
                </p>
              </div>
              <span aria-hidden className="text-2xl">
                →
              </span>
            </div>
          </Link>
        ) : (
          <Link
            href="/"
            className="group block border-2 border-ink transition-colors hover:bg-ink/[.05]"
          >
            <div aria-hidden className="flex h-2 w-full">
              <span className="w-1/3 bg-m-yellow" />
              <span className="w-1/3 bg-m-blue" />
              <span className="w-1/3 bg-m-red" />
            </div>
            <div className="flex items-center justify-between gap-4 p-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-60">
                  End of the collection
                </p>
                <p className="mt-1 font-serif text-lg leading-snug decoration-2 underline-offset-4 group-hover:underline">
                  Back to the index
                </p>
              </div>
              <span aria-hidden className="text-2xl">
                →
              </span>
            </div>
          </Link>
        )}
      </Reveal>
    </article>
  );
}
