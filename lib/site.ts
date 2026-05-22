export const site = {
  name: 'The Isaac Standard',
  tagline: 'Honest gear reviews, held to a higher bar.',
  url: process.env.SITE_URL || 'https://theisaacstandard.com',
  affiliateTag: process.env.AMAZON_AFFILIATE_TAG || 'yourtag-20',
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
    title: 'Anker Soundcore Q20i vs P20i: Which to Buy Under $50',
    category: 'budget-audio',
    excerpt:
      'Two of the most-bought budget Anker pairs of 2026, head to head. Honest take on which actually deserves your money.',
    date: '2026-05-21',
    rating: 4.4,
  },
];
