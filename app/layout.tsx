import type { Metadata } from "next";
import Link from "next/link";
import { Squares } from "@/components/mondrian";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yuting Wu — Portfolio",
  description:
    "Growth Product & Analytics Operator — building and optimizing growth systems across data, product, creative, and acquisition channels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        <header className="border-b-[3px] border-ink">
          <nav className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-5">
            <Link href="/" className="flex items-center gap-3">
              <Squares />
              <span className="font-serif text-lg font-semibold tracking-tight">
                Yuting Wu
              </span>
            </Link>
            <div className="flex gap-6 font-mono text-xs uppercase tracking-[0.18em]">
              <Link href="/about/" className="hover:text-m-red">
                About
              </Link>
              <Link href="/resume/" className="hover:text-m-blue">
                Resume
              </Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-12">
          {children}
        </main>
        <footer className="border-t-[3px] border-ink">
          <div className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-3 px-6 py-6 font-mono text-xs uppercase tracking-[0.18em] opacity-75">
            <span>© {new Date().getFullYear()} Yuting Wu</span>
            <a href="mailto:t112255zl@gmail.com" className="hover:text-m-red">
              t112255zl@gmail.com
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
