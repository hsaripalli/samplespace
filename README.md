# Sample Space

A minimal landing page for Sample Space, designed for samplespace.ai.

## Stack

- Next.js 16 (App Router), TypeScript, and React 19
- shadcn/ui Button and Radix-backed DropdownMenu
- Framer Motion for entrance and scroll transitions
- Tailwind CSS and custom responsive styles
- A sparse, static SVG point field; no external fonts or image requests

## Content

Products are the destinations. frac.fyi opens https://frac.fyi and opendata.fyi opens https://opendata.fyi. Both open in a new tab. The hero introduces its AI products, in two lines, with explore, understand, analyze, and use rotating on the second line, over a glowing underline beneath only the active word. Explore, understand, and analyze use a soft reveal; use enters with a staggered letter bounce. The words remain static when reduced motion is requested. The hero leads directly into Products. Product rows show each space’s name, category, and description, with each row linking to its destination.

## Development

```bash
npm install
npm run dev
```

The background point field is static, with no animation or pointer interaction. Entrance transitions respect reduced-motion settings. Mobile breakpoints include a compact 320px layout.

## Domain

This first version is hosted at its assigned Site URL. The samplespace.ai domain is not connected automatically.
