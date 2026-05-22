export const site = {
  name: 'The Isaac Standard',
  tagline: 'Honest gear reviews, held to a higher bar.',
  url: process.env.SITE_URL || 'https://theisaacstandard.com',
  affiliateTag: process.env.AMAZON_AFFILIATE_TAG || 'yourtag-20',
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
