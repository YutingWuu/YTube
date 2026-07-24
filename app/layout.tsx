import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yuting Wu | Welcome to my world",
  description:
    "A private visual journal of quiet rooms, steady work, and mountains outside the window.",
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
