import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import GalleryImages from './GalleryImages';

export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

const Gallery = ({ slice }: GalleryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='w-full mb-10 lg:mb-20'
    >
      <GalleryImages slice={slice} index={0} slices={[]} context={undefined} />
    </section>
  );
};

export default Gallery;
