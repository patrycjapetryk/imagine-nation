import { createClient } from '@/prismicio';
import { PrismicNextImage } from '@prismicio/next';

import HeaderLogo from './HeaderLogo';
import HeaderTitle from './HeaderTitle';

export default async function Header() {
  const client = createClient();
  const header = await client.getSingle('header');
  const { arrow } = header.data;

  return (
    <header className='flex flex-col items-center w-full mb-20 mt-44 md:mt-60 xl:mt-24'>
      <HeaderLogo data={header.data} />
      <HeaderTitle data={header.data} />
      <PrismicNextImage field={arrow} className='w-8 mb-10 hidden lg:block' alt='' />
    </header>
  );
}
