import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import parse from 'html-react-parser';

export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

export default function ArticleParagraph({ slice }: GalleryProps): JSX.Element {
  const { article_description: description, article_type: articleType } = slice.primary;

  return (
    <p
      className={`
          articleBox opacity-0
          mt-3
          ${
            articleType === '2'
              ? 'text-lg leading-7 xl:text-2xl uppercase font-black'
              : 'text-xl leading-5 xl:text-xl font-bold'
          }
        `}
    >
      {parse(description as string)}
    </p>
  );
}
