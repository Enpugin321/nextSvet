'use client';

import { Case, Category } from '@prisma/client';
import { getCases } from '@/services/cases';
import { useState } from 'react';
import { CaseItem } from '@/components/entities/CaseItem';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowSVG from '@/public/assets/vectors/arrowShort.svg';
import Image from 'next/image';

type Props = {
  initialData: Case[];
  totalCount: number[]; // [APARTMENT, HOUSE, COMERCIAL]
};

export function CaseLoader({ initialData, totalCount }: Props) {
  const [category, setCategory] = useState<Category>('APARTMENT');

  const [cached, setCached] = useState<Record<Category, Case[]>>({
    APARTMENT: initialData,
    HOUSE: [],
    COMERCIAL: [],
  });

  const [pageMap, setPageMap] = useState<Record<Category, number>>({
    APARTMENT: 2,
    HOUSE: 1,
    COMERCIAL: 1,
  });

  const [data, setData] = useState<Case[]>(initialData);

  function getTotalCountByCategory(cat: Category): number {
    return {
      APARTMENT: totalCount[0],
      HOUSE: totalCount[1],
      COMERCIAL: totalCount[2],
    }[cat];
  }

  async function handleLoadMore(currentCategory: Category = category) {
    const page = pageMap[currentCategory];
    const cachedCases = cached[currentCategory] ?? [];

    console.log(cached);
    console.log(page);

    if (cachedCases.length > 4 * (page - 1)) {
      const newSlice = cachedCases.slice(4 * (page - 1), 4 * page);
      setData((prev) => [...prev, ...newSlice]);
      setPageMap((prev) => ({
        ...prev,
        [currentCategory]: page + 1,
      }));
      return;
    }

    const newCases = await getCases(page, 4, currentCategory);
    if (!newCases?.length) return;

    const updated = [...(cached[currentCategory] ?? []), ...newCases];
    setCached((prev) => ({
      ...prev,
      [currentCategory]: updated,
    }));
    setPageMap((prev) => ({
      ...prev,
      [currentCategory]: page + 1,
    }));
    setData(updated);
  }

  async function handleCategoryChange(newCategory: Category) {
    setCategory(newCategory);

    const existing = cached[newCategory];
    if (existing.length > 0) {
      setData(existing.slice(0, 4));
      setPageMap((prev) => ({
        ...prev,
        [newCategory]: 2,
      }));
      return;
    }

    const newCases = await getCases(1, 4, newCategory);
    if (!newCases?.length) return;

    setCached((prev) => ({
      ...prev,
      [newCategory]: newCases,
    }));

    setPageMap((prev) => ({
      ...prev,
      [newCategory]: 2,
    }));

    setData(newCases);
  }

  function rollUp() {
    const rolled = cached[category]?.slice(0, 4) ?? [];
    setPageMap((prev) => ({
      ...prev,
      [category]: 2,
    }));
    setData(rolled);
  }

  return (
    <>
      <div className='overflow-x-auto w-full'>
        <div className='flex justify-start sm:justify-center items-center gap-6 sm:gap-10 mb-4 font-unbounded font-normal text-base sm:text-2xl whitespace-nowrap px-2'>
          {(['APARTMENT', 'HOUSE', 'COMERCIAL'] as Category[]).map((cat, i) => (
            <button
              key={cat}
              className={cn(
                category === cat ? 'text-graphite' : 'text-graphite/20',
                'shrink-0',
              )}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat === 'APARTMENT' && `Квартиры (${totalCount[0]})`}
              {cat === 'HOUSE' && `Дома (${totalCount[1]})`}
              {cat === 'COMERCIAL' && `Коммерция (${totalCount[2]})`}
            </button>
          ))}
        </div>
      </div>

      <div className='w-full grid grid-cols-2 gap-4'>
        <AnimatePresence initial={false}>
          {data.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <CaseItem
                id={item.id}
                price={item.price}
                title={item.title}
                img={item.img}
                date={item.date}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {data.length < getTotalCountByCategory(category) && (
        <motion.button
          layout
          className='flex flex-col items-center mt-6 font-unbounded font-extralight text-xl text-graphite underline'
          onClick={() => handleLoadMore()}
        >
          Ещё проекты <Image src={ArrowSVG} alt='показать еще' width={16} height={16} />
        </motion.button>
      )}

      {data.length > 4 && (
        <motion.button
          layout
          className='flex flex-col items-center mt-6 font-unbounded font-extralight text-xl text-graphite underline'
          onClick={rollUp}
        >
          <Image
            src={ArrowSVG}
            className='rotate-180'
            alt='Спрятать'
            width={16}
            height={16}
          />
          Спрятать
        </motion.button>
      )}
    </>
  );
}
