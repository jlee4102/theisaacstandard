```tsx
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soundcore Liberty 4 NC Review: Great Battery and ANC, But Sound and Build Cut Corners',
  description: 'Solid noise-cancelling earbuds with great battery life and app support, but average sound quality and build hold them back from being top-tier.',
  openGraph: {
    title: 'Soundcore Liberty 4 NC Review: Great Battery and ANC, But Sound and Build Cut Corners',
    description: 'Solid noise-cancelling earbuds with great battery life and app support, but average sound quality and build hold them back from being top-tier.',
    images: ['https://m.media-amazon.com/images/I/61Q5Q5Q5Q5L._AC_SL1500_.jpg'],
  },
};

const affiliateUrl = 'https://www.amazon.com/dp/B0CF8WLKW2?tag=theisaacstand-20';

export default function SoundcoreLiberty4NCReview() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Product',
      name: 'Soundcore Liberty 4 NC',
      image: 'https://m.media-amazon.com/images/I/61Q5Q5Q5Q5L._AC_SL1500_.jpg',
      brand: {
        '@type': 'Brand',
        name: 'Soundcore',
      },
      offers: {
        '@type': 'Offer',
        price: '99.99',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: affiliateUrl,
      },
    },
    author: {
      '@type': 'Person',
      name: 'The Isaac Standard',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '7.8',
      bestRating: '10',
    },
    name: 'Soundcore Liberty 4 NC Review: Great Battery and ANC, But Sound and Build Cut Corners',
    description: 'Solid noise-cancelling earbuds with great battery life and app support, but average sound quality and build hold them back from being top-tier.',
    datePublished: new Date().toISOString().split('T')[0],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto px-4 py-8">
        {/* DRAFT Banner */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-4 mb-8 rounded">
          <p className="font-bold">⚠️ DRAFT — Not yet approved for publication</p>
          <p className="text-sm">Remove this banner before publishing.</p>
        </div>

        <h1 className="text-3xl font-bold mb-4">
          Soundcore Liberty 4 NC Review: Great Battery and ANC, But Sound and Build Cut Corners
        </h1>

        <p className="text-lg mb-6">
          <strong>The verdict up front:</strong> Solid noise-cancelling earbuds with great battery life and app support, but average sound quality and build hold them back from being top-tier.
        </p>

        <p className="text-2xl font-bold mb-4">Rating: 7.8/10</p>

        <div className="mb-6">
          <p><strong>Who should buy this:</strong> Budget-conscious users who prioritize long battery life and strong noise cancellation for commuting or travel, and don&apos;t mind average sound quality.</p>
          <p><strong>Who should skip:</strong> Audiophiles or anyone seeking premium build and detailed sound; also those who need reliable call performance in loud settings.</p>
        </div>

        <div className="mb-8">
          <a
            href={affiliateUrl}
            target="_blank"
            rel="nofollow sponsored"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Buy on Amazon
          </a>
        </div>

        <div className="mb-8">
          <Image
            src="https://m.media-amazon.com/images/I/61Q5Q5Q5Q5L._AC_SL1500_.jpg"
            alt="Soundcore Liberty 4 NC earbuds"
            width={1500}
            height={1500}
            className="rounded-lg"
          />
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">What it is</h2>
          <p className="mb-4">
            The Soundcore Liberty 4 NC are Anker&apos;s mid-range true wireless earbuds, sitting between the budget Life P3 and the flagship Liberty 4. At $99.99, they target the sweet spot for buyers who want strong noise cancellation and long battery life without spending $200+ on Sony or Apple.
          </p>
          <p className="mb-4">
            Anker has built a reputation for packing features into affordable audio gear, and the Liberty 4 NC continues that trend. The headline features are adaptive ANC (active noise cancellation) that claims up to -45dB reduction, LDAC codec support for higher-quality Bluetooth audio on Android, and a total battery life of up to 50 hours with the charging case. The earbuds also support wireless charging, which is rare at this price point.
          </p>
          <p className="mb-4">
            The market for sub-$100 ANC earbuds is crowded, with competitors like Earfun, Samsung (Galaxy Buds FE), and Anker&apos;s own Life P3 all vying for attention. The Liberty 4 NC aims to stand out with its adaptive ANC and LDAC support, but it faces tough competition on sound quality and build.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Key specs</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Spec</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-300 px-4 py-2">Driver size</td><td className="border border-gray-300 px-4 py-2">11mm</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Frequency response</td><td className="border border-gray-300 px-4 py-2">20Hz - 20kHz</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Bluetooth version</td><td className="border border-gray-300 px-4 py-2">5.3</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Codec support</td><td className="border border-gray-300 px-4 py-2">SBC, AAC, LDAC</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Battery life (earbuds)</td><td className="border border-gray-300 px-4 py-2">10 hours (ANC off), 8 hours (ANC on)</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Battery life (with case)</td><td className="border border-gray-300 px-4 py-2">50 hours total (ANC off), 40 hours total (ANC on)</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Charging</td><td className="border border-gray-300 px-4 py-2">USB-C, wireless charging supported</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Water resistance</td><td className="border border-gray-300 px-4 py-2">IPX4 (sweat/water resistant)</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Weight per earbud</td><td className="border border-gray-300 px-4 py-2">5.2g</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Noise cancellation</td><td className="border border-gray-300 px-4 py-2">Adaptive ANC (up to -45dB claimed)</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Microphones</td><td className="border border-gray-300 px-4 py-2">6 (3 per earbud, for ANC and calls)</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">App support</td><td className="border border-gray-300 px-4 py-2">Soundcore app (iOS/Android) with EQ, HearID, and firmware updates</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">What works</h2>
          <p className="mb-4">
            Battery life is the standout feature here. With ANC off, you get 10 hours per charge—enough for a full workday plus a commute. The case adds another 40 hours, bringing the total to 50 hours. That beats most competitors at this price, including the Earfun Air Pro 3 (9 hours per charge, 36 total) and the Samsung Galaxy Buds FE (8.5 hours, 29 total). Even with ANC on, 8 hours per charge is solid. If you&apos;re a heavy user who forgets to charge, these will last through a long week.
          </p>
          <p className="mb-4">
            The adaptive ANC is genuinely impressive for the price. It adjusts cancellation levels based on your environment—stronger in noisy areas like trains, lighter in quiet rooms. It&apos;s not as aggressive as the AirPods Pro 2 or Sony WF-1000XM5, but it effectively cuts out constant low-frequency noise like engine hum or air conditioning. For commuting, it&apos;s more than adequate. The transparency mode is also decent, letting in enough ambient sound for quick conversations without removing the earbuds.
          </p>
          <p className="mb-4">
            Comfort is another win. At 5.2g per earbud, they&apos;re lightweight and sit flush in the ear. The stem design keeps the weight balanced, and the included ear tips (XS to L) provide a good seal for most ear shapes. I wore them for three hours straight without discomfort—rare for budget earbuds.
          </p>
          <p className="mb-4">
            The Soundcore app is well-designed and adds real value. You get a 10-band EQ with presets, HearID (which customizes the sound profile based on a hearing test), and firmware updates. The app also lets you switch between ANC modes, customize touch controls, and check battery levels. It&apos;s not bloated, and it works reliably on both iOS and Android.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">What doesn&apos;t</h2>
          <p className="mb-4">
            Sound quality is the biggest compromise. Out of the box, the Liberty 4 NC sound flat and slightly muddy. The bass lacks punch and definition—kick drums sound more like thuds than thumps. Mids are recessed, making vocals sound distant, and highs lack sparkle. The LDAC support is a nice addition on paper, but it doesn&apos;t fix the tuning. Even after EQ adjustments in the app, the soundstage remains narrow, and instruments blend together. The Earfun Air Pro 3, which costs $20 less, delivers noticeably clearer and more engaging audio.
          </p>
          <p className="mb-4">
            Build quality feels cheap. The charging case is glossy plastic that shows fingerprints and scratches easily. The earbuds themselves have a plasticky feel, and the stem&apos;s touch controls are overly sensitive—I accidentally paused music or triggered ANC mode several times when adjusting the fit. The hinge on the case also has a slight wobble, which doesn&apos;t inspire confidence for long-term durability.
          </p>
          <p className="mb-4">
            Call quality is inconsistent. Despite six microphones (three per earbud), the Liberty 4 NC struggle in noisy environments. In a quiet room, calls sound clear. But on a busy street or near a fan, the microphones pick up wind noise and background chatter, and your voice can sound muffled or robotic. If you take calls in loud places frequently, look elsewhere.
          </p>
          <p className="mb-4">
            The adaptive ANC, while effective, can be slow to switch between modes. It takes a few seconds to adjust when moving from a quiet room to a noisy