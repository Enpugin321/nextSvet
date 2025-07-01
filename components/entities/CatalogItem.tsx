import Image from 'next/image';
import type React from 'react';

interface Props {
  className?: string;
  img: string;
  title?: string;
}

export const CatalogItem: React.FC<Props> = ({
  className = '',
  img,
  title = 'Электрокарниз для раздвижных штор',
}) => {
  return (
    <div
      className={`
        relative w-full aspect-square
        border border-[#c4c4c4]
        ${className}
      `}
    >
      <div className='relative w-full h-full'>
        <Image
          src={img || '/placeholder.svg'}
          alt={title}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, 33vw'
        />
      </div>
      <div className='absolute bottom-2 left-2 text-graphite font-manrope font-normal text-xs sm:text-[16px] sm:p-5 sm:max-w-[60%]'>
        {title}
      </div>
    </div>
  );
};
