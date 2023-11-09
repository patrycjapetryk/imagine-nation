import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

const GalleryArticle = ({ slice }: GalleryProps): JSX.Element => {
  const {
    article_position: articlePosition,
    article_title: title,
    article_description: description,
    article_order: articleOrder,
    article_order_desktop: articleOrderDesktop,
    article_type: articleType,
  } = slice.primary;

  return (
    <article
      className={`
        flex flex-col
        mb-20
        self-center 
        ${articlePosition == 'right' ? 'lg:self-end' : 'lg:self-start'}
        order-${articleOrder && articleOrder - 1}
        lg:order-${articleOrderDesktop && articleOrderDesktop - 1}
        ${
          articleType === '2'
            ? 'lg:self-center lg:mb-[9rem] w-[86%] lg:w-[50%] text-center'
            : 'lg:mt-[-34rem] lg:mb-[22rem] w-[80%] pr-[5%] lg:w-[30%] lg:pr-0'
        }
        `}
    >
      <h3
        className={`
          max-w-[80%] text-sm xl:text:m uppercase leading-5 
          ${articleType === '2' ? 'xl:max-w-[50%] mx-auto order-2 mt-8' : ''}
        `}
      >
        {title}
      </h3>

      <p
        className={`
          mt-3
          ${
            articleType === '2'
              ? 'text-lg leading-7 xl:text-4xl uppercase font-black'
              : 'text-xl leading-5 xl:text-3xl font-bold'
          }
        `}
      >
        {description}
      </p>
    </article>
  );
};

export default GalleryArticle;
