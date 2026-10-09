import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sample Space — AI products",
  description: "AI products that make data easier to explore, understand, analyze, and use.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "Sample Space", description: "AI products that make data easier to explore, understand, analyze, and use.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="dark"><body>{children}</body></html>;
}
