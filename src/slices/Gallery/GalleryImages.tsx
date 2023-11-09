'use client';

import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import GalleryHeader from './GalleryHeader';
import GalleryArticle from './GalleryArticle';

gsap.registerPlugin(ScrollTrigger);

export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

const GalleryImages = ({ slice }: GalleryProps): JSX.Element => {
  const imagesWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes: HTMLElement[] = self.selector && self.selector('.box');
      boxes.forEach((box) => {
        gsap.to(box, {
          scale: 1,
          scrollTrigger: {
            trigger: box,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    }, imagesWrapper);
    return () => ctx.revert();
  }, []);

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
    <div ref={imagesWrapper} className='relative flex flex-col flex-wrap w-full'>
      <GalleryHeader slice={slice} index={0} slices={[]} context={undefined} />
      <GalleryArticle slice={slice} index={0} slices={[]} context={undefined} />

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
          `}
          >
            <PrismicNextImage field={image} className='w-full' />
          </figure>
        ),
      )}
    </div>
  );
};

export default GalleryImages;
