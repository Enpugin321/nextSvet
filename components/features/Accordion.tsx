'use client';

import { useState } from 'react';
import { AccordionItem } from '@/components/entities';

const accordionData = [
  {
    id: 1,
    title: 'Опыт специалистов 5+ лет',
    data: `GeeksforGeeks is a one stop solution for all computer science students.`,
    imageSrc: '/assets/images/background.jpg',
  },
  {
    id: 2,
    title: 'Собственное производство',
    data: `Мы изготавливаем изделия по индивидуальным размерам с точностью
до 2 мм на собственном производстве. Вы получаете электрокарнизы без наценок и комиссий дилеров.  `,
    imageSrc: '/assets/images/background.jpg',
  },
  {
    id: 3,
    title: 'Включённая настройка управления',
    data: `GeeksforGeeks is the best Computer Science portal for geeks. It contains well written, 
           well thought and well explained computer science and programming articles.`,
    imageSrc: '/assets/images/background.jpg',
  },
  {
    id: 4,
    title: 'Собственное производство',
    data: `Мы изготавливаем изделия по индивидуальным размерам с точностью
до 2 мм на собственном производстве. Вы получаете электрокарнизы без наценок и комиссий дилеров.`,
    imageSrc: '/assets/images/background.jpg',
  },
];

export const Accordion = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className='text-graphite font-unbounded'>
      {accordionData.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          data={item.data}
          imageSrc={item.imageSrc}
          isOpen={activeId === item.id}
          className={item.id === accordionData.length ? 'border-b' : ''}
          toggleAccordion={() => toggleAccordion(item.id)}
        />
      ))}
    </div>
  );
};
