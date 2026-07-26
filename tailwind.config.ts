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
        // Instrument tokens (canonical names)
        bg: '#0A0B0D',
        surface: '#0E1012',
        raised: '#111316',
        rule: '#232629',
        'rule-strong': '#333A40',
        text: '#E8E9EA',
        'text-secondary': '#C5CAD0',
        'text-muted': '#8A9098',
        'text-dim': '#6E757C',
        info: '#5EC8D8',
        positive: '#7FBF8A',
        negative: '#E0705C',
        'accent-hover': '#F5BC63',
        // Legacy names remapped (existing pages keep compiling, restyled)
        ink: '#E8E9EA',
        'ink-soft': '#C5CAD0',
        'ink-faint': '#8A9098',
        paper: '#0A0B0D',
        card: '#0E1012',
        accent: '#E8A33D',
        'accent-deep': '#E8A33D',
        line: '#232629',
        highlight: '#111316',
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
