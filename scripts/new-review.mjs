#!/usr/bin/env node
// Draft a new review using Claude. Edit the output before publishing — Google penalizes
// raw AI content, but AI-drafted-then-human-edited is the standard workflow.
//
// Usage: node scripts/new-review.mjs "Anker Soundcore Space One" budget-audio
// Requires ANTHROPIC_API_KEY in .env.local

import fs from 'node:fs';
import path from 'node:path';

const [, , product, category = 'budget-audio'] = process.argv;
if (!product) {
  console.error('Usage: node scripts/new-review.mjs "Product Name" [category-slug]');
  process.exit(1);
}

const apiKey = process.env.ANTHROPIC_API_KEY;
if (!apiKey) {
  console.error('Set ANTHROPIC_API_KEY in your environment or .env.local');
  process.exit(1);
}

const prompt = `You are a senior product reviewer for The Isaac Standard, a trust-first affiliate site.
Write a review of the "${product}" in our category "${category}".

Style rules:
- Honest, specific, opinionated. No marketing fluff.
- Use H2 sections: TL;DR, [2-3 product-specific sections], Who Should Buy This, The Isaac Standard verdict.
- Mention trade-offs and who should NOT buy it.
- Write in active voice. Short paragraphs.
- ~600-900 words.
- Output raw markdown only (no preamble). Use ## for H2, ### for H3.
- Leave the literal placeholder [ASIN] where the Amazon ASIN should go.

Begin:`;

const res = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'x-api-key': apiKey,
    'anthropic-version': '2023-06-01',
  },
  body: JSON.stringify({
    model: 'claude-opus-4-7',
    max_tokens: 4000,
    messages: [{ role: 'user', content: prompt }],
  }),
});

if (!res.ok) {
  console.error('API error:', res.status, await res.text());
  process.exit(1);
}

const data = await res.json();
const markdown = data.content[0].text;

const slug = product
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');
const outDir = path.join(process.cwd(), 'drafts');
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, `${slug}.md`);
fs.writeFileSync(outPath, `# ${product}\n\nCategory: ${category}\n\n---\n\n${markdown}\n`);
console.log(`Draft saved to ${outPath}`);
console.log('Next: edit it, add real opinions/photos, then convert to a page under app/review/<slug>/page.tsx');
