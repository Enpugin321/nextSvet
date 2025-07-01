'use client';

import { ArrowUpRight } from '@/public/assets/vectors';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import { useRef, useEffect, useState } from 'react';

type Props = {
  id: number;
  title: string;
  data: string;
  imageSrc: string | StaticImageData;
  isOpen: boolean;
  className?: string;
  toggleAccordion: () => void;
};

export function AccordionItem(props: Props) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (props.isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [props.isOpen]);

  return (
    <div
      className={cn(
        'border-t border-[#c4c4c4]',
        props.className,
        hovered && 'bg-gray-50',
      )}
    >
      <button
        className='w-full flex justify-between items-center p-4 transition'
        onClick={props.toggleAccordion}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Левая колонка: номер */}
        <span className='text-2xl font-normal text-left w-1/3'>0{props.id}</span>

        {/* Центральная колонка: заголовок (выровнен по левому краю, но центрирован по высоте) */}
        <div className='text-left w-1/3'>
          <span className='text-xl font-extralight'>{props.title}</span>
        </div>

        {/* Правая колонка: стрелка */}
        <div className='w-1/3 flex justify-end items-center'>
          <span
            className={cn(
              'transform transition-transform duration-300',
              props.isOpen ? 'rotate-0' : 'rotate-90',
            )}
          >
            <Image src={ArrowUpRight} alt='Toggle' width={16} height={16} />
          </span>
        </div>
      </button>

      <div
        ref={contentRef}
        className='overflow-hidden w-full transition-all duration-500 ease-in-out'
        style={{
          maxHeight: `${height}px`,
          opacity: props.isOpen ? 1 : 0,
          transitionProperty: 'max-height, opacity',
        }}
      >
        <div className='py-4 pl-[calc(33.333333%+7px)]'>
          <div className='text-left mb-4 w-1/2'>{props.data}</div>

          <div className='w-3/5 aspect-[6/4] relative rounded-sm'>
            <Image
              src={props.imageSrc || '/placeholder.svg'}
              alt='Accordion visual'
              fill
              className='object-cover rounded-sm'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
