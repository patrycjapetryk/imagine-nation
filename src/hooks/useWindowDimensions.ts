'use client';

import { useState, useEffect } from 'react';

function getWindowDimensions(getWindow: globalThis.Window & typeof globalThis) {
  const { innerWidth: width, innerHeight: height } = getWindow;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleWindowDimensions() {
      setWindowDimensions(getWindowDimensions(window));
    }
    handleWindowDimensions();
    window.addEventListener('resize', handleWindowDimensions);

    return () => window.removeEventListener('resize', handleWindowDimensions);
  }, []);

  return windowDimensions;
}
