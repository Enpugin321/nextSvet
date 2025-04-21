'use client';
import type React from 'react';
import { Container } from '@/components/shared/container';
import { cn } from '@/lib/utils';
import { Logo, Button } from '@/components/ui';
import { useHeaderStore } from '@/store/headerStore';
import Link from 'next/link';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const activeHeaderState = useHeaderStore((state) => state.headerState);

  return (
    <header
      className={cn(
        'w-full fixed left-0 z-50 transition-all duration-500',
        activeHeaderState
          ? 'bg-transparent transform translate-y-0'
          : 'bg-white transform translate-y-0',

        className,
      )}
      style={{
        transform: activeHeaderState ? 'translateY(0)' : 'translateY(0)',
        transition: 'transform 0.5s ease-in-out, background-color 0.3s ease',
      }}
    >
      <Container className={'flex items-center justify-between py-4'}>
        <Logo className={activeHeaderState ? 'text-white' : 'text-addition-color'} />
        <nav
          className={cn(
            'flex gap-16 text-[16px] font-montserrat font-medium',
            activeHeaderState ? 'text-white' : 'text-addition-color',
          )}
        >
          <Link href={''}>Каталог</Link>
          <Link href={''}>Портфолио</Link>
          <Link href={''}>Сотрудничество</Link>
        </nav>
        <Button variant={'outline'} size={'lg'} className='text-[18px] border-[#BC936A]'>
          <Link
            className={cn(
              activeHeaderState ? 'text-white' : 'text-addition-color',
              'text-[16px] font-montserrat font-medium',
            )}
            href={''}
          >
            Посчитать стоимость
          </Link>
        </Button>
      </Container>
    </header>
  );
};
