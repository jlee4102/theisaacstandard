# The Isaac Standard

Honest gear reviews, held to a higher bar. Multi-category Amazon affiliate blog built with Next.js 15 + Tailwind.

## Quick start

```powershell
cd C:\Users\JLee4\OneDrive\Desktop\theisaacstandard
npm install
npm run dev
```

Open http://localhost:3000.

## Editing checklist before going live

1. **Buy the domain** (theisaacstandard.com — Cloudflare Registrar is cheapest).
2. **Sign up for Amazon Associates** at affiliate-program.amazon.com. You'll get a tracking tag like `theisaacstd-20`.
3. Copy `.env.example` to `.env.local` and fill in:
   - `SITE_URL` — your real domain once you have it
   - `AMAZON_AFFILIATE_TAG` — your Associates tag
   - `ANTHROPIC_API_KEY` — only needed for `npm run new-review`
4. Replace the placeholder ASINs in `app/review/anker-soundcore-q20i-vs-p20i/page.tsx` with the actual product ASINs (find them in the Amazon URL: `/dp/XXXXXXXXXX`).
5. Push to GitHub, connect to Vercel for free hosting + auto-deploys.

## Drafting new reviews

```powershell
$env:ANTHROPIC_API_KEY = "sk-ant-..."
npm run new-review "Anker Soundcore Space One" budget-audio
```

Output lands in `drafts/`. **Edit it heavily** — add your real opinion, photos, and specifics before publishing. Raw AI content gets demoted by Google.

## Project structure

```
app/
  page.tsx                 — homepage
  category/<slug>/page.tsx — 5 category pages
  review/<slug>/page.tsx   — individual reviews
  about/                   — about page
  disclosure/              — required affiliate disclosure
  sitemap.ts, robots.ts    — SEO
components/                — Header, Footer, ReviewCard, AffiliateLink
lib/site.ts                — site config + categories + reviews list
scripts/new-review.mjs     — Claude-powered draft generator
```

## Adding a new review

1. Run `npm run new-review` to get a draft, OR write from scratch.
2. Create `app/review/<your-slug>/page.tsx` (copy the Anker review as a template).
3. Add the entry to the `reviews` array in `lib/site.ts`.
4. Replace `[ASIN]` placeholders with real ones.

## Adding a new category

1. Add to the `categories` array in `lib/site.ts`.
2. Create `app/category/<slug>/page.tsx` (copy an existing one — only `SLUG` constant changes).
3. Header nav updates automatically.
