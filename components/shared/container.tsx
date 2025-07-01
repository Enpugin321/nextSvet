import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn('mx-auto px-[10px] sm:px-8 xl:px-16', className)}>{children}</div>
  );
};
