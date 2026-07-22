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
    <article className="flex flex-col gap-10">
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
              {study.subtitle}
            </p>
            <h1 className="mt-3 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
              {study.title}
            </h1>
            <p className="mt-4 max-w-2xl leading-relaxed opacity-80">
              {study.summary}
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

      <div className="flex max-w-2xl flex-col gap-8">
        {study.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="flex items-center gap-3 font-serif text-xl tracking-tight">
              <span aria-hidden className={`h-3 w-3 shrink-0 ${accent}`} />
              {section.heading}
            </h2>
            {section.paragraphs?.map((paragraph, index) => (
              <p key={index} className="mt-3 leading-relaxed opacity-80">
                {paragraph}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-3 space-y-2">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 leading-relaxed">
                    <span
                      aria-hidden
                      className={`mt-[0.5em] h-2 w-2 shrink-0 ${accent}`}
                    />
                    <span className="opacity-80">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
