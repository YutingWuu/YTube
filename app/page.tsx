import Link from "next/link";
import DayReel from "@/components/day-reel";
import { withBasePath } from "@/lib/site";

const dayFrames = [
  {
    time: "07:20",
    place: "by the window",
    note: "first light on the desk",
    imageSrc: "/home-wallpaper-v3.png",
    imagePosition: "center 60%",
    href: "#inside",
  },
  {
    time: "10:40",
    place: "the work table",
    note: "one thing at a time",
    imageSrc: "/welcome-world-field.png",
    imagePosition: "center 64%",
    href: "/case-studies/",
  },
  {
    time: "18:16",
    place: "past the window",
    note: "the grass holds the last light",
    imageSrc: "/welcome-world-field.png",
    imagePosition: "center 48%",
    href: "#outside",
  },
  {
    time: "22:08",
    place: "home again",
    note: "putting the day back in its place",
    imageSrc: "/home-wallpaper-v3.png",
    imagePosition: "center 76%",
    href: "#night",
  },
];

export default function Home() {
  return (
    <div className="bg-[#b4b2aa] text-[#20231f]">
      <section className="relative min-h-screen overflow-hidden bg-[#58615b] text-white">
        {/* Static export on GitHub Pages needs a literal base-path-aware image URL. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBasePath("/welcome-world-field.png")}
          alt="A wide Grand Teton field beneath snow-capped mountains"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,16,13,0.27)_0%,rgba(11,16,13,0.08)_42%,rgba(11,16,13,0.13)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(180deg,rgba(105,108,102,0)_0%,rgba(116,113,105,0.44)_68%,#b4b2aa_100%)]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-9 pt-28 sm:px-10 sm:pt-32">
          <div className="hero-dock max-w-3xl pt-[7vh] sm:pt-[9vh]">
            <h1 className="hero-title text-white">
              <span data-line className="hero-title-main">
                Welcome
                <br />
                to my world
              </span>
            </h1>
            <p className="hero-copy mt-7 max-w-xs text-[0.9rem] leading-7 text-white/80 sm:text-base">
              A quiet room inside.
              <br />
              Mountains waiting outside.
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

      <main className="bg-[linear-gradient(180deg,#b4b2aa_0%,#dedbd1_18%,#ece8dc_72%,#d3d0c6_100%)] pb-24 pt-14 sm:pt-20">
        <section aria-labelledby="day-title">
          <div className="mx-auto flex max-w-7xl items-end justify-between gap-6 px-6 sm:px-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#4b514a]">
                Thursday, in four moments
              </p>
              <h2
                id="day-title"
                className="mt-3 [font-family:var(--font-display)] text-3xl tracking-tight text-[#272b25] sm:text-4xl"
              >
                A day I know by heart.
              </h2>
            </div>
            <p className="hidden max-w-40 text-right text-xs leading-5 text-[#596057] sm:block">
              Still images now. Motion will live here later.
            </p>
          </div>
          <DayReel items={dayFrames} />
        </section>

        <section className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 sm:px-10">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-16">
            <div id="inside" className="scroll-mt-24 lg:col-span-7">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#596057]">
                Inside
              </p>
              <h2 className="mt-4 max-w-xl [font-family:var(--font-display)] text-3xl leading-[1.02] tracking-tight text-[#272b25] sm:text-4xl">
                The room is small enough for concentration.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#4f554d]">
                I like a clear desk, a readable plan, and work that can be
                returned to without noise. The rules are not restrictive. They
                leave more room for what matters.
              </p>
              <Link
                href="/case-studies/"
                className="mt-7 inline-flex border-b border-[#4d554d] pb-1 text-sm text-[#30362f] transition hover:border-transparent"
              >
                Read the work
              </Link>
            </div>

            <div id="outside" className="scroll-mt-24 lg:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#596057]">
                Outside
              </p>
              <h2 className="mt-4 [font-family:var(--font-display)] text-3xl leading-[1.02] tracking-tight text-[#272b25] sm:text-4xl">
                The view keeps the plan from becoming too small.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#4f554d]">
                Grass, a single tree, a house at a distance, and a line of
                mountains. The world stays wide even when the day is ordinary.
              </p>
            </div>

            <div id="night" className="scroll-mt-24 border-t border-[#9c9b92] pt-8 lg:col-span-12">
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#596057]">
                    At night
                  </p>
                  <p className="mt-3 max-w-xl [font-family:var(--font-display)] text-2xl leading-tight text-[#2f352e] sm:text-3xl">
                    I put things back where they belong, so tomorrow has a
                    place to begin.
                  </p>
                </div>
                <div className="flex gap-5 text-sm text-[#4d554d]">
                  <Link href="/about/" className="border-b border-[#777b72] pb-1 transition hover:border-transparent">
                    About
                  </Link>
                  <Link href="/resume/" className="border-b border-[#777b72] pb-1 transition hover:border-transparent">
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
    "inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white/88 transition hover:border-white/80 hover:bg-white/10 hover:text-white";

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
    <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px] fill-none stroke-current">
      <circle cx="12" cy="12" r="9" strokeWidth="1.4" />
      <circle cx="12" cy="9" r="2.3" strokeWidth="1.4" />
      <path d="M7.8 16.6c1-1.9 2.5-2.9 4.2-2.9s3.2 1 4.2 2.9" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px] fill-none stroke-current">
      <rect x="4.5" y="7.5" width="15" height="10.5" rx="2" strokeWidth="1.4" />
      <path d="M9 7.5V6.4c0-.9.7-1.6 1.6-1.6h2.8c.9 0 1.6.7 1.6 1.6v1.1M4.5 12.2h15" strokeWidth="1.4" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px] fill-none stroke-current">
      <path d="M8 4.8h6l3 3v11.4c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V6.6C6.2 5.6 7 4.8 8 4.8Z" strokeWidth="1.4" />
      <path d="M14 4.8v3.3h3M9.2 12h5.6M9.2 15.2h5.6" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px] fill-none stroke-current">
      <rect x="4.5" y="6.5" width="15" height="11" rx="2" strokeWidth="1.4" />
      <path d="m6.5 8.3 5.5 4.6 5.5-4.6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
