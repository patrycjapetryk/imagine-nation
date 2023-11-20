import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

export default function SectionHeaderSubtitle({ slice }: GalleryProps): JSX.Element {
  const { subtitle } = slice.primary;

  return (
    <span className='inline-block uppercase text-xxs lg:text-xs my-1.5 lg:my-0.5 mx-1 lg:mx-1.5 font-medium'>
      {subtitle}
    </span>
  );
}
