import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yuting Wu — Portfolio",
  description:
    "Product, Growth & Data Analytics — using SQL, experimentation, and user behavior data to diagnose problems, improve digital products, and support measurable growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col overflow-x-hidden antialiased">
        <SiteHeader />
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
