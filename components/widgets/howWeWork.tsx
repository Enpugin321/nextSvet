import type React from 'react';
// import Image from 'next/image';
// import { PlaceHolder } from '@/public/assets/images';

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
        className={`flex flex-col gap-5 ${
          imagePosition === 'right' ? 'order-1' : 'order-2'
        } w-1/2 px-12`}
      >
        <h4 className='text-[#4A2511] text-5xl font-manrope font-light'>{number}</h4>
        <h4 className='text-[#4A2511] text-4xl font-manrope font-normal'>{title}</h4>
        <p className='text-[#4A2511] text-lg font-montserrat font-light max-w-md'>
          {description}
        </p>
      </div>
      <div className={`${imagePosition === 'right' ? 'order-2' : 'order-1'} w-1/2 px-12`}>
        <div className='bg-gray-100 border border-[#4A2511] rounded-md w-full aspect-video flex items-center justify-center'>
          {/* <Image alt='' className='h-full w-full' src={PlaceHolder} /> */}
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
  ];

  return (
    <div className='flex flex-col gap-16 pt-12 relative w-full'>
      {/* Timeline container */}
      <div className='absolute left-1/2 h-[calc(100%-10rem)] w-0.5'>
        {/* Timeline line - now only between dots */}
        <div
          className='absolute w-0.5 bg-[#4A2511]'
          style={{
            top: '10%',
            height: '85%', // 90% - 10% = 80% of the container height
            left: 0,
          }}
        />

        {/* First dot - aligned with middle of first image */}
        <div
          className='absolute w-6 h-6 rounded-full bg-[#4A2511] -left-[11px]'
          style={{ top: '10%' }}
        />
        {/* Middle dot - stays in the same position */}
        <div
          className='absolute w-6 h-6 rounded-full bg-[#4A2511] -left-[11px]'
          style={{ top: '55%' }}
        />
        {/* Last dot - aligned with middle of last image */}
        <div
          className='absolute w-6 h-6 rounded-full bg-[#4A2511] -left-[11px]'
          style={{ top: '95%' }}
        />
      </div>

      <div className='flex flex-col gap-36'>
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
