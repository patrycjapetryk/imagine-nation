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
  safelist: [
    'mx-0',
    'mx-[2%]',
    'mx-[5%]',
    'mx-[7%]',
    'mx-[10%]',
    'mx-[15%]',
    'mx-[20%]',

    'lg:mt-0',
    'lg:mt-52',
    'lg:mt-96',
    `lg:mt-[-50px]`,
    `lg:mt-[-400px]`,

    'w-[40%]',
    'w-[45%]',
    'w-[50%]',
    'w-[55%]',
    'w-[60%]',
    'w-[65%]',
    'w-[70%]',
    'w-[75%]',
    'w-[80%]',
    'w-[85%]',
    'lg:w-[30%]',
    'lg:w-[35%]',
    'lg:w-[40%]',
    'lg:w-[45%]',
    'lg:w-[50%]',
    'lg:w-[55%]',
    'lg:w-[60%]',
    'lg:w-[65%]',

    'order-1',
    'order-2',
    'order-3',
    'order-4',
    'lg:order-1',
    'lg:order-2',
    'lg:order-3',
    'lg:order-4',

    'lg:self-start',
    'lg:self-center',
    'lg:self-end',
  ],
  plugins: [],
};
