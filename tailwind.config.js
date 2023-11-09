/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/slices/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-avenir)'],
      },
      fontSize: {
        xxs: ['0.6rem', '0.6rem'],
        s: ['0.8rem', '1.1rem'],
      },
      screens: {
        xs: '376px',
      },
    },
  },
  plugins: [],
};
