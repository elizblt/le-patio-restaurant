import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"General Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;