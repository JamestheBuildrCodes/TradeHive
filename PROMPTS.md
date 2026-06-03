# TradeHive — Copy-Paste Prompts

Two ready-to-use prompts:
1. **Claude animation prompt** — to generate/iterate 2D website animations.
2. **Google Stitch prompt** — to generate UI screens in a TradeZella-inspired design system.

---

## 1) Claude — 2D Website Animation Prompt

> Paste this into Claude. Replace the section in `[brackets]` with the specific
> element/section you want animated, then paste the returned code into your project
> and tweak timings.

```
You are a senior front-end animation engineer. I'm building "TradeHive", a dark,
premium social-trading web app (Next.js + TypeScript + Tailwind v4). Brand accent
is emerald-green (#16D6A3) with a sky-blue (#0EA5E9) and amber (#F5B53C) secondary.
The vibe is sleek, data-driven, fintech — think TradeZella but more social.

Produce production-ready, accessible 2D animations. For EACH animation give me:
1. The CSS @keyframes + utility class (or a tiny React component when JS is needed).
2. The exact HTML/JSX usage snippet.
3. Notes on how to adjust timing, easing, and stagger.

Hard requirements:
- Use transform/opacity only (GPU-friendly) — no animating layout properties.
- Respect `prefers-reduced-motion: reduce` (disable or simplify motion).
- Keep durations 300–800ms, easing cubic-bezier(0.22, 1, 0.36, 1) unless told otherwise.
- No external animation libraries — vanilla CSS + minimal IntersectionObserver only.
- Mobile-safe and 60fps.

Generate these effects, themed for TradeHive:
1. Floating/bounce loop for hero "cards" (trader stat card, AI co-pilot card) that
   gently drift on the Y axis at different speeds.
2. Fade-up-on-scroll for sections/cards using IntersectionObserver, with a stagger
   delay prop so a grid of cards reveals in sequence.
3. Parallax background blobs/grid that move slower than scroll (subtle, tasteful).
4. Button hover effects: glow + scale + a left-to-right shimmer sweep; and an icon
   that rotates slightly on hover.
5. Word-by-word headline reveal where each word rises + fades in with a stagger
   (e.g. "Where traders learn, talk, and trade together.").
6. An animated number counter that counts up when it scrolls into view (e.g. "62k+").

Return everything as copy-paste-ready code blocks, grouped by effect, with the
keyframes first and usage second.

[ Right now I specifically want: <describe the element/section here, e.g. "the
pricing cards to fade-up and stagger, and the 'Most popular' card to pulse-glow"> ]
```

**How I use it (your workflow):**
1. Ask Claude for the CSS keyframes (float/bounce) → paste into `globals.css`.
2. Ask for the fade-up-on-scroll util → wrap sections in the reveal component.
3. Ask for parallax background code → drop into the hero.
4. Ask for hover glow/scale/rotate on buttons → apply utility classes.
5. Ask for the word-by-word headline → use on the hero `<h1>`.
6. Paste, adjust timing/easing, launch.

> Note: this repo already implements all six — see `src/app/globals.css`
> (`@keyframes` + `.anim-*`, `.reveal`, `.word-reveal`), `src/components/Reveal.tsx`,
> `src/components/Parallax.tsx`, and `src/components/WordReveal.tsx`. Use the prompt
> to extend or restyle them.

---

## 2) Google Stitch — UI Generation Prompt (TradeZella-inspired)

> Paste into Google Stitch. Stitch turns text/image prompts into UI screens you can
> export to Figma or code. Keep prompts concrete about layout, components, and tokens.

```
Design a modern, dark-themed web app called "TradeHive" — a social platform for
traders that blends a social network (feed, chats, forums), trading tools
(TradingView charts, journal, copy trading, signals) and an AI chart co-pilot.

DESIGN SYSTEM (inspired by tradezella.com — clean, data-dense fintech dashboard):
- Theme: dark. Background near-black navy (#070B14 / #0B1120). Elevated cards on a
  slightly lighter slate (#0F172A) with 1px subtle borders (rgba(148,163,184,0.14))
  and 16–20px rounded corners.
- Accent: emerald-green #16D6A3 (primary / positive P&L), sky-blue #0EA5E9
  (secondary), amber #F5B53C (highlights/badges). Loss/bearish = red #F4536B.
- Typography: Inter (or similar geometric sans). Large bold headings, generous
  line-height, muted gray body text (#94A3B8). Monospace (JetBrains Mono) for
  tickers, prices and code.
- Style: spacious, minimal, glassy cards, soft shadows, subtle radial gradient glows
  behind hero/feature areas, small sparkline charts, pill-shaped tags/badges,
  green "Verified" chips. Data-forward like TradeZella's analytics dashboard.
- Components: top nav with logo + links + primary CTA button; stat cards with
  sparklines; leaderboard table with rank, avatar, market, ROI, win-rate, trend;
  pricing cards (Free / Pro / Elite / Team) with a highlighted "Most popular";
  sentiment heatmap grid (green=bullish, red=bearish); chat/feed list; FAQ accordion.

SCREENS TO GENERATE:
1. Marketing landing page (hero with headline + email waitlist + floating trader
   stat cards, feature grid, leaderboard preview, pricing, footer with risk
   disclaimer).
2. App dashboard: left sidebar nav (Feed, Chats, Spaces, Forums, Journal, Copy,
   Leaderboard, AI), center social feed of "microposts" with attached charts and
   cashtags ($BTC, $EURUSD), right rail showing Community Sentiment Heatmap and a
   "Top traders this week" list.
3. Trader profile: verified track-record header (ROI, win-rate, max drawdown,
   equity curve), badges (Founder / Verified / Top Mentor), a "Copy trader" button,
   and recent signals with performance scorecards.
4. AI Co-Pilot panel: upload/select a chart, AI-annotated analysis with a trade plan
   (entry / SL / TP, R:R) and a chat-style conversation.

Make it responsive (desktop + mobile), high-contrast, accessible, and visually
polished. Use realistic trading sample data. Output editable components.
```

**Tips for Stitch:**
- Generate one screen at a time for best fidelity, then ask for variations.
- Paste a screenshot of tradezella.com as a reference image alongside the prompt to
  anchor the visual style.
- After generating, export to Figma/code and reconcile tokens with this repo's
  `globals.css` so the live build and the designs stay in sync.
```
