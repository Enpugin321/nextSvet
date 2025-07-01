// file: components/widgets/Header.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { Container } from '@/components/shared/container';
import { cn } from '@/lib/utils';
import { Logo, Button } from '@/components/shared/ui';
import { useHeaderStore } from '@/store/headerStore';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './style.module.scss';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const activeHeaderState = useHeaderStore((state) => state.headerState);
  const [isOpen, setIsOpen] = useState(false);

  const visibilityClass = activeHeaderState ? styles.hidden : styles.visible;

  return (
    <header className={cn(styles.header, visibilityClass, className)}>
      {/* Основная строка хедера */}
      <Container className='flex items-center justify-between py-2 md:py-4 h-[50px] md:h-auto'>
        {/* Логотип: всегда слева */}
        <Link href='/'>
          <Logo className={activeHeaderState ? 'text-addition' : 'text-addition'} />
        </Link>

        {/* Бургер-иконка для мобилки */}
        <button
          className='block md:hidden focus:outline-none'
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label='Toggle mobile menu'
        >
          {isOpen ? (
            <FiX
              size={24}
              className={cn(activeHeaderState ? 'text-addition' : 'text-addition')}
            />
          ) : (
            <FiMenu
              size={24}
              className={cn(activeHeaderState ? 'text-addition' : 'text-addition')}
            />
          )}
        </button>

        {/* Меню для десктопа: ссылки */}
        <nav
          className={cn(
            'hidden md:flex text-xs gap-4 lg:gap-16 lg:text-[16px] font-montserrat font-medium',
            activeHeaderState ? 'text-addition' : 'text-addition',
          )}
        >
          <Link href='/catalog'>Каталог</Link>
          <Link href='/portfolio'>Портфолио</Link>
          <Link href='/cooperation'>Сотрудничество</Link>
        </nav>

        {/* Кнопка «Посчитать стоимость» для десктопа */}
        <div className='hidden md:block'>
          <Button variant='outline' size='lg' className='text-[18px] border-[#BC936A]'>
            <Link
              href='/calculate'
              className={cn(
                activeHeaderState ? 'text-addition' : 'text-addition',
                'text-sm lg:text-[16px] font-montserrat font-medium',
              )}
            >
              Посчитать стоимость
            </Link>
          </Button>
        </div>
      </Container>

      {/* Выпадающее мобильное меню (показывается, если isOpen === true) */}
      {isOpen && (
        <nav className='md:hidden absolute top-[50px] left-0 w-full bg-white shadow-md'>
          <ul className='flex flex-col items-center py-4 space-y-4'>
            <li>
              <Link
                href='/catalog'
                className='text-[16px] font-montserrat font-medium text-addition'
              >
                Каталог
              </Link>
            </li>
            <li>
              <Link
                href='/portfolio'
                className='text-[16px] font-montserrat font-medium text-addition'
              >
                Портфолио
              </Link>
            </li>
            <li>
              <Link
                href='/cooperation'
                className='text-[16px] font-montserrat font-medium text-addition'
              >
                Сотрудничество
              </Link>
            </li>
            <li>
              <Link
                href='/calculate'
                className='inline-block px-4 py-2 border border-[#BC936A] rounded-lg text-[16px] font-montserrat font-medium text-addition'
              >
                Посчитать стоимость
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
