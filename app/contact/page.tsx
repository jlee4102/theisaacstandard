export const metadata = { title: 'Contact' };

export default function Page() {
  return (
    <article className="prose-isaac">
      <h1 className="font-serif text-3xl">Contact</h1>
      <p>
        Got a tip on a product worth reviewing? Found an error in one of our reviews? We read every message.
      </p>

      <h2>Email</h2>
      <ul>
        <li><strong>General:</strong> hello@theisaacstandard.com</li>
        <li><strong>Privacy:</strong> privacy@theisaacstandard.com</li>
        <li><strong>Press &amp; partnerships:</strong> press@theisaacstandard.com</li>
      </ul>

      <h2>About product samples</h2>
      <p>
        We <em>do</em> accept review samples, but acceptance never guarantees a positive review. If we don't think the
        product earns a recommendation, we won't recommend it — no exceptions. If you'd rather not send a sample under
        those terms, we understand.
      </p>

      <h2>Response time</h2>
      <p>
        We aim to reply within 3 business days. Reviewer queries get priority over PR pitches.
      </p>
    </article>
  );
}
