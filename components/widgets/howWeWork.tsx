import type React from 'react';
import Image from 'next/image';
import StarSVG from '@/public/assets/vectors/Frame96.svg';
import testJPG from '@/public/assets/images/test.jpg';

interface WorkStepProps {
  number: string;
  title: string;
  description: string;
  imagePosition: 'left' | 'right';
}

const WorkStep: React.FC<WorkStepProps> = ({
  number,
  title,
  description,
  imagePosition,
}) => {
  return (
    <div className='relative flex justify-between items-center w-full'>
      <div
        className={`flex flex-col gap-5 relative  ${
          imagePosition === 'right' ? 'order-1' : 'order-2'
        } w-1/2 px-12`}
      >
        <h4 className='text-graphite/10 text-[268px] xxl:text-[350px] font-unbounded font-normal'>
          {number}
        </h4>

        <div className='absolute bg-white top-2/3'>
          <h4 className='text-graphite text-2xl xxl:text-3xl font-unbounded font-normal'>
            {title}
          </h4>
          <p className='text-graphite text-lg xxl:text-xl font-manrope font-light max-w-xl'>
            {description}
          </p>
        </div>
      </div>
      <div className={`${imagePosition === 'right' ? 'order-2' : 'order-1'} w-1/2 px-12`}>
        <div className='rounded-md w-full flex items-center justify-center'>
          <Image alt='' className='h-full w-full' src={testJPG || '/placeholder.svg'} />
        </div>
      </div>
    </div>
  );
};

export const HowWeWork: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Бесплатный замер',
      description:
        'Наш специалист приедет к вам, проведет замеры и поможет выбрать оптимальное решение, учитывая все ваши пожелания.',
      imagePosition: 'right' as const,
    },
    {
      number: '02',
      title: 'Производство',
      description:
        'Изготавливаем продукцию на современном оборудовании, гарантируя высокое качество и точное соответствие размерам.',
      imagePosition: 'left' as const,
    },
    {
      number: '03',
      title: 'Монтаж и настройка',
      description:
        'Профессиональная установка с учетом всех технических нюансов, а также настройка для комфортного использования.',
      imagePosition: 'right' as const,
    },
    {
      number: '04',
      title: 'Монтаж и настройка',
      description:
        'Профессиональная установка с учетом всех технических нюансов, а также настройка для комфортного использования.',
      imagePosition: 'left' as const,
    },
  ];

  return (
    <div className='flex flex-col gap-16 pt-10 relative w-full'>
      {/* Timeline container */}
      <div className='absolute left-1/2 h-[calc(100%-10rem)] w-0.5'>
        {/* First line segment */}
        <div
          className='absolute w-0.5 bg-accent'
          style={{
            top: 'calc(10% + 80px + 10px)', // Star height (60px) + 10px gap
            height: 'calc(30% - 80px - 20px)', // Distance to middle minus star height and gaps
            left: 0,
          }}
        />

        {/* Second line segment */}
        <div
          className='absolute w-0.5 bg-accent'
          style={{
            top: 'calc(40% + 80px + 10px)', // Middle position + Star height (60px) + 10px gap
            height: 'calc(26% - 80px - 20px)', // Distance to bottom minus star height and gaps
            left: 0,
          }}
        />

        {/* Third line segment */}
        <div
          className='absolute w-0.5 bg-accent'
          style={{
            top: 'calc(66% + 80px + 10px)', // Middle position + Star height (60px) + 10px gap
            height: 'calc(28% - 80px - 20px)', // Distance to bottom minus star height and gaps
            left: 0,
          }}
        />

        {/* First star - aligned with middle of first image */}
        <div
          className='absolute z-20'
          style={{ top: '10%', transform: 'translateX(-50%)' }}
        >
          <div style={{ width: '80px', height: '80px', position: 'relative' }}>
            <Image
              src={StarSVG || '/placeholder.svg'}
              alt='Star'
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Second star */}
        <div
          className='absolute z-20'
          style={{ top: '40%', transform: 'translateX(-50%)' }}
        >
          <div style={{ width: '80px', height: '80px', position: 'relative' }}>
            <Image
              src={StarSVG || '/placeholder.svg'}
              alt='Star'
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Third star */}
        <div
          className='absolute z-20'
          style={{ top: '66%', transform: 'translateX(-50%)' }}
        >
          <div style={{ width: '80px', height: '80px', position: 'relative' }}>
            <Image
              src={StarSVG || '/placeholder.svg'}
              alt='Star'
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Last star */}
        <div
          className='absolute z-20'
          style={{ top: '94%', transform: 'translateX(-50%)' }}
        >
          <div style={{ width: '80px', height: '80px', position: 'relative' }}>
            <Image
              src={StarSVG || '/placeholder.svg'}
              alt='Star'
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-8'>
        {steps.map((step, index) => (
          <WorkStep
            key={index}
            number={step.number}
            title={step.title}
            description={step.description}
            imagePosition={step.imagePosition}
          />
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
