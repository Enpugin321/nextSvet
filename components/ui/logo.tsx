import React from 'react';
import { cn } from '@/lib/utils';
import LogoSVG from '@/public/logo.svg';
import Image from 'next/image';

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <div className='flex items-center'>
      <Image alt='Logo' src={LogoSVG} className='w-12 h-12' />
      <div
        className={cn(
          className,
          'ml-3 leading-tight font-medium font-montserrat text-xl',
        )}
      >
        <p className='font-medium text-[20px]'>управляй</p>
        <p className='font-medium text-[20px]'>светом</p>
      </div>
    </div>
  );
};
