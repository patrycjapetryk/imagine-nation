import { createClient } from '@/prismicio';
import { PrismicNextImage } from '@prismicio/next';

export default async function Footer() {
  const client = createClient();
  const footer = await client.getSingle('footer');
  const { text, email, icon } = footer.data;

  return (
    <footer className='flex flex-col items-center mt-8 mb-20'>
      <a href={`mailto:${email}`} className='uppercase text-base lg:text-2xl font-black'>
        {text}
      </a>
      <PrismicNextImage field={icon} className='w-12' />
    </footer>
  );
}
