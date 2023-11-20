import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

export default function GalleryImages({ slice }: GalleryProps): JSX.Element {
  const imagePositionX = (item: string | null) => {
    if (item === 'center') {
      return 'self-center';
    } else if (item === 'right') {
      return 'self-end';
    } else {
      return 'self-start';
    }
  };

  const { background_color: backgroundColor } = slice.primary;

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
          index,
        ) => (
          <figure
            key={index}
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
            order-${index}
            ${imageMarginY && `lg:mt-[${imageMarginY}]`}
            relative
            ${zIndex10 && 'z-10'}
          `}
          >
            <PrismicNextImage field={image} className='w-full' />
            <div
              className={`
                boxColor w-full h-full absolute left-0 top-0 opacity-100 
                ${backgroundColor ? `bg-[${backgroundColor}]` : 'bg-pink-500'} 
              `}
            ></div>
          </figure>
        ),
      )}
    </>
  );
}
