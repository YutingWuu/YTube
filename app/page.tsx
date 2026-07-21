import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <section>
        <h1 className="text-3xl font-bold">Yuting Wu</h1>
        <p className="mt-2 text-lg text-black/70 dark:text-white/70">
          Placeholder positioning statement — growth product, product
          analytics, and data applications.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Selected case studies</h2>
        <ul className="mt-4 flex flex-col gap-4">
          {projects.map((project) => (
            <li
              key={project.slug}
              className="rounded-lg border border-black/10 p-4 dark:border-white/10"
            >
              <h3 className="font-medium">{project.title}</h3>
              <p className="mt-1 text-sm text-black/70 dark:text-white/70">
                {project.summary}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
