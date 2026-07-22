import { positioning, roleEvolution } from "@/lib/projects";
import { accentBg } from "@/components/mondrian";

export default function About() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h1 className="font-serif text-4xl tracking-tight">About</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed opacity-80">
          {positioning.statement}
        </p>
        <p className="mt-3 max-w-2xl leading-relaxed opacity-70">
          {positioning.howIWork}
        </p>
      </div>

      <div>
        <div className="flex items-baseline justify-between border-b-[3px] border-ink pb-3">
          <h2 className="font-serif text-2xl tracking-tight">
            How my role evolved
          </h2>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed opacity-70">
          Not a planned path — the company kept changing, and my role changed
          with what the business needed next. Along the way I went from Data
          Analyst to Product Lead.
        </p>
        <ol className="mt-6 grid gap-[2px] border-2 border-ink bg-ink sm:grid-cols-3">
          {roleEvolution.map((area) => (
            <li key={area.index} className="bg-paper p-5 sm:p-6">
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] opacity-60">
                <span
                  aria-hidden
                  className={`h-2.5 w-2.5 ${accentBg[area.accent]}`}
                />
                {area.index}
              </p>
              <h3 className="mt-3 font-serif text-lg leading-snug tracking-tight">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed opacity-75">
                {area.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
