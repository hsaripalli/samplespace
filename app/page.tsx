"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";

const products = [
  { name: "frac.fyi", url: "https://frac.fyi", description: "Canadian frac and well intelligence", art: "frac" },
] as const;

type FracColumn = { label: string; text: string; url?: string };
const fracColumns: FracColumn[] = [
  { label: "Mission", text: "Bring frontier intelligence to Canadian energy data." },
  { label: "frac.bot", text: "AI for oil and gas professionals. Ask complex questions, explore wells and completions, analyze production, and turn data into actionable insights.", url: "https://frac.fyi/#fx-fracbot" },
  { label: "Integrations", text: "Connect frontier models to frac.fyi's curated data and domain-specific tools.", url: "https://frac.fyi/integrations" },
];

const productLinks = [
  { heading: "frac.fyi", brand: "frac", links: [
    { label: "Platform", url: "https://frac.fyi" },
    { label: "frac.bot", url: "https://frac.fyi/#fx-fracbot" },
    { label: "Integrations", url: "https://frac.fyi/integrations" },
  ] },
];

// Flip to true when there is more than one product to list.
const SHOW_PRODUCT_MENU = false;

type Product = typeof products[number];

function ProductCard({ product }: { product: Product }) {
  return <a href={product.url} target="_blank" rel="noopener noreferrer" className={`product-card ${product.art}`}>
    <div className="product-card-art">{product.art === "frac" ? <Image src="/products/frac-map.jpg" alt="" fill sizes="520px"/> : <div className="od-art"><b>Open data. <i>AI ready.</i></b><p>Search 75,000 official Canadian datasets from frontier models.</p><small>Open source · MCP</small></div>}</div>
    {product.art === "frac" ? <strong className="wordmark-frac" aria-label={product.name}><em>frac</em>.fyi</strong> : <strong aria-label={product.name}><img src="/products/opendata-logo.png" alt=""/></strong>}
    <span>{product.description}</span>
  </a>;
}

function ProductsMegaMenu() {
  return <div className="mega-product">
    <div className="product-cards">{products.map(product => <ProductCard key={product.name} product={product}/>)}</div>
    <nav className="product-links" aria-label="Product links">
      {productLinks.map(group => <div key={group.heading} className={`link-group ${group.brand}`}>
        <p>{group.heading}</p>
        {group.links.map(link => <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>)}
      </div>)}
    </nav>
  </div>;
}

function FracSection() {
  return <section id="products" className="frac-section" aria-label="frac.fyi">
    <div className="frac-backdrop" aria-hidden="true"><Image src="/products/frac-map-wide.jpg" alt="" fill sizes="100vw" quality={80}/></div>
    <div className="frac-inner">
      <p className="frac-parent">A Sample Space product</p>
      <strong className="frac-wordmark" aria-label="frac.fyi"><em>frac</em>.fyi</strong>
      <p className="frac-tagline">AI-native oil and gas data platform to search, visualize, and analyze Western Canadian completion, wellbore, frac, and production data.</p>
      <div className="frac-columns">
        {fracColumns.map(item => {
          const body = <><span className="frac-col-label">{item.label}</span><p>{item.text}</p></>;
          return item.url
            ? <a key={item.label} href={item.url} target="_blank" rel="noopener noreferrer" className="frac-col">{body}</a>
            : <div key={item.label} className="frac-col">{body}</div>;
        })}
      </div>
    </div>
  </section>;
}

function Mark({ className = "" }: { className?: string }) {
  return <svg className={className} width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true"><path d="M7 8H4V26H22V23M23 22H26V4H8V7" stroke="currentColor" strokeWidth="1.3"/><circle cx="15" cy="15" r="2" fill="currentColor"/></svg>;
}

const discoveryWords = ["explore.", "understand.", "analyze.", "use."];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
// "use." drops in letter by letter with a small settle; the other words fade up.
const gentleBounce = { initial: { opacity: 0, y: -8 }, animate: { opacity: [0, 1, 1], y: [-8, 1.5, 0] }, transition: { duration: 0.42, times: [0, 0.65, 1], ease: "easeOut" as const }, stagger: 0.04 };

function RotatingDiscoveryWord() {
  const [turn, setTurn] = useState(0);
  const [widths, setWidths] = useState<number[]>([]);
  const measureRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const reduced = useReducedMotion();
  // The underline glides between word widths, so each word is measured off-screen (and re-measured on resize / font load).
  useEffect(() => {
    const measure = () => setWidths(measureRefs.current.map(el => el?.offsetWidth ?? 0));
    measure();
    const observer = new ResizeObserver(measure);
    measureRefs.current.forEach(el => el && observer.observe(el));
    document.fonts?.ready.then(measure);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setTurn(value => value + 1);
    }, 3500);
    return () => window.clearInterval(timer);
  }, [reduced]);
  if (reduced) return <span className="rotating-slot rotation-static">explore, understand, analyze, and use.<span className="discovery-underline" /></span>;
  const word = discoveryWords[turn % discoveryWords.length];
  const bounce = word === "use.";
  const underlineWidth = widths[turn % discoveryWords.length] || "3.4em";
  return <span className="rotating-slot">
    {discoveryWords.map((w, i) => <span key={w} className="word-measure" aria-hidden="true" ref={el => { measureRefs.current[i] = el; }}>{w}</span>)}
    <AnimatePresence mode="wait" initial={false}>
      <motion.span className="rotating-word" key={turn}
        initial={bounce ? { opacity: 1 } : { opacity: 0, y: 12, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
        transition={{ duration: 0.28, ease }}>
        {bounce ? [...word].map((letter, index) => <motion.span className="rotating-letter" key={index}
          initial={gentleBounce.initial}
          animate={gentleBounce.animate}
          transition={{ ...gentleBounce.transition, delay: index * gentleBounce.stagger }}>
          {letter}
        </motion.span>) : word}
      </motion.span>
    </AnimatePresence>
    <span className="underline-track" aria-hidden="true">
      <motion.span className="underline-fit" initial={false} animate={{ width: underlineWidth }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
        <span className="discovery-underline" />
      </motion.span>
    </span>
  </span>;
}

// Scroll without writing #products into the address, so a refresh doesn't reopen on page 2.
function scrollToProducts(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  // A refresh starts at the top (phones otherwise restore the old scroll position); a shared #products link still opens page 2.
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (navigation?.type === "reload") {
      if (location.hash) history.replaceState(null, "", location.pathname + location.search);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);
  return (
    <main id="top">
      <a href="#hero-title" className="skip-link">Skip to content</a>
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Sample Space home"><Mark/><span>sample space<span className="wordmark-period">.</span></span></a>
        <nav aria-label="Main navigation">
          {SHOW_PRODUCT_MENU
            ? <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="ghost" className="spaces-trigger">Products <ChevronDown size={13}/></Button></DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={14} className="product-menu">
              <ProductsMegaMenu/>
            </DropdownMenuContent>
          </DropdownMenu>
            : <a href="https://frac.fyi" target="_blank" rel="noopener noreferrer" className="header-cta">Try frac.fyi</a>}
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-backdrop" aria-hidden="true"><Image src="/products/frac-map-wide.jpg" alt="" fill sizes="100vw" quality={80} loading="eager" fetchPriority="high"/></div>
        <div className="hero-content hero-reveal">
          <h1 id="hero-title" className="platform-headline" aria-label="AI platform that makes energy data easier to explore, understand, analyze, and use.">
            <span className="headline-lead" aria-hidden="true">AI platform that makes energy data easier to</span>
            <span className="headline-action" aria-hidden="true"><RotatingDiscoveryWord/></span>
          </h1>
        </div>
        <a href="#products" className="scroll-cue" aria-label="Scroll down to explore frac.fyi" onClick={scrollToProducts}>
          <span className="cue-name"><em>frac</em>.fyi</span>
          <ChevronDown className="cue-arrow" size={18} aria-hidden="true"/>
        </a>
      </section>

      <FracSection/>

      <footer className="site-footer"><span className="footer-links"><a href="/privacy" className="footer-privacy">Privacy Policy</a><a href="mailto:support@samplespace.ai" className="footer-privacy footer-contact" aria-label="Contact: support@samplespace.ai"><span className="contact-label" aria-hidden="true">Contact</span><span className="contact-email" aria-hidden="true">support@samplespace.ai</span></a></span><span className="footer-meta">© {new Date().getFullYear()} Sample Space</span></footer>
    </main>
  );
}
