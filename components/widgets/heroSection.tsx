import React from 'react';
import { Container } from '@/components/shared';
import { Button } from '@/components/shared/ui';

interface Props {
  className?: string;
}

export const HeroSection: React.FC<Props> = ({ className }) => {
  return (
    <Container
      className={`${className} relative flex items-end justify-center pb-14 md:justify-start`}
    >
      <div className='flex bg-[#3A393166] flex-col gap-3 p-2 md:p-10 md:gap-5'>
        {/* Заголовок для десктопа */}
        <h1 className='hidden md:block font-unbounded font-light text-white text-[28px] md:text-[58px] leading-[1.2]'>
          <span className='font-normal'>
            Бесшумные <br /> электрокарнизы
          </span>{' '}
          для <br /> комфортной жизни и <br /> здорового сна
        </h1>

        {/* Заголовок для телефона */}
        <h1 className='block md:hidden font-unbounded font-light text-white text-[28px] leading-[1.3]'>
          <span className='font-normal'>
            Бесшумные <br />
            электрокарнизы{' '}
          </span>{' '}
          <br /> для комфортной
          <br /> жизни
        </h1>

        {/* Кнопка десктоп */}
        <Button
          className='hidden md:block bg-accent font-montserrat font-medium w-2xs text-[16px]'
          size={'lg'}
        >
          Заказать бесплатный замер
        </Button>

        {/* Кнопка мобильная */}
        <Button
          className='block md:hidden bg-accent font-montserrat font-medium w-2xs text-xs'
          size={'lg'}
        >
          Бесплатный замер
        </Button>

        <h4 className='font-normal font-unbounded text-[14px] md:text-xl'>
          Ощутите комфорт в своем доме, как в лучших отелях мира
        </h4>
      </div>

      <div className='absolute inset-0 -z-10 w-full h-full'>
        <video
          autoPlay
          muted
          loop
          playsInline
          className='w-full h-full object-cover brightness-40'
        >
          <source
            src='https://jas3.hb.kz-ast.bizmrg.com/nextLight/test.mp4'
            type='video/mp4'
          />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
    </Container>
  );
};
