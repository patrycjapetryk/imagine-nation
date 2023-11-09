import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

const GalleryHeader = ({ slice }: GalleryProps): JSX.Element => {
  const {
    header_position: headerPosition,
    header_margin_top: headerMarginTop,
    title,
    subtitle,
    description,
  } = slice.primary;

  return (
    <header
      className={`
          absolute left-4 top-0 max-w-[30%] lg:max-w-[22%]
          ${headerPosition == 'right' && 'lg:left-auto lg:right-4'} 
          ${headerMarginTop && `lg:mt-${headerMarginTop}`}
        `}
    >
      <h2 className='flex uppercase text-xl sm:text-3xl lg:text-4xl font-black mb-3'>
        {title}
        {subtitle && (
          <span className='inline-block uppercase text-xxs lg:text-sm my-1.5 lg:my-0.5 mx-1 lg:mx-1.5 font-medium'>
            {subtitle}
          </span>
        )}
      </h2>
      <p className='uppercase text-s sm:text-sm lg:text-lg lg:leading-6'>{description}</p>
    </header>
  );
};

export default GalleryHeader;
