'use client';

import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import GalleryImages from '@/components/GalleryImages/GalleryImages';
import GalleryHeader from '@/components/SectionHeader/SectionHeader';
import GalleryArticle from '@/components/Article/Article';

export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

function Gallery({ slice, index, slices, context }: GalleryProps): JSX.Element {
  const imagesWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context((self) => {
      const boxes: HTMLElement[] = self.selector && self.selector('.box');
      const boxColors: HTMLElement[] = self.selector && self.selector('.boxColor');

      boxes.forEach((box) => {
        gsap.to(box, {
          scale: 1,
          scrollTrigger: {
            trigger: box,
            start: 'top bottom',
            end: 'top 15%',
            scrub: true,
          },
        });
      });

      boxColors.forEach((boxColor) => {
        gsap.to(boxColor, {
          opacity: 0,
          scrollTrigger: {
            trigger: boxColor,
            start: 'top 60%',
            end: 'top 30%',
            scrub: true,
          },
        });
      });
    }, imagesWrapper);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={imagesWrapper}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='relative flex flex-col flex-wrap w-full mb-10 lg:mb-20'
    >
      <GalleryHeader slice={slice} index={index} slices={slices} context={context} />
      <GalleryArticle slice={slice} index={index} slices={slices} context={context} />
      <GalleryImages slice={slice} index={index} slices={slices} context={context} />
    </section>
  );
}

export default Gallery;
