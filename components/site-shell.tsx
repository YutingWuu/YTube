"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about/", label: "About" },
  { href: "/case-studies/", label: "Work" },
  { href: "/resume/", label: "Resume" },
];

const homeNavLinks = [
  { href: "#work", label: "Work" },
  { href: "#field-notes", label: "Field" },
  { href: "#soundtrack", label: "Sound" },
  { href: "#timeline", label: "Timeline" },
];

export default function SiteShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-[var(--site-bg)] text-[var(--site-fg)]">
        <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
          <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
            <Link
              href="/"
              className="pointer-events-auto inline-flex items-center gap-3 text-xs uppercase tracking-[0.42em] text-white/85 transition hover:text-white"
            >
              <span
                aria-hidden
                className="h-2.5 w-2.5 rounded-full border border-white/80"
              />
              Yuting Wu
            </Link>
            <div className="pointer-events-auto flex items-center gap-5 text-[11px] uppercase tracking-[0.3em] text-white/70 sm:gap-8">
              {homeNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top,_rgba(79,97,146,0.18),_transparent_42%),linear-gradient(180deg,_#07080b_0%,_#0c1118_100%)] text-[var(--site-fg)]">
      <header className="border-b border-white/10 bg-[#06070a]/80 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-white/88 transition hover:text-white"
          >
            <span
              aria-hidden
              className="h-2.5 w-2.5 rounded-full border border-white/80"
            />
            Yuting Wu
          </Link>
          <div className="flex items-center gap-5 text-[11px] uppercase tracking-[0.3em] text-white/70 sm:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-[11px] uppercase tracking-[0.3em] text-white/55 sm:px-10">
          <span>Copyright {new Date().getFullYear()} Yuting Wu</span>
          <a
            href="mailto:t112255zl@gmail.com"
            className="transition hover:text-white"
          >
            t112255zl@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}
