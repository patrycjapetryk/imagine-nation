'use client';

import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import SectionHeaderTitle from './SectionHeaderTitle';
import SectionHeaderParagraph from './SectionHeaderParagraph';

export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

export default function SectionHeader({
  slice,
  index,
  slices,
  context,
}: GalleryProps): JSX.Element {
  const headerWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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

  const { header_position: headerPosition, header_margin_top: headerMarginTop } = slice.primary;

  return (
    <header
      ref={headerWrapper}
      className={`
        absolute left-4 top-0 max-w-[30%] lg:max-w-[20%]
        ${headerPosition == 'right' && 'lg:left-auto lg:right-4'} 
        ${headerMarginTop && `lg:mt-${headerMarginTop}`}
      `}
    >
      <SectionHeaderTitle slice={slice} index={index} slices={slices} context={context} />
      <SectionHeaderParagraph slice={slice} index={index} slices={slices} context={context} />
    </header>
  );
}
