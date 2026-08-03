import type { Config } from 'tailwindcss';

// INSTRUMENT REDESIGN (2026-07-26, owner handoff): near-black lab-console system.
// Strategy: the 16 live review pages and every component reference the OLD token names
// (ink/paper/card/line/accent...), so those names are kept and REMAPPED to Instrument values —
// the whole site restyles without touching each page. New semantic names (surface, rule, info,
// positive, negative...) are added for new components; prefer them in new code.
const config: Config = {
  content: ['./app/**/*.{js,jsx,ts,tsx,mdx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // Radius 0 everywhere is a design rule ("no rounded corners, no pills"). Overriding the scale
    // here kills every rounded-* class in one move; rounded-full survives for the author avatar,
    // the only round object in the system.
    borderRadius: {
      none: '0', DEFAULT: '0', sm: '0', md: '0', lg: '0',
      xl: '0', '2xl': '0', '3xl': '0', full: '9999px',
    },
    extend: {
      colors: {
        // LIGHT THEME (owner 2026-08-04: "go light"). The dark Instrument system read "tech
        // dashboard"; every mainstream review site (Wirecutter/RTINGS/Tom's Guide) is light —
        // white ground, near-black text — because that's what consumer trust looks like in this
        // genre. Same token NAMES, so the entire site re-themes here; layout/type/structure of
        // Instrument (rule-divided grids, mono labels, score-first) survive intact.
        // Amber identity kept but DARKENED to amber-700: #E8A33D on white is ~1.9:1 (illegible);
        // #B45309 is ~4.6:1 as text on white AND carries white text as a fill — one value serves
        // both jobs. Same treatment for info/positive/negative.
        bg: '#FFFFFF',
        surface: '#F7F7F5',
        raised: '#EFEFEC',
        rule: '#E5E5E1',
        'rule-strong': '#C9C9C2',
        text: '#1A1D1F',
        'text-secondary': '#3F4448',
        'text-muted': '#6A7076',
        'text-dim': '#8A9097',
        info: '#0E7490',
        positive: '#15803D',
        negative: '#B91C1C',
        'accent-hover': '#92400E',
        // Legacy names remapped (existing pages keep compiling, restyled)
        ink: '#1A1D1F',
        'ink-soft': '#3F4448',
        'ink-faint': '#8A9097',
        paper: '#FFFFFF',
        card: '#F7F7F5',
        accent: '#B45309',
        'accent-deep': '#92400E',
        line: '#E5E5E1',
        highlight: '#EFEFEC',
      },
      fontFamily: {
        // font-serif intentionally maps to Archivo: every existing headline uses font-serif, and
        // remapping the family here restyles them all. Newsreader/Fraunces must not ship.
        serif: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      // "No box-shadows in the UI" — elevation is rules + surface steps. Neutralised, not deleted,
      // so shadow-card / shadow-lift classes on existing pages become no-ops instead of errors.
      boxShadow: { card: 'none', lift: 'none' },
    },
  },
  plugins: [],
};
export default config;
