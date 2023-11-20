'use client';

import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import parse from 'html-react-parser';

import ArticleTitle from './ArticleTitle';
import ArticleParagraph from './ArticleParagraph';

export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

export default function Article({ slice, index, slices, context }: GalleryProps): JSX.Element {
  const articleWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context((self) => {
      const boxes: HTMLElement[] = self.selector && self.selector('.articleBox');

      boxes.forEach((articleBox) => {
        gsap.to(articleBox, {
          opacity: 1,
          scrollTrigger: {
            trigger: articleBox,
            start: 'top 80%',
            end: 'top 40%',
            scrub: true,
          },
        });
      });
    }, articleWrapper);
    return () => ctx.revert();
  }, []);

  const {
    article_position: articlePosition,
    article_title: title,
    article_order: articleOrder,
    article_order_desktop: articleOrderDesktop,
    article_type: articleType,
  } = slice.primary;

  return (
    <article
      ref={articleWrapper}
      className={`
        flex flex-col
        mb-20
        self-center 
        ${articlePosition == 'right' ? 'lg:self-end' : 'lg:self-start'}
        order-${articleOrder && articleOrder - 1}
        lg:order-${articleOrderDesktop && articleOrderDesktop - 1}
        ${
          articleType === '2'
            ? 'lg:self-center lg:mb-[9rem] w-[86%] lg:w-[46%] text-center'
            : 'lg:mt-[-34rem] lg:mb-[22rem] w-[80%] lg:w-[24%] xl:w-[22%] pr-[5%] lg:pr-0'
        }
        `}
    >
      <ArticleTitle slice={slice} index={index} slices={slices} context={context} />
      <ArticleParagraph slice={slice} index={index} slices={slices} context={context} />
    </article>
  );
}
