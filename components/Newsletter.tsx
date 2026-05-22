'use client';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    try {
      // TODO: wire to Beehiiv/ConvertKit via /api/subscribe
      await new Promise((r) => setTimeout(r, 600));
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
          <div className="eyebrow mb-2">The weekly Standard</div>
          <h3 className="font-serif text-2xl md:text-3xl tracking-tight">One honest review per Sunday.</h3>
          <p className="text-ink-soft mt-2 leading-relaxed">
            Short email. One review, one deal worth your attention, one piece of gear we&apos;d skip.
            No spam, unsubscribe anytime.
          </p>
        </div>
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
      </div>
    </aside>
  );
}
