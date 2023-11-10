'use client';

import { useRef, useState, useEffect } from 'react';
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

  if (windowHeight / 4 > containerY + containerHeight) {
    styles.container.top = windowHeight / 4;
  } else {
    `${containerY + containerHeight}px`;
  }

  return (
    <figure className='flex flex-col w-full md:w-[62.5%] p-5 xs:p-8 lg:p-14'>
      <div ref={containerRef} className='w-full pr-[35.5%] mb-[28%]'>
        <PrismicNextImage field={imageStatic} />
      </div>
      <div className='w-full fixed z-2' style={styles.container}>
        <PrismicNextImage field={imageFixed} />
      </div>
    </figure>
  );
}
