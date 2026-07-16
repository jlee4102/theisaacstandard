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
    slug: 'earfun-air-pro-3-review',
    title: 'EarFun Air Pro 3 Review: The Budget King That Almost Dethrones the Premiums',
    category: 'budget-audio',
    excerpt:
      'The EarFun Air Pro 3 deliver shockingly good ANC and balanced sound for under $80, but their finicky fit and average call quality keep them from being a universal recommendation. I',
    date: '2026-07-15',
    rating: 4.0,
    image: '/reviews/earfun-air-pro-3-review/main.jpg',
  },
  {
    slug: 'anker-soundcore-life-p3-review',
    title: 'Anker Soundcore Life P3 Review: Budget ANC That Punches Above Its Weight',
    category: 'budget-audio',
    excerpt:
      'The Anker Soundcore Life P3 offers solid active noise cancellation and a fun, customizable sound for under $80. Battery life is strong, but the ANC isn\'t class-leading and the buil',
    date: '2026-07-12',
    rating: 4.0,
    image: '/reviews/anker-soundcore-life-p3-review/main.jpg',
  },
  {
    slug: 'geekom-a6-mini-pc-review',
    title: 'Geekom A6 Mini PC Review',
    category: 'mini-pcs',
    excerpt:
      'The Geekom A6 is a palm-sized mini PC that delivers genuine desktop performance thanks to an AMD Ryzen 7 6800H and Radeon 680M graphics. It handles office work,',
    date: '2026-07-04',
    rating: 4.2,
    image: '/reviews/geekom-a6-mini-pc-review/main.jpg',
  },
  {
    slug: 'soundpeats-h3-wireless-earbuds-review',
    title: 'Soundpeats H3 Wireless Earbuds Review',
    category: 'budget-audio',
    excerpt:
      'The Soundpeats H3 earbuds deliver genuinely effective active noise cancellation and solid sound quality for just $40, making them the best budget ANC option I\'v',
    date: '2026-06-30',
    rating: 3.7,
    image: '/reviews/soundpeats-h3-wireless-earbuds-review/main.jpg',
  },
  {
    slug: 'makeblock-mbot-robot-kit-review',
    title: 'Makeblock mBot Robot Kit Review',
    category: 'outdoor-robots',
    excerpt:
      'The Makeblock mBot Robot Kit is the best entry-level coding robot for kids aged 8-12, offering genuine Scratch-based programming in a durable, outdoor-friendly ',
    date: '2026-06-25',
    rating: 4.2,
    image: '/reviews/makeblock-mbot-robot-kit-review/main.jpg',
  },
  {
    slug: 'ecovacs-goat-robot-lawn-mower-review',
    title: 'Ecovacs GOAT Robot Lawn Mower Review',
    category: 'outdoor-robots',
    excerpt:
      'The Ecovacs GOAT delivers exceptional LiDAR-guided lawn mapping and wire-free navigation that rivals premium competitors, but its animal protection feature that',
    date: '2026-06-22',
    rating: 3.8,
    image: '/reviews/ecovacs-goat-robot-lawn-mower-review/main.jpg',
  },
  {
    slug: 'samsung-smarttag2-review',
    title: 'Samsung SmartTag2 Review',
    category: 'trackers',
    excerpt:
      'The Samsung SmartTag2 is the best Bluetooth tracker for Galaxy phone owners, period. It fixes the original SmartTag\'s biggest flaw—battery life—by jumping from ',
    date: '2026-06-17',
    rating: 4.1,
    image: '/reviews/samsung-smarttag2-review/main.jpg',
  },
  {
    slug: 'soundcore-liberty-4-nc-review',
    title: 'Soundcore Liberty 4 NC Review',
    category: 'budget-audio',
    excerpt:
      'Solid noise-cancelling earbuds with great battery life and a strong app, but average sound quality and a plasticky build hold them back from top-tier.',
    date: '2026-06-10',
    rating: 3.9,
    image: '/reviews/soundcore-liberty-4-nc-review/main.jpg',
  },
  {
    slug: 'govee-smart-led-strip-review',
    title: 'Govee Smart LED Strip Review',
    category: 'smart-home',
    excerpt:
      'A versatile, app-controlled LED strip with vibrant RGBIC colors and music sync, but limited to 2.4GHz WiFi and no HomeKit support.',
    date: '2026-06-12',
    rating: 4.3,
    image: '/reviews/govee-smart-led-strip-review/main.jpg',
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
