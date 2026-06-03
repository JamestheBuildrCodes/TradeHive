# Tickrr 🐝

**The social trading platform where traders learn, talk, and trade together.**

Tickrr blends a social network (feed, chats, Spaces, forums), trading tools
(TradingView charts, journal, copy trading, signals, backtesting) and an AI chart
co-pilot — across **Forex, Crypto, Synthetics & Stocks**. The trust wedge is
**verified track records + global rankings**, so the people you follow have actually
earned it.

This repo is the marketing landing page + signup backend, built with Next.js.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** with a custom design system (`src/app/globals.css`)
- Animations: pure CSS keyframes + `IntersectionObserver` (no animation libraries)
- Backend: a Route Handler at `src/app/api/waitlist` for waitlist signups

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Project structure

```
src/
  app/
    layout.tsx           # fonts, metadata, ambient background
    page.tsx             # landing page composition
    globals.css          # design tokens, keyframes, animation utilities
    api/signup/route.ts# POST/GET signup endpoint (file-backed)
  components/
    Hero, Features, Leaderboard, Heatmap, Spotlight, Pricing,
    CreatorMonetization, Faq, FinalCta, Footer, Navbar ...
    Reveal.tsx           # fade-up-on-scroll (IntersectionObserver)
    Parallax.tsx         # scroll parallax
    WordReveal.tsx       # word-by-word headline reveal
    Sparkline.tsx        # dependency-free inline SVG sparkline
  lib/data.ts            # content (features, plans, leaderboard, faqs, heatmap)
```

## Animation system

All six techniques live in the codebase and are reusable:

| Effect | Where |
| --- | --- |
| Float / bounce loops | `.anim-float`, `.anim-float-slow`, `.anim-bounce-soft` in `globals.css` |
| Fade-up on scroll | `<Reveal>` + `.reveal` / `.is-visible` |
| Parallax backgrounds | `<Parallax speed={…}>` |
| Hover glow / scale / rotate | `.btn-primary`, `.th-card-hover`, `.hover-rotate` |
| Word-by-word text reveal | `<WordReveal>` + `.word-reveal` |
| Pulse glow / gradient pan / shimmer | `.anim-pulse-glow`, `.th-gradient-text`, button `::after` |

Everything respects `prefers-reduced-motion`.

## Prompts

See [`PROMPTS.md`](./PROMPTS.md) for copy-paste prompts:
- A **Claude** prompt for generating/iterating 2D website animations.
- A **Google Stitch** prompt for generating UI screens in this TradeZella-inspired
  design system.

## Disclaimer

Trading involves substantial risk of loss. Tickrr provides social, educational and
informational tools only — **not investment advice**. Past performance is not
indicative of future results.
