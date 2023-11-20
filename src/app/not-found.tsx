import Link from 'next/link';

import { createClient } from '@/prismicio';
import { PrismicNextImage } from '@prismicio/next';

export default async function NotFound() {
  const client = createClient();
  const notFound = await client.getSingle('not_found');
  const { text, logo, not_found_image: image } = notFound.data;

  return (
    <main className='flex flex-col items-center justify-center w-full min-h-screen'>
      <PrismicNextImage field={image} className='w-[80%] lg:w-[50%]' />
      <Link href='/' className='text-xl font-black mt-10 mb-24'>
        {text}
      </Link>
      <PrismicNextImage field={logo} className='w-[55%] lg:w-[20%]' />
    </main>
  );
}
