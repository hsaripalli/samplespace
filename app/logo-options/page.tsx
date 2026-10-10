import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Logo studies — Sample Space",
  robots: { index: false, follow: false },
};

function Logo({ variant, size }: { variant: "grid" | "curves"; size: number }) {
  return <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
    {variant === "grid" ? <>
      {[7, 16, 25].flatMap(y => [7, 16, 25].map(x =>
        <circle key={`${x}-${y}`} cx={x} cy={y} r={x === 25 && y === 7 ? 3.5 : 2.1} fill={x === 25 && y === 7 ? "#f26a35" : "currentColor"}/>
      ))}
    </> : <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M24 6H13a7 7 0 0 0 0 14h3"/>
      <path d="M8 26h11a7 7 0 0 0 0-14h-3"/>
    </g>}
  </svg>;
}

export default function LogoOptions() {
  return <main className={styles.page}>
    <Link href="/" className={styles.back}>← Back to Sample Space</Link>
    <header className={styles.heading}><p>Sample Space / logo studies</p><h1>Two directions.</h1></header>
    <div className={styles.options}>
      {([
        { variant: "grid", number: "02", title: "The sample", description: "One selected point in a field of possibilities." },
        { variant: "curves", number: "03", title: "Offset curves", description: "Two open curves form a compact, abstract S." },
      ] as const).map(option => <article className={styles.option} key={option.variant}>
        <div className={styles.title}><span>{option.number}</span><h2>{option.title}</h2></div>
        <div className={styles.stage}><Logo variant={option.variant} size={144}/></div>
        <div className={styles.wordmark}><Logo variant={option.variant} size={30}/><span>sample space.</span></div>
        <p className={styles.description}>{option.description}</p>
        <div className={styles.tabs}>
          <div className={styles.darkTab}><Logo variant={option.variant} size={16}/><span>Sample Space</span><span>×</span></div>
          <div className={styles.lightTab}><Logo variant={option.variant} size={16}/><span>Sample Space</span><span>×</span></div>
        </div>
        <div className={styles.sizes}><span>Actual sizes</span>{[16, 24, 32].map(size => <div key={size}><Logo variant={option.variant} size={size}/><small>{size}px</small></div>)}</div>
      </article>)}
    </div>
  </main>;
}
