import { createClient } from '@/prismicio';
import { PrismicNextImage } from '@prismicio/next';

export default async function Header() {
  const client = createClient();
  const header = await client.getSingle('header');
  const {
    title_1: title1,
    title_2: title2,
    image_static: imageStatic,
    image_fixed: imageFixed,
    arrow,
  } = header.data;

  return (
    <header className='flex flex-col items-center mb-20'>
      <figure className='flex flex-col w-full md:w-[80%] p-5 xs:p-8 lg:p-14'>
        <div className='w-[64.5%]'>
          <PrismicNextImage field={imageStatic} />
        </div>
        <div>
          <PrismicNextImage field={imageFixed} />
        </div>
      </figure>

      <h1 className='flex flex-col text-base lg:text-2xl font-black mt-8 mb-10 lg:mb-20'>
        <span className='translate-x-[-10%]'>{title1}</span>
        <span className='translate-x-[10%]'>{title2}</span>
      </h1>

      <PrismicNextImage field={arrow} className='w-8 mb-10 hidden lg:block' alt='' />
    </header>
  );
}
