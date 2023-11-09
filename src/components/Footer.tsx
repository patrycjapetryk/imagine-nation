import { createClient } from '@/prismicio';
import { PrismicNextImage } from '@prismicio/next';

export default async function Footer() {
  const client = createClient();
  const footer = await client.getSingle('footer');
  const { text, icon } = footer.data;

  return (
    <footer className='flex flex-col items-center mt-8 mb-20'>
      <p className='text-base lg:text-2xl font-black'>{text}</p>
      <PrismicNextImage field={icon} className='w-12' />
    </footer>
  );
}
