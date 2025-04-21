'use client';

import axios from 'axios';
import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCreative } from 'swiper/modules';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';
import styles from './style.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';

import type { Swiper as SwiperType } from 'swiper';

const API_URL = '/assets/data/cases.json'; // Убедитесь, что путь корректный

interface Slide {
  id: string;
  photoUrlCase: string;
  title: string;
  project: string;
  motor: string;
  time: string;
}

export default function CaseSlider() {
  const navigationPrevRef = useRef<HTMLButtonElement | null>(null);
  const navigationNextRef = useRef<HTMLButtonElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [slides, setSlides] = useState<Slide[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get<Slide[]>(API_URL); // Указываем ожидаемый тип данных
      setSlides(response.data);
      console.log(response.data);
    } catch (err) {
      console.error('Error loading slides:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  // Update navigation when slides are loaded
  useEffect(() => {
    if (swiperInstance && slides.length > 0 && !isLoading) {
      // Wait for the next render cycle to ensure slides are rendered
      setTimeout(() => {
        swiperInstance.update(); // Update swiper dimensions
        swiperInstance.navigation.update(); // Update navigation

        // Force active slide detection by moving to the first slide and back
        swiperInstance.slideTo(1, 0, false);
      }, 100);
    }
  }, [slides, isLoading, swiperInstance]);

  // Handle slide change to track active index
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  // Function to determine if a slide should have the active style
  const shouldBeActive = (index: number): boolean => {
    if (!swiperInstance) return false;

    const totalSlides = slides.length;
    const nextIndex = (activeIndex + 1) % totalSlides;

    return index === nextIndex;
  };

  if (isLoading) {
    return (
      <div className={styles.sliderContainer}>
        <div className='w-full flex justify-center items-center py-20'>
          <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500'></div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.sliderContainer}>
      <div className='w-full relative'>
        {slides.length > 0 && (
          <Swiper
            modules={[Navigation, EffectCreative]}
            spaceBetween={20}
            slidesPerView={1}
            initialSlide={1}
            loop={true}
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
            {slides.map((project, index) => (
              <SwiperSlide key={project.id}>
                {() => (
                  <div
                    className={`${styles.slide} ${
                      shouldBeActive(index) ? styles.activeSlide : ''
                    }`}
                  >
                    <div className={styles.slideContent}>
                      {/* Image covers the entire slide */}
                      <div className={styles.imageContainer}>
                        <Image
                          src={project.photoUrlCase || '/placeholder.svg'}
                          alt={project.title}
                          layout='fill'
                          objectFit='cover'
                        />
                      </div>

                      {/* Overlay with text that appears on hover */}
                      <div className={styles.overlay}>
                        <div className={styles.contentContainer}>
                          <h3 className={styles.title}>{project.title}</h3>
                          <div className='space-y-2'>
                            <p className={styles.details}>
                              <span className={styles.label}>Проект:</span>{' '}
                              {project.project}
                            </p>
                            <p className={styles.details}>
                              <span className={styles.label}>Мотор:</span> {project.motor}
                            </p>
                            <p className={styles.details}>
                              <span className={styles.label}>Срок изготовления:</span>{' '}
                              {project.time}
                            </p>
                          </div>
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
          </Swiper>
        )}

        {/* Перемещаем кнопки навигации под слайдер */}
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
