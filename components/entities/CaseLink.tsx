'use client';

import { Arrow } from '@/components/shared/ui/arrow';
import { cn } from '@/lib/utils';

type Props = {
  href: string;
  className?: string;
  color?: string;
  initialLength?: number;
  hoverLength?: number;
  hovered?: boolean;
};

export function CaseLink({
  href,
  className = '',
  color = 'white',
  initialLength = 90,
  hoverLength = 150,
  hovered = false,
}: Props) {
  const length = hovered ? hoverLength : initialLength;

  return (
    <a href={href} className={cn('flex items-center justify-end group', className)}>
      <div className='flex items-center gap-2 text-white transition-all duration-300'>
        <span className='text-base font-manrope font-normal'>смотреть кейс</span>
        <Arrow color={color} length={length} direction='right' />
      </div>
    </a>
  );
}
