import type React from 'react';
import Image from 'next/image';
import { CurtainPNG } from '@/public/assets/images';
import { ArrowUpRight } from '@/public/assets/vectors';

interface Props {
  className?: string;
  isPopular?: boolean;
  title?: string;
}

export const CatalogItem: React.FC<Props> = ({
  className = '',
  isPopular = true,
  title = 'Электрокарниз для раздвижных штор',
}) => {
  return (
    <div
      className={`flex flex-col w-[24%] h-auto bg-[#E6E6E6] rounded-md relative px-3 pt-3 ${className}`}
    >
      {isPopular && (
        <div className='absolute top-2 left-2 w-fit bg-white text-addition-color py-1 px-4 text-sm font-medium rounded-md'>
          Популярное
        </div>
      )}
      <div className='pt-7 px-3 flex-grow'>
        <Image
          src={CurtainPNG || '/placeholder.svg'}
          alt={title}
          className='w-full h-auto'
        />
      </div>
      <div className='p-3 flex justify-between items-end mt-auto'>
        <p className='text-addition-color text-sm leading-tight max-w-1/2'>{title}</p>
        <Image src={ArrowUpRight} alt={title} className='h-5 w-5' />
      </div>
    </div>
  );
};
