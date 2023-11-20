import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import parse from 'html-react-parser';

export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

export default function ArticleTitle({ slice, index, slices, context }: GalleryProps): JSX.Element {
  const { article_title: title, article_type: articleType } = slice.primary;

  return (
    <h3
      className={`
          articleBox opacity-0
          max-w-[80%] text-sm xl:text-xs uppercase leading-5 
          ${articleType === '2' && 'xl:text-sm xl:max-w-[50%] mx-auto order-2 mt-6'}
        `}
    >
      {parse(title as string)}
    </h3>
  );
}
