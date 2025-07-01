import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const tagVariant = cva('w-fit py-1  font-manrope font-light border rounded rounded-md', {
  variants: {
    color: {
      bronze: 'text-[#AE7C44] bg-[#AE7C44]/10 border-[#AE7C44]/20',
      graphite: 'text-[#737373] bg-[#3A3931]/10 border-[#3A3931]/20',
      yellow: 'text-[#A2933D] bg-[#AE9E44]/10 border-[#AE9E44]/20',
    },
  },
});

export interface TagProps {
  className?: string;
  children: Readonly<React.ReactNode>;
  color: 'bronze' | 'graphite' | 'yellow';
}

export const Tag: React.FC<TagProps> = ({ className, children, color }) => {
  return <div className={cn(tagVariant({ color, className }))}>{children}</div>;
};
