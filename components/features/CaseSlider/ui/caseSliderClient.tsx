'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCreative } from 'swiper/modules';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';
import styles from './style.module.scss';
import { fetchMoreCases } from '@/services/cases';

import 'swiper/css';
import 'swiper/css/navigation';

import type { Swiper as SwiperType } from 'swiper';
import type { Case } from '@prisma/client';

interface CaseSliderClientProps {
  initialSlides: Case[];
}

export default function CaseSliderClient({ initialSlides }: CaseSliderClientProps) {
  const navigationPrevRef = useRef<HTMLButtonElement | null>(null);
  const navigationNextRef = useRef<HTMLButtonElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [slides, setSlides] = useState<Case[]>(initialSlides);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMoreSlides, setHasMoreSlides] = useState<boolean>(true);
  const slidesPerPage = 6;

  // Initialize navigation when swiper is created
  useEffect(() => {
    if (swiperInstance && navigationPrevRef.current && navigationNextRef.current) {
      if (
        swiperInstance.params.navigation &&
        typeof swiperInstance.params.navigation !== 'boolean'
      ) {
        swiperInstance.params.navigation.prevEl = navigationPrevRef.current;
      }
      if (
        swiperInstance.params.navigation &&
        typeof swiperInstance.params.navigation !== 'boolean'
      ) {
        swiperInstance.params.navigation.nextEl = navigationNextRef.current;
      }
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  // Update navigation when slides change
  useEffect(() => {
    if (swiperInstance && slides.length > 0) {
      setTimeout(() => {
        swiperInstance.update();
        swiperInstance.navigation.update();
      }, 100);
    }
  }, [slides, swiperInstance]);

  // Function to load more slides
  const loadMoreSlides = useCallback(async () => {
    if (isLoading || !hasMoreSlides) return;

    try {
      console.log('Дозагрузка сработала');
      setIsLoading(true);
      const nextPage = currentPage + 1;
      const newSlides = await fetchMoreCases(nextPage, slidesPerPage);

      if (newSlides.length > 0) {
        // Filter out any duplicates by ID
        const uniqueNewSlides = newSlides.filter(
          (newSlide) => !slides.some((existingSlide) => existingSlide.id === newSlide.id),
        );

        setSlides((prev) => [...prev, ...uniqueNewSlides]);
        setCurrentPage(nextPage);

        // If we received fewer slides than requested, we've reached the end
        if (newSlides.length < slidesPerPage) {
          setHasMoreSlides(false);
        }
      } else {
        // No more slides available
        setHasMoreSlides(false);
      }
    } catch (error) {
      console.error('Error loading more slides:', error);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, hasMoreSlides, isLoading, slides]);

  // Handle slide change to detect when we need to load more
  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.realIndex;
    const loadThreshold = slides.length - slidesPerPage;
    console.log('Active index:', currentIndex);
    console.log('Slides length:', slides.length);
    console.log('Slides to show:', swiper.slides.length);

    // If we're approaching the end of our loaded slides, load more
    if (currentIndex >= loadThreshold && hasMoreSlides && !isLoading) {
      loadMoreSlides();
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <div className='w-full relative'>
        <Swiper
          modules={[Navigation, EffectCreative]}
          spaceBetween={20}
          slidesPerView={1}
          initialSlide={0}
          loop={false}
          speed={800}
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className='py-8'
        >
          {slides.map((project) => (
            <SwiperSlide key={project.id}>
              {() => (
                <div className={`${styles.slide}`}>
                  <div className={styles.slideContent}>
                    {/* Image covers the entire slide */}
                    <div className={styles.imageContainer}>
                      <Image
                        src={project.img || '/placeholder.svg'}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes='100%'
                      />
                    </div>

                    {/* Overlay with text that appears on hover */}
                    <div className={styles.overlay}>
                      <div className={styles.contentContainer}>
                        <h3 className={styles.title}>{project.title}</h3>

                        <a href='#' className={styles.moreLink}>
                          Подробнее <span className={styles.arrow}>→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}

          {/* Loading indicator slide */}
          {isLoading && (
            <SwiperSlide>
              <div className='flex justify-center items-center h-full'>
                <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500'></div>
              </div>
            </SwiperSlide>
          )}
        </Swiper>

        {/* Navigation buttons */}
        <div className={styles.navButtons}>
          <button
            ref={navigationPrevRef}
            className={`${styles.navButton} ${styles.prevButton}`}
            aria-label='Previous slide'
          >
            <FaArrowLeftLong className='h-6 w-10' />
          </button>
          <button
            ref={navigationNextRef}
            className={`${styles.navButton} ${styles.nextButton}`}
            aria-label='Next slide'
          >
            <FaArrowRightLong className='h-6 w-10' />
          </button>
        </div>
      </div>
    </div>
  );
}
