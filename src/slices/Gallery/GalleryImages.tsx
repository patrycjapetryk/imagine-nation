import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

const GalleryHeader = ({ slice }: GalleryProps): JSX.Element => {
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
          },
          index,
        ) => (
          <figure
            key={index}
            className={`
            m-0
            mx-[${imageMarginX}%]
            md:mx-[${imageMarginX && imageMarginX - 5}%]
            mb-20 md:mb-32
            p-0
            w-[${imageWidth}%] 
            lg:w-[${imageWidthDesktop}%] 
            ${imagePositionX(imagePosition)} 
            lg:${imagePositionX(imagePositionDesktop)} 
            order-${index}
            ${imageMarginY && `lg:mt-[${imageMarginY}]`}
          `}
          >
            <PrismicNextImage field={image} className='w-full' />
          </figure>
        ),
      )}
    </>
  );
};

export default GalleryHeader;
