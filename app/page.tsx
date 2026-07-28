import Link from "next/link";
import DayReel from "@/components/day-reel";
import WorldConstants from "@/components/world-constants";
import { withBasePath } from "@/lib/site";

const dayFrames = [
  {
    time: "07:10",
    place: "the mirror",
    note: "starting with the body before anything else",
    imageSrc: "/day-gym.jpg",
    imagePosition: "center 36%",
    href: "#inside",
    orientation: "portrait" as const,
    row: 1 as const,
  },
  {
    time: "08:40",
    place: "the court",
    note: "movement first, before the screen begins to speak",
    imageSrc: "/day-tennis.png",
    imagePosition: "center 48%",
    href: "#outside",
    orientation: "portrait" as const,
    row: 1 as const,
  },
  {
    time: "10:15",
    place: "the tools",
    note: "clear desk, clean keys, no extra noise",
    imageSrc: "/day-keyboard.png",
    imagePosition: "center 58%",
    href: "#inside",
    orientation: "portrait" as const,
    row: 1 as const,
  },
  {
    time: "11:40",
    place: "by the window",
    note: "work feels lighter when the frame stays open",
    imageSrc: "/day-window-work.png",
    imagePosition: "center 52%",
    href: "#inside",
    orientation: "landscape" as const,
    row: 1 as const,
  },
  {
    time: "14:20",
    place: "the desk",
    note: "one task at a time, one clean surface to return to",
    imageSrc: "/day-desk.jpg",
    imagePosition: "center 60%",
    href: "/case-studies/",
    orientation: "landscape" as const,
    row: 2 as const,
  },
  {
    time: "16:35",
    place: "the city edge",
    note: "glass towers, trees, and a little distance from the day",
    imageSrc: "/day-city-park.jpg",
    imagePosition: "center 54%",
    href: "#outside",
    orientation: "portrait" as const,
    row: 2 as const,
  },
  {
    time: "17:20",
    place: "the green",
    note: "shade, benches, and the ordinary calm of other people",
    imageSrc: "/day-green-park.jpg",
    imagePosition: "center 52%",
    href: "#outside",
    orientation: "landscape" as const,
    row: 2 as const,
  },
  {
    time: "19:40",
    place: "the museum",
    note: "looking closely is another way of slowing down",
    imageSrc: "/day-museum.jpg",
    imagePosition: "center 44%",
    href: "#outside",
    orientation: "portrait" as const,
    row: 2 as const,
  },
  {
    time: "22:10",
    place: "home again",
    note: "lamplight, a screen, and the day folding back into itself",
    imageSrc: "/day-evening-room.jpg",
    imagePosition: "center 48%",
    href: "#night",
    orientation: "portrait" as const,
    row: 2 as const,
  },
];

const constants = [
  {
    label: "Morning light",
    note: "The day starts best when it begins gently.",
  },
  {
    label: "One-task focus",
    note: "I like work that can be followed, not chased.",
  },
  {
    label: "Movement",
    note: "The body keeps the mind from becoming too narrow.",
  },
  {
    label: "Wide air",
    note: "A field, a park, a window, anything that restores distance.",
  },
  {
    label: "Evening reset",
    note: "Putting things back is part of how tomorrow begins.",
  },
];

export default function Home() {
  return (
    <div className="bg-[#bfc8cb] text-[#20231f]">
      <section className="relative min-h-screen overflow-hidden bg-[#5f6c71] text-white">
        {/* Static export on GitHub Pages needs a literal base-path-aware image URL. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBasePath("/welcome-world-field.png")}
          alt="A wide Grand Teton field beneath snow-capped mountains"
          className="absolute inset-0 h-full w-full object-cover object-[60%_48%] sm:object-[58%_46%]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(7,13,16,0)_0%,rgba(7,13,16,0.04)_24%,rgba(7,13,16,0.14)_48%,rgba(7,13,16,0.28)_72%,rgba(7,13,16,0.42)_100%),linear-gradient(98deg,rgba(8,14,16,0.8)_4%,rgba(8,14,16,0.56)_28%,rgba(8,14,16,0.18)_56%,rgba(8,14,16,0.12)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(180deg,rgba(111,122,126,0)_0%,rgba(111,122,126,0.4)_68%,#bfc8cb_100%)]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-9 pt-28 sm:px-10 sm:pt-32">
          <div className="hero-dock max-w-[44rem] pt-[8vh] sm:pt-[12vh] lg:pt-[15vh]">
            <div className="flex items-center gap-3 text-white/88">
              <span
                aria-hidden
                className="h-px w-9 bg-[linear-gradient(90deg,rgba(244,241,232,0.96),rgba(244,241,232,0.18))]"
              />
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-white/88">
                A QUIET DAY, HELD IN RHYTHM
              </p>
            </div>
            <h1 className="hero-title text-white">
              <span data-line className="hero-title-main mt-7 block max-w-[12ch]">
                Welcome
                <br />
                to my world
              </span>
            </h1>
            <div className="hero-copy mt-7 max-w-[35rem] space-y-2 text-[0.96rem] leading-[1.6] text-white/88 sm:text-[1.02rem]">
              <p>
                I like wide grass, clear routines, and a life with room to
                breathe.
              </p>
              <p lang="zh-CN" className="text-white/84">
                我喜欢辽阔，也喜欢有秩序地过每一天。
              </p>
              <p className="text-white/78">
                The work is here too, but first this is where I begin.
              </p>
            </div>
            <Link
              href="#day-title"
              className="group mt-9 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-white/86 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#edf0e3]"
            >
              <span className="relative pb-1">
                Follow the day
                <span className="absolute inset-x-0 bottom-0 h-px bg-white/48 transition group-hover:bg-white/80" />
              </span>
              <span className="inline-flex items-center pb-1 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="mt-auto flex justify-end pt-14">
            <div className="hero-dock flex flex-wrap items-start justify-end gap-3 sm:gap-4">
              <IconLink href="/about/" label="About">
                <CirclePersonIcon />
              </IconLink>
              <IconLink href="/case-studies/" label="Work">
                <BriefcaseIcon />
              </IconLink>
              <IconLink href="/resume/" label="Resume">
                <DocumentIcon />
              </IconLink>
              <IconLink href="mailto:t112255zl@gmail.com" label="Contact">
                <MailIcon />
              </IconLink>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-[radial-gradient(circle_at_top,rgba(234,238,239,0.48)_0%,rgba(234,238,239,0)_28%),linear-gradient(180deg,#bfc8cb_0%,#c8d0d2_18%,#d9dddc_58%,#c7cecd_100%)] pb-24 pt-14 sm:pt-20">
        <section aria-labelledby="day-title">
          <div className="mx-auto flex max-w-7xl items-end justify-between gap-6 px-6 sm:px-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#566168]">
                Movement, work, and air
              </p>
              <h2
                id="day-title"
                className="mt-3 [font-family:var(--font-display)] text-3xl tracking-tight text-[#232724] sm:text-4xl"
              >
                A day I know by heart.
              </h2>
            </div>
            <p className="hidden max-w-44 text-right text-xs leading-5 text-[#5f6967] sm:block">
              A two-line record that feels closer to an actual life.
            </p>
          </div>
          <DayReel items={dayFrames} />
        </section>

        <section className="mx-auto mt-18 max-w-7xl px-6 sm:mt-24 sm:px-10">
          <WorldConstants items={constants} />
        </section>

        <section className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 sm:px-10">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-16">
            <div id="inside" className="scroll-mt-24 lg:col-span-7">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#566168]">
                Inside
              </p>
              <h2 className="mt-4 max-w-xl [font-family:var(--font-display)] text-3xl leading-[1.02] tracking-tight text-[#232724] sm:text-4xl">
                The room is small enough for concentration.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#4f5857]">
                I like a clear desk, a readable plan, and mornings that begin
                without hurry. The rules are not restrictive. They make the day
                feel spacious enough to hold both work and life.
              </p>
              <Link
                href="/case-studies/"
                className="mt-7 inline-flex border-b border-[#4d5556] pb-1 text-sm text-[#303637] transition hover:border-transparent"
              >
                The work lives here too
              </Link>
            </div>

            <div id="outside" className="scroll-mt-24 lg:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#566168]">
                Outside
              </p>
              <h2 className="mt-4 [font-family:var(--font-display)] text-3xl leading-[1.02] tracking-tight text-[#232724] sm:text-4xl">
                The view keeps the plan from becoming too small.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#4f5857]">
                Trees, city edges, museums, a field at distance. The world
                stays wide even when the structure of the day is ordinary.
              </p>
            </div>

            <div
              id="night"
              className="scroll-mt-24 border-t border-white/45 pt-8 lg:col-span-12"
            >
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#566168]">
                    At night
                  </p>
                  <p className="mt-3 max-w-xl [font-family:var(--font-display)] text-2xl leading-tight text-[#2f352e] sm:text-3xl">
                    I put things back where they belong, so tomorrow has a
                    place to begin.
                  </p>
                </div>
                <div className="flex gap-5 text-sm text-[#4d5556]">
                  <Link
                    href="/about/"
                    className="border-b border-[#7b8281] pb-1 transition hover:border-transparent"
                  >
                    About
                  </Link>
                  <Link
                    href="/resume/"
                    className="border-b border-[#7b8281] pb-1 transition hover:border-transparent"
                  >
                    Resume
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
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
    "group inline-flex w-[4.65rem] flex-col items-center gap-2 text-center text-[10px] uppercase tracking-[0.22em] text-white/72 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/85";
  const shellClassName =
    "inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/28 bg-white/4 text-white/88 transition group-hover:border-white/80 group-hover:bg-white/10 group-hover:text-white";

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} aria-label={label} className={className}>
        <span className={shellClassName}>{children}</span>
        <span>{label}</span>
      </a>
    );
  }

  return (
    <Link href={href} aria-label={label} className={className}>
      <span className={shellClassName}>{children}</span>
      <span>{label}</span>
    </Link>
  );
}

function CirclePersonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px] fill-none stroke-current">
      <circle cx="12" cy="12" r="9" strokeWidth="1.4" />
      <circle cx="12" cy="9" r="2.3" strokeWidth="1.4" />
      <path
        d="M7.8 16.6c1-1.9 2.5-2.9 4.2-2.9s3.2 1 4.2 2.9"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px] fill-none stroke-current">
      <rect x="4.5" y="7.5" width="15" height="10.5" rx="2" strokeWidth="1.4" />
      <path
        d="M9 7.5V6.4c0-.9.7-1.6 1.6-1.6h2.8c.9 0 1.6.7 1.6 1.6v1.1M4.5 12.2h15"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px] fill-none stroke-current">
      <path
        d="M8 4.8h6l3 3v11.4c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V6.6C6.2 5.6 7 4.8 8 4.8Z"
        strokeWidth="1.4"
      />
      <path
        d="M14 4.8v3.3h3M9.2 12h5.6M9.2 15.2h5.6"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px] fill-none stroke-current">
      <rect x="4.5" y="6.5" width="15" height="11" rx="2" strokeWidth="1.4" />
      <path
        d="m6.5 8.3 5.5 4.6 5.5-4.6"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
