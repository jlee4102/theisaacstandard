import Image from 'next/image';

// Use this for ACTUAL product photography you take during testing.
// Drop the image into public/reviews/<slug>/ and pass src="/reviews/<slug>/main.jpg".
// Avoids fake product imagery — visual content matches the channel's testing rules.
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
      <div className={`${aspectClass} relative rounded-lg overflow-hidden border border-line bg-card`}>
        <Image src={src} alt={alt} fill sizes="(min-width: 768px) 800px, 100vw" className="object-cover" />
      </div>
      {caption && <figcaption className="text-xs text-ink-faint mt-2 italic">{caption}</figcaption>}
    </figure>
  );
}
