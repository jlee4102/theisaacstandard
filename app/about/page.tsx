import { site } from '@/lib/site';

export const metadata = { title: 'About', description: `What ${site.name} is, and how we work.` };

export default function Page() {
  return (
    <article className="prose-isaac">
      <h1 className="font-serif text-3xl">About {site.name}</h1>
      <p>
        {site.name} is an independent product review site. We buy gear, live with it, and tell you whether it earned its
        spot. No sponsored picks. No SEO-bait listicles. If we didn't test it, we don't recommend it.
      </p>
      <h2>How we make money</h2>
      <p>
        Some links on this site are affiliate links — primarily Amazon Associates. If you buy through them, we earn a
        small commission at no cost to you. That's the entire business model: we get paid only when our recommendations
        are good enough to act on.
      </p>
      <h2>How we test</h2>
      <ul>
        <li>We buy the product (or borrow it) — never paid placement.</li>
        <li>We use it for at least a week before publishing.</li>
        <li>We compare against the obvious competitors at the same price.</li>
        <li>We update reviews when products change or prices shift meaningfully.</li>
      </ul>
    </article>
  );
}
