import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/projects";
import { accentBg } from "@/components/mondrian";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  const accent = accentBg[study.accent];

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
      <article className="flex flex-col gap-10">
        <div>
          <Link
            href="/case-studies/"
            className="text-xs uppercase tracking-[0.3em] text-white/55 transition hover:text-white"
          >
            / Back to case studies
          </Link>

          <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
            <div aria-hidden className={`h-2.5 w-full rounded-t-[2rem] ${accent}`} />
            <div className="p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.34em] text-white/46">
                {study.subtitle}
              </p>
              <h1 className="mt-3 [font-family:var(--font-display)] text-3xl leading-tight tracking-tight text-white sm:text-5xl">
                {study.title}
              </h1>
              <p className="mt-4 max-w-2xl leading-8 text-white/72">
                {study.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.28em] text-white/58">
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
          </div>
        </div>

        <div className="flex max-w-3xl flex-col gap-8">
          {study.sections.map((section) => (
            <section
              key={section.heading}
              className="rounded-[1.75rem] border border-white/10 bg-black/16 p-6 backdrop-blur-lg"
            >
              <h2 className="flex items-center gap-3 [font-family:var(--font-display)] text-xl tracking-tight text-white">
                <span
                  aria-hidden
                  className={`h-3 w-3 shrink-0 rounded-full ${accent}`}
                />
                {section.heading}
              </h2>
              {section.paragraphs?.map((paragraph, index) => (
                <p key={index} className="mt-3 leading-8 text-white/70">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-4 space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 leading-8 text-white/70">
                      <span
                        aria-hidden
                        className={`mt-[0.7em] h-2 w-2 shrink-0 rounded-full ${accent}`}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
