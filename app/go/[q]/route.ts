import { NextRequest, NextResponse } from 'next/server';
import { site } from '@/lib/site';

// Short branded affiliate redirect (2026-07-17): YouTube truncates long amazon.com/s?k=…%20… search
// URLs so they render "cut off". A tiny /go/<slug> link never truncates, and the affiliate tag is
// applied HERE (server-side) so it can't be stripped or lost — one place to get the tag right.
//   /go/war-of-the-worlds-1938-book  ->  302  ->  amazon.com/s?k=war+of+the+worlds+1938+book&tag=…
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ q: string }> }
) {
  const { q } = await params;
  const query = decodeURIComponent(q || '').replace(/-/g, ' ').trim().slice(0, 150);
  const target = query
    ? `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${site.affiliateTag}`
    : `https://www.amazon.com/?tag=${site.affiliateTag}`;
  return NextResponse.redirect(target, 302);
}
