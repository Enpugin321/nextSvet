'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/shared/ui';
import { cn } from '@/lib/utils';
import { FiMenu, FiX } from 'react-icons/fi';

interface Props {
  className?: string;
}

export const MobileHeader: React.FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={cn('w-full fixed top-0 left-0 z-50 bg-white md:hidden', className)}
      style={{ height: '50px' }}
    >
      {/* Основная строка шапки: логотип слева и кнопка бургер-меню справа */}
      <div className='flex items-center justify-between h-full py-2 px-4'>
        {/* Логотип */}
        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>

        {/* Кнопка-тоггл для открытия/закрытия мобильного меню */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label='Toggle mobile menu'
          className='focus:outline-none'
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Выдвигающееся меню, которое появляется под шапкой */}
      {isOpen && (
        <nav className='absolute top-[50px] left-0 w-full bg-white shadow-md'>
          <ul className='flex flex-col items-center py-4 space-y-4'>
            <li>
              <Link href='/catalog'>
                <a className='text-[16px] font-montserrat font-medium text-addition'>
                  Каталог
                </a>
              </Link>
            </li>
            <li>
              <Link href='/portfolio'>
                <a className='text-[16px] font-montserrat font-medium text-addition'>
                  Портфолио
                </a>
              </Link>
            </li>
            <li>
              <Link href='/cooperation'>
                <a className='text-[16px] font-montserrat font-medium text-addition'>
                  Сотрудничество
                </a>
              </Link>
            </li>
            <li>
              <Link href='/calculate'>
                <a className='inline-block px-4 py-2 border border-[#BC936A] rounded-lg text-[16px] font-montserrat font-medium text-addition'>
                  Посчитать стоимость
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
