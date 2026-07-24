import Link from "next/link";
import { positioning } from "@/lib/projects";
import { withBasePath } from "@/lib/site";

type ReelCard = {
  frame: string;
  title: string;
  subtitle: string;
  href: string;
};

type AspectLink = {
  href: string;
  label: string;
};

type AspectPanel = {
  id: string;
  frame: string;
  eyebrow: string;
  title: string;
  description: string;
  chips: string[];
  className: string;
  glowClassName: string;
  primaryLink?: AspectLink;
  secondaryLink?: AspectLink;
};

const dayFrames: ReelCard[] = [
  {
    frame: "01",
    title: "Morning ritual",
    subtitle: "the small repetitions that make a day feel known",
    href: "#everyday",
  },
  {
    frame: "02",
    title: "Work in progress",
    subtitle: "turning complicated things into calm, useful systems",
    href: "/case-studies/",
  },
  {
    frame: "03",
    title: "Wide field",
    subtitle: "distance, grass, and enough room to hear yourself think",
    href: "#field-notes",
  },
  {
    frame: "04",
    title: "Evening return",
    subtitle: "music, familiar routes, and the quiet end of a day",
    href: "#everyday",
  },
];

const lifePanels: AspectPanel[] = [
  {
    id: "work",
    frame: "01",
    eyebrow: "Order",
    title: "I like lives that feel wide, but never directionless.",
    description:
      `${positioning.statement} I care about systems, growth, and product work because they let me make something complex feel clear, calm, and usable.`,
    chips: ["Case studies", "Growth systems", "Product thinking"],
    className: "lg:col-span-7",
    glowClassName:
      "from-white/12 via-white/4 to-transparent lg:bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_58%)]",
    primaryLink: {
      href: "/case-studies/",
      label: "Open the work archive",
    },
    secondaryLink: {
      href: "/resume/",
      label: "See the timeline",
    },
  },
  {
    id: "field-notes",
    frame: "02",
    eyebrow: "Field",
    title: "The world I want is grassy, open, wind-lit, and unhurried.",
    description:
      "Big sky, quiet tree lines, one distant house, evening light, and enough space to hear yourself think. The landscape is not only a mood; it is the emotional architecture underneath everything else.",
    chips: ["Grassland", "Tree line", "Evening air"],
    className: "lg:col-span-5",
    glowClassName:
      "from-slate-200/10 via-transparent to-transparent lg:bg-[radial-gradient(circle_at_top_right,_rgba(203,213,225,0.18),_transparent_56%)]",
  },
  {
    id: "soundtrack",
    frame: "03",
    eyebrow: "Sound",
    title: "Idealism needs atmosphere, not just plans.",
    description:
      "Music, night air, slow drives, and scenes that feel slightly cinematic keep the practical parts of life from becoming flat. This is where longing and momentum meet.",
    chips: ["Concert nights", "Night drives", "Idealism"],
    className: "lg:col-span-5",
    glowClassName:
      "from-zinc-200/8 via-transparent to-transparent lg:bg-[radial-gradient(circle_at_top_left,_rgba(228,228,231,0.14),_transparent_54%)]",
  },
  {
    id: "everyday",
    frame: "04",
    eyebrow: "Routine",
    title: "Predictability, to me, is not boring. It is a form of peace.",
    description:
      "I like repeated mornings, ordered rooms, familiar routes, and small rituals that make the future feel legible. The house in this world is quiet because its rhythms are already known.",
    chips: ["Rules", "Rhythm", "Private order"],
    className: "lg:col-span-7",
    glowClassName:
      "from-stone-200/8 via-transparent to-transparent lg:bg-[radial-gradient(circle_at_bottom_right,_rgba(231,229,228,0.14),_transparent_60%)]",
  },
  {
    id: "timeline",
    frame: "05",
    eyebrow: "Path",
    title: "Under the moodboard, there is still a very real life in motion.",
    description:
      "The formal pages still matter: where I have worked, what I have built, and the sequence of decisions that made this world possible in the first place.",
    chips: ["Resume", "Background", "Next chapter"],
    className: "lg:col-span-12",
    glowClassName:
      "from-white/10 via-transparent to-transparent lg:bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),_transparent_62%)]",
    primaryLink: {
      href: "/resume/",
      label: "Open resume",
    },
    secondaryLink: {
      href: "/about/",
      label: "Open about",
    },
  },
];

export default function Home() {
  return (
    <div className="bg-[#17191b] text-white">
      <section className="relative min-h-screen overflow-hidden">
        {/* Static export on GitHub Pages needs a literal base-path-aware image URL. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBasePath("/welcome-world-field.png")}
          alt="Wide Grand Teton field and mountain background"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(163,166,169,0.14)_0%,rgba(9,11,13,0.08)_32%,rgba(7,9,11,0.2)_68%,rgba(38,40,42,0.84)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,9,11,0.24)_0%,rgba(7,9,11,0.08)_31%,rgba(7,9,11,0.04)_65%,rgba(7,9,11,0.18)_100%)]" />
        <div
          aria-hidden
          className="film-grain pointer-events-none absolute inset-0 opacity-30"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-[linear-gradient(180deg,rgba(133,135,137,0)_0%,rgba(101,103,105,0.4)_48%,#4b4d4e_100%)]"
        />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-10 pt-28 sm:px-10 sm:pt-32">
          <div className="hero-dock max-w-4xl pt-[7vh] sm:pt-[9vh]">
            <h1 className="hero-title text-white">
              <span data-line className="hero-title-main max-w-4xl">
                Welcome
                <br />
                to my world
              </span>
            </h1>
            <p className="hero-copy mt-8 max-w-sm text-[0.9rem] leading-7 text-white/72 sm:text-base">
              There is room for the unknown,
              <br />
              and a rhythm I return to.
            </p>
          </div>

          <div className="mt-auto flex justify-end pt-12">
            <div className="hero-dock flex items-center gap-2.5">
              <IconLink href="/about/" label="About">
                <CirclePersonIcon />
              </IconLink>
              <IconLink href="/case-studies/" label="Work">
                <BriefcaseIcon />
              </IconLink>
              <IconLink href="/resume/" label="Resume">
                <DocumentIcon />
              </IconLink>
              <IconLink href="mailto:t112255zl@gmail.com" label="Mail">
                <MailIcon />
              </IconLink>
            </div>
          </div>
        </div>
      </section>

      <div className="relative bg-[linear-gradient(180deg,#4b4d4e_0%,#858786_14%,#b0b1ae_31%,#9e9f9d_50%,#6c6e6e_78%,#303335_100%)] pb-24 pt-14 sm:pt-20">
        <section id="reel" className="hero-dock">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.42em] text-white/50">
                  A day in four frames
                </p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/72">
                  The same world, returned to in different light.
                </p>
              </div>
              <p className="hidden text-[10px] uppercase tracking-[0.32em] text-white/44 sm:block">
                Pause to look closer
              </p>
            </div>
          </div>
          <FilmStrip items={dayFrames} />
        </section>

        <section className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 sm:px-10">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.42em] text-white/48">
              What holds it together
            </p>
            <h2 className="mt-5 [font-family:var(--font-display)] text-3xl leading-[0.98] tracking-tight text-white sm:text-4xl lg:text-[3.2rem]">
              A wide world, kept in rhythm.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              The landscape is expansive, but the life inside it is chosen with
              care. These are the few things I return to.
            </p>
          </div>

          <div className="mt-9 grid gap-6 lg:grid-cols-12">
            {lifePanels.map((panel) => (
              <article
                key={panel.id}
                id={panel.id}
                className={`${panel.className} scroll-mt-28 relative overflow-hidden border-t border-white/18 px-0 py-7 sm:py-9`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06),transparent_42%)] opacity-60"
                />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.34em] text-white/44">
                      {panel.eyebrow}
                    </p>
                    <span className="text-[11px] uppercase tracking-[0.34em] text-white/34">
                      {panel.frame}
                    </span>
                  </div>

                  <h3 className="mt-5 max-w-3xl [font-family:var(--font-display)] text-2xl leading-tight tracking-tight text-white sm:text-[2rem]">
                    {panel.title}
                  </h3>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-white/68 sm:text-base sm:leading-8">
                    {panel.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.26em] text-white/56">
                    {panel.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/14 px-3 py-1.5"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  {(panel.primaryLink || panel.secondaryLink) && (
                    <div className="mt-7 flex flex-wrap gap-3">
                      {panel.primaryLink && (
                        <Link
                          href={panel.primaryLink.href}
                          className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/9 px-4 py-2.5 text-[11px] uppercase tracking-[0.28em] text-white transition hover:bg-white/14"
                        >
                          {panel.primaryLink.label}
                        </Link>
                      )}
                      {panel.secondaryLink && (
                        <Link
                          href={panel.secondaryLink.href}
                          className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2.5 text-[11px] uppercase tracking-[0.28em] text-white/76 transition hover:border-white/18 hover:text-white"
                        >
                          {panel.secondaryLink.label}
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function FilmStrip({ items }: { items: ReelCard[] }) {
  const loopedItems = [...items, ...items];

  return (
    <div className="film-marquee mt-8 sm:mt-10">
      <div className="film-track">
        {loopedItems.map((item, index) => (
          <Link key={`${item.frame}-${index}`} href={item.href} className="film-card">
            <div className="relative z-10 flex items-center justify-between gap-4">
              <span className="text-[11px] uppercase tracking-[0.32em] text-white/42">
                {item.frame}
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/34">
                day / {item.frame}
              </span>
            </div>
            <div className="relative z-10 mt-7">
              <p className="text-lg tracking-tight text-white sm:text-xl">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-white/60">
                {item.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const className =
    "inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/12 bg-black/18 text-white/78 backdrop-blur-md transition hover:border-white/22 hover:bg-white/8 hover:text-white";

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} aria-label={label} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={label} className={className}>
      {children}
    </Link>
  );
}

function CirclePersonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-none stroke-current">
      <circle cx="12" cy="12" r="9" strokeWidth="1.4" />
      <circle cx="12" cy="9" r="2.3" strokeWidth="1.4" />
      <path d="M7.8 16.6c1-1.9 2.5-2.9 4.2-2.9s3.2 1 4.2 2.9" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-none stroke-current">
      <rect x="4.5" y="7.5" width="15" height="10.5" rx="2" strokeWidth="1.4" />
      <path d="M9 7.5V6.4c0-.9.7-1.6 1.6-1.6h2.8c.9 0 1.6.7 1.6 1.6v1.1" strokeWidth="1.4" />
      <path d="M4.5 12.2h15" strokeWidth="1.4" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-none stroke-current">
      <path d="M8 4.8h6l3 3v11.4c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V6.6C6.2 5.6 7 4.8 8 4.8Z" strokeWidth="1.4" />
      <path d="M14 4.8v3.3h3" strokeWidth="1.4" />
      <path d="M9.2 12h5.6M9.2 15.2h5.6" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-none stroke-current">
      <rect x="4.5" y="6.5" width="15" height="11" rx="2" strokeWidth="1.4" />
      <path d="m6.5 8.3 5.5 4.6 5.5-4.6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
