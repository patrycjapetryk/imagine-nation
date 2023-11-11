'use client';

import { useState, useEffect, RefObject } from 'react';

function getDimensions(containerRef: RefObject<HTMLDivElement>) {
  if (containerRef.current) {
    return {
      width: containerRef.current.getBoundingClientRect().width,
      height: containerRef.current.getBoundingClientRect().height,
      x: containerRef.current.getBoundingClientRect().x,
      y: containerRef.current.getBoundingClientRect().y,
    };
  } else {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    };
  }
}

export default function useContainerDimensions(containerRef: RefObject<HTMLDivElement>) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions(containerRef));
    };

    if (containerRef.current) {
      setDimensions(getDimensions(containerRef));
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize);
    };
  }, [containerRef]);

  return dimensions;
}
