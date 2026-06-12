export const site = {
  name: 'The Isaac Standard',
  tagline: 'Honest gear reviews, held to a higher bar.',
  url: process.env.SITE_URL || 'https://theisaacstandard.com',
  affiliateTag: process.env.AMAZON_AFFILIATE_TAG || 'yourtag-20',
};

// Social profiles. Add new platforms here; the footer / author page / OpenGraph
// pick them up automatically.
export const socials = {
  x: { handle: '@IsaacStandard_', url: 'https://x.com/IsaacStandard_' },
  // youtube: { handle: '@theisaacstandard', url: 'https://youtube.com/@theisaacstandard' },
  // instagram: { handle: '@theisaacstandard', url: 'https://instagram.com/theisaacstandard' },
};

// Site-wide announcement bar above the header. Set enabled=false to hide.
// Keep the message short — under ~90 chars looks best on mobile.
export const announcement = {
  enabled: true,
  message: 'New review every Sunday — testing in progress.',
  cta: 'Get the weekly Standard →',
  href: '/#latest',
};

export const categories = [
  {
    slug: 'budget-audio',
    name: 'Budget Audio',
    blurb: 'Earbuds, headphones, and speakers that punch above their price.',
  },
  {
    slug: 'smart-home',
    name: 'Smart Home & Frame TVs',
    blurb: 'Lifestyle TVs, hubs, and the gear that actually blends in.',
  },
  {
    slug: 'trackers',
    name: 'Trackers & Find My',
    blurb: 'AirTag, Tile, and the accessories that make them useful.',
  },
  {
    slug: 'mini-pcs',
    name: 'Mini PCs',
    blurb: 'Small-form desktops for work, play, and home labs.',
  },
  {
    slug: 'outdoor-robots',
    name: 'Outdoor Robots',
    blurb: 'Pool cleaners, mowers, and the bots reclaiming your weekends.',
  },
];

export const reviews = [
  {
    slug: 'govee-smart-led-strip-review',
    title: 'Govee Smart LED Strip Review',
    category: 'smart-home',
    excerpt:
      'A versatile, app-controlled LED strip with vibrant RGBIC colors and music sync, but limited to 2.4GHz WiFi and no HomeKit support.',
    date: '2026-06-12',
    rating: 4.3,
    image: 'https://m.media-amazon.com/images/I/71X5Q5Q5Q5L._AC_SL1500_.jpg',
  },
  {
    slug: 'beelink-gti13-ultra-review',
    title: 'Beelink GTi13 Ultra Review: A Quiet i9 Mini PC With a Real GPU Escape Hatch',
    category: 'mini-pcs',
    excerpt:
      "Don't buy this for the CPU benchmarks. Buy it for the silent operation and the PCIe x8 escape hatch that turns a fist-sized box into a real gaming rig. Three months in.",
    date: '2026-05-24',
    rating: 4.2,
    image: 'https://www.bee-link.com/cdn/shop/files/9_a1060a2b-d1b9-4dc5-a4c6-b8c08b1d1c7d.png?v=1764744541',
  },
  {
    slug: 'anker-soundcore-q20i-review',
    title: 'Anker Soundcore Q20i Review: Strong ANC, Weak Tuning, Honest Caveats',
    category: 'budget-audio',
    excerpt:
      'After hands-on testing: the 60-hour battery is closer to 49, the ANC genuinely works, and the V-shaped tuning is the catch nobody mentions. Honest take on the budget ANC headphone everyone is buying.',
    date: '2026-05-22',
    rating: 3.9,
    image:
      'https://cdn.shopify.com/s/files/1/0516/3761/6830/files/soundcore-q20i-blue-anc-headphones_3840x.jpg?v=1748311376',
  },
];
