import { Metadata } from 'next';

import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';

import { createClient } from '@/prismicio';
import { components } from '@/slices';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default async function Index() {
  const client = createClient();
  const home = await client.getByUID('page', 'home');

  return (
    <>
      <Header />
      <main className='flex flex-col items-center w-full'>
        <SliceZone slices={home.data.slices} components={components} />
      </main>
      <Footer />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID('page', 'home');

  return {
    title: prismic.asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title || undefined,
      images: [
        {
          url: home.data.meta_image.url || '',
        },
      ],
    },
  };
}
