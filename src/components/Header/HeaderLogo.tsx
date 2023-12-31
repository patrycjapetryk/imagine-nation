'use client';

import { useRef } from 'react';
import type { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';

import useContainerDimensions from '@/hooks/useContainerDimensions';
import useWindowDimensions from '@/hooks/useWindowDimensions';

export default function HeaderLogo(props: { data: Content.HeaderDocumentData }): JSX.Element {
  const { image_static: imageStatic, image_fixed: imageFixed } = props.data;

  const containerRef = useRef<HTMLDivElement | null>(null);

  const {
    width: containerWidth,
    height: containerHeight,
    x: containerX,
    y: containerY,
  } = useContainerDimensions(containerRef);

  const { height: windowHeight } = useWindowDimensions();

  const styles = {
    container: {
      top: `${containerY + containerHeight}px`,
      left: `${containerX}px`,
      width: `${containerWidth}px`,
    } as React.CSSProperties,
  };

  if (windowHeight / 3 + 60 > containerY + containerHeight) {
    styles.container.top = windowHeight / 3 + 60;
  } else {
    styles.container.top = `${containerY + containerHeight}px`;
  }

  return (
    <figure className='flex flex-col w-full md:w-[80%] xl:w-[62.5%] p-5 xs:p-8 lg:p-14 xl:pb-2'>
      <div ref={containerRef} className='w-full pr-[35.5%] mb-[28%]'>
        <PrismicNextImage field={imageStatic} priority />
      </div>
      <div className='w-full fixed z-10' style={styles.container}>
        <PrismicNextImage field={imageFixed} priority />
      </div>
    </figure>
  );
}
