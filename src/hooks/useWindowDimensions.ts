import { useEffect, useState } from 'react';

function useWindowDimensions() {
  const [dimensions, setDimensions] = useState<{
    width?: number;
    height?: number;
  }>({ width: undefined, height: undefined });

  useEffect(() => {
    function handleResize() {
      const { innerWidth, innerHeight } = window;
      setDimensions({
        width: innerWidth,
        height: innerHeight,
      });
    }
    setDimensions({
      width: innerWidth,
      height: innerHeight,
    });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimensions;
}

export default useWindowDimensions;
