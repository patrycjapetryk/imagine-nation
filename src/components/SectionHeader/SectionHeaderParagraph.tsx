import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import parse from 'html-react-parser';

export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

export default function SectionHeaderParagraph({ slice }: GalleryProps): JSX.Element {
  const { description } = slice.primary;

  return (
    <p className='headerBox uppercase lg:max-w-[90%] text-s sm:text-sm lg:leading-6 opacity-0'>
      {parse(description as string)}
    </p>
  );
}
