import Image from "next/image";
import Link from "next/link";
import { positioning } from "@/lib/projects";

type IconProps = {
  className?: string;
};

type QuickLink = {
  label: string;
  href: string;
  icon: (props: IconProps) => React.ReactNode;
  external?: boolean;
};

const quickLinks: QuickLink[] = [
  { label: "About", href: "/about/", icon: PersonIcon },
  { label: "Work", href: "/case-studies/", icon: BriefcaseIcon },
  { label: "Resume", href: "/resume/", icon: FileIcon },
  {
    label: "Email",
    href: "mailto:t112255zl@gmail.com",
    icon: MailIcon,
    external: true,
  },
];

export default function Home() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      <Image
        src="/home-wallpaper-v3.png"
        alt="Grand Teton meadow wallpaper"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,6,8,0.34)_0%,rgba(4,6,8,0.14)_32%,rgba(4,6,8,0.3)_62%,rgba(4,6,8,0.72)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.14),transparent_38%)]" />

      <div className="relative flex min-h-screen flex-col justify-between px-6 pb-8 pt-28 sm:px-10 sm:pb-10 sm:pt-32">
        <div className="mx-auto flex w-full max-w-7xl flex-1 items-center">
          <div className="max-w-4xl">
            <p className="hero-kicker text-[11px] uppercase tracking-[0.42em] text-white/68 sm:text-xs">
              {positioning.title}
            </p>
            <h1 className="hero-title mt-6 [font-family:var(--font-display)] text-5xl leading-[0.92] tracking-[-0.04em] text-white sm:text-7xl lg:text-[6.5rem]">
              <span data-line>Welcome</span>
              <span data-line>to my world</span>
            </h1>
            <p className="hero-copy mt-6 max-w-2xl text-sm leading-7 text-white/78 sm:text-lg sm:leading-8">
              {positioning.statement} A cinematic front door for the stories,
              systems, and experiments behind my work.
            </p>
            <Link
              href="/case-studies/"
              className="hero-copy mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/8 px-5 py-3 text-xs uppercase tracking-[0.32em] text-white backdrop-blur-md transition hover:bg-white/14"
            >
              Explore the work
              <span aria-hidden className="text-base leading-none">
                /
              </span>
            </Link>
          </div>
        </div>

        <div className="hero-dock mx-auto flex w-full max-w-7xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-md text-sm leading-7 text-white/62">
            Designed around your Grand Teton wallpaper: big air, wide field,
            and a quiet entrance before the deeper portfolio pages.
          </p>

          <div className="flex items-center gap-3 rounded-full border border-white/14 bg-black/24 px-4 py-3 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              const shared =
                "group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/14 bg-white/6 text-white/86 transition hover:-translate-y-0.5 hover:bg-white/12 hover:text-white";

              if (link.external) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className={shared}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className={shared}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function PersonIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M18 20a6 6 0 0 0-12 0" />
      <circle cx="12" cy="8" r="4" />
    </svg>
  );
}

function BriefcaseIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
      <path d="M4 8.5h16a1.5 1.5 0 0 1 1.5 1.5v7.5A1.5 1.5 0 0 1 20 19H4A1.5 1.5 0 0 1 2.5 17.5V10A1.5 1.5 0 0 1 4 8.5Z" />
      <path d="M2.5 12.5c2.8 1.8 5.95 2.7 9.5 2.7s6.7-.9 9.5-2.7" />
    </svg>
  );
}

function FileIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M7 3.5h6l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
      <path d="M13 3.5V8h4.5" />
      <path d="M8.5 12.5h7" />
      <path d="M8.5 16h7" />
    </svg>
  );
}

function MailIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M4 6.5h16A1.5 1.5 0 0 1 21.5 8v8A1.5 1.5 0 0 1 20 17.5H4A1.5 1.5 0 0 1 2.5 16V8A1.5 1.5 0 0 1 4 6.5Z" />
      <path d="m3.5 8 8.5 6 8.5-6" />
    </svg>
  );
}
