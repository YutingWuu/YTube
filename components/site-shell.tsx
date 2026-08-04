"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { withBasePath } from "@/lib/site";

const navLinks = [
  { href: "/", label: "About" },
  { href: "/case-studies/", label: "Work" },
  { href: withBasePath("/Yuting_Wu_Resume_UA.pdf"), label: "Resume", external: true },
];

const brandClassName =
  "inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.42em] text-white/88 transition hover:text-white";

const navGroupClassName =
  "flex items-center gap-5 text-[11px] uppercase tracking-[0.32em] text-white/76 sm:gap-8";

const navLinkClassName = "transition hover:text-white";

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
            <Link href="/" className={`pointer-events-auto ${brandClassName}`}>
              <span
                aria-hidden
                className="h-2.5 w-2.5 rounded-full border border-white/80"
              />
              Yuting Wu
            </Link>
            <div className={`pointer-events-auto ${navGroupClassName}`}>
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={navLinkClassName}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={navLinkClassName}
                  >
                    {link.label}
                  </Link>
                )
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
          <Link href="/" className={brandClassName}>
            <span
              aria-hidden
              className="h-2.5 w-2.5 rounded-full border border-white/80"
            />
            Yuting Wu
          </Link>
          <div className={navGroupClassName}>
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={navLinkClassName}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={navLinkClassName}
                >
                  {link.label}
                </Link>
              )
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
