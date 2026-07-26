# The Isaac Standard — Project Handoff

## Project at a glance

The Isaac Standard is an Amazon Associates affiliate review site and adjacent YouTube channel covering consumer tech in five categories: budget audio, smart home & frame TVs, trackers & Find My, mini PCs, and outdoor robots. It's run solo by James Isaac Lee (byline: Isaac), founded May 2026. The site is a Next.js 15 / React 19 / TypeScript / Tailwind stack deployed on Vercel.

Current state:
- Live at `theisaacstandard.vercel.app` (custom domain `theisaacstandard.com` configured via env var; DNS on Cloudflare, SSL via Vercel).
- 2 published reviews (Beelink GTi13 Ultra, Anker Soundcore Q20i); 5 category landing pages live; 3 categories empty.
- Affiliate tag `theisaacstand-20`, approved 2026-05-21.
- Domain age ~10 days at handoff date (2026-06-01); 180-day qualifying clock to ~2026-11-17 for 3 sales minimum.

## Tasks currently handled end-to-end

### Content production
- **Weekly review scaffold generation** — Claude via `automation/weekly-reviews.ps1`, Sundays 9:07 AM, autonomous.
- **Hands-on product testing** — James, per-product (one-week minimum per `how-we-test`).
- **Testing-notes capture** — James, free-form using `templates/testing-notes-template.md`.
- **Bracket-fill drafting** (converting testing notes into prose) — Claude on demand, James edits.
- **Single-product interactive drafts** — Claude via `scripts/new-review.mjs`, manually invoked by James.
- **Review publishing** (merging draft branches to `main`, deploying) — James.
- **Voice/quality enforcement** — James reviews against `channel_voice_and_rules.md` hard rules before merge.

### Promotion / social
- **X / Twitter posts** (@IsaacStandard_) — James, manual, ad hoc.
- **Beelink GTi13 launch thread** — drafted, manual paste pending (see blockers).
- **YouTube uploads** — James, manual, none published yet (Q20i kit ready).
- **Cross-posting to TikTok / Instagram / X Shorts** — James, manual, future state.

### SEO & analytics
- **Sitemap generation** — automatic via `app/sitemap.ts` on build.
- **Robots.txt** — automatic via `app/robots.ts`.
- **Google Search Console verification** — one-time, in place (`public/google71df977b0d4f1654.html`).
- **Page metadata / OG tags** — per-page, added by James or Claude at publish time.
- **JSON-LD structured data** (Review, FAQPage, Person) — included in templates, populated per review.
- **Performance monitoring** — Vercel Analytics + Speed Insights, passive.

### Brand & assets
- **SVG brand asset authoring** — Claude on request, James reviews.
- **SVG → PNG batch render** — `automation/svg-to-png.ps1`, manual invocation, headless Edge.
- **Video slide / thumbnail design** — Claude generates SVG, James converts and uses.
- **Product photography** — none in-house; using manufacturer images per channel rules.

### Infrastructure / deployment
- **Vercel deploys** — automatic on push to `main`.
- **Draft branch workflow** — `drafts/YYYY-MM-DD-*` branches, never direct-to-main pushes (per `CLAUDE.md`).
- **Env var management** — James, manually in Vercel dashboard + local `.env.local`.
- **Domain / DNS** — Cloudflare DNS, Vercel SSL, James manages.

### Automation
- **Weekly scaffold cron** — Windows Task Scheduler, registered via `automation/register-task.ps1`, runs as James's user.
- **Run logging** — `automation/logs/run-*.log` per execution, retained locally.

## Product roadmap

### In progress this weekend
- **Liberty 4 NC review pipeline** — product not yet ordered (~$79); review scaffold not yet generated; testing notes not yet captured. Full pipeline (order → test 1 week → notes → draft → publish) is gated on the purchase.
- **Beelink GTi13 Ultra X / Twitter launch thread** — thread drafted, manual paste to @IsaacStandard_ still pending. Original Sunday posting window still works for engagement.

### Planned next 30 days
- **Publishing cadence** — establish 1 review/week (Sundays) tied to weekly scaffold cron + James's hands-on test queue.
- **Category fill-out** — at least 1 review each in Smart Home, Trackers, Outdoor Robots (currently 0). Mini PCs and Budget Audio each have 1.
- **Cloudflare Email Routing** — set up forwarding for `hello@`, `press@`, `privacy@` (currently published on Contact/Privacy/Disclosure pages but will bounce until configured).
- **Beehiiv newsletter wiring** — replace the stub `Newsletter` component with a real Beehiiv embed or API call.
- **YouTube Q20i recording** — production kit complete (`video/q20i-review/`); James to record voiceover, edit in CapCut, publish.

### Backlog / aspirational
- **Liberty 4 NC vs Soundcore Q20i comparison piece** — head-to-head review (target 1,200–1,600 words per voice spec) after both products are tested.
- **EarFun / JLab competitor reviews** — fill out budget-audio category with 2–3 more competitors.
- **Expansion into Smart Home, Trackers, Outdoor Robots** — needs product purchases + test cycles before review scaffolds are useful.
- **Custom illustrated avatar** for Isaac byline (currently brand-mark only; no real photo decision pending).
- **Plausible Analytics upgrade** (~$9/mo) — for outbound affiliate-click tracking that Vercel free tier doesn't provide.
- **Ad-revenue tier on YouTube** — only after YPP qualification (1,000 subscribers + 4,000 watch hours).

## Workflow documentation

Every process file lives in the repo. Paths and conventions:

- **`CLAUDE.md`** (root) — canonical project handoff guide. Stack, key files, working conventions: no direct `main` pushes; draft branches `drafts/YYYY-MM-DD-*`; verified ASINs only; hands-on testing required before publish; manufacturer claims attributed ("Anker claims…"); bracket experiential gaps with `[NEEDS TESTING: …]`; 700–1,400 word target per review; honest trade-off naming.

- **`README.md`** (root) — public-facing overview; site URL, repo link, contribution guidelines, affiliate disclosure.

- **`channel_voice_and_rules.md`** (in user memory) — hard voice spec. Never role-play having tested; never invent specs/prices/ASINs/competitors; use James's disclosure templates verbatim; place disclosures before first link; technical-and-detailed voice (explain *why*, not just *that*); active voice; short paragraphs; define terminology on first use. Length targets: single review 1,000–1,400 words; head-to-head 1,200–1,600; YouTube scripts 6–8 min with 15-sec hook.

- **`templates/review-template.tsx`** — 282-line canonical TSX scaffold. Yellow DRAFT banner; eyebrow → H1 → byline → disclosure callout → hook + verdict → product image → "what it is & who it's for" → specs table → first affiliate buttons → external research summary → 3 performance dimensions (mechanism + `[NEEDS TESTING]` + `[FILL FROM TESTING NOTES]`) → image grid → "how it compares" → "who should buy / skip" → verdict → second affiliate buttons → newsletter → FAQ → disclaimer footer. Yellow banner stays until every bracket is gone.

- **`templates/testing-notes-template.md`** — 111-line plain-language capture sheet. 10 sections: Identification, Build & design, Setup & first use, Core performance (3+ numbered tests), Ergonomics, Features & software, Longevity, Comparison (2 competitors), Deal-breakers & surprises, Verdict shorthand + rating. Saved as `testing-notes/<slug>.md`, gitignored, never committed.

- **`automation/weekly-reviews.ps1`** — 315-line autonomous draft engine. Sundays 9:07 AM. Scans `lib/site.ts` for existing slugs; calls Claude Opus 4.7 (web-search enabled); generates 2–3 scaffold TSX files; prepends to `lib/site.ts` reviews array (no rating); creates `drafts/YYYY-MM-DD-weekly-scaffolds` branch; commits + pushes; outputs review URL. Scaffolds never merge until brackets are filled from real testing.

- **`automation/register-task.ps1`** — one-time Windows Task Scheduler registration for the weekly cron.

- **`automation/svg-to-png.ps1`** — 109-line PowerShell wrapper around headless Edge. Hardcoded export sizes for `mark.svg` (512×512), `lockup-horizontal.svg` (960×192), `og-image.svg` (1200×630), `youtube-banner.svg` (2560×1440), `twitter-banner.svg` (1500×500), `web-banner.svg` (1920×480), `video-intro.svg` (1920×1080), product cards (1600×900). Outputs to `public/brand/png/`.

- **`scripts/new-review.mjs`** — 69-line Node CLI. Usage: `npm run new-review "Product Name" budget-audio`. Calls Anthropic API, writes scaffold to `drafts/<slug>.md` for hand-conversion to TSX.

- **`video/q20i-review/README.md`** — 113-line video production workflow. Voice recording on phone (6–8 in. from mouth, pillow dampening), slide PNG conversion, B-roll from Pexels/Pixabay + manufacturer images, CapCut editing (voiceover-first), H.264 1920×1080 export, Shorts cutting (9:16, 2–3 sec cuts), YouTube upload sequence (title, description, chapters, thumbnail, pinned comment), cross-posting. Time estimate: ~3–4 hrs first video, ~2 hrs after.

- **`video/q20i-review/01-script-longform.md`** — 8:30–9:00 long-form script with [B-roll] cues, mid-roll marker at 5:00.

- **`video/q20i-review/02-script-shorts.md`** — 60-sec vertical script with [TEXT OVERLAY] cues.

- **`video/q20i-review/03-youtube-metadata.md`** — title options (10 variations), description template, 20+ tags, chapter markers, end-screen CTAs, thumbnail specs.

**Note on `chrome-prompts.md`:** there is no `chrome-prompts.md` file anywhere in this repo. If you're referencing one, you may be confusing it with a different project (likely the trading-bot codebase, which is the only other active project in shared memory).

## Current shop status

### Live & published

Custom domain `theisaacstandard.com` is the primary; `theisaacstandard.vercel.app` is the Vercel-assigned fallback (both serve the same build).

- **`/`** — home page; featured Beelink GTi13 card + grid of remaining reviews + "How we test" blurb + category cards with review counts + newsletter signup. Live.
- **`/review/beelink-gti13-ultra-review`** — mini-pcs, 2026-05-24, 4.2/5, ~3,500–4,200 words, 9-min read, full JSON-LD. Live.
- **`/review/anker-soundcore-q20i-review`** — budget-audio, 2026-05-22, 3.9/5, ~2,800–3,200 words, 8-min read, full JSON-LD. Live.
- **`/category/budget-audio`** — landing page + 1 review listed. Live.
- **`/category/mini-pcs`** — landing page + 1 review listed. Live.
- **`/category/smart-home`** — landing page, "Reviews coming soon." Live but empty.
- **`/category/trackers`** — landing page, "Reviews coming soon." Live but empty.
- **`/category/outdoor-robots`** — landing page, "Reviews coming soon." Live but empty.
- **`/authors/isaac`** — author bio, Person JSON-LD, ~800 words. Live.
- **`/how-we-test`** — methodology, ~2,000 words. Live.
- **`/about`** — mission, ~250 words. Live.
- **`/contact`** — 3 emails, 3-day SLA, ~180 words. Live (but emails will bounce — see blockers).
- **`/disclosure`** — Amazon Associates disclosure, ~150 words. Live.
- **`/privacy`** — privacy policy, updated 2026-05-21, ~650 words. Live.
- **`/terms`** — terms of service, updated 2026-05-21, ~400 words. Live.
- **`/press.html`** — static press kit, brand asset previews + download links. Live.
- **`/sitemap.xml`** — auto-generated. Live.
- **`/robots.txt`** — auto-generated, all user-agents allowed. Live.
- **`/google71df977b0d4f1654.html`** — Search Console verification. Live.
- **Legacy redirect:** `/review/anker-soundcore-q20i-vs-p20i` → `/review/anker-soundcore-q20i-review` (in `next.config.mjs`).

### Drafts, pending, manual tasks

- **Liberty 4 NC review** — not yet ordered (~$79); no scaffold, no testing notes, no draft.
- **Beelink GTi13 X / Twitter launch thread** — drafted, not posted; manual paste required.
- **YouTube Q20i video** — production kit complete (scripts, slides, metadata, thumbnail SVG); voiceover not recorded; edit not started; not uploaded.
- **Cloudflare Email Routing** — `hello@`, `press@`, `privacy@` advertised on site but not yet routed; mail currently bounces.
- **Beehiiv newsletter backend** — `Newsletter` component is a setTimeout stub; no real provider wired.
- **Custom domain on Vercel free tier** — Vercel project on free tier; `theisaacstandard.com` configured but worth re-verifying SSL + apex/www both resolve.
- **Q20i existing review** — flagged in user memory as `[NEEDS TESTING]` because it was written before the channel voice spec; per discovery output 3 it is live without DRAFT banner. **Conflict noted:** memory says flagged-for-testing, current file state shows fully published with 3.9 rating and no banner. Recommend James audit the live Q20i text against `channel_voice_and_rules.md` and either re-flag or accept as-is.
- **Categories with zero content** — Smart Home, Trackers, Outdoor Robots.

## File structure overview

```
/ (repo root)
├── app/                              # Next.js App Router
│   ├── page.tsx                      # Home
│   ├── layout.tsx                    # Root layout: Header, Footer, AnnouncementBanner, Analytics
│   ├── not-found.tsx                 # 404
│   ├── robots.ts                     # SEO robots rules
│   ├── sitemap.ts                    # Dynamic XML sitemap
│   ├── icon.svg                      # Favicon
│   ├── about/page.tsx
│   ├── authors/isaac/page.tsx        # Person JSON-LD
│   ├── category/
│   │   ├── budget-audio/page.tsx
│   │   ├── mini-pcs/page.tsx
│   │   ├── outdoor-robots/page.tsx
│   │   ├── smart-home/page.tsx
│   │   └── trackers/page.tsx
│   ├── review/
│   │   ├── anker-soundcore-q20i-review/page.tsx
│   │   └── beelink-gti13-ultra-review/page.tsx
│   ├── contact/page.tsx
│   ├── disclosure/page.tsx
│   ├── how-we-test/page.tsx
│   ├── privacy/page.tsx
│   └── terms/page.tsx
├── components/                       # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── AnnouncementBanner.tsx
│   ├── Logo.tsx
│   ├── AffiliateLink.tsx             # Injects AMAZON_AFFILIATE_TAG
│   ├── Byline.tsx
│   ├── ReviewCard.tsx
│   ├── CategoryCard.tsx
│   ├── Hero.tsx
│   ├── ProductImage.tsx
│   ├── ComparisonTable.tsx
│   ├── FAQ.tsx                       # Renders FAQPage JSON-LD
│   └── Newsletter.tsx                # Stub — no backend
├── lib/
│   └── site.ts                       # Site metadata + categories + reviews array (single source of truth)
├── public/
│   ├── brand/
│   │   ├── mark.svg / mark-light.svg
│   │   ├── lockup-horizontal.svg
│   │   ├── og-image.svg
│   │   ├── web-banner.svg / twitter-banner.svg / youtube-banner.svg / video-intro.svg
│   │   ├── beelink-x-card.svg / q20i-x-card.svg
│   │   └── png/                      # Auto-generated PNG conversions
│   ├── google71df977b0d4f1654.html   # Search Console verification
│   └── press.html                    # Static press kit
├── automation/
│   ├── weekly-reviews.ps1            # Sunday 9:07 AM cron
│   ├── register-task.ps1             # One-time scheduler setup
│   ├── svg-to-png.ps1                # Headless Edge SVG→PNG
│   └── logs/                         # Per-run logs (gitignored)
├── templates/
│   ├── review-template.tsx           # Canonical review scaffold
│   └── testing-notes-template.md     # Tester capture sheet
├── scripts/
│   └── new-review.mjs                # Interactive Claude draft CLI
├── video/
│   └── q20i-review/
│       ├── README.md
│       ├── 01-script-longform.md
│       ├── 02-script-shorts.md
│       ├── 03-youtube-metadata.md
│       └── slides/                   # 6 slide SVGs + thumbnail.svg
├── CLAUDE.md                         # Project handoff conventions
├── README.md
├── package.json                      # Next 15.5, React 19, TS 6.0, Tailwind 3.4
├── tsconfig.json                     # ES2022, @/* alias, strict
├── next.config.mjs                   # Image remotePatterns, legacy redirect
├── tailwind.config.ts
├── postcss.config.mjs
└── .env.example                      # SITE_URL, AMAZON_AFFILIATE_TAG, ANTHROPIC_API_KEY
```

## Brand & integrations summary

### Brand identity
- **Name:** The Isaac Standard
- **Tagline:** "Honest gear reviews, held to a higher bar" (also rendered "Honest gear, held to a higher bar" in OG/Twitter metadata — minor inconsistency, James to pick one)
- **Founder / byline:** James Isaac Lee, byline "Isaac," founded May 2026
- **Mark:** serif italic "S" on dark square, 512×512 SVG + PNG, light/dark variants
- **Lockup:** mark + wordmark, 960×192
- **Palette:** ink `#1a1d1f`, ink-soft `#4a4f54`, accent rust `#c2562a`, accent-deep `#8f3d1c`, paper cream `#f4f1ea`
- **Fonts (Google Fonts):** Fraunces (serif headlines, 400–900 + italic), Spline Sans (body, 400–600), JetBrains Mono (labels, 400–500)

### Social handles
- **X / Twitter:** @IsaacStandard_ (active)
- **YouTube:** channel banner asset exists; no channel publishing yet
- **Instagram:** referenced in commented-out social config; not active

### Domain & hosting
- **Primary:** `theisaacstandard.com` (Cloudflare DNS, Vercel SSL)
- **Fallback:** `theisaacstandard.vercel.app`
- **Hosting tier:** Vercel free
- **GitHub repo:** `jlee4102/theisaacstandard`

### Env vars
- `SITE_URL` — `https://theisaacstandard.com`
- `AMAZON_AFFILIATE_TAG` — `theisaacstand-20` (placeholder `yourtag-20` in `.env.example`)
- `ANTHROPIC_API_KEY` — for weekly cron + interactive draft CLI

### SEO infrastructure
- Sitemap: 13 core routes + dynamic category/review pages, `lastModified` populated
- Robots: all UAs allowed, sitemap pointer included
- Google Search Console: verified via static HTML file
- OG: custom 1200×630 image, site name, description, type `website`
- Twitter Card: `summary_large_image`, @IsaacStandard_ as site + creator
- JSON-LD: Review schema (with rating), FAQPage, Person (author page)
- No canonical/hreflang config beyond Next defaults
- One legacy redirect (Q20i vs P20i → Q20i review)

### Image / CDN whitelist (next.config.mjs)
- `m.media-amazon.com`, `images-na.ssl-images-amazon.com` (Amazon)
- `images.unsplash.com` (stock)
- `cdn.shopify.com`
- `www.bee-link.com` (Beelink manufacturer)

### Analytics
- Vercel Analytics + Speed Insights (passive)
- No Google Analytics, Plausible, Mixpanel, or outbound click tracking

### Editorial standards (press.html / how-we-test)
- Product purchases preferred over samples
- One-week minimum hands-on testing
- Affiliate disclosure on every page (top of review, before first link)
- No AI-generated experiential claims
- No pre-publication brand review
- Corrections flagged for 30 days
- Editorial contact: `press@theisaacstandard.com`; general: `hello@theisaacstandard.com`

## Known blockers & unresolved decisions

- **Beelink X / Twitter launch thread not posted** — thread is drafted; manual paste to @IsaacStandard_ required. Original Sunday window still works.
- **Liberty 4 NC not yet ordered** — ~$79 purchase. Blocks the entire next-review pipeline (order → 1 week test → notes → draft → publish).
- **Cloudflare Email Routing not set up** — `hello@`, `press@`, `privacy@` are published on Contact, Privacy, and Disclosure pages but currently bounce. Quick fix; high embarrassment risk if a journalist or sample-pitch lands while it's broken.
- **Beehiiv newsletter is a stub** — `components/Newsletter.tsx` and `AnnouncementBanner` collect emails into a setTimeout no-op. Either wire Beehiiv (or another ESP) or hide the form until ready.
- **YouTube Q20i video not yet recorded** — production kit (scripts, 6 slides, thumbnail, metadata, full README workflow) is complete. Blocker is James's recording time, not assets.
- **No real product photos** — Q20i and Beelink reviews use manufacturer images via Next image remotePatterns. Per `channel_voice_and_rules.md` this is acceptable (don't fabricate experience), but original photos would strengthen E-E-A-T.
- **Author photo policy undecided** — author page currently uses brand-mark avatar; no real photo of James. Decision pending: real photo (stronger E-E-A-T), custom illustrated avatar (backlog item), or keep mark.
- **Live Q20i review status conflict** — user memory flags the Q20i review as `[NEEDS TESTING]` (written before voice spec); current site state shows it published with a 3.9 rating and no DRAFT banner. James should audit the live text against `channel_voice_and_rules.md` and either accept, re-flag, or revise.
- **Tagline inconsistency** — `lib/site.ts` says "Honest gear reviews, held to a higher bar"; OG/Twitter metadata says "Honest gear, held to a higher bar." Pick one.
- **Discord bot token rotation deferred** — from prior memory: a live `DISCORD_BOT_TOKEN` was pasted into chat on 2026-05-30 (trading-bot project). Rotation deferred until after Monday 2026-06-01. **Reminder to rotate it via Discord Dev Portal → Bot → Reset Token, then update env, never commit.** This is out of scope for The Isaac Standard but flagged because it's in shared memory.
- **Voyager_Bot / alpaca-sniper-bot trading project** — completely separate project sharing the same memory file. Out of scope for this handoff. Mentioned only because the working directory of this session is the trading bot's directory, which may confuse future readers.
- **Analytics gap** — Vercel free tier gives pageviews + speed, but no outbound affiliate-click tracking. Decision pending: pay for Plausible (~$9/mo) and add custom event on `AffiliateLink` clicks, or accept the gap until revenue justifies it.
- **Vercel free tier vs Pro** — image bandwidth, function invocations, and analytics retention all capped on free. No immediate pressure but worth watching as traffic grows.
- **Three empty categories** — Smart Home, Trackers, Outdoor Robots have landing pages and "Reviews coming soon" copy but no reviews. Either add reviews soon or remove from nav until ready (current state hurts perceived depth).
- **3-sale Amazon deadline pressure** — affiliate approval lapses at ~2026-11-17 without 3 qualifying sales. As of handoff: 2 reviews live, ~5.5 months to deadline, zero confirmed sales reported in discovery. Realistic risk if traffic doesn't ramp.

## Key durable facts

| Fact | Value |
|---|---|
| Site name | The Isaac Standard |
| Founder / byline | James Isaac Lee / Isaac |
| Founded | May 2026 |
| Custom domain | theisaacstandard.com |
| Vercel fallback URL | theisaacstandard.vercel.app |
| GitHub repo | jlee4102/theisaacstandard |
| Hosting | Vercel (free tier), Cloudflare DNS, Vercel SSL |
| Stack | Next.js 15.5, React 19, TypeScript 6.0, Tailwind 3.4 |
| Amazon affiliate tag | theisaacstand-20 |
| Affiliate approval date | 2026-05-21 |
| 3-sale qualifying deadline | ~2026-11-17 (180 days from approval) |
| X / Twitter handle | @IsaacStandard_ |
| Categories | budget-audio, smart-home, trackers, mini-pcs, outdoor-robots (5) |
| Reviews live | 2 (Beelink GTi13 Ultra 4.2/5, Anker Soundcore Q20i 3.9/5) |
| Rating scale | 0.0 – 5.0, one decimal |
| Publishing cadence target | 1 review / week (Sundays) |
| Weekly cron | Sundays 9:07 AM, Windows Task Scheduler |
| Word count target (single review) | 1,000–1,400 |
| Word count target (head-to-head) | 1,200–1,600 |
| YouTube script target | 6–8 min, 15-sec hook |
| Test duration minimum | 1 week hands-on |
| Env vars | SITE_URL, AMAZON_AFFILIATE_TAG, ANTHROPIC_API_KEY |
| Analytics | Vercel Analytics + Speed Insights only |
| Contact emails | hello@, press@, privacy@ @theisaacstandard.com (routing pending) |
| Brand fonts | Fraunces, Spline Sans, JetBrains Mono |
| Brand palette | #1a1d1f, #4a4f54, #c2562a, #8f3d1c, #f4f1ea |
| OG image | 1200×630, /brand/og-image.svg |
