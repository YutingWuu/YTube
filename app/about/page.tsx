import { careerStages, positioning } from "@/lib/projects";
import { accentBg } from "@/components/mondrian";

export default function About() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
      <div className="flex flex-col gap-12">
        <div>
          <h1 className="[font-family:var(--font-display)] text-4xl tracking-tight text-white sm:text-5xl">
            About
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/74">
            {positioning.statement} My work spans three stages, each building on
            the last - from the data foundation of a business, through product
            optimization, to driving growth.
          </p>
        </div>

        <ol className="grid gap-4 sm:grid-cols-3">
          {careerStages.map((stage) => (
            <li
              key={stage.stage}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-6"
            >
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-white/48">
                <span
                  aria-hidden
                  className={`h-2.5 w-2.5 rounded-full ${accentBg[stage.accent]}`}
                />
                {stage.stage}
              </p>
              <h2 className="mt-3 [font-family:var(--font-display)] text-lg tracking-tight text-white">
                {stage.title}
              </h2>
              <p className="mt-2 text-sm leading-7 text-white/66">
                {stage.description}
              </p>
            </li>
          ))}
        </ol>

        <blockquote className="rounded-[1.75rem] border border-m-red/35 bg-m-red/[0.08] px-6 py-8">
          <p className="max-w-2xl [font-family:var(--font-display)] text-2xl italic leading-snug tracking-tight text-white">
            From the back-end data systems of a business to the front line of
            user growth - the same grid, brought to life.
          </p>
        </blockquote>

        <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.22em] text-white/64">
          <span>Data Analyst</span>
          <span aria-hidden className="h-2 w-2 rounded-full bg-m-yellow" />
          <span>Product Operator</span>
          <span aria-hidden className="h-2 w-2 rounded-full bg-m-blue" />
          <span>Growth Product Lead</span>
          <span aria-hidden className="h-2 w-2 rounded-full bg-m-red" />
        </p>
      </div>
    </div>
  );
}
