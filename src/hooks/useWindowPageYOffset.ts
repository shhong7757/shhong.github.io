import { useEffect, useState } from 'react';

function useWindowPageYOffset() {
  const [pageYOffset, setPageYOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setPageYOffset(window.pageYOffset);
    }
    setPageYOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return pageYOffset;
}

export default useWindowPageYOffset;
