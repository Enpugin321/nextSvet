'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MANAGING_TYPES } from '../model/constants/categories';

import style from '../ui/style.module.scss';

const ManagingSlider = () => {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentItem((current) => (current + 1) % MANAGING_TYPES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [currentItem]);

  return (
    <section className='w-full'>
      <div className='flex justify-between'>
        <ul className='pt-12 flex flex-col justify-between space-y-12'>
          {MANAGING_TYPES.map((obj, index) => (
            <motion.li
              key={obj.id}
              className={`cursor-pointer text-4xl font-montserrat font-normal transition-colors duration-300 `}
              onClick={() => setCurrentItem(index)}
              whileHover={{ scale: 1.02 }}
              animate={{
                color:
                  index === currentItem ? 'rgba(69, 41, 30, 1)' : 'rgba(69, 41, 30, 0.5)',
              }}
            >
              {obj.title}
            </motion.li>
          ))}
        </ul>

        <div className='my-auto relative w-[40vw] h-[40vh] flex'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentItem}
              className='absolute inset-0 flex items-center justify-center'
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                className={`max-w-full max-h-full object-contain ${style.dropShadow}`}
                src={
                  MANAGING_TYPES[currentItem].iconUrl ||
                  '/placeholder.svg?height=300&width=300'
                }
                alt={MANAGING_TYPES[currentItem].alt}
                layout='fill'
                objectFit='contain'
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ManagingSlider;
