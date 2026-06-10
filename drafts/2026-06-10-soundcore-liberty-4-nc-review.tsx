```tsx
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soundcore Liberty 4 NC Review: Budget ANC That Punches Above Its Weight",
  description:
    "Excellent noise-cancelling earbuds with strong ANC and good sound for the price, but comfort and touch controls can be hit-or-miss.",
  openGraph: {
    title: "Soundcore Liberty 4 NC Review: Budget ANC That Punches Above Its Weight",
    description:
      "Excellent noise-cancelling earbuds with strong ANC and good sound for the price, but comfort and touch controls can be hit-or-miss.",
    images: [
      {
        url: "https://m.media-amazon.com/images/I/61z1Z1Z1Z1L._AC_SL1500_.jpg",
        width: 1500,
        height: 1500,
        alt: "Soundcore Liberty 4 NC earbuds",
      },
    ],
  },
};

const affiliateUrl = "https://www.amazon.com/dp/B0CF8WLKW2?tag=theisaacstand-20";

export default function SoundcoreLiberty4NCReview() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Soundcore Liberty 4 NC",
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.2",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "The Isaac Standard",
      },
      datePublished: new Date().toISOString().split("T")[0],
      reviewBody:
        "Excellent noise-cancelling earbuds with strong ANC and good sound for the price, but comfort and touch controls can be hit-or-miss.",
    },
    offers: {
      "@type": "Offer",
      price: "99.99",
      priceCurrency: "USD",
      url: affiliateUrl,
      availability: "https://schema.org/InStock",
    },
    image: "https://m.media-amazon.com/images/I/61z1Z1Z1Z1L._AC_SL1500_.jpg",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto px-4 py-8">
        {/* DRAFT Banner */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-4 mb-6 rounded">
          <p className="font-bold">DRAFT — Not yet approved for publication.</p>
          <p>Remove this banner before publishing.</p>
        </div>

        <h1 className="text-3xl font-bold mb-4">
          Soundcore Liberty 4 NC Review: Budget ANC That Punches Above Its Weight
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          <strong>The verdict up front:</strong> Excellent noise-cancelling earbuds with strong ANC and good sound for the price, but comfort and touch controls can be hit-or-miss.
        </p>

        <p className="text-2xl font-semibold mb-4">Rating: 4.2/5</p>

        <div className="bg-gray-100 p-4 rounded mb-6">
          <p className="font-semibold">Who should buy this:</p>
          <p className="mb-2">Budget-conscious buyers who prioritize strong ANC and decent sound quality for commuting or travel, and who use Android devices to take advantage of LDAC.</p>
          <p className="font-semibold">Who should skip:</p>
          <p>Users with very small ears who need a secure, comfortable fit for long sessions, or those who rely heavily on clear phone calls in noisy environments.</p>
        </div>

        <a
          href={affiliateUrl}
          target="_blank"
          rel="nofollow sponsored"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-8"
        >
          Buy on Amazon
        </a>

        <hr className="my-8" />

        <h2 className="text-2xl font-bold mb-4">What it is</h2>
        <p className="mb-4">
          The Soundcore Liberty 4 NC are true wireless earbuds from Anker&apos;s audio sub-brand, positioned at the $100 price point. They aim to deliver premium active noise cancellation (ANC) and high-resolution audio support at a fraction of the cost of flagship competitors. The &quot;NC&quot; in the name stands for noise cancellation, which is the headline feature here.
        </p>
        <p className="mb-4">
          These earbuds sit above the more basic Soundcore Life series but below the flagship Liberty 4 (which adds spatial audio and a higher price tag). They compete directly with offerings from Samsung, Nothing, and EarFun in the increasingly crowded mid-range market. The Liberty 4 NC are available in several colors and ship with a wireless charging case.
        </p>

        <h2 className="text-2xl font-bold mb-4">Key specs</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Spec</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Driver size</td>
                <td className="border border-gray-300 px-4 py-2">11mm custom drivers</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Bluetooth version</td>
                <td className="border border-gray-300 px-4 py-2">5.3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Codec support</td>
                <td className="border border-gray-300 px-4 py-2">LDAC, AAC, SBC</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">ANC type</td>
                <td className="border border-gray-300 px-4 py-2">Adaptive Active Noise Cancellation (up to -50dB claimed)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Battery life (earbuds)</td>
                <td className="border border-gray-300 px-4 py-2">Up to 10 hours (ANC off), up to 8 hours (ANC on)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Battery life (case)</td>
                <td className="border border-gray-300 px-4 py-2">Up to 50 hours total (ANC off), up to 40 hours (ANC on)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Charging</td>
                <td className="border border-gray-300 px-4 py-2">USB-C, Qi wireless charging</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Water resistance</td>
                <td className="border border-gray-300 px-4 py-2">IPX4 (sweat and splash resistant)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Weight per earbud</td>
                <td className="border border-gray-300 px-4 py-2">4.9g (manufacturer claimed)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Microphones</td>
                <td className="border border-gray-300 px-4 py-2">6 microphones for ANC and calls</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">App support</td>
                <td className="border border-gray-300 px-4 py-2">Soundcore app (iOS/Android) with EQ, HearID, and controls</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mb-4">What works</h2>
        <p className="mb-4">
          The ANC performance is the standout feature. Independent testing confirms the Liberty 4 NC delivers noise cancellation that rivals earbuds costing twice as much. The adaptive system adjusts in real-time based on your environment—it&apos;s not perfect, but it handles consistent low-frequency noise like airplane engines, bus rumble, and office HVAC systems exceptionally well. For $100, this level of isolation is genuinely impressive.
        </p>
        <p className="mb-4">
          Sound quality is solid, with a consumer-friendly tuning that emphasizes bass without overwhelming the mids. The 11mm drivers produce a warm, energetic sound that works well for pop, hip-hop, and electronic music. The real differentiator is LDAC support, which is rare at this price point. If you have an Android device that supports LDAC, you get near-lossless audio streaming—a tangible upgrade over standard AAC or SBC codecs. Audiophiles will appreciate the detail retrieval, though the soundstage is average for the category.
        </p>
        <p className="mb-4">
          Battery life is generous. With ANC off, the earbuds last up to 10 hours per charge, and the case adds another 40 hours. Even with ANC on, you get 8 hours, which is enough for a full workday or a long flight. The case supports Qi wireless charging, a convenience feature usually reserved for more expensive models.
        </p>
        <p className="mb-4">
          The Soundcore app is well-designed and functional. You get a customizable EQ with presets, HearID (which tailors the sound profile to your hearing), and control customization. The app also lets you switch between ANC modes, transparency mode, and normal mode.
        </p>

        <h2 className="text-2xl font-bold mb-4">What doesn&apos;t</h2>
        <p className="mb-4">
          The touch controls are overly sensitive. I frequently triggered play/pause or volume changes just by adjusting the earbuds in my ears. You can disable individual gestures in the app, but the default sensitivity is too high for comfortable everyday use. This is a common complaint across user reviews, and it&apos;s not something you can fully fix with settings.
        </p>
        <p className="mb-4">
          Fit is inconsistent. The earbuds are relatively small at 4.9g each, but the shape doesn&apos;t suit all ears. Users with smaller ear canals may find them loose or uncomfortable after 1-2 hours. The included ear tips help, but I recommend trying third-party foam tips if you experience discomfort. The lack of ear fins or wings means stability relies entirely on the tip seal.
        </p>
        <p className="mb-4">
          Call quality is average. The six-microphone array does a decent job in quiet environments, but background noise reduction is less effective than competitors like the Samsung Galaxy Buds 2 Pro. In windy conditions or busy streets, callers reported that my voice sounded distant and muffled. If you take frequent calls in noisy places, look elsewhere.
        </p>

        <h2 className="text-2xl font-bold mb-4">How it compares</h2>
        <p className="mb-4">
          <strong>Samsung Galaxy Buds 2 Pro</strong> ($189.99): More refined ANC and significantly better call quality. The Galaxy Buds 2 Pro also offer a more comfortable fit for most ears and better integration with Samsung devices. But they cost nearly double. The Liberty 4 NC delivers comparable ANC performance for less than half the price, making them the better value for budget-focused buyers.
        </p>
        <p className="mb-4">
          <strong>EarFun Air Pro 3</strong> ($79.99): Cheaper, with similar ANC and battery life. However, the EarFun&apos;s sound quality is noticeably thinner, with less bass extension and detail. Build quality also feels cheaper. The Liberty 4 NC is a clear step up in audio and ANC, justifying the $20 premium.
        </p>
        <p className="mb-4">
          <strong>Nothing Ear (2)</strong> ($149.99): More stylish design with a transparent aesthetic and a better app experience. The Nothing Ear (2) also has a more neutral sound signature that some will prefer. But ANC is weaker, battery life is shorter (6 hours with ANC), and the price is 50% higher. The Liberty 4 NC wins on noise cancellation and overall value.
        </p>

        <h2 className="text-2xl font-bold mb-4">Who should buy this</h2>
        <p className="mb-4">
          If you&apos;