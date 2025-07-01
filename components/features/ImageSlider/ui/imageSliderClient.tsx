'use client';

import Image from 'next/image';
import styles from './style.module.scss';
import React, { useEffect, useMemo, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  images: string[];
}

const clonesCount = 3;

export const ImageSliderClient: React.FC<Props> = ({ className, images }) => {
  const loopedImages = useMemo(() => {
    if (!images || images.length === 0) return [];
    return [...images.slice(-clonesCount), ...images, ...images.slice(0, clonesCount)];
  }, [images]);
  const [imageIndex, setImageIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);

  const NavigationToNext = () => {
    setImageIndex((prev) => prev + 1);
    setIsAnimating(true);
  };
  const NavigationToPrev = () => {
    setImageIndex((prev) => prev - 1);
    setIsAnimating(true);
  };

  const handleBoundaryTransitionEnd = (correctIndex: number) => {
    setIsAnimating(false);

    setImageIndex(correctIndex);
  };
  return (
    <div className={cn(className, 'relative w-full overflow-hidden flex justify-center')}>
      {loopedImages.map((url, idx) => (
        <div
          key={url + idx}
          className={cn(
            styles.imageSliderSlide,
            'absolute',
            !isAnimating && styles.imageSliderSlide_noTransition,
          )}
          style={{
            transform: `translateX(${(idx - imageIndex) * 105}%)`,
          }}
          onTransitionEnd={
            imageIndex >= loopedImages.length - clonesCount
              ? () => handleBoundaryTransitionEnd(clonesCount)
              : imageIndex <= 0
              ? () => handleBoundaryTransitionEnd(loopedImages.length - (clonesCount + 1))
              : undefined
          }
        >
          <Image
            src={url}
            fill
            alt={'SliderImage' + idx}
            className={cn(styles.imageSliderSlide_Image)}
          />
        </div>
      ))}

      <button
        className='absolute top-1/2 left-4 -translate-y-1/2 z-10 text-2xl text-black'
        onClick={NavigationToPrev}
      >
        <FaArrowLeft />
      </button>

      <button
        className='absolute top-1/2 right-4 -translate-y-1/2 z-10 text-2xl text-black'
        onClick={NavigationToNext}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};
