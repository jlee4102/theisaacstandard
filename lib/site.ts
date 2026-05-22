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
    slug: 'anker-soundcore-q20i-vs-p20i',
    title: 'Anker Soundcore Q20i vs P20i: Scaffold (Needs Testing)',
    category: 'budget-audio',
    excerpt:
      'Spec-only scaffold comparing two budget Anker pairs. Awaiting hands-on testing before recommendation.',
    date: '2026-05-22',
  },
];
