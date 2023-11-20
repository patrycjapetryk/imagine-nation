import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import SectionHeaderSubtitle from './SectionHeaderSubtitle';

export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

export default function SectionHeaderTitle({
  slice,
  index,
  slices,
  context,
}: GalleryProps): JSX.Element {
  const { title, subtitle } = slice.primary;

  return (
    <h2 className='headerBox flex uppercase text-xl sm:text-3xl lg:text-3xl font-black mb-3 opacity-0'>
      {title}
      {subtitle && (
        <SectionHeaderSubtitle slice={slice} index={index} slices={slices} context={context} />
      )}
    </h2>
  );
}
