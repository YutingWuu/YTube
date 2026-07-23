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

const reelCards: ReelCard[] = [
  {
    frame: "01",
    title: "Order",
    subtitle: "the systems and rituals that make life feel steady",
    href: "#work",
  },
  {
    frame: "02",
    title: "Field",
    subtitle: "open grass, distance, and the calm of wide air",
    href: "#field-notes",
  },
  {
    frame: "03",
    title: "Sound",
    subtitle: "the songs and scenes that keep the world moving",
    href: "#soundtrack",
  },
  {
    frame: "04",
    title: "Routine",
    subtitle: "the private patterns that make life predictable",
    href: "#everyday",
  },
  {
    frame: "05",
    title: "Path",
    subtitle: "the timeline under everything else",
    href: "#timeline",
  },
];

const moodCards: ReelCard[] = [
  {
    frame: "A",
    title: "wide light",
    subtitle: "a world that feels larger than the day itself",
    href: "#field-notes",
  },
  {
    frame: "B",
    title: "house rules",
    subtitle: "stability, rhythm, and self-made order",
    href: "#everyday",
  },
  {
    frame: "C",
    title: "ideal weather",
    subtitle: "quiet optimism and a horizon to move toward",
    href: "#soundtrack",
  },
  {
    frame: "D",
    title: "work map",
    subtitle: "where structure turns into real systems",
    href: "#work",
  },
  {
    frame: "E",
    title: "long future",
    subtitle: "the chapters that keep opening outward",
    href: "#timeline",
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
    <div className="bg-[linear-gradient(180deg,#07090c_0%,#0d1014_18%,#2a2d31_54%,#0a0d11_100%)] text-white">
      <section className="relative overflow-hidden px-5 pb-16 pt-24 sm:px-8 sm:pt-28 lg:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_52%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-[20rem] h-56 bg-[linear-gradient(180deg,rgba(164,164,164,0.08),rgba(164,164,164,0))]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="hero-kicker text-[11px] uppercase tracking-[0.5em] text-white/58 sm:text-xs">
              Yuting Wu / Welcome Archive
            </p>
            <h1 className="hero-title mt-6 text-white">
              <span data-line className="hero-title-label">
                Welcome to my world
              </span>
              <span data-line className="hero-title-main">
                Wide, quiet,
                <br />
                idealistic
              </span>
            </h1>
            <p className="hero-copy mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/72 sm:text-lg sm:leading-8">
              A life shaped by open land, evening light, and the calm
              predictability of rules I choose to keep.
            </p>
          </div>

          <div className="hero-frame hero-dock mt-10 sm:mt-12">
            <div className="hero-frame-shell">
              <div className="hero-frame-image aspect-video">
                {/* Static export on GitHub Pages needs a literal base-path-aware image URL. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBasePath("/welcome-world-field.png")}
                  alt="Wide Grand Teton field and mountain background"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,12,0.18)_0%,rgba(7,9,12,0.02)_28%,rgba(7,9,12,0.14)_55%,rgba(7,9,12,0.68)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(255,255,255,0.16),transparent_34%)]" />
                <div className="absolute inset-x-[8%] top-[10%] max-w-2xl">
                  <p className="text-[11px] uppercase tracking-[0.42em] text-white/56">
                    grass / tree / horizon / house rules
                  </p>
                  <p className="mt-4 max-w-xl [font-family:var(--font-display)] text-2xl leading-tight text-white sm:text-3xl lg:text-[2.7rem]">
                    I want my world to feel expansive,
                    <br />
                    but never chaotic.
                  </p>
                </div>
                <div className="absolute bottom-[9%] left-[8%] right-[8%] flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                  <p className="max-w-lg text-sm leading-7 text-white/68 sm:text-base">
                    The image is the invitation: open field, distance, air, and
                    the feeling that there is still room to live carefully.
                  </p>
                  <a
                    href="#reel"
                    className="inline-flex items-center gap-3 self-start rounded-full border border-white/16 bg-black/24 px-5 py-3 text-[11px] uppercase tracking-[0.34em] text-white backdrop-blur-md transition hover:bg-white/12"
                  >
                    Enter the field
                    <span aria-hidden className="text-base leading-none">
                      ↓
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-copy mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            <p>
              This homepage is less a portfolio cover and more a map of the
              world I am building: one part grass and sunset, one part order
              and repeatable rhythm.
            </p>
          </div>
        </div>
      </section>

      <div className="relative bg-[linear-gradient(180deg,rgba(118,118,118,0.16)_0%,rgba(53,55,58,0.4)_18%,rgba(13,16,20,0.96)_48%,#090b0f_100%)] pb-24 pt-2">
        <section id="reel" className="hero-dock mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 shadow-[0_32px_120px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-5">
            <div className="mb-4 flex flex-col gap-3 px-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.38em] text-white/40">
                  Story Reel
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-white/62">
                  These are not just categories. They are the recurring pieces
                  of the same world: order, field, sound, routine, and path.
                </p>
              </div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-white/34">
                Hover to pause
              </p>
            </div>

            <FilmStrip items={reelCards} />
            <div className="mt-4">
              <FilmStrip items={moodCards} reverse />
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-7xl px-6 sm:px-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.38em] text-white/40">
              World Logic
            </p>
            <h2 className="mt-4 [font-family:var(--font-display)] text-3xl tracking-tight text-white sm:text-4xl lg:text-[3.2rem]">
              The point is not only to feel something. It is to understand how
              I live inside it.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66">
              I want the mood to be spacious and idealistic, but the structure
              to feel measured. The world is wide; the life inside it is chosen
              carefully.
            </p>
          </div>

          <div className="mt-9 grid gap-6 lg:grid-cols-12">
            {lifePanels.map((panel) => (
              <article
                key={panel.id}
                id={panel.id}
                className={`${panel.className} scroll-mt-28 relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-7`}
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${panel.glowClassName} opacity-80`}
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

function FilmStrip({
  items,
  reverse = false,
}: {
  items: ReelCard[];
  reverse?: boolean;
}) {
  const loopedItems = [...items, ...items];

  return (
    <div className="film-marquee">
      <div className="film-track" data-reverse={reverse}>
        {loopedItems.map((item, index) => (
          <a key={`${item.frame}-${index}`} href={item.href} className="film-card">
            <div className="relative z-10 flex items-center justify-between gap-4">
              <span className="text-[11px] uppercase tracking-[0.32em] text-white/42">
                {item.frame}
              </span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-white/30">
                frame
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
          </a>
        ))}
      </div>
    </div>
  );
}
