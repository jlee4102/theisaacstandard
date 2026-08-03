import Image from 'next/image';
import Link from 'next/link';
import { verdictFor, verdictColor } from '@/components/Verdict';

// Instrument list row (replaces the card grid): score numeral / name + blurb / category / ISO
// date on a rule-divided full-bleed grid. The whole row is the link; hover tints `raised`.
// The `featured` prop survives for API compatibility — featured rows just render larger type.
function tidy(s: string): string {
  const t = s.trim();
  if (/[.!?]$/.test(t)) return t;
  return t.replace(/\s*\S*$/, '') + '…';
}

export default function ReviewCard({
  slug,
  title,
  excerpt,
  rating,
  date,
  category,
  image,
  featured = false,
}: {
  slug: string;
  title: string;
  excerpt: string;
  rating?: number;
  date: string;
  category?: string;
  image?: string;
  featured?: boolean;
}) {
  // PRODUCT THUMBNAILS (owner 2026-08-04: "looks cheap and not like other review website"): every
  // consumer review site leads each row with the product's photo — the all-text rows read as a
  // log viewer. White tile because the shots are white-background cutouts; on near-black they
  // look torn out. The score column stays first: the score is still the site's signature.
  return (
    <Link
      href={`/review/${slug}`}
      className="group grid grid-cols-[48px_56px_1fr] md:grid-cols-[64px_72px_1fr_150px_100px] gap-x-4 md:gap-x-5 items-start border-b border-rule px-5 md:px-9 py-5 hover:bg-raised transition-colors"
    >
      <div>
        {rating !== undefined ? (
          <>
            <span className={`block text-[20px] font-bold tracking-[-0.02em] ${verdictColor(rating)}`}>
              {rating.toFixed(1)}
            </span>
            <span
              className={`mt-1.5 block h-[2px] ${
                verdictFor(rating) === 'SKIP' ? 'bg-negative' : verdictFor(rating) === 'BUY' ? 'bg-positive' : 'bg-accent'
              }`}
              style={{ width: `${(rating / 5) * 100}%`, maxWidth: '100%' }}
              aria-hidden
            />
          </>
        ) : (
          <span className="label-dim">TBD</span>
        )}
      </div>
      <div className="bg-white border border-rule p-1 flex items-center justify-center w-[56px] h-[56px] md:w-[72px] md:h-[72px]">
        {image ? (
          <Image src={image} alt="" width={72} height={72} className="max-h-full max-w-full object-contain" />
        ) : (
          <span className="font-mono text-[9px] text-neutral-400">—</span>
        )}
      </div>
      <div className="min-w-0">
        <h3
          className={`font-bold tracking-[-0.01em] leading-snug group-hover:text-accent transition-colors ${
            featured ? 'text-[19px] md:text-[22px]' : 'text-[16px]'
          }`}
        >
          {title}
        </h3>
        <p className="mt-1 text-[13px] leading-[1.5] text-text-muted max-w-[70ch] line-clamp-2">
          {tidy(excerpt)}
        </p>
        {/* Mobile: category + date fold into one mono line under the blurb */}
        <p className="md:hidden mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-text-dim">
          {rating !== undefined && <span className={verdictColor(rating)}>{verdictFor(rating)}</span>}
          {category ? ` · ${category}` : ''} · {date}
        </p>
      </div>
      <div className="hidden md:block font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted pt-1">
        {category}
      </div>
      <div className="hidden md:block font-mono text-[11px] tracking-[0.08em] text-text-dim text-right pt-1">
        {date}
      </div>
    </Link>
  );
}
