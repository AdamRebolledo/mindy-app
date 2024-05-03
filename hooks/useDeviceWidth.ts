import { useEffect, useState } from 'react';

export type TCurrentWidth = 'mobile' | 'tablet' | 'tabletXl' | 'desktopSm' | 'desktop' | 'desktopXl' | '';

export const useDeviceWidth = () => {
  const [currentWidth, setCurrentWidth] = useState<TCurrentWidth>('');

  useEffect(() => {
    const mediaQueryListeners = {
      mobile: window.matchMedia('(max-width:640px)'),
      tablet: window.matchMedia('(min-width:641px) and (max-width:1023px)'),
      tabletXl: window.matchMedia('(min-width:1024px) and (max-width:1279px)'),
      desktopSm: window.matchMedia('(min-width:1280px) and (max-width:1399px)'),
      desktop: window.matchMedia('(min-width:1400px) and (max-width:1599px)'),
      desktopXl: window.matchMedia('(min-width:1600px)'),
    };

    const deviceWidth = () => {
      if (mediaQueryListeners.mobile.matches) return setCurrentWidth('mobile');
      if (mediaQueryListeners.tablet.matches) return setCurrentWidth('tablet');
      if (mediaQueryListeners.tabletXl.matches) return setCurrentWidth('tabletXl');
      if (mediaQueryListeners.desktopSm.matches) return setCurrentWidth('desktopSm');
      if (mediaQueryListeners.desktop.matches) return setCurrentWidth('desktop');
      if (mediaQueryListeners.desktopXl.matches) return setCurrentWidth('desktopXl');
    };

    deviceWidth();

    const handler = () => deviceWidth();
    Object.values(mediaQueryListeners).forEach(mql => mql.addEventListener('change', handler));

    // Cleanup
    return () => {
      Object.values(mediaQueryListeners).forEach(mql => mql.removeEventListener('change', handler));
    };
  }, []);

  return currentWidth;
}

export default useDeviceWidth;