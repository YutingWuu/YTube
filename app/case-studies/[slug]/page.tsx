import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/projects";

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

  return (
    <article className="flex flex-col gap-8">
      <div>
        <Link
          href="/"
          className="text-sm text-black/60 hover:underline dark:text-white/60"
        >
          ← Back
        </Link>
        <p className="mt-4 text-xs font-medium uppercase tracking-wide text-black/50 dark:text-white/50">
          {study.subtitle}
        </p>
        <h1 className="mt-1 text-2xl font-bold">{study.title}</h1>
        <p className="mt-3 text-black/70 dark:text-white/70">
          {study.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {study.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-black/10 px-2 py-0.5 text-xs text-black/60 dark:border-white/10 dark:text-white/60"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {study.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-semibold">{section.heading}</h2>
            {section.paragraphs?.map((paragraph, index) => (
              <p
                key={index}
                className="mt-2 text-black/70 dark:text-white/70"
              >
                {paragraph}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-2 list-disc pl-5 text-black/70 dark:text-white/70">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
