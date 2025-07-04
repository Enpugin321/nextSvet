import { Manrope, Montserrat, Unbounded } from 'next/font/google';

export const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['200', '400', '500', '600', '700', '800', '900'],
  variable: '--font-unbounded',
  display: 'swap',
});
