"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Squares } from "./mondrian";

export function SiteHeader() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  return (
    <header
      className={
        onHome
          ? "absolute inset-x-0 top-0 z-20"
          : "border-b-[3px] border-ink"
      }
    >
      <nav className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Squares />
          <span
            className={`font-serif text-lg font-semibold tracking-tight ${
              onHome ? "text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]" : ""
            }`}
          >
            Yuting Wu
          </span>
        </Link>
        <div
          className={`flex gap-6 font-mono text-xs uppercase tracking-[0.18em] ${
            onHome ? "text-white/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]" : ""
          }`}
        >
          <Link href="/about/" className="hover:opacity-70">
            About
          </Link>
          <Link href={onHome ? "#work" : "/#work"} className="hover:opacity-70">
            Work
          </Link>
          <Link href="/resume/" className="hover:opacity-70">
            Resume
          </Link>
        </div>
      </nav>
    </header>
  );
}
