'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useHeaderStore } from '@/store/headerStore';

export const ScrollTrackerComponent: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const setHeaderState = useHeaderStore((state) => state.setHeaderState);

  const onScroll = useCallback(() => {
    if (scrollY > 130) {
      setHeaderState(false);
    } else {
      setHeaderState(true);
    }
  }, [scrollY, setHeaderState]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      onScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [onScroll]);

  return null;
};
