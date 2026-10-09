"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

const spaces = [
  { number: "01", name: "frac.fyi", domain: "frac.fyi", url: "https://frac.fyi", label: "ENERGY", description: "Bring frontier intelligence to Canadian energy data.", type: "frac" },
  { number: "02", name: "opendata.fyi", domain: "opendata.fyi", url: "https://opendata.fyi", label: "RESEARCH", description: "Explore public datasets with AI.", type: "explore" },
];

function Mark({ className = "" }: { className?: string }) {
  return <svg className={className} width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true"><path d="M7 8H4V26H22V23M23 22H26V4H8V7" stroke="currentColor" strokeWidth="1.3"/><circle cx="15" cy="15" r="2" fill="currentColor"/></svg>;
}

// A deterministic, open field of observations without a central object.
function createStaticPoints() {
  let seed = 47;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
  return Array.from({ length: 145 }, (_, index) => {
    const x = random() * 1400;
    const y = random() * 760;
    const radius = 0.55 + random() * 0.7;
    const nearText = x > 410 && x < 990 && y > 200 && y < 570;
    return {
      index,
      cx: x,
      cy: y,
      r: radius,
      fill: index % 9 === 0 ? "#c6b99b" : "#b9c0bd",
      opacity: nearText ? 0.09 : 0.14 + random() * 0.28,
    };
  });
}

const STATIC_POINTS = createStaticPoints();

function PossibilityField() {
  return (
    <svg className="possibility-field" viewBox="0 0 1400 760" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {STATIC_POINTS.map((pt) => (
        <circle key={pt.index} cx={pt.cx} cy={pt.cy} r={pt.r} fill={pt.fill} opacity={pt.opacity} />
      ))}
    </svg>
  );
}

const discoveryWords = ["explore.", "understand.", "analyze.", "use."];

function RotatingDiscoveryWord() {
  const [turn, setTurn] = useState(0);
  const reduced = useReducedMotion();
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
  return <span className="rotating-slot">
    <AnimatePresence mode="wait" initial={false}>
      <motion.span className="rotating-word" key={turn}
        initial={bounce ? { opacity: 1 } : { opacity: 0, y: 12, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}>
        {bounce ? [...word].map((letter, index) => <motion.span className="rotating-letter" key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: [0, 1, 1, 1], y: [-20, 5, -3, 0] }}
          transition={{ duration: 0.55, delay: index * 0.045, times: [0, 0.55, 0.8, 1], ease: "easeOut" }}>
          {letter}
        </motion.span>) : word}
      </motion.span>
    </AnimatePresence>
    <span className="discovery-underline" />
  </span>;
}

export default function Home() {
  const reduced = useReducedMotion();
  const reveal = { initial: { opacity: 0, y: reduced ? 0 : 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: reduced ? 0 : 0.95, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } };
  return (
    <main id="top">
      <a href="#spaces" className="skip-link">Skip to products</a>
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Sample Space home"><Mark/><span>sample space<span className="wordmark-period">.</span></span></a>
        <nav aria-label="Main navigation">
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="ghost" className="spaces-trigger">Products <ChevronDown size={13}/></Button></DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={12} className="space-menu">
              {spaces.map(space => <DropdownMenuItem asChild key={space.name}><a href={space.url} target="_blank" rel="noopener noreferrer"><span><strong>{space.name}</strong></span><ArrowUpRight size={15}/></a></DropdownMenuItem>)}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="field-wrap"><PossibilityField/></div>
        <motion.div className="hero-content" {...reveal}>
          <h1 id="hero-title" className="platform-headline" aria-label="AI products that make data easier to explore, understand, analyze, and use.">
            <span className="headline-lead" aria-hidden="true">AI products that make data easier to</span>
            <span className="headline-action" aria-hidden="true"><RotatingDiscoveryWord/></span>
          </h1>
          <Button asChild variant="outline" className="discover-button"><a href="#spaces">Explore our products <ArrowDown size={14}/></a></Button>
        </motion.div>
        <div className="hero-base"><a href="#spaces" aria-label="Scroll to our products"><ArrowDown size={15}/></a></div>
      </section>

      <section id="spaces" className="spaces-section" aria-labelledby="spaces-title">
        <motion.div className="section-heading" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: reduced ? 0 : 0.7 }}>
          <div><h2 id="spaces-title">Focused spaces for<br/><span>deeper discovery.</span></h2></div>
        </motion.div>
        <div className="space-list">
          {spaces.map((space, index) => <motion.a key={space.name} href={space.url} target="_blank" rel="noopener noreferrer" className={`space-row ${space.type}`} initial={{ opacity: 0, y: reduced ? 0 : 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : index * 0.1 }} aria-label={`Open ${space.name} at ${space.domain} in a new tab`}>
            <span className="space-number">{space.number}</span>
            <div className="space-glyph" aria-hidden="true">{space.type === "frac" ? <svg viewBox="0 0 72 72" fill="none"><path d="M12 52L34 17L56 52M21 39H47M34 17V59M12 52H56"/><path d="M8 61H61M17 28L10 24M51 28L58 24"/></svg> : <svg viewBox="0 0 72 72" fill="none"><circle cx="36" cy="36" r="24"/><ellipse cx="36" cy="36" rx="10" ry="24" transform="rotate(35 36 36)"/><ellipse cx="36" cy="36" rx="24" ry="10" transform="rotate(35 36 36)"/><circle cx="36" cy="36" r="2"/></svg>}</div>
            <div className="space-name"><span className="space-label">{space.label}</span><h3>{space.name}</h3></div>
            <p className="space-description">{space.description}</p>
            <span className="space-arrow"><ArrowUpRight size={22} strokeWidth={1.25}/></span>
          </motion.a>)}
        </div>
      </section>

      <footer className="site-footer"><a href="#top" className="footer-brand"><Mark/><span>sample space.</span></a><span>© {new Date().getFullYear()} Sample Space</span></footer>
    </main>
  );
}
