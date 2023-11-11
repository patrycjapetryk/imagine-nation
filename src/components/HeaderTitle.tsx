import type { Content } from '@prismicio/client';

export default function HeaderTitle(props: { data: Content.HeaderDocumentData }): JSX.Element {
  const { title_1, title_2 } = props.data;

  return (
    <h1 className='flex flex-col text-base lg:text-xl font-black mt-8 lg:mt-0 mb-10 lg:mb-20'>
      <span className='translate-x-[-10%]'>{title_1}</span>
      <span className='translate-x-[10%]'>{title_2}</span>
    </h1>
  );
}
