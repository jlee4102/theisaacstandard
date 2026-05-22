'use client';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    try {
      // TODO: replace with your Beehiiv / ConvertKit endpoint.
      // Beehiiv example:
      //   POST https://api.beehiiv.com/v2/publications/<PUB_ID>/subscriptions
      //   headers: { Authorization: 'Bearer <API_KEY>' }
      //   body: { email, reactivate_existing: true }
      await new Promise((r) => setTimeout(r, 600));
      setStatus('done');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <aside className="not-prose border border-ink/10 rounded-lg p-6 bg-ink/[0.02] my-10">
      <h3 className="font-serif text-xl">Get the weekly Standard</h3>
      <p className="text-ink/70 text-sm mt-1">
        One short email each Sunday: the week's best gear deals and what's actually worth buying. No spam, unsubscribe anytime.
      </p>
      <form onSubmit={submit} className="flex flex-col sm:flex-row gap-2 mt-4">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="flex-1 px-3 py-2 border border-ink/20 rounded bg-paper"
          disabled={status === 'submitting' || status === 'done'}
        />
        <button
          type="submit"
          className="bg-accent text-paper px-5 py-2 rounded font-medium hover:opacity-90 disabled:opacity-60"
          disabled={status === 'submitting' || status === 'done'}
        >
          {status === 'submitting' ? 'Subscribing…' : status === 'done' ? 'Subscribed ✓' : 'Subscribe'}
        </button>
      </form>
      {status === 'error' && <p className="text-red-700 text-sm mt-2">Something went wrong — try again?</p>}
    </aside>
  );
}
