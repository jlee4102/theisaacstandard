// HONESTY FIX (2026-07-26): this component was LYING to visitors. `submit()` waited 600ms, threw
// the email away, and showed "Subscribed ✓" — on all 16 review pages, every guide and every
// comparison. Nobody who typed their address was ever subscribed to anything, and no list existed
// to subscribe them to (the handler carried a `TODO: wire to Beehiiv/ConvertKit`).
//
// A fake capture is worse than no capture: it burns the one moment a reader was willing to give
// you their address, and it is a promise the site cannot keep. Until a real provider is wired
// (owner step — an email service account is credential creation), this asks for nothing and
// promises nothing. It still states the offer, so the intent is visible when the provider lands:
// swap `LIST_ACTIVE` to true and point `submit()` at the real /api/subscribe endpoint.
'use client';
import { useState } from 'react';

const LIST_ACTIVE = false;   // flip when a real email provider is connected

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    try {
      const r = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!r.ok) throw new Error('subscribe failed');
      setStatus('done');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <aside className="not-prose relative overflow-hidden rounded-2xl border border-line bg-card shadow-card my-12">
      <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c2562a 0%, transparent 70%)', filter: 'blur(20px)' }}
      />
      <div className="relative p-7 md:p-9 grid md:grid-cols-5 gap-6 items-center">
        <div className="md:col-span-3">
          {/* VISUAL AUDIT (2026-07-26): the banner's untrue "every Sunday" claim was fixed, but the
              same claim survived here — reviews actually publish every 2-3 days. */}
          <div className="eyebrow mb-2">The Standard, by email</div>
          <h3 className="font-serif text-2xl md:text-3xl tracking-tight">One honest review at a time.</h3>
          <p className="text-ink-soft mt-2 leading-relaxed">
            Short email. One review, one deal worth your attention, one piece of gear we&apos;d skip.
            No spam, unsubscribe anytime.
          </p>
        </div>
        {LIST_ACTIVE ? (
          <form onSubmit={submit} className="md:col-span-2 flex flex-col gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="px-4 py-3 border border-line rounded-md bg-paper text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent transition"
              disabled={status === 'submitting' || status === 'done'}
            />
            <button
              type="submit"
              className="bg-ink text-paper px-5 py-3 rounded-md font-medium hover:bg-accent-deep transition disabled:opacity-60"
              disabled={status === 'submitting' || status === 'done'}
            >
              {status === 'submitting' ? 'Subscribing…' : status === 'done' ? 'Subscribed ✓' : 'Subscribe'}
            </button>
            {status === 'error' && <p className="text-red-700 text-sm">Something went wrong — try again?</p>}
          </form>
        ) : (
          <div className="md:col-span-2">
            <p className="text-sm text-ink-soft border border-line rounded-md px-4 py-3 bg-paper">
              The newsletter isn&apos;t open for signups yet — we&apos;d rather not collect your
              address until we can actually send you something. New reviews go up here every week
              in the meantime.
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}
