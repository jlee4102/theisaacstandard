# weekly-reviews.ps1
# Autonomous weekly draft generator for The Isaac Standard.
# Researches trending products via Claude API (web search enabled),
# drafts 2-3 review pages, commits to a new branch, pushes to GitHub.
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

Log "=== Weekly review draft run started ==="

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

# --- Build the prompt
$today = Get-Date -Format 'yyyy-MM-dd'
$existingList = ($existingSlugs | ForEach-Object { "  - $_" }) -join "`n"

$systemPrompt = @"
You are a senior product reviewer for "The Isaac Standard," an Amazon affiliate review site.
Your task: research 2-3 trending consumer-tech products and produce ready-to-publish review pages.

CATEGORIES (pick from these slugs): budget-audio, smart-home, trackers, mini-pcs, outdoor-robots

CONSTRAINTS:
- Each product MUST exist on Amazon with a real ASIN you verified via web search (amazon.com/dp/XXXXXXXXXX)
- DO NOT fabricate ASINs. If you can't verify, skip and pick another product.
- DO NOT pick products that match any of these existing slugs:
$existingList

OUTPUT FORMAT: return ONLY a single JSON object (no markdown fences, no commentary) with this shape:
{
  "reviews": [
    {
      "slug": "kebab-case-slug",
      "title": "Full review title under 70 chars",
      "category": "one-of-the-slugs-above",
      "asin": "B0XXXXXXXX",
      "excerpt": "One-sentence hook for the listing page.",
      "rating": 4.3,
      "pageContent": "FULL TSX FILE CONTENT — see template below"
    }
  ]
}

TEMPLATE for pageContent (use this exact structure, fill in real content; do not change imports, do not include code fences):

import AffiliateLink from '@/components/AffiliateLink';
import Byline from '@/components/Byline';
import ComparisonTable from '@/components/ComparisonTable';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import { site } from '@/lib/site';

export const metadata = {
  title: 'TITLE HERE',
  description: 'DESCRIPTION HERE',
};

const ASIN = 'BXXXXXXXX';

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@type': 'Product', name: 'PRODUCT NAME' },
    reviewRating: { '@type': 'Rating', ratingValue: 'RATING', bestRating: '5' },
    author: { '@type': 'Person', name: 'Isaac', url: \`\${site.url}/authors/isaac\` },
    publisher: { '@type': 'Organization', name: site.name },
    datePublished: '$today',
  };

  return (
    <article className="prose-isaac">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="text-ink/50 text-sm not-prose">CATEGORY DISPLAY NAME</p>
      <h1 className="font-serif text-3xl md:text-4xl mt-2">TITLE</h1>
      <Byline date="$today" readTime="X min read" />

      <p className="not-prose bg-ink/[0.03] border-l-4 border-accent px-4 py-3 my-6 text-sm text-ink/80">
        <strong>Disclosure:</strong> This article contains Amazon affiliate links. If you buy through them, we earn a small commission at no extra cost to you. We only recommend products we'd buy ourselves.
      </p>

      <p className="text-lg text-ink/80 mt-3">INTRO 2-3 SENTENCES — opinionated, specific, no fluff.</p>

      <h2>TL;DR</h2>
      <ul>
        <li>BULLET 1</li>
        <li>BULLET 2</li>
        <li>BULLET 3</li>
      </ul>

      <div className="flex flex-wrap gap-3 not-prose my-6">
        <AffiliateLink asin={ASIN}>Check price on Amazon</AffiliateLink>
      </div>

      <h2>Specs at a glance</h2>
      <ComparisonTable
        headers={['PRODUCT NAME']}
        rows={[
          { feature: 'FEATURE', values: ['VALUE'] },
          // 6-8 rows total
        ]}
      />

      <h2>SECTION 1 HEADING</h2>
      <p>SPECIFIC, OPINIONATED CONTENT.</p>

      <h2>SECTION 2 HEADING</h2>
      <p>SPECIFIC, OPINIONATED CONTENT.</p>

      <h2>SECTION 3 HEADING</h2>
      <p>SPECIFIC, OPINIONATED CONTENT.</p>

      <h2>Who Should Buy This</h2>
      <h3>Buy if:</h3>
      <ul><li>...</li><li>...</li><li>...</li></ul>
      <h3>Skip if:</h3>
      <ul><li>...</li><li>...</li></ul>

      <h2>The Isaac Standard verdict</h2>
      <p>CLEAR RECOMMENDATION.</p>

      <div className="flex flex-wrap gap-3 not-prose mt-6">
        <AffiliateLink asin={ASIN}>Buy on Amazon →</AffiliateLink>
      </div>

      <Newsletter />

      <FAQ
        items={[
          { q: 'QUESTION?', a: 'ANSWER.' },
          // 4-5 buyer-intent questions
        ]}
      />

      <p className="text-xs text-ink/50 mt-10">Prices and availability accurate as of publish date.</p>
    </article>
  );
}

TONE: honest, opinionated, specific. No marketing fluff. Mention trade-offs. Active voice. Short paragraphs. 700-1000 words.
"@

$userPrompt = "Begin. Today is $today. Research 2-3 trending products NOW via web_search, verify ASINs on Amazon, then return the JSON."

# --- Call Anthropic API
Log "Calling Anthropic API (model: claude-opus-4-7, web_search enabled)..."
$body = @{
    model = 'claude-opus-4-7'
    max_tokens = 16000
    system = $systemPrompt
    messages = @(@{ role = 'user'; content = $userPrompt })
    tools = @(@{ type = 'web_search_20250305'; name = 'web_search'; max_uses = 8 })
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

# Extract the final text block (after any tool_use blocks)
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

Log ("Got {0} reviews from API: {1}" -f $data.reviews.Count, (($data.reviews | ForEach-Object { $_.slug }) -join ', '))

# --- Write files
foreach ($r in $data.reviews) {
    $reviewDir = "app\review\$($r.slug)"
    if (-not (Test-Path $reviewDir)) { New-Item -ItemType Directory $reviewDir -Force | Out-Null }
    Set-Content -Path (Join-Path $reviewDir 'page.tsx') -Value $r.pageContent -Encoding utf8
    Log "Wrote $reviewDir\page.tsx"
}

# --- Update lib/site.ts — prepend new entries to the reviews array
$newEntries = ($data.reviews | ForEach-Object {
    "  {`n    slug: '$($_.slug)',`n    title: `"$($_.title -replace '"','\"')`",`n    category: '$($_.category)',`n    excerpt: `"$($_.excerpt -replace '"','\"')`",`n    date: '$today',`n    rating: $($_.rating),`n  },"
}) -join "`n"

$siteTsNew = $siteTs -replace '(export const reviews = \[\s*)', "`$1`n$newEntries`n"
Set-Content 'lib\site.ts' -Value $siteTsNew -Encoding utf8
Log "Updated lib/site.ts with new entries"

# --- Git: new branch, commit, push
$branch = "drafts/$today-weekly-batch"
$slugList = ($data.reviews | ForEach-Object { $_.slug }) -join ', '

Log "Creating branch $branch and pushing..."
git checkout -b $branch 2>&1 | ForEach-Object { Log $_ }
git add -A 2>&1 | ForEach-Object { Log $_ }
git commit -m "Weekly draft batch: $slugList" 2>&1 | ForEach-Object { Log $_ }
$pushOut = git push -u origin $branch 2>&1
$pushOut | ForEach-Object { Log $_ }

# Return to main locally so next run starts clean
git checkout main 2>&1 | ForEach-Object { Log $_ }

$compareUrl = "https://github.com/jlee4102/theisaacstandard/compare/main...$branch"
Log "=== Done. Review at: $compareUrl ==="
Write-Host "`nReview the drafts at: $compareUrl"
