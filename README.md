# Sample Space

A minimal landing page for Sample Space, designed for samplespace.ai.

## Stack

- Next.js 16 (App Router), TypeScript, and React 19
- shadcn/ui Button and Radix-backed DropdownMenu
- Framer Motion for the rotating hero word
- Tailwind CSS and custom responsive styles
- `next/image` for the frac.fyi well-map backgrounds; Inter (via `next/font`) for the frac.fyi wordmark

## Content

The page has two screens over the same dimmed frac.fyi well map (`public/products/frac-map-wide.jpg`):

1. **Hero:** "AI platform that makes energy data easier to" with explore, understand, analyze, and use rotating beneath it. Words fade in; "use." drops in letter by letter with a gentle settle. A gradient underline pulses softly and glides to each word's width. Words stay static when reduced motion is requested.
2. **frac.fyi:** wordmark, tagline, and two columns (frac.bot, Integrations) linking to frac.fyi.

The sticky header has a "Try frac.fyi" link. The footer links to the privacy policy (`/privacy`) and a Contact link that reveals support@samplespace.ai on hover.

The header product dropdown (frac.fyi and a dormant opendata.fyi card) is switched off with `SHOW_PRODUCT_MENU` in `app/page.tsx` until there is more than one product.

## Development

```bash
npm install
npm run dev
```

Animations respect reduced-motion settings. Mobile breakpoints include a compact 320px layout. To open the dev server from a phone on the same network, the LAN ranges are allowed in `allowedDevOrigins` (`next.config.ts`).

## Domain

This first version is hosted at its assigned Site URL. The samplespace.ai domain is not connected automatically.
