import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,jsx,ts,tsx,mdx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1a1d1f',
        'ink-soft': '#4a4f54',
        'ink-faint': '#8a9097',
        paper: '#f4f1ea',
        card: '#fffdf8',
        accent: '#c2562a',
        'accent-deep': '#8f3d1c',
        line: '#ddd6c8',
        highlight: '#f5e6d3',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Spline Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(26,29,31,0.06), 0 8px 24px -12px rgba(26,29,31,0.10)',
        lift: '0 4px 12px rgba(26,29,31,0.08), 0 18px 40px -18px rgba(26,29,31,0.18)',
      },
    },
  },
  plugins: [],
};
export default config;
