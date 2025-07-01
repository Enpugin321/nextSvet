'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Case } from '@prisma/client';
import { CaseLink } from '@/components/entities';
import styles from './style.module.scss';

type Props = Pick<Case, 'id' | 'price' | 'title' | 'img' | 'date'>;

export default function CaseItem({ id, price, title, img, date }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='relative w-full aspect-[6/5] overflow-hidden rounded-lg shadow-lg group'
    >
      {/* Фоновое изображение с эффектом приближения */}
      <Image
        src={img || '/placeholder.svg'}
        alt={`casePhoto${id}`}
        fill
        className='object-cover transition-transform duration-500 group-hover:scale-105'
        priority
      />

      <div
        className={styles.gradientOverlay}
        style={{
          opacity: hovered ? 0.9 : 0.7,
        }}
      />

      {/* Дата */}
      <div className='absolute top-4 right-4 z-20 bg-white backdrop-blur-sm rounded-lg px-3 py-1'>
        <p className='text-graphite text-sm font-medium'>{date}</p>
      </div>

      {/* Контент внизу */}
      <div className='absolute flex items-end justify-between bottom-0 left-0 right-0 z-20 p-6'>
        <div className='flex flex-col gap-2'>
          <p className='text-white text-2xl font-unbounded font-normal'>{price}</p>
          <h3 className='text-white text-xl font-extralight font-unbounded leading-tight'>
            {title}
          </h3>
        </div>

        {/* Передаём состояние hover */}
        <CaseLink href={`/cases/${id}`} hovered={hovered} />
      </div>
    </div>
  );
}
