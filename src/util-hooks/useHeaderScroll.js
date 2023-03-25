import { useEffect, useState } from 'react';

export const useHeaderScroll = () => {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const listenScroll = () => {
      const scrollY = window.scrollY;

      const direction = scrollY > lastScrollY ? 'down' : 'up';
      const needChange =
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10);

      if (needChange) setScrollDirection(direction);

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', listenScroll);

    return () => window.removeEventListener('scroll', listenScroll);
  }, [scrollDirection]);

  return {
    scrollDirection,
  };
};
