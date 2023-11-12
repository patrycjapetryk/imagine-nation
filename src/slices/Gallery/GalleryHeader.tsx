'use client';

import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import parse from 'html-react-parser';

gsap.registerPlugin(ScrollTrigger);

export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

const GalleryHeader = ({ slice }: GalleryProps): JSX.Element => {
  const headerWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes: HTMLElement[] = self.selector && self.selector('.headerBox');

      boxes.forEach((headerBox) => {
        gsap.to(headerBox, {
          opacity: 1,
          scrollTrigger: {
            trigger: headerBox,
            start: 'top 80%',
            end: 'top 40%',
            scrub: true,
          },
        });
      });
    }, headerWrapper);
    return () => ctx.revert();
  }, []);

  const {
    header_position: headerPosition,
    header_margin_top: headerMarginTop,
    title,
    subtitle,
    description,
  } = slice.primary;

  return (
    <header
      ref={headerWrapper}
      className={`
       
        absolute left-4 top-0 max-w-[30%] lg:max-w-[20%]
        ${headerPosition == 'right' && 'lg:left-auto lg:right-4'} 
        ${headerMarginTop && `lg:mt-${headerMarginTop}`}
      `}
    >
      <h2 className='headerBox flex uppercase text-xl sm:text-3xl lg:text-3xl font-black mb-3 opacity-0'>
        {title}
        {subtitle && (
          <span className='inline-block uppercase text-xxs lg:text-xs my-1.5 lg:my-0.5 mx-1 lg:mx-1.5 font-medium'>
            {subtitle}
          </span>
        )}
      </h2>
      <p className='headerBox uppercase lg:max-w-[90%] text-s sm:text-sm lg:leading-6 opacity-0'>
        {parse(description as string)}
      </p>
    </header>
  );
};

export default GalleryHeader;
