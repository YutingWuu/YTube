import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yuting Wu | Welcome to my world",
  description:
    "A cinematic portfolio for Yuting Wu across growth, product, analytics, and creative systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
