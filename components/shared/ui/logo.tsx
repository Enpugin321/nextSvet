import React from 'react';
import { cn } from '@/lib/utils';
import LogoSVG from '@/public/logo.svg';
import Image from 'next/image';

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <div className='flex items-center gap-2 md:gap-3'>
      <Image alt='Logo' src={LogoSVG} className='w-8 h-8 lg:w-12 lg:h-12' />
      <div className={cn(className, 'leading-tight font-medium font-manrope')}>
        <p className='font-medium text-[14px] lg:text-[20px]'>управляй</p>
        <p className='font-medium text-[14px] lg:text-[20px]'>светом</p>
      </div>
    </div>
  );
};
