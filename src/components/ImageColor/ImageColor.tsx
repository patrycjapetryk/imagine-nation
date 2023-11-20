import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

export default function ImageColor({ slice }: GalleryProps): JSX.Element {
  const { background_color: backgroundColor } = slice.primary;

  return (
    <div
      className={`
        boxColor w-full h-full absolute left-0 top-0 opacity-100 
        ${backgroundColor ? `bg-[${backgroundColor}]` : 'bg-pink-500'} 
      `}
    ></div>
  );
}
