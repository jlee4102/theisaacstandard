import Image from 'next/image';

// Image source priority (channel policy):
//   1. YOUR own photography of the tested product — best for E-E-A-T and trust.
//      Drop in public/reviews/<slug>/ and pass src="/reviews/<slug>/main.jpg".
//   2. Manufacturer / press-kit images, attributed via the caption prop
//      (e.g. "Image: Soundcore"). Fine for scaffolds before testing.
//   3. Leave src undefined → renders a "Photo needed" placeholder.
//
// DO NOT use Amazon listing images without PA-API access — they belong to the
// third-party seller, and Google's helpful-content updates demote sites that
// share perceptually-identical stock product shots with other affiliate sites.
export default function ProductImage({
  src,
  alt,
  caption,
  aspect = '4/3',
}: {
  src?: string;
  alt: string;
  caption?: string;
  aspect?: '4/3' | '16/9' | '1/1' | '3/4';
}) {
  const aspectClass = {
    '4/3': 'aspect-[4/3]',
    '16/9': 'aspect-[16/9]',
    '1/1': 'aspect-square',
    '3/4': 'aspect-[3/4]',
  }[aspect];

  if (!src) {
    return (
      <figure className="not-prose my-6">
        <div className={`${aspectClass} rounded-lg border-2 border-dashed border-line bg-card flex flex-col items-center justify-center p-6 text-center`}>
          <div className="text-3xl mb-2 opacity-30">◯</div>
          <p className="text-sm font-mono uppercase tracking-wider text-ink-faint mb-1">Photo needed</p>
          <p className="text-xs text-ink-soft max-w-xs">{alt}</p>
        </div>
        {caption && <figcaption className="text-xs text-ink-faint mt-2 italic">{caption}</figcaption>}
      </figure>
    );
  }

  return (
    <figure className="not-prose my-6">
      {/* UX AUDIT P2 (2026-07-26): sources are square (500x500 manufacturer shots) but rendered
          into a 4:3 box with object-cover — measured 686x514 on a live review, so ~25% of the
          image was cropped off the top and bottom. On a PRODUCT photo that can slice the product
          itself. `object-contain` on a subtle backdrop shows the whole product; the fixed aspect
          box is kept so the page still reserves the same space (no layout shift) and every review
          keeps an identical image footprint. */}
      <div className={`${aspectClass} relative rounded-lg overflow-hidden border border-line bg-highlight`}>
        <Image src={src} alt={alt} fill sizes="(min-width: 768px) 800px, 100vw" className="object-contain p-3" />
      </div>
      {caption && <figcaption className="text-xs text-ink-faint mt-2 italic">{caption}</figcaption>}
    </figure>
  );
}
