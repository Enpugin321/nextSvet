import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/shared';
import { Button } from '@/components/ui';

import { BackgroundImage } from '@/public/assets/images';

interface Props {
  className?: string;
}

export const HeroSection: React.FC<Props> = ({ className }) => {
  return (
    <Container className={`${className} relative flex items-center`}>
      <div className='flex flex-col gap-8'>
        <h1 className='text-[64px] max-w-4xl font-manrope font-extrabold leading-[1.2] text-white'>
          Шторы с <span className='text-accent-color'>электрическим приводом</span> под
          ключ
        </h1>
        <Button
          className='bg-white text-[16px] text-addition-color font-montserrat font-medium w-2xs'
          size={'lg'}
        >
          Заказать бесплатный замер
        </Button>
      </div>
      <div className='absolute inset-0 -z-10 w-full h-full'>
        <Image
          alt='background'
          className='w-full h-full object-cover brightness-40'
          src={BackgroundImage}
        />
      </div>
    </Container>
  );
};
