import './globals.css';

import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';
import localFont from 'next/font/local';

const avenir = localFont({
  src: [
    {
      path: '../../public/fonts/Avenir-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Avenir-Heavy.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Avenir-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-avenir',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pl' className={avenir.variable}>
      <head>
        <link
          rel='icon'
          type='image/png'
          sizes='any'
          href='https://lifestyle.imagine-nation.pl/favicon.ico'
        />
      </head>

      <body className='font-body min-h-screen flex justify-center'>
        <div className='flex flex-col items-center w-full max-w-screen-2xl md:px-8 xl:px-28 relative'>
          {children}
        </div>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
