export const site = {
  name: 'The Isaac Standard',
  tagline: 'Honest gear reviews, held to a higher bar.',
  url: process.env.SITE_URL || 'https://theisaacstandard.com',
  affiliateTag: process.env.AMAZON_AFFILIATE_TAG || 'theisaacstand-20',
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
// DESIGN REVIEW (2026-07-26): the old copy read "New review every Sunday — testing in progress."
// Two problems, on the FIRST thing every visitor sees: reviews actually publish every 2-3 days
// (not Sundays), and "testing in progress" reads as though the SITE is unfinished. Also dropped
// the newsletter CTA here — signups are paused until a real provider is connected, so it pointed
// at nothing.
export const announcement = {
  enabled: true,
  message: 'Independent reviews · new gear covered every week',
  cta: 'Browse the latest →',
  href: '/reviews',
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
  {
    slug: 'desk-gear',
    name: 'Desk Gear',
    blurb: 'Keyboards, mice, and the desk setup that earns its footprint.',
  },
  // AUDIENCE ALIGNMENT (2026-07-26): the site reviewed consumer tech while ARU's actual audience
  // watches history and fitness — two disconnected businesses, so 19.5K video views had nothing to
  // visit here and these reviews had no audience feeding them. Reps & Reason (fitness science) is
  // the channel with both real traction and a natural purchase intent, so the review engine now
  // covers the gear its viewers already want.
  {
    slug: 'fitness-gear',
    name: 'Home Gym & Recovery',
    blurb: 'Dumbbells, racks, and recovery tools — judged on the evidence, not the marketing.',
  },
];

export const reviews = [
  {
    slug: 'tozo-t10-review',
    title: 'Tozo T10 Review: Still a Budget Champ in 2026, But the Bar Has Moved',
    category: 'budget-audio',
    excerpt:
      'The Tozo T10 is a solid budget true-wireless pick with punchy bass and an IPX8 rating, but in 2026 the competition has caught up. On sale they\'re a steal…',
    date: '2026-09-01',
    rating: 3.5,
    image: '/reviews/tozo-t10-review/main.jpg',
  },
  {
    slug: 'pulsio-air-massage-gun-review',
    title: 'Pulsio Air Massage Gun Review: Is This Budget-Friendly Percussion Therapy Worth It?',
    category: 'fitness-gear',
    excerpt:
      'The Pulsio Air Massage Gun delivers a decent percussive massage for around $50, but its 3,200-RPM motor and real-world 1.5-hour battery will disappoint…',
    date: '2026-08-31',
    rating: 3.5,
    image: undefined,
  },
  {
    slug: 'soundpeats-air4-pro-review',
    title: 'Soundpeats Air4 Pro Review: Budget Earbuds That Sound Twice the Price',
    category: 'budget-audio',
    excerpt:
      'The Soundpeats Air4 Pro deliver mature sound, effective ANC, and a comfortable fit for around $60—one of the best-value wireless earbuds of the year. But…',
    date: '2026-08-26',
    rating: 3.5,
    image: '/reviews/soundpeats-air4-pro-review/main.jpg',
  },
  {
    slug: 'ekrin-b37-review',
    title: 'Ekrin B37 Percussion Massager Review: The Honest Trade-Offs After 3 Months',
    category: 'fitness-gear',
    excerpt:
      'The Ekrin B37 delivers 56 lbs of stall force, runs quieter than a Theragun Pro, and feels premium for the price. The 2.4-lb weight and missing carry case…',
    date: '2026-08-24',
    rating: 4.0,
    image: '/reviews/ekrin-b37-review/main.jpg',
  },
  {
    slug: 'renpho-r3-mini-massage-gun-review',
    title: 'Renpho R3 Mini Massage Gun Review: Honest Trade-Offs After Testing',
    category: 'fitness-gear',
    excerpt:
      'The Renpho R3 is compact and quiet—good for travel and light recovery—but lacks the power and battery life serious athletes need. A solid budget pick for…',
    date: '2026-08-17',
    rating: 3.0,
    image: '/reviews/renpho-r3-mini-massage-gun-review/main.jpg',
  },
  {
    slug: 'bob-and-brad-x6-pro-max-review',
    title: 'Bob and Brad X6 Pro Max Review: The $300 Massage Gun That\'s Almost a Real Therapy Tool',
    category: 'fitness-gear',
    excerpt:
      'At $300—roughly half the Theragun Pro\'s price—the X6 Pro Max matches its 16mm amplitude and 80-lb stall force while running under 45 dB. It\'s not a…',
    date: '2026-08-13',
    rating: 4.0,
    image: undefined,
  },
  {
    slug: 'folding-squat-rack-e-g-prx-or-similar-review',
    title: 'Folding Squat Rack Review: The Honest Truth About Wall-Mounted Power Racks',
    category: 'fitness-gear',
    excerpt:
      'Folding squat racks are a smart space-saver for home gyms, but not a true substitute for a full power rack. You trade cage depth for a fold-away footprint…',
    date: '2026-08-10',
    rating: 3.5,
    image: '/reviews/folding-squat-rack-e-g-prx-or-similar-review/main.jpg',
  },
  {
    slug: 'ironmaster-quick-lock-adjustable-dumbbells-review',
    title: 'Ironmaster Quick-Lock Adjustable Dumbbells Review: The Honest Trade-Offs',
    category: 'fitness-gear',
    excerpt:
      'The Ironmaster Quick-Lock is a rugged, space-saving set of cast-iron dumbbells that expands to 120 lbs per hand. Slow plate changes and a $500+ entry price…',
    date: '2026-08-08',
    rating: 3.5,
    image: undefined,
  },
  {
    slug: 'bowflex-selecttech-840-kettlebell-review',
    title: 'Bowflex SelectTech 840 Kettlebell Review: Smart Adjustable Weight, But Is It Worth It?',
    category: 'fitness-gear',
    excerpt:
      'The Bowflex SelectTech 840 Kettlebell is a genuinely clever space-saver that replaces 6 kettlebells with a dial-turning mechanism. But the bulky design…',
    date: '2026-08-07',
    rating: 3.5,
    image: '/reviews/bowflex-selecttech-840-kettlebell-review/main.jpg',
  },
  {
    slug: 'hyperice-hypervolt-2-pro-review',
    title: 'Hyperice Hypervolt 2 Pro Review: Heavy-Duty Percussion Therapy, But Is It Worth the Premium?',
    category: 'fitness-gear',
    excerpt:
      'The Hypervolt 2 Pro hits 60 lbs of stall force and runs quieter than most rivals, but its high price and clunky app make it a tough sell for casual users.…',
    date: '2026-08-05',
    rating: 3.5,
    image: undefined,
  },
  {
    slug: 'cotsoco-mini-massage-gun-review',
    title: 'Cotsoco Mini Massage Gun Review: Small, Quiet, but Is It Strong Enough?',
    category: 'fitness-gear',
    excerpt:
      'The Cotsoco Mini Massage Gun is a compact, whisper-quiet massager that\'s great for travel or desk use, but its low stall force and limited battery life make it unsuitable for deep',
    date: '2026-07-30',
    rating: 3.2,
    image: undefined,
  },
  {
    slug: 'logitech-mx-mechanical-review',
    title: 'Logitech MX Mechanical Review: The Productivity Keyboard That Almost Does It All',
    category: 'desk-gear',
    excerpt:
      'The Logitech MX Mechanical is a well-built, quiet mechanical keyboard designed for productivity users who want tactile feedback without the noise. It excels in multi-device workflo',
    date: '2026-07-12',
    rating: 4.0,
    image: '/reviews/logitech-mx-mechanical-review/main.jpg',
  },
  {
    slug: 'soundcore-by-anker-q30-hybrid-active-noise-cancelling-headphones-review',
    title: 'Soundcore by Anker Q30 Review: The Budget ANC Headphones That Punch Above Their Weight',
    category: 'budget-audio',
    excerpt:
      "The Soundcore Q30 delivers genuinely good hybrid ANC and a warm, bass-forward sound signature for under $60. They're not as refined as the Sony WH-1000XM4 or as comfortable for all-",
    date: '2026-07-05',
    rating: 4.2,
    image: '/reviews/soundcore-by-anker-q30-hybrid-active-noise-cancelling-headphones-review/main.jpg',
  },
  {
    slug: 'minisforum-venus-um790-pro-review',
    title: 'Minisforum Venus UM790 Pro Review: Small Beast, Big Compromises',
    category: 'mini-pcs',
    excerpt:
      'The Minisforum Venus UM790 Pro packs serious AMD Ryzen 9 power into a tiny chassis, making it a compelling choice for light gaming and productivity. But its thermal performance, fa',
    date: '2026-07-22',
    rating: 4.0,
    image: '/reviews/minisforum-venus-um790-pro-review/main.jpg',
  },
  {
    slug: 'mammotion-luba-awd-1000-review',
    title: 'Mammotion Luba AWD 1000 Review: The Lawn Robot That Actually Handles Slopes',
    category: 'outdoor-robots',
    excerpt:
      'The Mammotion Luba AWD 1000 is a GPS-guided, all-wheel-drive mower that tackles steep lawns (up to 75% slope) without boundary wires. It\'s a solid pick for hilly properties, but it',
    date: '2026-07-20',
    rating: 4.2,
    image: '/reviews/mammotion-luba-awd-1000-review/main.jpg',
  },
  {
    slug: 'ring-video-doorbell-pro-2-review',
    title: 'Ring Video Doorbell Pro 2 Review: Sharp Video, But Subscription Required',
    category: 'smart-home',
    excerpt:
      'The Ring Video Doorbell Pro 2 delivers excellent 1536p HD video with bird\'s-eye view and 3D motion detection, but its premium price and mandatory subscription for recording feature',
    date: '2026-07-17',
    rating: 3.8,
    image: '/reviews/ring-video-doorbell-pro-2-review/main.jpg',
  },
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
    image: '/reviews/beelink-gti13-ultra-review/main.jpg',
  },
  {
    slug: 'anker-soundcore-q20i-review',
    title: 'Anker Soundcore Q20i Review: Strong ANC, Weak Tuning, Honest Caveats',
    category: 'budget-audio',
    excerpt:
      'After hands-on testing: the 60-hour battery is closer to 49, the ANC genuinely works, and the V-shaped tuning is the catch nobody mentions. Honest take on the budget ANC headphone everyone is buying.',
    date: '2026-05-22',
    rating: 3.9,
    image: '/reviews/anker-soundcore-q20i-review/main.jpg',
  },
];
