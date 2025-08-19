import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        ocre: {
          DEFAULT: '#cc9966',
          dark: '#b8844d',
        },
        beige: {
          DEFAULT: '#f5f0e8',
          dark: '#e8dcc6',
        },
        sage: {
          DEFAULT: '#9caa8a',
          dark: '#7d8b6b',
        },
        terracotta: {
          DEFAULT: '#d2691e',
          dark: '#b8571a',
        },
        bois: {
          DEFAULT: '#ddbf94',
          dark: '#c4a373',
        },
      },
    },
  },
  plugins: [],
};
export default config;