import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

import ImageColor from '@/components/ImageColor/ImageColor';

export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

export default function GalleryImages({
  slice,
  index,
  slices,
  context,
}: GalleryProps): JSX.Element {
  const imagePositionX = (item: string | null) => {
    if (item === 'center') {
      return 'self-center';
    } else if (item === 'right') {
      return 'self-end';
    } else {
      return 'self-start';
    }
  };

  return (
    <>
      {slice.items.map(
        (
          {
            image,
            image_width: imageWidth,
            image_width_desktop: imageWidthDesktop,
            image_position: imagePosition,
            image_position_desktop: imagePositionDesktop,
            image_margin_x: imageMarginX,
            image_margin_y: imageMarginY,
            z_index_10: zIndex10,
          },
          itemIndex,
        ) => (
          <figure
            key={itemIndex}
            className={`
            box
            scale-50
            m-0
            mx-[${imageMarginX ? imageMarginX : 0}%]
            md:mx-[${imageMarginX ? imageMarginX - 5 : 0}%]
            mb-20 md:mb-32
            p-0
            w-[${imageWidth}%] 
            lg:w-[${imageWidthDesktop}%] 
            ${imagePositionX(imagePosition)} 
            lg:${imagePositionX(imagePositionDesktop)} 
            order-${itemIndex}
            ${imageMarginY && `lg:mt-[${imageMarginY}]`}
            relative
            ${zIndex10 && 'z-10'}
          `}
          >
            <PrismicNextImage field={image} className='w-full' />
            <ImageColor slice={slice} index={index} slices={slices} context={context} />
          </figure>
        ),
      )}
    </>
  );
}
