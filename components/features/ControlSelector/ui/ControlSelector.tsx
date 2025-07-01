'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';

const data = [
  {
    id: 1,
    title: 'Пульт',
    data: `Классический и удобный способ управления. С помощью компактного пульта вы сможете открывать и закрывать шторы на расстоянии, настраивать их положение и даже задавать определенные сценарии работы.`,
    imageSrc: '/assets/images/background.jpg',
  },
  {
    id: 2,
    title: 'Голос',
    data: `Голосовое управление позволяет открывать и закрывать шторы по команде, делая использование максимально удобным.`,
    imageSrc: '/assets/images/background.jpg',
  },
  {
    id: 3,
    title: 'Сценарии',
    data: `Вы можете настроить сценарии работы, при которых шторы будут открываться или закрываться в определённое время или при определённых условиях.`,
    imageSrc: '/assets/images/background.jpg',
  },
  {
    id: 4,
    title: 'Выключатели',
    data: `Управляйте шторами с помощью настенных выключателей. Просто и привычно.`,
    imageSrc: '/assets/images/background.jpg',
  },
];

type Props = {};

export function ControlSelector() {
  const [activeId, setActiveId] = useState<number>(1);
  const activeItem = data.find((item) => item.id === activeId);

  return (
    <div className='flex flex-col gap-4 items-center px-10'>
      <ul className={styles.tabList}>
        {data.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className={`${styles.tabItem} ${activeId === item.id ? styles.active : ''}`}
          >
            <h3>{item.title}</h3>
          </li>
        ))}
      </ul>

      {activeItem && (
        <div className='flex w-full gap-6 items-start'>
          <div className='relative w-1/3 aspect-square rounded-md overflow-hidden'>
            <Image
              src={activeItem.imageSrc}
              alt={activeItem.title}
              fill
              className='object-cover'
            />
          </div>

          <div className='w-2/3 max-h-[300px] overflow-y-auto'>
            <h2 className='text-2xl font-semibold mb-2'>{activeItem.title}</h2>
            <p className='text-gray-700 leading-relaxed'>{activeItem.data}</p>
          </div>
        </div>
      )}
    </div>
  );
}
