import { careerStages, positioning } from "@/lib/projects";
import { accentBg } from "@/components/mondrian";

export default function About() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h1 className="font-serif text-4xl tracking-tight">About</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed opacity-80">
          {positioning.statement} My work spans three stages, each building on
          the last — from the data foundation of a business, through product
          optimization, to driving growth.
        </p>
      </div>

      <ol className="grid gap-[2px] border-2 border-ink bg-ink sm:grid-cols-3">
        {careerStages.map((stage) => (
          <li key={stage.stage} className="bg-paper p-5 sm:p-6">
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] opacity-60">
              <span
                aria-hidden
                className={`h-2.5 w-2.5 ${accentBg[stage.accent]}`}
              />
              {stage.stage}
            </p>
            <h2 className="mt-3 font-serif text-lg leading-snug tracking-tight">
              {stage.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed opacity-75">
              {stage.description}
            </p>
          </li>
        ))}
      </ol>

      <blockquote className="border-l-[6px] border-m-red pl-6">
        <p className="max-w-xl font-serif text-2xl italic leading-snug tracking-tight">
          From the back-end data systems of a business to the front line of
          user growth — the same grid, brought to life.
        </p>
      </blockquote>

      <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.18em] opacity-80">
        <span>Data Analyst</span>
        <span aria-hidden className="h-2 w-2 bg-m-yellow" />
        <span>Product Operator</span>
        <span aria-hidden className="h-2 w-2 bg-m-blue" />
        <span>Growth Product Lead</span>
        <span aria-hidden className="h-2 w-2 bg-m-red" />
      </p>
    </div>
  );
}
