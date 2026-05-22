# The Isaac Standard — Project Context for Claude

## What this is
Amazon affiliate review blog. Next.js 15 + Tailwind + TypeScript. Multi-category (budget audio, smart home, trackers, mini PCs, outdoor robots). Deployed on Vercel free tier.

## Stack
- **Framework:** Next.js 15.5 (App Router)
- **Styling:** Tailwind 3.4 (custom serif/ink/paper/accent palette)
- **Language:** TypeScript (strict off during build via `next.config.mjs`)
- **Hosting:** Vercel — auto-deploys on push to `main`
- **Repo:** https://github.com/jlee4102/theisaacstandard
- **Live URL:** https://theisaacstandard.vercel.app
- **Affiliate tag:** `theisaacstand-20` (Amazon Associates, approved 2026-05-21)

## Key files
- `lib/site.ts` — site config, category list, review registry (add new reviews here)
- `app/review/<slug>/page.tsx` — individual review pages
- `app/category/<slug>/page.tsx` — category listing pages
- `components/AffiliateLink.tsx` — Amazon link button (uses env tag)
- `components/Byline.tsx`, `ComparisonTable.tsx`, `FAQ.tsx`, `Newsletter.tsx` — review building blocks
- `automation/weekly-reviews.ps1` — autonomous weekly draft generator
- `scripts/new-review.mjs` — interactive AI-assisted draft script

## Working conventions
- **Never push to main directly.** Use `drafts/YYYY-MM-DD-*` branches for AI-generated content; merge after review.
- **Never fabricate ASINs.** Always verify on amazon.com/dp/XXXXXXXXXX before publishing.
- **Add reviews to `lib/site.ts` reviews array** (top of array, newest first) when creating a new `app/review/<slug>/page.tsx`.
- **Use existing components**, don't reinvent. Anker Q20i vs P20i review (`app/review/anker-soundcore-q20i-vs-p20i/page.tsx`) is the canonical template — copy its structure.
- **Disclosure callout** (orange left border) belongs near the top of every review.
- **Word count target:** 700-1000 words per review.

## Voice
Honest, opinionated, specific. No marketing fluff. Always mention trade-offs and who *shouldn't* buy. Active voice. Short paragraphs.

## E-E-A-T signals (already in place — don't remove)
- Author bio at `/authors/isaac` with Person schema
- Byline component links to author page
- JSON-LD Review schema on each review
- FAQPage schema via FAQ component
- About + Affiliate Disclosure + Privacy + Terms + Contact pages

## What NOT to do
- Don't push to `main` directly — use draft branches
- Don't add affiliate links from unverified retailers
- Don't generate fake user testimonials or fake ratings
- Don't delete `.env.local`
- Don't change `lib/site.ts` `affiliateTag` default (env var is the source of truth)

## Useful commands
```powershell
# Dev server
npm run dev

# Build locally
npm run build

# AI-assisted single review draft
$env:ANTHROPIC_API_KEY = "sk-ant-..."
npm run new-review "Product Name Here" budget-audio

# Run the weekly autonomous batch manually
.\automation\weekly-reviews.ps1
```

## Current state (2026-05-22)
- 1 review live: Anker Soundcore Q20i vs P20i
- 5 empty category pages waiting for content
- Newsletter signup not wired to a backend yet (stub `setTimeout`)
- Custom domain (`theisaacstandard.com`) not yet purchased/connected
- 180-day Amazon clock: need 3 qualifying sales by 2026-11-17
