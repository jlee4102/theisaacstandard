export function LogoMark({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="The Isaac Standard mark"
    >
      <rect width="64" height="64" rx="10" fill="#1a1d1f" />
      <circle cx="8" cy="8" r="1.2" fill="#c2562a" opacity="0.85" />
      <circle cx="56" cy="8" r="1.2" fill="#c2562a" opacity="0.85" />
      <circle cx="8" cy="56" r="1.2" fill="#c2562a" opacity="0.85" />
      <circle cx="56" cy="56" r="1.2" fill="#c2562a" opacity="0.85" />
      <text
        x="32"
        y="44"
        textAnchor="middle"
        fontFamily="Fraunces, Georgia, serif"
        fontStyle="italic"
        fontWeight="900"
        fontSize="44"
        fill="#c2562a"
        letterSpacing="-0.5"
      >
        S
      </text>
      <line x1="20" y1="52" x2="44" y2="52" stroke="#f4f1ea" strokeWidth="1.4" strokeLinecap="square" />
      <line x1="20" y1="52" x2="20" y2="55" stroke="#f4f1ea" strokeWidth="1.4" />
      <line x1="32" y1="52" x2="32" y2="54.5" stroke="#f4f1ea" strokeWidth="1.2" />
      <line x1="44" y1="52" x2="44" y2="55" stroke="#f4f1ea" strokeWidth="1.4" />
    </svg>
  );
}

export default function Logo({ markSize = 44 }: { markSize?: number }) {
  return (
    <div className="flex items-center gap-3">
      <LogoMark size={markSize} />
      <div className="leading-none">
        <div className="font-mono text-[0.62rem] tracking-[0.22em] uppercase text-accent-deep">
          The Standard
        </div>
        <div className="font-serif text-2xl md:text-[1.6rem] tracking-tight mt-1 leading-none">
          Isaac <em className="text-accent not-italic font-medium">Standard</em>
        </div>
      </div>
    </div>
  );
}
