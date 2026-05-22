import Link from 'next/link';
import { announcement } from '@/lib/site';

export default function AnnouncementBanner() {
  if (!announcement.enabled) return null;
  return (
    <div className="bg-ink text-paper relative z-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-2.5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
        <span className="font-mono text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.22em] text-paper/85">
          {announcement.message}
        </span>
        {announcement.cta && announcement.href && (
          <Link
            href={announcement.href}
            className="font-mono text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.18em] text-accent hover:text-paper transition underline-offset-4 hover:underline"
          >
            {announcement.cta}
          </Link>
        )}
      </div>
    </div>
  );
}
