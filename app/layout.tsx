import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: "700", variable: "--font-wordmark" });

export const metadata: Metadata = {
  title: "Sample Space — AI platform",
  description: "AI platform that makes energy data easier to explore, understand, analyze, and use.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "Sample Space", description: "AI platform that makes energy data easier to explore, understand, analyze, and use.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`dark ${inter.variable}`}><body>{children}</body></html>;
}
