# weekly-reviews.ps1
# Autonomous weekly DRAFT SCAFFOLD generator for The Isaac Standard.
# Researches trending products via Claude API (web search), generates
# scaffolds with verifiable specs only + bracketed [NEEDS TESTING] gaps,
# pushes to a drafts/ branch on GitHub. The human fills the brackets
# after real hands-on testing — scaffolds NEVER ship as-is.
#
# Requires: ANTHROPIC_API_KEY in user env or .env.local
# Schedule via Task Scheduler — see automation/register-task.ps1

$ErrorActionPreference = 'Stop'
$repo = 'C:\Users\JLee4\OneDrive\Desktop\theisaacstandard'
Set-Location $repo

$logDir = Join-Path $repo 'automation\logs'
if (-not (Test-Path $logDir)) { New-Item -ItemType Directory $logDir | Out-Null }
$logFile = Join-Path $logDir ("run-{0:yyyyMMdd-HHmmss}.log" -f (Get-Date))
function Log($msg) { $line = "[{0:HH:mm:ss}] $msg" -f (Get-Date); Write-Host $line; Add-Content $logFile $line }

Log "=== Weekly scaffold draft run started ==="

# --- Load API key
$apiKey = $env:ANTHROPIC_API_KEY
if (-not $apiKey -and (Test-Path '.env.local')) {
    $line = Get-Content '.env.local' | Where-Object { $_ -match '^ANTHROPIC_API_KEY=' }
    if ($line) { $apiKey = ($line -split '=', 2)[1].Trim() }
}
if (-not $apiKey) {
    Log "ERROR: ANTHROPIC_API_KEY not set. Set it in user env or .env.local. Aborting."
    exit 1
}

# --- Inspect existing reviews so we don't duplicate
$siteTs = Get-Content 'lib\site.ts' -Raw
$existingSlugs = [regex]::Matches($siteTs, "slug:\s*'([^']+)'") | ForEach-Object { $_.Groups[1].Value }
Log ("Existing review slugs: " + ($existingSlugs -join ', '))

$today = Get-Date -Format 'yyyy-MM-dd'
$existingList = ($existingSlugs | ForEach-Object { "  - $_" }) -join "`n"

$systemPrompt = @"
You are generating SCAFFOLDS — not finished reviews — for The Isaac Standard, James's affiliate review site and YouTube channel.

CHANNEL VOICE
- Technical and detailed. Explain *why* things perform the way they do (driver size, codec, thermals, sensor type), define jargon briefly on first use.
- Honest and specific. No marketing fluff. Never overstate.
- Medium length target for a finished review is 1,000-1,400 words. Scaffolds will be shorter because experiential sections are bracketed for James to fill in after testing.

HARD RULES — NO EXCEPTIONS
- You have NOT tested any product. Never write a sentence implying you have. Never invent specs, prices, battery hours, comfort impressions, sound quality, build feel, mic quality, app behavior, or any other experiential detail.
- Every experiential claim must be a bracketed gap for James to fill, like:
    [NEEDS TESTING: battery life under continuous playback at 60% volume]
    [NEEDS TESTING: ANC performance against plane hum / subway rumble]
    [NEEDS TESTING: clamp force after 2-3 hour session]
- Manufacturer specs from the Amazon listing or maker's site ARE allowed BUT must be clearly attributed: "Anker rates the driver at 40mm." "Manufacturer claims 30h playback with case." Never strip the attribution.
- Prices: never include a specific price. Use [INSERT CURRENT PRICE — check at publish time].
- Never name a competitor product unless that competitor has well-documented public specs you cite with attribution. Otherwise: [COMPARABLE PRODUCT TO TEST AGAINST IN SAME PRICE TIER].
- Don't role-play as a tester. Don't write "in my testing", "I noticed", "after a week", "to my ear", etc.
- Mechanism is fine without testing: "Hybrid ANC uses both feedforward and feedback microphones — feedforward listens to ambient noise before it reaches the ear, feedback monitors what leaks past the ear cup seal." Explanation of how a technology works ≠ experiential claim.

OUTPUT REQUIREMENTS
- 2-3 products, picked from these categories: budget-audio, smart-home, trackers, mini-pcs, outdoor-robots
- Each product MUST have a real Amazon ASIN you verified via web_search (look up amazon.com/dp/XXXXXXXXXX). Don't fabricate ASINs.
- Skip any product whose slug matches one of these existing reviews:
$existingList

RETURN A SINGLE JSON OBJECT (no markdown fences, no commentary) shaped like:
{
  "reviews": [
    {
      "slug": "kebab-case-product-slug",
      "title": "Concise review title under 70 chars (clear product + angle, no clickbait)",
      "category": "one-of-the-category-slugs",
      "asin": "B0XXXXXXXX",
      "excerpt": "One-sentence honest hook for the listing page. Brackets allowed if needed.",
      "pageContent": "FULL TSX FILE CONTENT — see template below"
    }
  ]
}

NOTE: do NOT include a "rating" field. James assigns ratings after testing.

TEMPLATE for pageContent (use this exact structure; do not change imports; do not include code fences):

import AffiliateLink from '@/components/AffiliateLink';
import Byline from '@/components/Byline';
import ComparisonTable from '@/components/ComparisonTable';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import { site } from '@/lib/site';

export const metadata = {
  title: '[TITLE]',
  description: '[ONE-SENTENCE DESCRIPTION — what the review covers, no overclaim]',
};

const ASIN = 'BXXXXXXXX';

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@type': 'Product', name: '[PRODUCT NAME]' },
    author: { '@type': 'Person', name: 'Isaac', url: \`\${site.url}/authors/isaac\` },
    publisher: { '@type': 'Organization', name: site.name },
    datePublished: '$today',
  };

  return (
    <article className="prose-isaac">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="not-prose bg-yellow-50 border-l-4 border-yellow-600 px-4 py-3 my-4 text-sm text-ink/80">
        <strong>DRAFT — NEEDS HANDS-ON TESTING.</strong> This scaffold contains only verifiable manufacturer specs. All experiential claims are bracketed and must be filled in (or replaced) from real testing notes before publishing.
      </div>

      <p className="text-ink/50 text-sm not-prose">[CATEGORY DISPLAY NAME]</p>
      <h1 className="font-serif text-3xl md:text-4xl mt-2">[TITLE]</h1>
      <Byline date="$today" readTime="[X] min read" />

      <p className="not-prose bg-ink/[0.03] border-l-4 border-accent px-4 py-3 my-6 text-sm text-ink/80">
        <strong>Disclosure:</strong> This article contains Amazon affiliate links. If you buy through them, The Isaac Standard may earn a small commission at no extra cost to you. This never affects the rating — recommendations are based only on hands-on testing.
      </p>

      {/* --- Hook + verdict (write 2-3 sentences when notes are in. Until then keep bracketed.) --- */}
      <p className="text-lg text-ink/80 mt-3">
        [HOOK + VERDICT — 2-3 sentences. What is it, who is it for, and does it deliver? Fill after testing.]
      </p>

      <h2>What it is &amp; who it's for</h2>
      <p>
        [PRODUCT NAME] is a [category descriptor] from [manufacturer]. Manufacturer specs: [LIST 4-6 BULLET-WORTHY VERIFIED SPECS with attribution — e.g., "Anker rates the driver at 40mm; Bluetooth 5.3; manufacturer claims 30 hours total playback with the case; IPX5 water resistance"].
        Sits in roughly the [INSERT CURRENT PRICE TIER — check at publish time] price tier. Main competition at this price: [COMPARABLE PRODUCTS TO TEST AGAINST — at least one direct rival].
      </p>

      <h2>Specs at a glance</h2>
      <ComparisonTable
        headers={['[PRODUCT NAME]']}
        rows={[
          { feature: '[FEATURE 1, e.g., Driver size]', values: ['[MANUFACTURER SPEC]'] },
          { feature: '[FEATURE 2]', values: ['[MANUFACTURER SPEC]'] },
          { feature: '[FEATURE 3]', values: ['[MANUFACTURER SPEC]'] },
          { feature: '[FEATURE 4]', values: ['[MANUFACTURER SPEC]'] },
          { feature: '[FEATURE 5]', values: ['[MANUFACTURER SPEC]'] },
          { feature: '[FEATURE 6]', values: ['[MANUFACTURER SPEC]'] },
          { feature: 'Typical price', values: ['[INSERT — check at publish]'] },
        ]}
      />

      <div className="flex flex-wrap gap-3 not-prose my-6">
        <AffiliateLink asin={ASIN}>Check current price on Amazon</AffiliateLink>
      </div>

      <h2>[PRIMARY PERFORMANCE DIMENSION — e.g., Sound &amp; ANC / Thermals &amp; noise / Battery &amp; charging — pick the dimension that matters most for this product type]</h2>
      <p>
        <strong>Mechanism (no testing needed):</strong> [Explain how the relevant technology works at a technical level — e.g., how hybrid ANC differs from feedforward-only, how passive cooling vs active cooling affects sustained CPU performance, why IPX5 doesn't mean fully submersible. 2-3 sentences. This is fine to write without testing because it's general technical knowledge, not a product-specific claim.]
      </p>
      <p>
        <strong>[NEEDS TESTING]:</strong> [List 2-3 specific things James must measure or observe — e.g., "Battery hours in continuous playback at 60% volume with ANC on vs off." "ANC effectiveness against three noise types: HVAC hum, traffic, cafe chatter." "Real charge time from 0-100% via USB-C."]
      </p>

      <h2>[SECOND PERFORMANCE DIMENSION — e.g., Ergonomics &amp; daily use / I/O &amp; expandability / Build &amp; materials]</h2>
      <p>
        <strong>What the specs tell us:</strong> [Cite verified specs with attribution that bear on this dimension. E.g., "Anker lists the weight at 258 grams" or "The maker's spec sheet shows 2× USB-C 3.2 Gen 2 and 1× HDMI 2.1."]
      </p>
      <p>
        <strong>[NEEDS TESTING]:</strong> [2-3 specific observations to make. E.g., "Clamp force and ear fatigue after 2-3 hour session." "Whether the included case fits the headphones with cable attached."]
      </p>

      <h2>[THIRD PERFORMANCE DIMENSION — e.g., Software &amp; app / Connection stability / Longevity factors]</h2>
      <p>
        <strong>What the specs tell us:</strong> [Verified specs with attribution.]
      </p>
      <p>
        <strong>[NEEDS TESTING]:</strong> [Specific things to measure or observe.]
      </p>

      <h2>How it compares</h2>
      <p>
        [Name 1-2 direct competitors in same price tier with attributed public specs. E.g., "The Soundcore Q30 sits one tier above at the manufacturer's MSRP and adds [SPEC DIFFERENCE]." If James has tested a competitor, this section gets rewritten with real comparison notes. Until then: [COMPARABLE PRODUCT — TESTED?].]
      </p>

      <h2>Who should buy / skip</h2>
      <h3>Worth considering if:</h3>
      <ul>
        <li>[Use case 1 — derived from category and verified specs, not from imagined experience]</li>
        <li>[Use case 2]</li>
        <li>[Use case 3]</li>
      </ul>
      <h3>Look elsewhere if:</h3>
      <ul>
        <li>[Honest constraint — e.g., "you need IP67 or higher water resistance (this is IPX5, splash only)"]</li>
        <li>[Constraint 2]</li>
      </ul>

      <h2>The Isaac Standard verdict</h2>
      <p>
        [VERDICT — fill in after testing. Until then keep bracketed. Should be a clear, specific recommendation with named caveats. No hedging filler like "great for some people."]
      </p>

      <div className="flex flex-wrap gap-3 not-prose mt-6">
        <AffiliateLink asin={ASIN}>Buy on Amazon →</AffiliateLink>
      </div>

      <Newsletter />

      <FAQ
        items={[
          { q: '[BUYER-INTENT QUESTION 1 — based on verifiable specs, e.g., "Is the [product] waterproof?"]', a: '[Answer using attributed manufacturer specs, or NEEDS TESTING if it requires hands-on confirmation.]' },
          { q: '[BUYER-INTENT QUESTION 2]', a: '[Same rule — verifiable spec or NEEDS TESTING.]' },
          { q: '[BUYER-INTENT QUESTION 3]', a: '[...]' },
          { q: '[BUYER-INTENT QUESTION 4]', a: '[...]' },
        ]}
      />

      <p className="text-xs text-ink/50 mt-10">
        Prices and availability accurate as of publish date. Specs cited from manufacturer listings. Experiential claims pending hands-on testing.
      </p>
    </article>
  );
}

CRITICAL REMINDERS:
- The DRAFT banner at the top stays in the scaffold. James removes it manually when the review is ready to ship.
- Every section that requires hands-on observation must be bracketed with [NEEDS TESTING: ...] — the specific thing to test, not a generic placeholder.
- Manufacturer specs require attribution every time. "Anker claims X" or "the spec sheet lists Y" — never bare "the battery is 30 hours".
- No rating in JSON-LD until tested. Don't include a rating in the JSON output either.
"@

$userPrompt = "Today is $today. Use web_search to find 2-3 currently-trending products on Amazon in the allowed categories. For each, verify the ASIN by viewing the amazon.com/dp/ page. Gather manufacturer specs from the listing. Then return the JSON. Remember: scaffolds only — every experiential claim must be bracketed. Do not include a rating field."

# --- Call Anthropic API
Log "Calling Anthropic API (model: claude-opus-4-7, web_search enabled)..."
$body = @{
    model = 'claude-opus-4-7'
    max_tokens = 16000
    system = $systemPrompt
    messages = @(@{ role = 'user'; content = $userPrompt })
    tools = @(@{ type = 'web_search_20250305'; name = 'web_search'; max_uses = 10 })
} | ConvertTo-Json -Depth 20 -Compress

$headers = @{
    'x-api-key' = $apiKey
    'anthropic-version' = '2023-06-01'
    'content-type' = 'application/json'
    'anthropic-beta' = 'web-search-2025-03-05'
}

try {
    $resp = Invoke-RestMethod -Uri 'https://api.anthropic.com/v1/messages' -Method Post -Headers $headers -Body $body -TimeoutSec 600
} catch {
    Log ("API call failed: " + $_.Exception.Message)
    exit 1
}

$textBlocks = $resp.content | Where-Object { $_.type -eq 'text' }
$rawText = ($textBlocks | ForEach-Object { $_.text }) -join "`n"
$jsonMatch = [regex]::Match($rawText, '\{[\s\S]*\}')
if (-not $jsonMatch.Success) {
    Log "ERROR: No JSON found in API response. Response saved to log."
    Add-Content $logFile $rawText
    exit 1
}

try {
    $data = $jsonMatch.Value | ConvertFrom-Json
} catch {
    Log ("ERROR parsing JSON: " + $_.Exception.Message)
    Add-Content $logFile $rawText
    exit 1
}

if (-not $data.reviews -or $data.reviews.Count -eq 0) {
    Log "API returned no reviews. Aborting."
    exit 1
}

Log ("Got {0} scaffolds from API: {1}" -f $data.reviews.Count, (($data.reviews | ForEach-Object { $_.slug }) -join ', '))

# --- Write files
foreach ($r in $data.reviews) {
    $reviewDir = "app\review\$($r.slug)"
    if (-not (Test-Path $reviewDir)) { New-Item -ItemType Directory $reviewDir -Force | Out-Null }
    Set-Content -Path (Join-Path $reviewDir 'page.tsx') -Value $r.pageContent -Encoding utf8
    Log "Wrote $reviewDir\page.tsx"
}

# --- Update lib/site.ts — prepend new entries to the reviews array (no rating until tested)
$newEntries = ($data.reviews | ForEach-Object {
    "  {`n    slug: '$($_.slug)',`n    title: `"$($_.title -replace '"','\"')`",`n    category: '$($_.category)',`n    excerpt: `"$($_.excerpt -replace '"','\"')`",`n    date: '$today',`n  },"
}) -join "`n"

$siteTsNew = $siteTs -replace '(export const reviews = \[\s*)', "`$1`n$newEntries`n"
Set-Content 'lib\site.ts' -Value $siteTsNew -Encoding utf8
Log "Updated lib/site.ts with new entries (rating omitted — pending test)"

# --- Git: new branch, commit, push
$branch = "drafts/$today-weekly-scaffolds"
$slugList = ($data.reviews | ForEach-Object { $_.slug }) -join ', '

Log "Creating branch $branch and pushing..."
git checkout -b $branch 2>&1 | ForEach-Object { Log $_ }
git add -A 2>&1 | ForEach-Object { Log $_ }
git commit -m "Weekly scaffolds (NEEDS TESTING): $slugList" 2>&1 | ForEach-Object { Log $_ }
$pushOut = git push -u origin $branch 2>&1
$pushOut | ForEach-Object { Log $_ }

git checkout main 2>&1 | ForEach-Object { Log $_ }

$compareUrl = "https://github.com/jlee4102/theisaacstandard/compare/main...$branch"
Log "=== Done. Review scaffolds at: $compareUrl ==="
Write-Host "`nScaffolds pushed. Review at: $compareUrl"
Write-Host "DO NOT merge until [NEEDS TESTING] brackets are filled from real hands-on testing."
