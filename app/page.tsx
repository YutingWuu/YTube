import Image from "next/image";
import Link from "next/link";
import { positioning } from "@/lib/projects";

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
    title: "Work",
    subtitle: "systems, strategy, and things I build",
    href: "#work",
  },
  {
    frame: "02",
    title: "Field Notes",
    subtitle: "mountains, weather, and open roads",
    href: "#field-notes",
  },
  {
    frame: "03",
    title: "Soundtrack",
    subtitle: "songs that score the scene",
    href: "#soundtrack",
  },
  {
    frame: "04",
    title: "Everyday",
    subtitle: "small rituals and frames I keep",
    href: "#everyday",
  },
  {
    frame: "05",
    title: "Timeline",
    subtitle: "the path underneath the landscape",
    href: "#timeline",
  },
];

const moodCards: ReelCard[] = [
  {
    frame: "A",
    title: "wide air",
    subtitle: "the part of life that feels bigger than me",
    href: "#field-notes",
  },
  {
    frame: "B",
    title: "late drives",
    subtitle: "music, weather, and the road after dark",
    href: "#soundtrack",
  },
  {
    frame: "C",
    title: "quiet systems",
    subtitle: "structure behind the visible work",
    href: "#work",
  },
  {
    frame: "D",
    title: "small rituals",
    subtitle: "the everyday scenes that make memory",
    href: "#everyday",
  },
  {
    frame: "E",
    title: "origin story",
    subtitle: "the chapters that led here",
    href: "#timeline",
  },
];

const lifePanels: AspectPanel[] = [
  {
    id: "work",
    frame: "01",
    eyebrow: "Work",
    title: "Ideas feel most alive to me once they touch a real system.",
    description:
      `${positioning.statement} This is the part of my world built from growth, product, analytics, and experiments that have to move in real life, not just on slides.`,
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
    eyebrow: "Field Notes",
    title: "The landscape is not decoration - it is part of how I think.",
    description:
      "Mountains, wind, cloud lines, empty roads, and the feeling of being placed inside a world much larger than the day I am having. This is the scale reset I keep returning to.",
    chips: ["Mountains", "Weather", "Perspective"],
    className: "lg:col-span-5",
    glowClassName:
      "from-sky-300/12 via-transparent to-transparent lg:bg-[radial-gradient(circle_at_top_right,_rgba(164,202,255,0.18),_transparent_56%)]",
    primaryLink: {
      href: "/about/",
      label: "Read the background",
    },
  },
  {
    id: "soundtrack",
    frame: "03",
    eyebrow: "Soundtrack",
    title: "Some memories arrive first as sound before they become images.",
    description:
      "Concert energy, synth-pop glow, songs on repeat while the road keeps moving - this is the layer that changes mood into atmosphere and turns a week into a scene.",
    chips: ["Concert nights", "Looped songs", "Night drives"],
    className: "lg:col-span-5",
    glowClassName:
      "from-fuchsia-200/10 via-transparent to-transparent lg:bg-[radial-gradient(circle_at_top_left,_rgba(255,193,232,0.16),_transparent_54%)]",
  },
  {
    id: "everyday",
    frame: "04",
    eyebrow: "Everyday Frames",
    title: "I like the tiny scenes that only look cinematic once they are gone.",
    description:
      "Coffee, films, notes to self, camera-roll fragments, light on a window, the stretch of a quiet afternoon - the ordinary details that end up carrying the strongest emotional weight.",
    chips: ["Films", "Rituals", "Camera roll"],
    className: "lg:col-span-7",
    glowClassName:
      "from-amber-100/10 via-transparent to-transparent lg:bg-[radial-gradient(circle_at_bottom_right,_rgba(255,225,173,0.16),_transparent_60%)]",
  },
  {
    id: "timeline",
    frame: "05",
    eyebrow: "Timeline",
    title: "Under the dreamier surface, there is still a very real path.",
    description:
      "The formal pages still live here too: where I have worked, what I have built, and the sequence of chapters that brought all of these different parts of life into one place.",
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
    <div className="bg-[var(--site-bg)] text-white">
      <section className="relative isolate min-h-screen overflow-hidden">
        <Image
          src="/welcome-world-field.png"
          alt="Wide Grand Teton field and mountain background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,6,8,0.38)_0%,rgba(4,6,8,0.2)_26%,rgba(4,6,8,0.12)_52%,rgba(4,6,8,0.7)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.15),transparent_34%)]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-start px-6 pb-24 pt-[17vh] text-center sm:px-10 sm:pt-[18vh]">
          <div className="max-w-5xl">
            <p className="hero-kicker text-[11px] uppercase tracking-[0.46em] text-white/72 sm:text-xs">
              Yuting Wu / Wide Field Archive
            </p>
            <h1 className="hero-title mt-7 text-white">
              <span data-line className="hero-title-label">
                Welcome
              </span>
              <span data-line className="hero-title-main">
                to my <span className="hero-title-emphasis">world</span>
              </span>
            </h1>
            <p className="hero-copy mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/78 sm:text-lg sm:leading-8">
              A wide-field homepage for the parts of life I want to hold in one
              frame: work, weather, music, memory, and the ordinary scenes that
              keep turning cinematic.
            </p>
            <a
              href="#reel"
              className="hero-copy mt-10 inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/8 px-5 py-3 text-[11px] uppercase tracking-[0.34em] text-white backdrop-blur-md transition hover:bg-white/14"
            >
              Scroll into the reel
              <span aria-hidden className="text-base leading-none">
                ↓
              </span>
            </a>
          </div>
        </div>
      </section>

      <div className="relative z-10 -mt-20 bg-[linear-gradient(180deg,rgba(5,6,8,0)_0%,rgba(5,6,8,0.9)_18%,rgba(5,6,8,1)_100%)] pb-24">
        <section id="reel" className="hero-dock mx-auto max-w-7xl px-4 pt-4 sm:px-6">
          <div className="rounded-[2rem] border border-white/10 bg-black/22 p-4 shadow-[0_36px_120px_rgba(0,0,0,0.32)] backdrop-blur-2xl sm:p-5">
            <div className="mb-4 flex flex-col gap-3 px-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.38em] text-white/42">
                  Life Reel
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-white/64">
                  Click into the different parts of my world. The reel keeps
                  moving, but each frame opens a quieter section below.
                </p>
              </div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-white/36">
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
            <p className="text-xs uppercase tracking-[0.38em] text-white/42">
              Different Aspects
            </p>
            <h2 className="mt-4 [font-family:var(--font-display)] text-3xl tracking-tight text-white sm:text-4xl lg:text-[3.3rem]">
              The homepage can stay cinematic and still open into real life.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/68">
              Instead of one formal landing page, this section works more like a
              field guide - a way to move between the more public, more personal,
              and more atmospheric pieces of who I am.
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

        <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6">
          <div className="rounded-[2rem] border border-white/10 bg-black/18 p-4 backdrop-blur-2xl sm:p-5">
            <div className="mb-4 px-2">
              <p className="text-xs uppercase tracking-[0.38em] text-white/42">
                Rolling Captions
              </p>
            </div>
            <FilmStrip items={reelCards} reverse />
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
