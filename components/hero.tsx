import Image from "next/image";
import Link from "next/link";

/*
 * Cinematic photo hero. Replace public/hero.svg with the real
 * Grand Teton photo (public/hero.jpg) and update the `src` below —
 * crop so the figure sits on the right third, leaving the sky/mountain
 * on the left clear for the headline.
 */

const iconLinks = [
  { label: "About", href: "/about/", icon: PersonIcon },
  { label: "Work", href: "#work", icon: BriefcaseIcon },
  { label: "Resume", href: "/resume/", icon: DocIcon },
  { label: "Contact", href: "mailto:t112255zl@gmail.com", icon: MailIcon },
];

export function Hero() {
  return (
    <section className="relative left-1/2 -mt-12 min-h-[92vh] w-screen -translate-x-1/2 overflow-hidden">
      <Image
        src="/hero.svg"
        alt="A lone figure standing in an open grass field beneath the Teton range at dusk"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_center]"
      />
      <div aria-hidden className="hero-overlay absolute inset-0" />

      <div className="relative mx-auto flex min-h-[92vh] w-full max-w-4xl flex-col justify-end px-6 pb-24 sm:pb-28">
        <div className="max-w-2xl">
          <p className="eyebrow inline-flex flex-col text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
            <span className="font-mono text-sm font-medium uppercase tracking-[0.22em]">
              Product, Growth &amp; Data Analytics
            </span>
            <span aria-hidden className="mt-2 h-[3px] w-16 bg-m-yellow" />
          </p>

          <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.55)] sm:text-7xl">
            Welcome to my world
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]">
            I use SQL, experimentation, and user behavior data to diagnose
            problems, improve digital products, and support measurable growth —
            across CRM and reporting, AI-powered user journeys, and
            multi-channel acquisition.
          </p>

          <Link
            href="#work"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-olive px-7 py-3 font-mono text-xs uppercase tracking-[0.18em] text-white transition-colors hover:bg-olive-bright"
          >
            Explore the work
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>

      <nav
        aria-label="Quick links"
        className="absolute bottom-8 right-6 z-10 flex gap-5 sm:gap-7"
      >
        {iconLinks.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className="group flex flex-col items-center gap-1.5 text-white/85 transition-colors hover:text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.7)]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 transition-colors group-hover:border-white/80">
              <Icon />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
              {label}
            </span>
          </Link>
        ))}
      </nav>
    </section>
  );
}

function PersonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
